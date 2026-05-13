import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';

export function useFirestoreMatch(matchId = "match_001") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!db) return;

    const docRef = doc(db, "matches", matchId);
    
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setData(doc.data());
      } else {
        setError("Match not found");
      }
      setLoading(false);
    }, (err) => {
      console.error("Firestore Listen Error:", err);
      setError(err.message);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [matchId]);

  return { data, loading, error };
}
