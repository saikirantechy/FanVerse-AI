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
        """
        Calculates win probability based on required run rate and wickets.
        """
        # In a real app, this would be a ML model. 
        # For the demo, we use a situational formula.
        overs_rem = 20.0 - float(match_data.get('overs', 0.0))
        wickets_lost = int(match_data.get('team2', {}).get('score', '0/0').split('/')[1] if '/' in match_data.get('team2', {}).get('score', '') else 0)
        
        # Simple heuristic: 
        # Lower wickets + Lower Req Run Rate = Higher Win Prob
        base_prob = 50.0
        if overs_rem > 0:
            # Shift probability based on situation
            if wickets_lost > 5: base_prob -= 15
            if overs_rem < 5: base_prob += 10 # Tension bonus
            
        return min(95.0, max(5.0, base_prob))

    def calculate_pressure_index(self, match_data: Dict) -> int:
        """
        Returns a pressure score from 0-100.
        """
        overs = float(match_data.get('overs', 0.0))
        # Pressure peaks in death overs (16-20)
        if overs > 15.0:
            return int(70 + (overs - 15) * 6)
        return int(overs * 4)
