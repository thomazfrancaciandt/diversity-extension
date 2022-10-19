chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  console.log(details)
  if (details.frameId > 0) {
    chrome.scripting.executeScript({
      target: {tabId: details.tabId, allFrames: false},
      files: ['foreground.js'],
    });
  }
});
