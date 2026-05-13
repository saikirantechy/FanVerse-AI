import os
import google.generativeai as genai
from typing import Dict, List
import random

class SocialAgent:
    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")
        if api_key:
            genai.configure(api_key=api_key)
            self.model = genai.GenerativeModel('gemini-pro')
        else:
            self.model = None

    def detect_viral_moment(self, event: Dict) -> bool:
        """
        Determines if an event has 'viral potential' based on impact.
        """
        event_type = event.get('type')
        # Logic: boundaries and wickets are naturally viral
        if event_type in ['wicket', 'six', 'milestone']:
            return True
        return False

    def get_crowd_energy(self, event: Dict) -> int:
        """
        Returns crowd energy level (0-100).
        """
        event_type = event.get('type')
        base_energy = 40
        if event_type == 'six': base_energy = 95
        elif event_type == 'wicket': base_energy = 88
        elif event_type == 'boundary': base_energy = 75
        
        # Add slight randomness for realism
        return min(100, max(0, base_energy + random.randint(-5, 5)))

    def generate_reaction_storm(self, event: Dict) -> List[str]:
        """
        Simulates a storm of fan reactions using Gemini.
        """
        if not self.model:
            return [
                "🔥 UNBELIEVABLE!",
                "What a moment! 😱",
                "The stadium is shaking!",
                "Is this the turning point?"
            ]

        prompt = f"""
        You are a social media bot for a live sports app.
        Generate 4 short, punchy fan reactions (like tweets or chat messages) for the following match event.
        
        EVENT: {event.get('description', 'A critical moment in the match')}
        TYPE: {event.get('type')}
        
        Requirements:
        - Mix of emojis and text.
        - Vary the sentiment (excited, shocked, analytical).
        - Maximum 10 words per reaction.
        - Return ONLY the reactions as a list.
        """

        try:
            response = self.model.generate_content(prompt)
            # Simple parsing for the list
            reactions = [r.strip('- ').strip('"') for r in response.text.strip().split('\n') if r.strip()]
            return reactions[:4]
        except Exception:
            return ["🔥 Great shot!", "WICKET!!", "The pressure is real.", "CSK for the win!"]

    def generate_highlight_headline(self, event: Dict) -> str:
        """
        Generates a broadcast-style headline for a viral event.
        """
        if not self.model:
            return f"MATCH ALERT: {event.get('description', 'A massive moment!')}"

        prompt = f"""
        You are a sports social media editor.
        Generate a 1-sentence, high-energy headline for this match event.
        
        EVENT: {event.get('description')}
        
        Requirements:
        - Use caps for emphasis.
        - Must sound like a breaking news alert.
        - Maximum 15 words.
        """

        try:
            response = self.model.generate_content(prompt)
            return response.text.strip().strip('"')
        except Exception:
            return f"UNBELIEVABLE MOMENT: {event.get('description')}"
