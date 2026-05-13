import os
import google.generativeai as genai
from typing import List, Dict

class ChatAgent:
    def __init__(self):
        api_key = os.getenv("GEMINI_API_KEY")
        if api_key:
            genai.configure(api_key=api_key)
            self.model = genai.GenerativeModel('gemini-pro')
        else:
            self.model = None

    def get_response(self, query: str, history: List[Dict], match_context: Dict) -> str:
        """
        Generates a context-aware response for the fan.
        """
        if not self.model:
            return "I'm currently warming up in the dugout (API key missing). But looking at the match, the intensity is high!"

        # Construct context for Gemini
        context = f"""
        You are 'FanVerse AI', an expert cricket commentator and strategic analyst. 
        You are chatting with a fan watching a live match.
        
        CURRENT MATCH STATE:
        Score: {match_context.get('score', 'N/A')}
        Overs: {match_context.get('overs', 'N/A')}
        Batsman: {match_context.get('batsman', 'N/A')}
        Bowler: {match_context.get('bowler', 'N/A')}
        Recent Events: {match_context.get('recent_events', 'N/A')}
        
        Style: Energetic, analytical, slightly biased towards the excitement of the game. 
        Use cricket terminology (death overs, powerplay, yorkers, etc.).
        Keep responses concise (max 3 sentences).
        """

        # Format history for Gemini
        chat_session = self.model.start_chat(history=[])
        
        full_query = f"{context}\n\nUser Question: {query}"
        
        try:
            response = chat_session.send_message(full_query)
            return response.text.strip()
        except Exception as e:
            print(f"ChatAgent Error: {e}")
            return "Even the best fielders drop catches! (AI error). Ask me again in a moment."
