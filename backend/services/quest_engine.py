from typing import Dict, List

class QuestEngine:
    def __init__(self):
        self.daily_quests = [
            {"id": "q1", "title": "The Predictor", "desc": "Make 3 match predictions", "goal": 3, "reward": 500},
            {"id": "q2", "title": "Trivia Master", "desc": "Answer a trivia question correctly", "goal": 1, "reward": 300},
            {"id": "q3", "title": "Emotional Fan", "desc": "React to 5 match moments", "goal": 5, "reward": 200},
            {"id": "q4", "title": "Social Butterfly", "desc": "Share a highlight card", "goal": 1, "reward": 400}
        ]

    def get_active_quests(self, user_progress: Dict) -> List[Dict]:
        """
        Returns active quests with current progress.
        """
        enriched_quests = []
        for quest in self.daily_quests:
            progress = user_progress.get(quest['id'], 0)
            enriched_quests.append({
                **quest,
                "current": progress,
                "completed": progress >= quest['goal']
            })
        return enriched_quests

    def update_progress(self, quest_id: str, current_progress: int) -> int:
        return current_progress + 1
