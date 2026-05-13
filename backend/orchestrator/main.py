from agents.match_agent import MatchAgent
from agents.commentary_agent import CommentaryAgent
from agents.prediction_agent import PredictionAgent
from agents.engagement_agent import EngagementAgent
from agents.insight_agent import InsightAgent
from agents.social_agent import SocialAgent
from agents.trivia_agent import TriviaAgent
from agents.narrative_agent import NarrativeAgent
from services.firestore_service import FirestoreService
from typing import Dict

class AgentOrchestrator:
    def __init__(self, match_id: str = "match_001"):
        self.match_id = match_id
        self.match_agent = MatchAgent()
        self.commentary_agent = CommentaryAgent()
        self.prediction_agent = PredictionAgent()
        self.engagement_agent = EngagementAgent()
        self.insight_agent = InsightAgent()
        self.social_agent = SocialAgent()
        self.trivia_agent = TriviaAgent()
        self.narrative_agent = NarrativeAgent()
        self.firestore = FirestoreService()

    def process_event(self, event_data: Dict, user_stats: Dict = None) -> Dict:
        """
        Processes a match event and triggers agent actions.
        Returns a dictionary containing all agent responses.
        """
        if user_stats is None:
            user_stats = {"xp": 0, "badges": []}

        match_context = event_data.get('match_context', {})
        event = event_data.get('event', {})
        
        # 1. Match Agent analyzes the event for significance
        match_analysis = self.match_agent.detect_event(event)
        
        # 2. Commentary Agent generates AI commentary
        commentary = self.commentary_agent.generate_commentary(match_context, event)
        
        # 3. Prediction Agent handles momentum and polls
        win_prob = self.prediction_agent.recalculate_win_probability(match_context)
        pressure_index = self.prediction_agent.calculate_pressure_index(match_context)
        poll = None
        if event.get('type') in ['boundary', 'wicket']:
            poll = self.prediction_agent.generate_poll(match_context, event)
            
        # 4. Insight Agent provides deep analysis and tactical tips
        strategic_insight = self.insight_agent.analyze_turning_point([], event)
        tactical_tip = self.insight_agent.generate_tactical_suggestion(match_context)
        
        # 5. Social Agent simulates crowd energy
        is_viral = self.social_agent.detect_viral_moment(event)
        crowd_energy = self.social_agent.get_crowd_energy(event)
        fan_reactions = self.social_agent.generate_reaction_storm(event)
        highlight = self.social_agent.generate_highlight_headline(event) if is_viral else None

        # 6. Engagement Agent triggers rewards, badges, and streaks
        engagement = self.engagement_agent.generate_engagement_trigger(match_context, event)
        new_badges = self.engagement_agent.check_for_badges(user_stats, event)
        new_streak = self.engagement_agent.calculate_streak(user_stats)

        # 8. Trivia Agent triggers interactive challenges
        trivia = None
        if "over" in event.get('description', '').lower() or event.get('type') == 'milestone':
            trivia = self.trivia_agent.generate_trivia(match_context)

        # 9. Narrative Agent creates the emotional arc
        storyline = self.narrative_agent.generate_storyline([], event) # Passing empty history for now

        # 7. Firestore Sync - Push everything to the cloud for realtime frontend
        response_payload = {
            "commentary": commentary,
            "win_probability": win_prob,
            "pressure_index": pressure_index,
            "poll": poll,
            "trivia": trivia,
            "storyline": storyline,
            "strategic_insight": strategic_insight,
            "tactical_tip": tactical_tip,
            "social": {
                "is_viral": is_viral,
                "highlight": highlight,
                "crowd_energy": crowd_energy,
                "reactions": fan_reactions
            },
            "engagement": {
                **engagement,
                "new_badges": new_badges,
                "current_streak": new_streak
            },
            "match_status": match_context.get('status'),
            "score": match_context.get('score'),
            "overs": match_context.get('overs')
        }

        try:
            self.firestore.update_match_state(self.match_id, response_payload)
            self.firestore.log_event(self.match_id, event)
            if poll:
                self.firestore.trigger_poll(self.match_id, poll)
        except Exception as e:
            print(f"Firestore Sync Error: {e}")

        return response_payload
