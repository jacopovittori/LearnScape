# LearnScape – Development Guidelines & Documentation

Ogni cartella ha un ruolo ben definito. Il codice deve essere chiaro, modulare e facilmente navigabile.

---

## Development Guidelines

### Naming Conventions

- Files & Folders: `kebab-case` (es. `main-style.css`, `login-form.js`)
- JS Variables: `camelCase`
- Environment Files: `SNAKE_CASE`

---

### HTML

- Niente CSS o JS inline.
- Ogni pagina deve includere link a fogli di stile e script dedicati.

---

### CSS

- Suddividere per pagina o sezione.
- Utilizzare variabili CSS per colori, spaziature, font.
- Classi semanticamente descrittive (es. `.form-group`, non `.box1`).

---

### JavaScript (Client-side)

- Separare la logica per pagina o funzionalità.
- Nominare funzioni e file in base alla loro responsabilità (es. `handleLogin.js`, `signupValidation.js`).
- Commentare le funzioni complesse.

---

### Backend

- Separare chiaramente:
  - `controllers/`
  - `routes/`
  - `middleware/`
  - `services/`
- Evitare funzioni anonime all’interno delle route.
- Organizzare per dominio (es. `/auth`, `/user`, `/quiz`), non solo per tipologia tecnica.

---

## Internal Documentation

### Dove salvare

Tutti i documenti tecnici, diagrammi, specifiche e concept vanno nella cartella `/docs`.

---

### Formati consigliati

| Tipo di file        | Formato                      |
|---------------------|-------------------------------|
| Documentazione      | `.md`, `.pdf`                 |
| Diagrammi           | `.drawio`, `.png`, `.svg`     |
| Specifiche API      | `.yaml` (OpenAPI), `.md`      |
| Concept design      | `.md`, `.notion`, `.pdf`      |

---

### Cosa documentare

- Scelte architetturali
- Flussi logici dell’utente
- API e logiche di business
- Roadmap e backlog
- Log di sviluppo e problemi noti
- Connessioni tra frontend e backend

---

## Git Versioning

- Fare commit piccoli e significativi.
- Messaggi chiari:  
  `feat: add signup form validation`  
  `fix: align login button`
- Eseguire `git pull` prima di ogni `push` se si lavora in team.

---

## Scalabilità futura

- Prevedere estensioni modulari (es. `/game`, `/ai`, `/missioni3D`)
- Organizzare il codice per dominio funzionale (Domain-Driven Design)
- Mantenere coerenza nei nomi e nella struttura

---

## TODO / Evolutive Plans

- Introdurre linting automatico (ESLint, Prettier)
- Setup CI/CD (es. GitHub Actions)
- Considerare migrazione a TypeScript
- Logging avanzato lato backend

---

## Vision

LearnScape non è solo un progetto tecnico: è una visione per reinventare il modo in cui si apprende.  
Con un'integrazione profonda tra AI, interazione e game experience, ogni decisione tecnica deve essere guidata dall'obiettivo di rendere lo studio coinvolgente, personalizzato e accessibile.
