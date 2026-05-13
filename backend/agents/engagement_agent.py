from typing import Dict

class EngagementAgent:
    def __init__(self):
        pass

    def generate_engagement_trigger(self, match_context: Dict, event: Dict) -> Dict:
        """
        Generates fan engagement triggers (rewards, leaderboard updates).
        """
        event_type = event.get('type')
        
        if event_type == 'wicket':
            return {
                "type": "leaderboard_bonus",
                "message": "Bowling fans gain 50 points!",
                "bonus_points": 50
            }
        
        if event_type == 'boundary':
            return {
                "type": "streak_multiplier",
                "message": "Batting fans streak x2!",
                "multiplier": 2
            }

        return {
            "type": "none",
            "message": "Watching live..."
        }

    def launch_poll(self, event_data: Dict):
        # Polling logic shifted to PredictionAgent for better situational context
        pass
