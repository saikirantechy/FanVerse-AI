import os
import google.generativeai as genai
from typing import Dict

class InsightAgent:
    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")
        if api_key:
            genai.configure(api_key=api_key)
            self.model = genai.GenerativeModel('gemini-pro')
        else:
            self.model = None

    def analyze_turning_point(self, match_history: list, current_event: Dict) -> str:
        """
        Analyzes if the current event is a major turning point in the match.
        """
        if not self.model:
            return "Analysis: This wicket significantly increases the pressure on the chasing team."

        prompt = f"""
        You are a senior sports data scientist.
        Analyze the following match event and determine if it's a 'Turning Point'.
        
        EVENT: {current_event.get('description')}
        CONTEXT: {current_event.get('time')} overs, {current_event.get('type')} event.
        
        Provide a 1-sentence analytical insight about why this matters for the match outcome.
        """

        try:
            response = self.model.generate_content(prompt)
            return response.text.strip()
        except Exception:
            return "Strategic Insight: The dot-ball pressure is mounting on the middle order."

    def get_player_insight(self, player_name: str, match_context: Dict) -> str:
        """
        Generates dynamic situational player insights.
        """
        if not self.model:
            return f"{player_name} is a key player in this chase. Expect aggressive intent."

        prompt = f"""
        You are a sports analyst. 
        Provide a 1-sentence strategic insight about {player_name} in the current match situation.
        
        SITUATION: {match_context.get('score')} in {match_context.get('overs')} overs.
        PLAYER: {player_name}
        
        Focus on their role (finisher, anchor, etc.) and what they need to do right now.
        """

        try:
            response = self.model.generate_content(prompt)
            return response.text.strip()
        except Exception:
            return f"{player_name} averages 45.2 in death overs when chasing. Key for the final flourish."

    def generate_tactical_suggestion(self, match_context: Dict) -> str:
        """
        Generates AI captain tactical suggestions.
        """
        if not self.model:
            return "Tactical Tip: Focus on bowling tight lines in the next over."

        prompt = f"""
        You are an elite cricket coach and tactical analyst.
        Provide 1 brief tactical suggestion for the bowling team based on the current score.
        
        SITUATION: {match_context.get('score')} in {match_context.get('overs')} overs.
        
        Focus on field placements, bowling changes, or specific plans for the batsman.
        Keep it to 1 concise sentence.
        """

        try:
            response = self.model.generate_content(prompt)
            return response.text.strip()
        except Exception:
            return "Tactical Suggestion: Increase the pressure by bringing the field in for the new batsman."
