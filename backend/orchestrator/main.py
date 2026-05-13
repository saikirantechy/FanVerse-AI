from agents.match_agent import MatchAgent
from agents.commentary_agent import CommentaryAgent
from agents.prediction_agent import PredictionAgent
from agents.engagement_agent import EngagementAgent
from agents.insight_agent import InsightAgent
from agents.social_agent import SocialAgent
from typing import Dict

class AgentOrchestrator:
    def __init__(self):
        self.match_agent = MatchAgent()
        self.commentary_agent = CommentaryAgent()
        self.prediction_agent = PredictionAgent()
        self.engagement_agent = EngagementAgent()
        self.insight_agent = InsightAgent()
        self.social_agent = SocialAgent()

    def process_event(self, event_data: Dict) -> Dict:
        """
        Processes a match event and triggers agent actions.
        Returns a dictionary containing all agent responses.
        """
        match_context = event_data.get('match_context', {})
        event = event_data.get('event', {})
        
        # 1. Match Agent analyzes the event for significance
        match_analysis = self.match_agent.detect_event(event)
        
        # 2. Commentary Agent generates AI commentary
        commentary = self.commentary_agent.generate_commentary(match_context, event)
        
        # 3. Prediction Agent handles momentum and polls
        win_prob = self.prediction_agent.recalculate_win_probability(match_context)
        poll = None
        if event.get('type') in ['boundary', 'wicket']:
            poll = self.prediction_agent.generate_poll(match_context, event)
            
        # 4. Insight Agent provides deep analysis
        strategic_insight = self.insight_agent.analyze_turning_point([], event)
        
        # 5. Social Agent simulates crowd energy
        is_viral = self.social_agent.detect_viral_moment(event)
        crowd_energy = self.social_agent.get_crowd_energy(event)
        fan_reactions = self.social_agent.generate_reaction_storm(event)

        # 6. Engagement Agent triggers rewards
        engagement = self.engagement_agent.generate_engagement_trigger(match_context, event)

        return {
            "commentary": commentary,
            "win_probability": win_prob,
            "poll": poll,
            "strategic_insight": strategic_insight,
            "social": {
                "is_viral": is_viral,
                "crowd_energy": crowd_energy,
                "reactions": fan_reactions
            },
            "engagement": engagement,
            "match_status": match_context.get('status')
        }
