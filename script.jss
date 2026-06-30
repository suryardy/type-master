/* ==========================================================================
   TypeMaster Local Design System & Stylesheet
   ========================================================================== */
/* --- Theme Color Definitions (CSS Variables) --- */
:root {
  --transition-speed: 0.3s;
  --transition-bezier: cubic-bezier(0.4, 0, 0.2, 1);
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'Fira Code', 'Courier New', monospace;
  --font-rounded: 'Outfit', sans-serif;
}
/* 1. Theme Dark (Default Monkeytype Vibe) */
.theme-dark {
  --bg-color: #1e1e24;
  --bg-gradient: linear-gradient(135deg, #141416 0%, #1e1e24 100%);
  --panel-bg: rgba(30, 30, 36, 0.65);
  --border-color: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.15);
  
  --text-main: #e2e8f0;
  --text-muted: #64748b;
  --text-correct: #f1f5f9;
  --text-incorrect: #ef4444;
  
  --primary-color: #6366f1;
  --primary-glow: rgba(99, 102, 241, 0.4);
  --accent-gradient: linear-gradient(90deg, #6366f1 0%, #a855f7 100%);
  
  --caret-color: #6366f1;
  --word-active-bg: rgba(99, 102, 241, 0.12);
  --shadow-color: rgba(0, 0, 0, 0.3);
}
/* 2. Theme Light */
.theme-light {
  --bg-color: #f8fafc;
  --bg-gradient: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  --panel-bg: rgba(255, 255, 255, 0.7);
  --border-color: rgba(0, 0, 0, 0.08);
  --border-hover: rgba(0, 0, 0, 0.15);
  
  --text-main: #0f172a;
  --text-muted: #64748b;
  --text-correct: #334155;
  --text-incorrect: #dc2626;
  
  --primary-color: #2563eb;
  --primary-glow: rgba(37, 99, 235, 0.25);
  --accent-gradient: linear-gradient(90deg, #2563eb 0%, #3b82f6 100%);
  
  --caret-color: #2563eb;
  --word-active-bg: rgba(37, 99, 235, 0.08);
  --shadow-color: rgba(0, 0, 0, 0.05);
}
/* 3. Theme Blue (Ocean Breeze) */
.theme-blue {
  --bg-color: #0f172a;
  --bg-gradient: linear-gradient(135deg, #090d16 0%, #0f172a 100%);
  --panel-bg: rgba(15, 23, 42, 0.65);
  --border-color: rgba(56, 189, 248, 0.15);
  --border-hover: rgba(56, 189, 248, 0.3);
  
  --text-main: #f0fdfa;
  --text-muted: #475569;
  --text-correct: #38bdf8;
  --text-incorrect: #f43f5e;
  
  --primary-color: #0ea5e9;
  --primary-glow: rgba(14, 165, 233, 0.4);
  --accent-gradient: linear-gradient(90deg, #0ea5e9 0%, #2dd4bf 100%);
  
  --caret-color: #0ea5e9;
  --word-active-bg: rgba(14, 165, 233, 0.15);
  --shadow-color: rgba(0, 0, 0, 0.4);
}
/* 4. Theme Purple (Cyberpunk Neon) */
.theme-purple {
  --bg-color: #0d0614;
  --bg-gradient: linear-gradient(135deg, #07020a 0%, #0d0614 100%);
  --panel-bg: rgba(13, 6, 20, 0.65);
  --border-color: rgba(236, 72, 153, 0.15);
  --border-hover: rgba(236, 72, 153, 0.3);
  
  --text-main: #fdf2f8;
  --text-muted: #701a75;
  --text-correct: #f472b6;
  --text-incorrect: #f43f5e;
  
  --primary-color: #ec4899;
  --primary-glow: rgba(236, 72, 153, 0.4);
  --accent-gradient: linear-gradient(90deg, #ec4899 0%, #d946ef 100%);
  
  --caret-color: #ec4899;
  --word-active-bg: rgba(236, 72, 153, 0.15);
  --shadow-color: rgba(0, 0, 0, 0.5);
}
/* 5. Theme Green (Terminal Hacker Matrix) */
.theme-green {
  --bg-color: #050a06;
  --bg-gradient: linear-gradient(135deg, #020402 0%, #050a06 100%);
  --panel-bg: rgba(5, 10, 6, 0.7);
  --border-color: rgba(34, 197, 94, 0.15);
  --border-hover: rgba(34, 197, 94, 0.3);
  
  --text-main: #f0fdf4;
  --text-muted: #166534;
  --text-correct: #4ade80;
  --text-incorrect: #ef4444;
  
  --primary-color: #22c55e;
  --primary-glow: rgba(34, 197, 94, 0.4);
  --accent-gradient: linear-gradient(90deg, #22c55e 0%, #10b981 100%);
  
  --caret-color: #22c55e;
  --word-active-bg: rgba(34, 197, 94, 0.15);
  --shadow-color: rgba(0, 0, 0, 0.6);
}
/* 6. Theme Cyber (Yellow & Black Futuristic) */
.theme-cyber {
  --bg-color: #121314;
  --bg-gradient: linear-gradient(135deg, #090a0a 0%, #121314 100%);
  --panel-bg: rgba(18, 19, 20, 0.75);
  --border-color: rgba(250, 204, 21, 0.15);
  --border-hover: rgba(250, 204, 21, 0.4);
  
  --text-main: #fef08a;
  --text-muted: #854d0e;
  --text-correct: #ffffff;
  --text-incorrect: #f87171;
  
  --primary-color: #facc15;
  --primary-glow: rgba(250, 204, 21, 0.4);
  --accent-gradient: linear-gradient(90deg, #facc15 0%, #f97316 100%);
  
  --caret-color: #facc15;
  --word-active-bg: rgba(250, 204, 21, 0.15);
  --shadow-color: rgba(0, 0, 0, 0.5);
}
/* --- High Contrast Overrides (Accessibility) --- */
.high-contrast {
  --bg-color: #ffffff !important;
  --bg-gradient: none !important;
  --panel-bg: #ffffff !important;
  --border-color: #000000 !important;
  --border-hover: #000000 !important;
  --text-main: #000000 !important;
  --text-muted: #333333 !important;
  --text-correct: #006600 !important;
  --text-incorrect: #cc0000 !important;
  --primary-color: #0000ff !important;
  --primary-glow: transparent !important;
  --caret-color: #000000 !important;
  --word-active-bg: #eeeeee !important;
  --shadow-color: transparent !important;
}
/* --- General Reset & Base Styles --- */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: var(--font-sans);
  background: var(--bg-color);
  background-image: var(--bg-gradient);
  color: var(--text-main);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition: background var(--transition-speed) var(--transition-bezier), color var(--transition-speed) var(--transition-bezier);
}
.app-wrapper {
  max-width: 1300px;
  width: 94%;
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 25px;
  padding: 20px 0;
}
/* --- Glassmorphism UI Elements --- */
.glass-card {
  background: var(--panel-bg);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 10px 30px var(--shadow-color);
  transition: border var(--transition-speed), box-shadow var(--transition-speed), transform 0.2s;
}
.glass-card:hover {
  border-color: var(--border-hover);
}
/* --- Typographical Utilities --- */
.font-sans { font-family: var(--font-sans); }
.font-mono { font-family: var(--font-mono); }
.font-rounded { font-family: var(--font-rounded); }
.text-gradient {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-muted { color: var(--text-muted) !important; }
.color-accent { color: var(--primary-color); }
.font-bold { font-weight: 700; }
.text-sm { font-size: 0.9rem; }
.text-xs { font-size: 0.75rem; }
.text-lg { font-size: 1.25rem; }
.mb-5 { margin-bottom: 5px; }
.mb-10 { margin-bottom: 10px; }
.mb-15 { margin-bottom: 15px; }
.mb-20 { margin-bottom: 20px; }
.mt-5 { margin-top: 5px; }
.mt-10 { margin-top: 10px; }
.mt-15 { margin-top: 15px; }
.mt-20 { margin-top: 20px; }
.flex { display: flex; }
.flex-gap-10 { gap: 10px; }
.pointer-events-none { pointer-events: none; }
.fixed { position: fixed; }
.inset-0 { top: 0; left: 0; right: 0; bottom: 0; }
.z-50 { z-index: 50; }
.hide { display: none !important; }
/* --- UI Buttons & Form Elements --- */
.btn {
  font-family: var(--font-rounded);
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.25s var(--transition-bezier);
  padding: 10px 20px;
}
.btn-primary {
  background: var(--primary-color);
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 15px var(--primary-glow);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px var(--primary-glow);
  filter: brightness(1.1);
}
.btn-primary:active {
  transform: translateY(0);
}
.btn-secondary {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-main);
  border-color: var(--border-color);
}
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--border-hover);
  transform: translateY(-2px);
}
.btn-lg {
  padding: 14px 28px;
  font-size: 1.1rem;
  border-radius: 12px;
}
.btn-sm {
  padding: 6px 12px;
  font-size: 0.85rem;
  border-radius: 6px;
}
.btn-text {
  background: transparent;
  border: none;
  color: var(--primary-color);
  padding: 5px 0;
  font-weight: 500;
}
.btn-text:hover {
  filter: brightness(1.2);
  text-decoration: underline;
}
.icon-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  transition: all 0.2s;
}
.icon-btn:hover {
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-main);
}
.toggle-btn-small {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  color: var(--text-muted);
  font-size: 0.8rem;
  cursor: pointer;
  padding: 5px 12px;
  transition: all 0.2s;
}
.toggle-btn-small:hover {
  border-color: var(--border-hover);
  color: var(--text-main);
}
.toggle-btn-small.active {
  background: var(--word-active-bg);
  border-color: var(--primary-color);
  color: var(--primary-color);
}
.form-input, .form-select {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-color);
  color: var(--text-main);
  border-radius: 8px;
  font-family: var(--font-sans);
  padding: 10px 15px;
  transition: border-color 0.2s;
  outline: none;
}
.form-input:focus, .form-select:focus {
  border-color: var(--primary-color);
}
/* --- Header Styling --- */
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
}
.header-left, .header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}
.logo-container {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.logo-icon {
  color: var(--primary-color);
  filter: drop-shadow(0 0 4px var(--primary-glow));
}
.logo-text {
  font-family: var(--font-rounded);
  font-weight: 800;
  font-size: 1.35rem;
}
.logo-sub {
  font-weight: 300;
  font-size: 0.95rem;
  opacity: 0.7;
}
.nav-links {
  display: flex;
  gap: 5px;
}
.nav-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-family: var(--font-rounded);
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s;
}
.nav-btn:hover {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.04);
}
.nav-btn.active {
  color: var(--primary-color);
  background: var(--word-active-bg);
}
.header-stat {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 6px 12px;
  font-family: var(--font-rounded);
  font-weight: 600;
}
.theme-quick-select select {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  border-radius: 6px;
  outline: none;
  font-size: 0.85rem;
  padding: 4px 8px;
  cursor: pointer;
}
/* --- View Sections Switcher --- */
.view-section {
  display: none;
  animation: fadeIn 0.4s var(--transition-bezier);
}
.view-section.active-view {
  display: block;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
/* --- 1. Home / Landing View Styling --- */
.hero-container {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 40px;
  margin-top: 20px;
  margin-bottom: 50px;
}
.hero-title {
  font-family: var(--font-rounded);
  font-weight: 800;
  font-size: 3rem;
  line-height: 1.15;
  margin-bottom: 20px;
}
.hero-subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 30px;
}
.hero-buttons {
  display: flex;
  gap: 15px;
}
.hero-visual {
  padding: 20px;
  height: 250px;
  display: flex;
  flex-direction: column;
}
.simulated-typing {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.typing-header {
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
  margin-bottom: 15px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot.red { background: #ef4444; }
.dot.yellow { background: #eab308; }
.dot.green { background: #22c55e; }
.typing-tab {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-left: 10px;
}
.typing-body {
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--text-muted);
  flex-grow: 1;
}
.typing-body .correct {
  color: var(--text-main);
  opacity: 0.6;
}
.typing-body .incorrect {
  color: var(--text-incorrect);
  text-decoration: underline wave;
}
.typing-body .current {
  color: var(--primary-color);
  font-weight: 600;
}
.caret.cursor-pulse {
  display: inline-block;
  width: 2px;
  height: 1.1em;
  background-color: var(--caret-color);
  animation: pulse 1s infinite alternate;
  vertical-align: middle;
  margin-left: 1px;
}
@keyframes pulse {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.typing-stats-preview {
  display: flex;
  gap: 30px;
  border-top: 1px solid var(--border-color);
  padding-top: 10px;
}
.preview-stat {
  display: flex;
  flex-direction: column;
}
.preview-stat .stat-lbl {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
}
.preview-stat .stat-num {
  font-family: var(--font-rounded);
  font-weight: 700;
  font-size: 1.4rem;
}
/* Features Grid */
.features-section {
  margin-bottom: 50px;
}
.section-title {
  font-family: var(--font-rounded);
  font-weight: 800;
  font-size: 2.2rem;
  margin-bottom: 30px;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}
.feature-card {
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.feature-icon {
  font-size: 2.2rem;
  margin-bottom: 5px;
}
.feature-card h3 {
  font-family: var(--font-rounded);
  font-weight: 700;
  font-size: 1.25rem;
}
.feature-card p {
  color: var(--text-muted);
  line-height: 1.5;
  font-size: 0.95rem;
}
/* Quick stats snapshots */
.quick-stats-preview {
  padding: 25px;
}
.quick-stats-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.quick-stats-header h3 {
  font-family: var(--font-rounded);
  font-weight: 700;
  font-size: 1.2rem;
}
/* --- 2. Practice Area Styling --- */
.practice-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  padding: 12px 20px;
  margin-bottom: 15px;
}
.control-divider {
  width: 1px;
  height: 24px;
  background: var(--border-color);
  align-self: center;
}
.control-group {
  display: flex;
  align-items: center;
  gap: 5px;
}
.control-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  font-weight: 600;
  margin-right: 5px;
  letter-spacing: 0.05em;
}
.control-option {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-family: var(--font-rounded);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.2s;
}
.control-option:hover {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.04);
}
.control-option.active {
  color: var(--primary-color);
  background: var(--word-active-bg);
}
/* Custom text panel */
.custom-text-panel {
  padding: 20px;
  margin-bottom: 20px;
}
.custom-text-panel textarea {
  width: 100%;
  height: 120px;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-main);
  font-family: var(--font-sans);
  padding: 12px;
  outline: none;
  resize: vertical;
  font-size: 1rem;
}
.custom-text-panel textarea:focus {
  border-color: var(--primary-color);
}
.mt-10 { margin-top: 10px; }
/* Practice Status Bar */
.practice-status-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 10px 10px;
}
.practice-mode-tag {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary-color);
}
.pause-status-lbl {
  font-size: 0.85rem;
  color: #ef4444;
  font-weight: bold;
  animation: flash 1s infinite alternate;
}
@keyframes flash {
  0% { opacity: 0.2; }
  100% { opacity: 1; }
}
/* Countdown Overlay */
.countdown-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
  animation: popScale 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.countdown-number {
  font-family: var(--font-rounded);
  font-size: 6rem;
  font-weight: 800;
  color: var(--primary-color);
  text-shadow: 0 0 20px var(--primary-glow);
  line-height: 1;
}
.countdown-sub {
  font-size: 1.1rem;
  color: var(--text-muted);
}
@keyframes popScale {
  0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}
/* Typing Card */
.typing-container-card {
  padding: 25px;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
}
.metrics-row {
  display: flex;
  align-items: center;
  gap: 40px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 15px;
  margin-bottom: 20px;
  position: relative;
}
.metric-box {
  display: flex;
  align-items: baseline;
  gap: 5px;
}
.metric-val {
  font-family: var(--font-rounded);
  font-weight: 800;
  font-size: 2.2rem;
  line-height: 1;
}
.metric-lbl {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  font-weight: 600;
}
.progress-bar-container {
  flex-grow: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}
.progress-bar-fill {
  height: 100%;
  width: 0;
  background: var(--accent-gradient);
  border-radius: 3px;
  transition: width 0.1s linear;
}
/* Typing text area */
.typing-text-wrapper {
  position: relative;
  outline: none;
  cursor: text;
  min-height: 140px;
  max-height: 240px;
  overflow-y: hidden;
  margin-bottom: 20px;
}
#typing-hidden-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  left: 0;
  top: 0;
  width: 1px;
  height: 1px;
}
.typing-words {
  font-family: var(--font-mono);
  font-size: 1.5rem; /* Adjustable by settings */
  line-height: 1.6;
  color: var(--text-muted);
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.6em;
  row-gap: 0.4em;
  user-select: none;
  transition: transform 0.2s var(--transition-bezier);
}
.words-loader {
  width: 100%;
  text-align: center;
  color: var(--text-muted);
  font-style: italic;
  padding: 40px 0;
}
.typing-word {
  position: relative;
  white-space: nowrap;
}
.typing-char {
  position: relative;
}
.typing-char.correct {
  color: var(--text-correct);
  transition: color 0.05s ease;
}
.typing-char.incorrect {
  color: var(--text-incorrect);
  transition: color 0.05s ease;
}
.typing-char.extra {
  color: #ef4444;
  opacity: 0.7;
}
/* Pulsing Caret Guide */
.typing-caret {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 1.2em;
  background-color: var(--caret-color);
  border-radius: 1px;
  z-index: 2;
  transition: top 0.1s, left 0.1s;
}
.typing-caret.pulse {
  animation: typingCaretPulse 1s infinite alternate;
}
@keyframes typingCaretPulse {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.typing-card-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  border-top: 1px solid var(--border-color);
  padding-top: 15px;
}
.btn-icon-text {
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-muted);
  border: 1px solid var(--border-color);
  font-size: 0.85rem;
  padding: 8px 16px;
  border-radius: 6px;
}
.btn-icon-text:hover {
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-main);
  border-color: var(--border-hover);
}
/* --- Virtual Keyboard Layouts --- */
.keyboard-container {
  padding: 20px;
  margin-bottom: 20px;
}
.keyboard-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
}
.small-select {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  outline: none;
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 4px;
}
.keyboard-status {
  display: flex;
  gap: 15px;
}
.k-status-indicator {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-muted);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 2px 6px;
  background: rgba(0, 0, 0, 0.1);
}
.k-status-indicator.active {
  color: var(--primary-color);
  border-color: var(--primary-color);
  background: var(--word-active-bg);
}
.virtual-keyboard {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 6px;
  max-width: 900px;
  margin: 0 auto;
}
.keyboard-row {
  display: flex;
  gap: 6px;
  justify-content: center;
}
.key {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  color: var(--text-muted);
  border-radius: 6px;
  height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-rounded);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.12s;
  user-select: none;
}
/* Key size variants */
.key.backspace { flex-grow: 1.5; min-width: 65px; }
.key.tab { flex-grow: 1.3; min-width: 58px; }
.key.caps { flex-grow: 1.6; min-width: 70px; }
.key.enter { flex-grow: 1.6; min-width: 70px; }
.key.shift-left { flex-grow: 2.1; min-width: 90px; }
.key.shift-right { flex-grow: 2.1; min-width: 90px; }
.key.space { width: 330px; }
.key.ctrl { flex-grow: 1.2; }
/* Dynamic Key Highlight states */
.key.k-active {
  background: rgba(255, 255, 255, 0.12) !important;
  color: var(--text-main) !important;
  transform: scale(0.95);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}
.key.k-current {
  border-color: var(--primary-color) !important;
  color: var(--primary-color) !important;
  box-shadow: 0 0 10px var(--primary-glow);
  background: var(--word-active-bg);
}
.key.k-next {
  border-color: var(--text-main) !important;
  color: var(--text-main) !important;
  opacity: 0.85;
}
.key.k-error {
  border-color: var(--text-incorrect) !important;
  background: rgba(239, 68, 68, 0.1) !important;
  color: var(--text-incorrect) !important;
  animation: shake 0.15s;
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}
/* --- 3. Result Screen Styling --- */
.result-container-card {
  padding: 30px;
  animation: fadeIn 0.4s var(--transition-bezier);
}
.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 15px;
  margin-bottom: 25px;
}
.result-header h2 {
  font-family: var(--font-rounded);
  font-weight: 800;
  font-size: 2rem;
}
.result-grade {
  font-family: var(--font-rounded);
  font-size: 2.2rem;
  font-weight: 800;
  background: var(--accent-gradient);
  color: #fff;
  border-radius: 12px;
  padding: 4px 20px;
  box-shadow: 0 4px 15px var(--primary-glow);
}
.result-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 30px;
}
.result-stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}
.res-stat-box {
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.res-stat-box.highlight {
  border-color: var(--primary-color);
  background: var(--word-active-bg);
}
.res-stat-box .res-lbl {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  font-weight: 600;
}
.res-stat-box .res-lbl-sub {
  font-size: 0.7rem;
  color: var(--text-muted);
}
.res-stat-box .res-val {
  font-family: var(--font-rounded);
  font-weight: 800;
  font-size: 1.8rem;
  margin-top: 5px;
}
.res-stat-box .res-val.text-sm {
  font-size: 1.35rem;
}
/* Result Graph styling */
.result-graph-box {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.graph-title {
  font-family: var(--font-rounded);
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 15px;
}
.canvas-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  flex-grow: 1;
}
canvas {
  width: 100% !important;
  height: 100% !important;
  display: block;
}
.graph-legend {
  display: flex;
  gap: 20px;
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 10px;
}
.graph-legend.center {
  justify-content: center;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
}
.legend-color {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
}
.legend-color.wpm-color { background: var(--primary-color); }
.legend-color.error-color { background: var(--text-incorrect); }
.legend-color.acc-color { background: #3b82f6; }
/* Leaderboard Save Panel */
.leaderboard-entry-card {
  padding: 15px 20px;
}
.leaderboard-entry-card h4 {
  font-family: var(--font-rounded);
  font-weight: 700;
}
.result-actions {
  display: flex;
  gap: 15px;
  border-top: 1px solid var(--border-color);
  padding-top: 25px;
}
/* --- 4. Leaderboard View Styling --- */
.view-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.view-title {
  font-family: var(--font-rounded);
  font-weight: 800;
  font-size: 1.8rem;
}
.leaderboard-card {
  padding: 20px;
}
.table-container {
  overflow-x: auto;
  border-radius: 8px;
}
.table-container.max-height-300 {
  max-height: 300px;
  overflow-y: auto;
}
.leaderboard-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}
.leaderboard-table th, .leaderboard-table td {
  padding: 12px 15px;
  border-bottom: 1px solid var(--border-color);
}
.leaderboard-table th {
  font-family: var(--font-rounded);
  font-weight: 700;
  color: var(--text-muted);
  font-size: 0.9rem;
  text-transform: uppercase;
}
.leaderboard-table tr:last-child td {
  border-bottom: none;
}
.leaderboard-table tr:hover td {
  background: rgba(255, 255, 255, 0.02);
}
.leaderboard-table tbody td {
  font-size: 0.95rem;
}
.compact-table th, .compact-table td {
  padding: 8px 12px;
}
/* --- 5. Analytics View Styling --- */
.analytics-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
}
.stat-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.stat-card .lbl {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  font-weight: 600;
}
.stat-card .val {
  font-family: var(--font-rounded);
  font-weight: 800;
  font-size: 2rem;
  margin-top: 5px;
}
.analytics-charts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.chart-container-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.chart-header h3 {
  font-family: var(--font-rounded);
  font-weight: 700;
  font-size: 1.1rem;
}
.chart-filters {
  display: flex;
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 2px;
}
.chart-filter-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
  transition: all 0.2s;
}
.chart-filter-btn:hover {
  color: var(--text-main);
}
.chart-filter-btn.active {
  background: var(--primary-color);
  color: #fff;
}
.practice-history-card {
  padding: 20px;
}
.practice-history-card h3 {
  font-family: var(--font-rounded);
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 15px;
}
/* --- 6. User Profile View Styling --- */
.profile-layout {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 25px;
}
.profile-card-left {
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar-selection-wrapper {
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-avatar-img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--primary-color);
  box-shadow: 0 0 15px var(--primary-glow);
  margin-bottom: 15px;
  transition: transform 0.3s;
}
.profile-avatar-img:hover {
  transform: rotate(5deg) scale(1.05);
}
.avatar-options {
  display: flex;
  gap: 6px;
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 4px 8px;
}
.avatar-select-btn {
  background: transparent;
  border: none;
  font-size: 1.15rem;
  cursor: pointer;
  transition: transform 0.2s;
  padding: 2px;
}
.avatar-select-btn:hover {
  transform: scale(1.3);
}
.profile-details-editing {
  width: 100%;
}
.profile-details-editing input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px dashed var(--border-color);
  border-radius: 0;
  padding: 5px 0;
}
.profile-details-editing input:focus {
  border-bottom-color: var(--primary-color);
}
.profile-join-date {
  font-size: 0.8rem;
}
.streak-badge-container {
  width: 100%;
}
.streak-large-box {
  padding: 20px;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.streak-fire-icon {
  font-size: 2.8rem;
  animation: flicker 1.5s infinite alternate;
}
@keyframes flicker {
  0% { transform: scale(0.95); opacity: 0.8; }
  100% { transform: scale(1.05); opacity: 1; filter: drop-shadow(0 0 6px rgba(239, 68, 68, 0.4)); }
}
.streak-number-lbl {
  font-family: var(--font-rounded);
  font-weight: 800;
  font-size: 1.8rem;
}
.streak-lbl {
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 600;
}
.profile-card-right {
  padding: 30px;
}
.profile-card-right h3 {
  font-family: var(--font-rounded);
  font-weight: 700;
  font-size: 1.35rem;
  margin-bottom: 5px;
}
.badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 15px;
}
.badge-item {
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 15px;
  transition: all 0.3s;
}
.badge-item.locked {
  opacity: 0.35;
  filter: grayscale(1);
}
.badge-item.unlocked {
  border-color: var(--primary-color);
  background: var(--word-active-bg);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.1);
  animation: badgeUnlockAnim 0.5s var(--transition-bezier);
}
@keyframes badgeUnlockAnim {
  0% { transform: scale(0.9); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}
.badge-icon {
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
}
.badge-item.unlocked .badge-icon {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--primary-color);
  text-shadow: 0 0 5px var(--primary-glow);
}
.badge-info h4 {
  font-family: var(--font-rounded);
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 2px;
}
.badge-info p {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.3;
}
.badge-item.unlocked .badge-info p {
  color: var(--text-main);
  opacity: 0.8;
}
/* --- Settings Modal Layout --- */
.settings-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(8px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeInModal 0.25s ease-out;
}
.settings-modal {
  width: 90%;
  max-width: 600px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
  animation: scaleInModal 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.modal-small {
  max-width: 400px;
}
@keyframes fadeInModal {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes scaleInModal {
  from { transform: scale(0.95); }
  to { transform: scale(1); }
}
.settings-modal-header {
  padding: 20px 25px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.settings-modal-header h3 {
  font-family: var(--font-rounded);
  font-weight: 700;
  font-size: 1.25rem;
}
.close-modal-btn {
  color: var(--text-muted);
}
.close-modal-btn:hover {
  color: var(--text-main);
}
.settings-modal-body {
  padding: 20px 25px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.setting-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.03);
  padding-bottom: 15px;
}
.setting-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.setting-desc h4 {
  font-family: var(--font-rounded);
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 4px;
}
.setting-desc p {
  font-size: 0.8rem;
  color: var(--text-muted);
  line-height: 1.4;
  max-width: 320px;
}
.settings-modal-footer {
  padding: 15px 25px;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-end;
}
/* --- Footer Styling --- */
.main-footer {
  border-top: 1px solid var(--border-color);
  padding: 20px 0;
  margin-top: 25px;
}
.main-footer p {
  font-size: 0.85rem;
  color: var(--text-muted);
}
/* --- Helper layout classes --- */
.text-xs { font-size: 0.75rem; }
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
/* --- Responsive Adjustments --- */
@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .hero-visual {
    height: 220px;
  }
  .profile-layout {
    grid-template-columns: 1fr;
  }
  .analytics-charts-grid {
    grid-template-columns: 1fr;
  }
  .result-body {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .app-wrapper {
    gap: 15px;
    padding: 10px 0;
  }
  .main-header {
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }
  .header-left {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  .nav-links {
    width: 100%;
    justify-content: space-around;
  }
  .header-right {
    width: 100%;
    justify-content: center;
    gap: 12px;
  }
  .hero-title {
    font-size: 2.2rem;
  }
  .hero-buttons {
    flex-direction: column;
  }
  .practice-controls {
    flex-direction: column;
    align-items: stretch;
  }
  .control-divider {
    display: none;
  }
  .control-group {
    justify-content: space-between;
  }
  .key {
    height: 38px;
    min-width: 32px;
    font-size: 0.8rem;
  }
  .key.space {
    width: 150px;
  }
  .key.shift-left, .key.shift-right {
    min-width: 50px;
  }
  .key.backspace, .key.caps, .key.enter, .key.tab {
    min-width: 45px;
  }
}
@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }
  .typing-words {
    font-size: 1.25rem;
  }
  .metrics-row {
    flex-wrap: wrap;
    gap: 15px;
  }
  .result-stats-grid {
    grid-template-columns: 1fr;
  }
  .badge-item {
    flex-direction: column;
    text-align: center;
  }
}
