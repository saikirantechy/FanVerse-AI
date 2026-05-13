import os
import google.generativeai as genai
from typing import Dict, List

class BehaviorAgent:
    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")
        if api_key:
            genai.configure(api_key=api_key)
            self.model = genai.GenerativeModel('gemini-pro')
        else:
            self.model = None

    def store_memory(self, fan_id: str, event_summary: str):
        """
        Stores a significant fan action in long-term memory.
        """
        # In a real app, this would push to Firestore 'memories' collection
        print(f"Storing memory for {fan_id}: {event_summary}")

    def get_long_term_insight(self, interaction_history: List[Dict]) -> str:
        """
        Generates a personalized insight based on long-term behavior.
        """
        if not self.model:
            return "You're showing consistent tactical growth!"

        prompt = f"""
        You are an AI sports coach. 
        Based on these recent actions: {interaction_history}, 
        provide a 1-sentence 'Memory Highlight' for the fan.
        
        Example: "You've correctly predicted boundary shifts in 3 consecutive matches!"
        """
        try:
            response = self.model.generate_content(prompt)
            return response.text.strip()
        except Exception:
            return "Your tactical awareness is peaking this season."

    def analyze_fan_dna(self, interaction_history: List[Dict]) -> Dict:
        """
        Analyzes fan behavior to determine their 'Fan DNA' profile.
        """
        if not self.model:
            return {
                "profile": "Active Observer",
                "traits": ["Consistent", "Observant"],
                "recommendation": "Show more tactical insights."
            }

        prompt = f"""
        You are a fan psychology analyst.
        Analyze the following user interaction history with our sports app and define their 'Fan DNA'.
        
        INTERACTIONS: {interaction_history}
        
        Requirements:
        - Assign a 'Profile Name' (e.g., Tactical Strategist, Emotional Die-hard, Prediction Wizard).
        - List 3 personality traits.
        - Suggest what type of content they prefer (e.g., aggressive polls, statistical trivia).
        - Return ONLY a JSON object with keys: "profile", "traits" (list), "recommendation".
        """

        try:
            response = self.model.generate_content(prompt)
            # Basic parsing (could be improved with JSON extraction logic)
            import json
            text = response.text.strip()
            if "```json" in text:
                text = text.split("```json")[1].split("```")[0].strip()
            return json.loads(text)
        except Exception:
            return {
                "profile": "Balanced Analyst",
                "traits": ["Data-driven", "Patient", "Strategic"],
                "recommendation": "Provide more win-probability deep dives."
            }
