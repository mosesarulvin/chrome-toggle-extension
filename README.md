I created this extension in March 2025.

Dark Mode Toggle (Manifest V3)

A lightweight, high-performance Chrome Extension that enables a "Universal Dark Mode" on any website with a single click. Unlike simple style-injectors, this extension uses CSS Filter Inversion and Storage Persistence to ensure a seamless browsing experience across tabs and sessions.

✨ Key Features
One-Click Toggle: Instantly switch between light and dark themes via the extension toolbar icon.

Persistent State: Uses chrome.storage.local to remember your preference. If you enable dark mode on one site, it remains active when you restart Chrome or open new tabs.

Real-Time Sync: Utilises chrome.storage.onChanged listeners to update all open tabs simultaneously when the toggle is clicked.

Smart Inversion: Applies a 180deg hue-rotate shift alongside inversion to prevent "neon" color tints, while re-inverting images and videos to keep media looking natural.

Optimized Performance: Injects styles at document_start to minimize "flash of unlit content" (FOUNC).

🛠️ Technical Architecture
1. manifest.json
Configured with Manifest V3. It requests activeTab for the current page interaction and storage for state persistence. The content_scripts are set to run on <all_urls> to ensure universal compatibility.

2. background.js (Service Worker)
Acts as the central controller. It listens for the action.onClicked event, toggles the boolean state in storage, and dynamically updates the extension's toolbar icon to provide visual feedback (Light vs. Dark icon).

3. content.js (DOM Controller)
The bridge between the extension and the webpage. It:

Initialises the dark mode state immediately upon script load.

Injects a scoped <style> tag with a specific ID (dark-mode-style) to allow for easy removal without affecting the site's original CSS.

Monitors storage changes to apply or remove themes without requiring a page reload.

🚀 Installation (Development Mode)
As the project is currently in development, follow these steps to load it locally:

Clone the Repo:

Bash
git clone https://github.com/mosesarulvin/dark-mode-toggle.git
Open Chrome Extensions:
Navigate to chrome://extensions/ in your browser.

Enable Developer Mode:
Toggle the switch in the top-right corner to ON.

Load Unpacked:
Click the Load unpacked button and select the folder containing these files.

📂 File Structure
Plaintext
.
├── manifest.json      # Extension metadata and permissions
├── background.js      # Service worker for click events & storage updates
├── content.js         # DOM manipulation and CSS injection
└── icons/             # Assets for light and dark toolbar states
    ├── light128.png
    ├── dark128.png
    ├── light48.png
    ├── dark48.png
    ├── light16.png
    └── dark16.png
    
👨‍💻 Author: Moses Arulvin

Profile: MERN Stack Developer

Location: India

Specialities: AI Workflow Automation, React Architecture, Chrome Extension Development.

📝 Roadmap & Future Improvements

Exclude List: Add a settings page to disable dark mode on specific domains.

Scheduling: Automatically toggle dark mode based on the time of day.

Intensity Slider: Allows users to adjust the inversion's contrast and brightness.
