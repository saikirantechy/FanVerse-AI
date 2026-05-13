from firebase_functions import https_fn
from firebase_admin import initialize_app
import json
from agents.chat_agent import ChatAgent

initialize_app()

chat_agent = ChatAgent()

@https_fn.on_request()
def helloWorld(req: https_fn.Request) -> https_fn.Response:
    return https_fn.Response("Hello from FanVerse AI!")

@https_fn.on_request()
def chat(req: https_fn.Request) -> https_fn.Response:
    if req.method != "POST":
        return https_fn.Response("Method not allowed", status=405)
    
    try:
        data = req.get_json()
        query = data.get("query")
        history = data.get("history", [])
        match_context = data.get("match_context", {})
        
        response_text = chat_agent.get_response(query, history, match_context)
        
        return https_fn.Response(
            json.dumps({"response": response_text}),
            mimetype="application/json"
        )
    except Exception as e:
        return https_fn.Response(f"Error: {str(e)}", status=500)
