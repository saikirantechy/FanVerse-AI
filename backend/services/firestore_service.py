import firebase_admin
from firebase_admin import credentials, firestore
from typing import Dict, Any

class FirestoreService:
    def __init__(self):
        # initialize_app is likely already called in index.py or by Firebase Functions
        try:
            self.db = firestore.client()
        except Exception:
            # Fallback for local development if not initialized
            if not firebase_admin._apps:
                firebase_admin.initialize_app()
            self.db = firestore.client()

    def update_match_state(self, match_id: str, data: Dict[str, Any]):
        """
        Updates the global match state (score, overs, etc.)
        """
        doc_ref = self.db.collection('matches').document(match_id)
        doc_ref.set(data, merge=True)

    def log_event(self, match_id: str, event_data: Dict[str, Any]):
        """
        Logs a new match event to the sub-collection.
        """
        events_ref = self.db.collection('matches').document(match_id).collection('events')
        events_ref.add(event_data)

    def update_agent_decisions(self, match_id: str, decisions: Dict[str, Any]):
        """
        Updates the current orchestration state.
        """
        orchestration_ref = self.db.collection('matches').document(match_id).collection('system').document('orchestration')
        orchestration_ref.set(decisions, merge=True)

    def trigger_poll(self, match_id: str, poll_data: Dict[str, Any]):
        """
        Pushes a new poll to Firestore for all users to see.
        """
        poll_ref = self.db.collection('matches').document(match_id).collection('polls').document('active')
        poll_ref.set(poll_data)
