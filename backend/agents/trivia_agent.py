import os
import google.generativeai as genai
from typing import Dict, List
import json

class TriviaAgent:
    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")
        if api_key:
            genai.configure(api_key=api_key)
            self.model = genai.GenerativeModel('gemini-pro')
        else:
            self.model = None

    def generate_trivia(self, match_context: Dict) -> Dict:
        """
        Generates a dynamic trivia question based on match context.
        """
        if not self.model:
            return {
                "question": "Which player has the most sixes in IPL history?",
                "options": ["Chris Gayle", "AB de Villiers", "Rohit Sharma", "MS Dhoni"],
                "answer": "Chris Gayle"
            }

        player = match_context.get('batsman', 'Virat Kohli')
        prompt = f"""
        You are a sports trivia master.
        Generate a multiple-choice trivia question about the player: {player}.
        
        Requirements:
        - 4 options.
        - 1 correct answer.
        - Engaging and slightly challenging.
        - Return ONLY a JSON object with keys: "question", "options" (list), "answer".
        """

        try:
            response = self.model.generate_content(prompt)
            # Find JSON in response
            text = response.text.strip()
            if "```json" in text:
                text = text.split("```json")[1].split("```")[0].strip()
            
            return json.loads(text)
        except Exception:
            return {
                "question": f"How many centuries does {player} have in T20s?",
                "options": ["5", "7", "8", "9"],
                "answer": "8"
            }
