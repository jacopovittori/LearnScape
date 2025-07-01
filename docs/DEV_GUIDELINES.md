# LearnScape – Development Guidelines & Documentation

Each folder has a well-defined role. Code must be clear, modular, and easily navigable.

---

## Development Guidelines

### Naming Conventions

- Files & Folders: `kebab-case` (e.g., `main-style.css`, `login-form.js`)
- JS Variables: `camelCase`
- Environment Files: `SNAKE_CASE`

---

### HTML

- No inline CSS or JS.
- Each page must include links to dedicated stylesheets and scripts.

---

### CSS

- Split by page or section.
- Use CSS variables for colors, spacing, fonts.
- Semantically descriptive classes (e.g., `.form-group`, not `.box1`).

---

### JavaScript (Client-side)

- Separate logic by page or feature.
- Name functions and files according to their responsibility (e.g., `handleLogin.js`, `signupValidation.js`).
- Comment complex functions.

---

### Backend

- Clearly separate:
  - `controllers/`
  - `routes/`
  - `middleware/`
  - `services/`
- Avoid anonymous functions within routes.
- Organize by domain (e.g., `/auth`, `/user`, `/quiz`), not just by technical type.

---

## Internal Documentation

For best practices and detailed guidelines on internal documentation, see [Documentation Guidelines](DOCUMENTATION_GUIDELINES.md).

---

## Git Versioning

- Make small, meaningful commits.
- Clear messages:
  `feat: add signup form validation`
  `fix: align login button`
- Run `git pull` before every `push` when working in a team.

---

## Future Scalability

- Plan for modular extensions (e.g., `/game`, `/ai`, `/3Dmissions`)
- Organize code by functional domain (Domain-Driven Design)
- Maintain consistency in naming and structure

---

## TODO / Evolutive Plans

- Introduce automatic linting (ESLint, Prettier)
- Setup CI/CD (e.g., GitHub Actions)
- Consider migration to TypeScript
- Advanced backend logging

---

## Vision

LearnScape is not just a technical project: it is a vision to reinvent the way we learn.
With deep integration between AI, interaction, and game experience, every technical decision must be guided by the goal of making learning engaging, personalized, and accessible.
