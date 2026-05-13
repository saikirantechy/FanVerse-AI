import os
import google.generativeai as genai
from typing import Dict, List

class NarrativeAgent:
    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")
        if api_key:
            genai.configure(api_key=api_key)
            self.model = genai.GenerativeModel('gemini-pro')
        else:
            self.model = None

    def generate_storyline(self, match_history: List[Dict], current_event: Dict) -> str:
        """
        Creates a dramatic storyline narration for the match.
        """
        if not self.model:
            return "The tension is palpable. Every ball counts now."

        # Extract context from history
        recent_events = [e.get('text', '') for e in match_history[-5:]]
        
        prompt = f"""
        You are a cinematic sports narrator. 
        Analyze the match flow and provide a dramatic 1-sentence storyline update.
        
        RECENT EVENTS: {recent_events}
        CURRENT MOMENT: {current_event.get('description')}
        
        Focus on:
        - The 'Hero' vs 'Villain' narrative.
        - The weight of expectations.
        - The mounting pressure.
        
        Example: "RCB’s hopes now rest entirely on Kohli’s shoulders as the required rate climbs into the stratosphere."
        """

        try:
            response = self.model.generate_content(prompt)
            return response.text.strip().strip('"')
        except Exception:
            return "A defining moment in this match. History is being written with every delivery."
