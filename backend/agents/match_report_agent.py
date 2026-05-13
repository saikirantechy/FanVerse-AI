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
