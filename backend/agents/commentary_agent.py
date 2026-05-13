import os
import google.generativeai as genai
from typing import Dict

class CommentaryAgent:
    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")
        if api_key:
            genai.configure(api_key=api_key)
            self.model = genai.GenerativeModel('gemini-pro')
        else:
            self.model = None

    def generate_commentary(self, match_context: Dict, event: Dict) -> str:
        if not self.model:
            return f"Fallback: What a moment! {event.get('description', 'Action')} at {match_context.get('overs', '15.0')} overs."

        prompt_template = ""
        prompt_path = os.path.join(os.path.dirname(__file__), "..", "prompts", "commentary_prompt.txt")
        
        try:
            with open(prompt_path, "r") as f:
                prompt_template = f.read()
        except FileNotFoundError:
            prompt_template = "Commentate on this event: {event_description}"

        prompt = prompt_template.format(
            team1=match_context.get('team1', {}).get('name', 'Team A'),
            team2=match_context.get('team2', {}).get('name', 'Team B'),
            overs=match_context.get('overs', '0.0'),
            status=match_context.get('status', 'Live'),
            event_description=event.get('description', 'Unknown event')
        )

        try:
            response = self.model.generate_content(prompt)
            return response.text.strip()
        except Exception as e:
            print(f"Gemini Error: {e}")
            return f"Match Update: {event.get('description', 'Action')}"
