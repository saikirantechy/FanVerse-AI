from agents.match_agent import MatchAgent
from agents.commentary_agent import CommentaryAgent
from agents.prediction_agent import PredictionAgent
from agents.engagement_agent import EngagementAgent
from typing import Dict

class AgentOrchestrator:
    def __init__(self):
        self.match_agent = MatchAgent()
        self.commentary_agent = CommentaryAgent()
        self.prediction_agent = PredictionAgent()
        self.engagement_agent = EngagementAgent()

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
            
        # 4. Engagement Agent triggers leaderboard or fan rewards
        engagement = self.engagement_agent.generate_engagement_trigger(match_context, event)

        return {
            "commentary": commentary,
            "win_probability": win_prob,
            "poll": poll,
            "engagement": engagement,
            "match_status": match_context.get('status')
        }
