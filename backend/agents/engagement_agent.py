from typing import Dict, List

class EngagementAgent:
    def __init__(self):
        pass

    def generate_engagement_trigger(self, match_context: Dict, event: Dict) -> Dict:
        """
        Generates fan engagement triggers (rewards, leaderboard updates).
        """
        event_type = event.get('type')
        xp_earned = 10 # Base XP for watching
        
        if event_type == 'wicket':
            xp_earned += 50
            return {
                "type": "leaderboard_bonus",
                "message": "Bowling fans gain 50 XP!",
                "xp": xp_earned,
                "bonus_points": 50
            }
        
        if event_type == 'six':
            xp_earned += 100
            return {
                "type": "streak_multiplier",
                "message": "MASSIVE SIX! +100 XP",
                "xp": xp_earned,
                "multiplier": 2
            }

        if event_type == 'boundary':
            xp_earned += 30
            return {
                "type": "small_bonus",
                "message": "Boundary! +30 XP",
                "xp": xp_earned
            }

        return {
            "type": "watching",
            "message": "Watching live...",
            "xp": xp_earned
        }

    def check_for_badges(self, user_stats: Dict, event: Dict) -> List[Dict]:
        """
        Checks if the user has earned any new badges.
        """
        new_badges = []
        xp = user_stats.get('xp', 0)
        
        if xp > 1000 and "Century Club" not in user_stats.get('badges', []):
            new_badges.append({"name": "Century Club", "icon": "💯", "reason": "Passed 1000 XP!"})
            
        if event.get('type') == 'six' and "Momentum Master" not in user_stats.get('badges', []):
            new_badges.append({"name": "Momentum Master", "icon": "🚀", "reason": "Witnessed a massive momentum shift!"})

        return new_badges

    def calculate_streak(self, user_stats: Dict) -> int:
        """
        Calculates the current interaction streak.
        """
        current_streak = user_stats.get('current_streak', 0)
        # Logic: Increment streak for every significant interaction
        return current_streak + 1

    def launch_poll(self, event_data: Dict):
        # Polling logic shifted to PredictionAgent for better situational context
        pass
