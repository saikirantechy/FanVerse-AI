# 🚀 FanVerse AI

> AI-powered realtime second-screen sports engagement platform built for Google Cloud — Build with AI (Agentic Premier League).

![FanVerse AI Dashboard Hero](./docs/hero.png)

---

# 🏆 Problem Statement

Modern sports viewing is mostly passive. Fans watch live matches but lack intelligent realtime interaction, contextual engagement, and emotional participation.

**FanVerse AI** transforms passive viewers into active participants using **Realtime AI Orchestration**.

---

# 💡 Solution Overview

FanVerse AI is a realtime multi-agent sports engagement platform powered by:

* **Gemini AI**: Generates emotional commentary and tactical insights.
* **Multi-Agent Orchestration**: Autonomous agents react to live events in sync.
* **Next.js & Framer Motion**: Premium, futuristic glassmorphism dashboard.
* **Firebase**: Realtime state synchronization.

---

# ⚡ Core Features

* 🏏 **Live Match Dashboard**: Score updates, overs tracking, and run rate analysis.
* 🤖 **AI Commentary Agent**: Generates emotional, situational commentary using Gemini.
* 📈 **Momentum Engine**: Visualizes match pressure shifts in realtime.
* 🧠 **Multi-Agent Architecture**: Agents collaborate autonomously (Match, Commentary, Prediction, Engagement).
* 🗳 **Prediction Polls**: Contextual polls launched based on match events.
* 🏆 **Leaderboards**: Realtime ranking system for fan engagement.
* 💬 **AI Chat Companion**: Interactive Gemini-powered sports assistant.

---

# 🧩 Multi-Agent Architecture

> "Our system does not simply display sports data — it autonomously orchestrates multiple AI agents in realtime to emotionally engage fans during live matches."

```text
Live Match Event
        ↓
Match Agent (Analysis)
        ↓
Commentary Agent (Gemini AI)
        ↓
Prediction Agent (Polls & Momentum)
        ↓
Engagement Agent (Leaderboard)
        ↓
Firestore Realtime Update
        ↓
Frontend Live Refresh (Staggered Animation)
```

---

# 🎤 Demo Flow (Cinematic Experience)

1. **Live Event**: Virat Kohli hits a massive six!
2. **AI Commentary**: Commentary Agent reacts instantly with emotional flair.
3. **Momentum Spike**: The Momentum Meter spikes toward RCB as the pressure shifts.
4. **Prediction Poll**: A poll launches: "Can the bowler bounce back in the next 3 balls?"
5. **Leaderboard Update**: RCB fans receive bonus points for the boundary.
6. **AI Chat**: The Gemini assistant explains the win probability shift to the user.

---

# 🏗 Tech Stack

| Layer      | Technology             |
| ---------- | ---------------------- |
| Frontend   | Next.js + Tailwind CSS |
| Animations | Framer Motion          |
| Backend    | FastAPI + Python       |
| AI         | Gemini API             |
| Database   | Firestore              |
| Hosting    | Vercel / Firebase      |

---

# 📂 Project Structure

```text
backend/     # FastAPI Agents & Orchestrator
frontend/    # Next.js Dashboard UI
firebase/    # Firebase configurations
docs/        # Assets & Documentation
README.md
TASKS.md
CLAUDE.md
```

---

# 🌐 Deployment Options

FanVerse AI can be deployed and shared publicly using modern hosting platforms.

## 🚀 Recommended Deployment Platforms

### 1. Vercel (Recommended)
Best option for Next.js applications. Features instant deployments and CI/CD.
```bash
cd frontend && npm run build
```

### 2. Firebase Hosting
Recommended for Google Cloud ecosystem compatibility and scalable hosting.
```bash
firebase deploy
```

### 3. GitHub Pages
Perfect for static showcase and hackathon portfolio demos.

---

# 🏆 Hackathon Goal

Deliver a highly polished realtime AI sports experience demonstrating multi-agent orchestration, realtime engagement, and emotional interaction for the **Google Cloud Build with AI (Agentic Premier League)**.

---

# 🏁 Setup Instructions

## Frontend
```bash
cd frontend
npm install
npm run dev
```

## Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn api.index:app --reload
```

---

# 👨💻 Built For
**Google Cloud — Build with AI (Agentic Premier League)**
