# LearnScape

**LearnScape** is a web-based platform designed to radically transform how we study and learn. It integrates AI-driven guidance, interactive tools, and gamified workflows to make learning more immersive, meaningful, and aligned with how the human brain actually learns.

---

## Overview

LearnScape addresses one of the core limitations of traditional education: the lack of cognitive engagement. Neuroscientific evidence shows that the human brain did not evolve to study abstractly or passively. LearnScape rethinks the educational experience to better align with natural cognitive processes—by making learning active, playful, and supported by technology.

Unlike generic tools like Notion, Anki, or ChatGPT, LearnScape is purpose-built for studying. It offers a structured, research-informed environment that enhances learning performance through the synergy of AI feedback, content reworking, personalized repetition, and visual organization of knowledge.

In its first version, LearnScape does not use AI to replace the student’s cognitive effort, but to **support it**, much like a coach or a responsive tutor would.

---

## Core Features (MVP)

The MVP focuses on a minimal but essential set of features:

- **Upload and Parse Learning Material**  
  Upload documents (PDFs, text, audio) and have them analyzed for key points and structure.

- **Generate Learning Resources (with AI feedback)**  
  Create summaries, flashcards, quizzes and exercises—either manually, with AI support, or through automatic generation (depending on available LearnCredits).

- **Earn and Spend LearnCredits**  
  Students earn credits by crafting their own resources (summaries, cards, questions). These can be exchanged for AI-generated content to encourage active elaboration over passive consumption.

- **Organize Material by Purpose**  
  Every file or group of files is organized by function:  
  - **Primary resources** (original documents)  
  - **Supporting material** (AI-aided or user-generated elaboration)  
  - **Review resources** (cards, quizzes, exercises)  
  - **Advanced enrichment** (optional deep dives)  
  - **Evaluation space** (performance tracking)

- **Personalized Review System**  
  Based on spaced repetition, AI-generated feedback, and user progress, the platform suggests what and when to review, targeting weak points dynamically.

- **Gamified Progress Tracking**  
  XP points are earned based on consistency and depth of engagement within a subject. Visual graphs show mastery level and review frequency.

---

## Project Structure

Here is the current folder structure for LearnScape:
LearnScape/
├── assets/ # Static assets like images, audio, fonts
├── backend/ # Backend logic (controllers, routes, DB models, etc.)
├── docs/ # Internal documentation and technical specs
├── pages/ # HTML pages (login, signup, dashboard, etc.)
├── scripts/ # Frontend JavaScript logic
├── styles/ # CSS stylesheets
├── .env # Environment variables (excluded from version control)
├── .gitignore
└── README.md

For a complete explanation of how to navigate and work within this structure, see the [Development Guidelines](docs/DEV_GUIDELINES.md).

---

## Target Audience

- High school and university students
- Lifelong learners seeking structure and engagement
- Anyone aiming to improve cognitive depth, memory, or autonomy in learning

---

## Vision

In the long term, LearnScape will evolve into a fully immersive learning experience that merges traditional UI with 3D game-like environments. Users will interact with their own avatar, complete missions, collaborate on simulations, and build knowledge ecosystems driven by curiosity, challenge and creativity. AI will continue to play a scaffolding role—never replacing the learner, but empowering them.

LearnScape aims to make education feel more like exploration than obligation.

---

## Roadmap

### **Phase 1 — Foundation & MVP (June–August 2025)**
> *Goal: Build a functional MVP with core features for testing and early feedback.*

- Set up project infrastructure (GitHub, Railway, hosting, CI/CD).
- Develop first static frontend pages (Login, Signup).
- Implement basic backend: user authentication, secure session handling.
- Enable file upload (text, PDF, audio) and storage system.
- Integrate OpenAI API for basic AI analysis (summaries, flashcards, quizzes).
- Introduce the LearnCredits system to incentivize human-AI collaboration.
- Build basic dashboard to navigate resources and user progress.
- Push first version online (publicly accessible prototype).
- Collect qualitative feedback from early users (students, peers, mentors).

### **Phase 2 — Learning Engine & UX Refinement (Sept–Oct 2025)**
> *Goal: Strengthen core mechanics, improve UI/UX, and expand functionality.*

- Develop “Learning Lab” with AI-supported re-elaboration tools.
- Organize resource structure: Primary ➝ Reworking ➝ Review ➝ Exploration.
- Implement spaced repetition logic and intelligent review scheduling.
- Add basic performance tracking: XP, review streaks, skill growth metrics.
- Create visual graphs and feedback loops for user engagement.
- Integrate support for study “missions” and daily learning goals.
- Begin experimentation with basic gamification dynamics.

### **Phase 3 — Immersive Layer & Social Features (Late 2025–Early 2026)**
> *Goal: Move toward a truly immersive, engaging and social learning experience.*

- Start prototyping 3D interface concepts with Three.js or Babylon.js.
- Create customizable avatars for user identity and progression.
- Design and test interactive environments for study-based exploration.
- Introduce collaborative features (challenges, friend system, shared progress).
- Begin closed beta testing with selected student cohorts.

### **Phase 4 — Vision Expansion & AI Autonomy (2026+)**
> *Goal: Extend LearnScape toward its long-term vision of a truly transformative learning platform.*

- Develop or fine-tune a custom AI agent optimized for learning facilitation.
- Implement procedural content generation for exercises, missions, and simulations.
- Integrate adaptive curriculum planning based on user goals and performance.
- Launch public alpha version with scalable backend and cloud architecture.
- Initiate partnerships with educators and open science communities.

---

## Current Status

> LearnScape is in its early development stage.  
The repository has been initialized, with the first HTML/CSS interfaces developed for user login and sign-up. Frontend and backend development are in progress. The first usable version is targeted within the next 1.5–2 months.

---

## Team

- **Jacopo Vittori** – Founder, Product Designer, Frontend Developer  
  Visionary behind LearnScape, responsible for the original concept, UI/UX design, feature definition, and frontend development. He also oversees the project's overall direction and management, with the long-term goal of developing a custom AI engine to power the platform.

- **Kevin Shytaj** – Backend Developer, Technical Collaborator  
  Focused on backend development, including server-side architecture, user authentication, database management, and API integrations. Collaborates closely with the frontend to ensure smooth functionality and scalability.

> *This project currently follows the agile and iterative approach of a micro-startup, though it is fully independent and not yet a registered company.*

We are a self-managed, independent team with a startup-like methodology, though not incorporated. The project is experimental, science-based, and mission-driven.
