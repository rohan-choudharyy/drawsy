# ✏️ Drawsy -- AI Math Solver from Drawings

Drawsy is a **full-stack AI-powered web app** that lets you **draw
mathematical equations or problems** on a canvas, and instantly solves
them using **Google's Gemini API**.\
It supports arithmetic, algebra, variable assignments, graphs, and even
abstract concept detection --- all through freehand drawing.

------------------------------------------------------------------------

## 🚀 Features

-   🖌️ **Draw math problems** directly on a digital canvas
-   🧮 Solves:
    -   Arithmetic expressions (`2 + 3 * 4`)
    -   Algebraic equations (`x^2 + 2x + 1 = 0`)
    -   Variable assignments (`x = 5, y = 10`)
    -   Word/graphical problems (geometry, physics, etc.)
    -   Abstract concepts in drawings (e.g., symbolic sketches)
-   🤖 Powered by **Gemini 1.5 Flash**
-   🎨 Interactive frontend with **React + Vite + Tailwind + Mantine**
-   ⚡ Backend with **Express + TypeScript + Sharp**
-   🐳 Dockerized backend for deployment
-   📐 Math rendered beautifully with **MathJax**

------------------------------------------------------------------------

## 📂 Project Structure

    rohan-choudharyy-drawsy/
    ├── backend/              # Node.js + Express API
    │   ├── src/
    │   │   ├── index.ts      # Express server & routes
    │   │   └── utils.ts      # Image processing + Gemini AI integration
    │   ├── Dockerfile
    │   └── package.json
    │
    └── frontend/             # React + Vite frontend
        ├── src/
        │   ├── screens/home  # Main drawing screen
        │   ├── components/ui # Reusable UI components
        │   ├── constants.ts  # Color swatches
        │   └── index.css     # Tailwind theme
        ├── vite.config.ts
        └── package.json

------------------------------------------------------------------------

## 🛠️ Getting Started

### 1. Clone the repo

``` bash
git clone https://github.com/your-username/drawsy.git
cd drawsy
```

### 2. Setup Backend

``` bash
cd backend
npm install
```

-   Create a `.env` file with:

```{=html}
<!-- -->
```
    GEMINI_API_KEY=your_api_key_here
    PORT=8900

-   Run locally:

``` bash
npm run dev
```

-   Or with Docker:

``` bash
docker build -t drawsy-backend .
docker run -p 8900:8900 drawsy-backend
```

### 3. Setup Frontend

``` bash
cd ../frontend
npm install
npm run dev
```

Frontend runs on <http://localhost:5173>.\
Backend runs on <http://localhost:8900>.

------------------------------------------------------------------------

## 🎮 Usage

1.  Open the frontend in your browser.
2.  Use the **color swatches** to draw math expressions on the canvas.
3.  Click **Run** to send your sketch to the backend.
4.  See solved results rendered as **LaTeX** on screen.
5.  Drag results around the canvas for better viewing.
6.  Reset anytime with the **Reset** button.

------------------------------------------------------------------------

## 📦 Tech Stack

-   **Frontend:** React, Vite, TypeScript, TailwindCSS, Mantine, MathJax
-   **Backend:** Node.js, Express, TypeScript, Sharp
-   **AI:** Google Generative AI (Gemini 1.5 Flash)
-   **Deployment:** Docker (backend)

------------------------------------------------------------------------

## 📝 License

MIT License © 2025 Rohan Choudhary
