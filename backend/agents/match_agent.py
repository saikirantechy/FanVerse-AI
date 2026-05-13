from typing import Dict

class MatchAgent:
    def __init__(self):
        pass

    def detect_event(self, event_data: Dict) -> Dict:
        """
        Analyzes raw event data to determine match significance.
        """
        event_type = event_data.get('type')
        description = event_data.get('description', '')
        
        is_significant = event_type in ['wicket', 'boundary']
        
        return {
            "is_significant": is_significant,
            "impact_score": 85 if is_significant else 10,
            "narrative_focus": "momentum_shift" if is_significant else "rotation_of_strike"
        }
