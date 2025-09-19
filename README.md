# WoW Armory Prototype (Nx + Angular)

Test task: a mini Armory built with Angular + Wow Model Viewer.
Goal — prototype a character window: 3D model with equipment, item slots, and tooltips with basic stats.

---

## 🚀 Environment Requirements

* Node.js **v20+**
* Yarn **v4.9.4**
* Docker + Docker Compose (for wow-model-viewer)

---

## ⚙️ Installation & Run

1. Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd <repo>
yarn install
```

2. Start the **wow-model-viewer** container (required for 3D rendering):

```bash
cd libs/character
docker compose up -d
```

3. Run the application:

```bash
yarn serve:armory
```

The app will be available at `http://localhost:4200`.

4. To preview UI and components via Storybook:

```bash
yarn storybook:ui
yarn storybook:character
```

---

## 📜 Available Scripts

* `yarn serve:armory` — run the Armory app
* `yarn build:armory` — build Armory
* `yarn lint:armory` — lint Armory
* `yarn serve:ui` — run demo app for UI library
* `yarn build:ui` — build UI
* `yarn lint:ui` — lint UI
* `yarn lint:character` — lint Character
* `yarn storybook:ui` — Storybook for UI
* `yarn storybook:character` — Storybook for Character
* `yarn nx:reset` — reset Nx cache

---

## 🗂️ Monorepo Structure

```
apps/
  armory/                # Angular Armory application

libs/
  character/             # Wrapper around wow-model-viewer + docker-compose + static assets
  ui/                    # Atomic UI components
  design-tokens/         # Theming tokens

mocks/
  character.json         # Demo character data
```

---

## 📖 Task Requirements (shortened)

* Angular 20+, Standalone Components, Signals
* 3D character model (wow-model-viewer)
* Item slots displayed left/right of the model
* Tooltip with basic character stats
* Data comes from local `mocks/character.json`

---

## 🛠️ Features

* Nx monorepo
* Angular Signals
* miorey/bypass-cors-policies via Docker
* Storybook for UI and Character
* ESLint + Prettier
* Mock data for fast setup (`mocks/character.json`)

---

## 📚 Useful Links

* [Nx Documentation](https://nx.dev)
* [Angular](https://angular.dev)
* [Wow Model Viewer](https://github.com/Miorey/wow-model-viewer)
* [Wowhead WotLK RU](https://www.wowhead.com/wotlk/ru)

---

## License

This project is **not open source**.  
The code is provided solely for the purpose of completing a test assignment.  
Any other use without the author’s permission is prohibited.
