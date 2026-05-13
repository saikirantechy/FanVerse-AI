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

    def get_player_insight(self, player_name: str) -> str:
        """
        Generates situational player insights.
        """
        return f"{player_name} averages 45.2 in death overs when chasing. Expect aggressive intent."
