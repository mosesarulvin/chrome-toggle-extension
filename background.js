chrome.action.onClicked.addListener((tab) => {
  // Get current dark-mode state from storage
  chrome.storage.local.get(["darkModeEnabled"], (result) => {
    const isDark = result.darkModeEnabled || false;
    const newDarkValue = !isDark;

    // Save the toggled state
    chrome.storage.local.set({ darkModeEnabled: newDarkValue });

    // Optionally, update the toolbar icon
    if (newDarkValue) {
      chrome.action.setIcon({
        path: {
          "16": "icons/dark16.png",
          "48": "icons/dark48.png",
          "128": "icons/dark128.png"
        }
      });
    } else {
      chrome.action.setIcon({
        path: {
          "16": "icons/light16.png",
          "48": "icons/light48.png",
          "128": "icons/light128.png"
        }
      });
    }
  });
});
