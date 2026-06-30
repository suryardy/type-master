IMPORTANT

CORS & Local Running: Modern browsers block fetch() requests on the file:// protocol. To ensure that users can open index.html directly from their filesystem without spinning up a local server, we will structure words.js and paragraphs.js as global data scripts loaded via <script> tags, making the app 100% offline-compatible under file://.

Web Audio API: Instead of loading bulky external .mp3 or .wav files which can fail to load or get blocked, we will generate the typing sound effects (mechanical click, error buzz, success chime) dynamically using the browser's Web Audio API. This guarantees offline operation and zero asset loading dependencies.

Custom Canvas-Based Charts: For the typing speed graph and historical analytics, we will implement a lightweight, responsive canvas-based chart engine in JavaScript. This avoids importing heavy libraries like Chart.js, keeps performance high, and ensures absolute offline independence.

Proposed Changes
We will create the project inside a TypeMaster directory in the workspace.

Directory Structure
text

/TypeMaster
├── index.html                  # Main dashboard and landing page
├── style.css                   # Core CSS stylesheet (glassmorphism, themes, grid, animations)
├── script.js                   # Application state, typing engine, audio, canvas drawing, history
├── assets/
│   ├── data/
│   │   ├── words.js            # English, Telugu, Hindi word lists (Easy, Medium, Hard)
│   │   └── paragraphs.js       # Paragraphs & Code snippets (C, C++, Java, Python, JS, etc.)
│   └── README.md               # User documentation
Component Specifications
1. HTML Shell (index.html)
Structure:
Landing Page Mode: Hero section, "Start Typing" button, static features overview, and statistics preview.
Dashboard Mode:
Header: Logo, current streak counter, quick theme switcher, user profile avatar/username, and settings icon.
Control Bar: Typing mode selection (Words, Paragraphs, Numbers, Symbols, Custom, Code), settings presets (Timer length: 15s, 30s, 60s, 120s, Custom), layout options (QWERTY, QWERTZ, AZERTY), and language settings.
Practice Interface:
Focus/Zen toggles, fullscreen button, pause/resume.
Countdown overlay (3, 2, 1, Go) with toggle.
Caret and live text display container (glassmorphic card, large, readable typography).
Live metrics display (WPM, Accuracy, Time remaining, and an active progress bar).
Virtual Keyboard: Visual layout showing current/next key, Shift, Caps Lock, etc.
Result Page Overlay/View: Graph area (canvas-drawn), final metrics (WPM, Accuracy, mistakes breakdown, speed grade), and action buttons (Restart, Save to Leaderboard, Share).
Analytics & Leaderboard: Tabs for viewing historical graphs (Daily, Weekly, Monthly), top 20 local high scores, and user profile achievement badges.
Accessibility: Includes ARIA labels, semantic structure (<main>, <header>, <footer>), keyboard trap avoidance, and high-contrast styling tokens.
2. Styling System (style.css)
Theme Support: Defines custom CSS variables for color tokens under multiple themes:
Dark (Monkeytype default feel)
Light (High-contrast light mode)
Blue (Ocean breeze vibe)
Purple (Cyberpunk neon feel)
Green (Classic terminal matrix style)
Cyber (Yellow and black futuristic theme)
Glassmorphism: Backdrops using backdrop-filter: blur(12px) saturate(180%), soft borders, and shadows.
Caret Styling: Pulsing caret animation, customizable colors (e.g., matching the theme primary, yellow, or pink).
Responsive Layout: Fluid grids and flex containers designed to adapt gracefully from ultra-wide desktops down to mobile screens.
Keyboards: Visual layouts adjusting key heights and sizes.
3. Data Collections (assets/data/words.js & paragraphs.js)
words.js will export WORDS_DATA structured by language (English, Telugu, Hindi) and difficulty (Easy, Medium, Hard).
Telugu and Hindi typing will support standard transliteration or direct character layouts.
paragraphs.js will export PARAGRAPHS_DATA structured by category (General, Tech, Programming, History, Science, Quotes) and CODE_DATA by language (C, C++, Java, Python, JavaScript).
4. Application Engine (script.js)
State Management: Holds test parameters (mode, language, subcategory, duration), performance variables (timer, elapsed, character counts, error array, WPM sequence for charting), and profile data (streaks, achievements).
Typing Controller:
Monitors keyboard events, checks input correctness, handles character/backspace progression, and triggers sound synthesis.
Handles Pause/Resume, Focus mode (hides header/footer/keyboard), and Zen mode (hides metrics during typing).
Web Audio Engine:
AudioContext generation.
Methods: playClick(frequency, duration), playError(), playSuccess().
Canvas Chart Engine:
Draws a smooth line chart showing WPM/Error progression over time.
Draws historical analytics (Daily, Weekly, Monthly usage charts).
Leaderboard & Local Storage System:
Serializes scores, reads/writes daily challenge metadata, updates user streak, manages avatar selection, and triggers confetti canvas on new high scores.
CSV exporter for practice history.
