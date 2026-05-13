import os
import google.generativeai as genai
from typing import Dict, List

class MatchReportAgent:
    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")
        if api_key:
            genai.configure(api_key=api_key)
            self.model = genai.GenerativeModel('gemini-pro')
        else:
            self.model = None

    def generate_fan_recap(self, user_stats: Dict, match_events: List[Dict]) -> str:
        """
        Generates a 'Spotify Wrapped' style recap for the fan's journey during the match.
        """
        if not self.model:
            return "MATCH JOURNEY: You were a loyal supporter! You earned 1,200 XP and unlocked 2 badges."

        prompt = f"""
        You are a storyteller. 
        Create a brief, high-energy 'Fan Journey Recap' for the match based on these stats:
        - XP Earned: {user_stats.get('xp_earned', 0)}
        - Predictions Made: {user_stats.get('predictions', 0)}
        - Emotional Intensity: High
        - Key Moment Witnessed: {match_events[-1].get('description') if match_events else 'The final over'}
        
        Requirements:
        - 2 sentences max.
        - Must sound personal and celebratory.
        - Focus on their 'Hero' moments in the fan community.
        """

        try:
            response = self.model.generate_content(prompt)
            return response.text.strip()
        except Exception:
            return "You were the life of the crowd today! Your tactical predictions steered the fan momentum."

    def generate_final_report(self, match_history: List[Dict], final_score: str) -> str:
        """
        Generates a comprehensive AI-powered match report.
        """
        if not self.model:
            return "MATCH RECAP: A thrilling encounter that kept fans on the edge of their seats."

        prompt = f"""
        You are a senior sports journalist for a premium news outlet.
        Write a 2-paragraph match report for the following game.
        
        FINAL SCORE: {final_score}
        KEY MOMENTS: {[e.get('text', '') for e in match_history[-10:]]}
        
        Style: Professional, analytical, but emotionally charged. 
        Focus on the 'Turning Point' and the impact of key player performances.
        Include a catchy headline.
        """

        try:
            response = self.model.generate_content(prompt)
            return response.text.strip()
        except Exception:
            return "MATCH SUMMARY: The high-octane drama concluded with a tactical masterclass in the death overs."
