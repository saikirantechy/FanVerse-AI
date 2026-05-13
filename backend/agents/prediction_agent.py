from typing import Dict, List

class PredictionAgent:
    def __init__(self):
        pass

    def generate_poll(self, match_context: Dict, event: Dict) -> Dict:
        """
        Generates a poll based on the current match situation.
        """
        overs = float(match_context.get('overs', 0.0))
        
        if event.get('type') == 'boundary':
            return {
                "question": "Can the bowler bounce back in the next 3 balls?",
                "options": [
                    {"id": "a", "text": "Wicket coming up!"},
                    {"id": "b", "text": "Another boundary"},
                    {"id": "c", "text": "Tight dot balls"},
                    {"id": "d", "text": "Single/Double"}
                ]
            }
        
        if overs > 18.0:
            return {
                "question": "Who will win the match from here?",
                "options": [
                    {"id": "a", "text": match_context.get('team1', {}).get('name', 'Team A')},
                    {"id": "b", "text": match_context.get('team2', {}).get('name', 'Team B')},
                    {"id": "c", "text": "Super Over!"}
                ]
            }

        return {
            "question": "What will happen in the next over?",
            "options": [
                {"id": "a", "text": "Boundary (4/6)"},
                {"id": "b", "text": "Wicket"},
                {"id": "c", "text": "Dot Ball"},
                {"id": "d", "text": "1-3 Runs"}
            ]
        }

    def recalculate_win_probability(self, match_data: Dict) -> float:
        # Simple mock logic for demo
        # Returns win probability for Team 1
        return 65.0
