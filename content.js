function applyDarkMode() {
  // Inject a style tag if it doesn't already exist
  if (!document.getElementById("dark-mode-style")) {
    const style = document.createElement("style");
    style.id = "dark-mode-style";
    style.innerHTML = `
      /* Invert everything and shift hue to reduce weird color tints */
      html {
        filter: invert(1) hue-rotate(180deg) !important;
      }
      /* Re-invert images and videos so they appear normal */
      img, video, picture, iframe, mmain {
        filter: invert(1) hue-rotate(180deg) !important;
      }
    `;
    document.head.appendChild(style);
  }
}

function removeDarkMode() {
  const existingStyle = document.getElementById("dark-mode-style");
  if (existingStyle) {
    existingStyle.remove();
  }
}

// 1. On page load, check storage and apply dark mode if enabled
chrome.storage.local.get(["darkModeEnabled"], (result) => {
  if (result.darkModeEnabled) {
    applyDarkMode();
  }
});

// 2. Listen for changes to darkModeEnabled and update the page in real time
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.darkModeEnabled) {
    if (changes.darkModeEnabled.newValue) {
      applyDarkMode();
    } else {
      removeDarkMode();
    }
  }
});
