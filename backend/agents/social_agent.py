from typing import Dict

class SocialAgent:
    def __init__(self):
        pass

    def detect_viral_moment(self, event: Dict) -> bool:
        """
        Determines if an event has 'viral potential' based on impact.
        """
        event_type = event.get('type')
        if event_type in ['wicket', 'six']:
            return True
        return False

    def get_crowd_energy(self, event: Dict) -> int:
        """
        Returns crowd energy level (0-100).
        """
        event_type = event.get('type')
        if event_type == 'six': return 95
        if event_type == 'wicket': return 88
        if event_type == 'boundary': return 75
        return 40

    def generate_reaction_storm(self, event: Dict) -> list:
        """
        Simulates a storm of fan reactions.
        """
        return [
            "🔥 UNBELIEVABLE SHOT!",
            "OMG! Kohli is on fire! 🐐",
            "This match is going down to the wire!",
            "CSK fans, are you still breathing? 😱"
        ]
