console.log('background running, click "service worker" to see this log');

const activeUrl = /https:\/\/mail.google.com\/mail\/u\/*\d{1}\/(|\?zx=[a-z]{12})#chat\/(dm|space)\//i;


chrome.tabs.onUpdated.addListener((tabId, _tab, tabInfo) => {
  console.log(tabInfo);
  if (tabInfo.status === "complete" && tabInfo.active && tabInfo.url !== undefined) {
    if (activeUrl.test(tabInfo.url)) {
      chrome.scripting.executeScript({
        target: {tabId: tabId, allFrames: false},
        files: ['foreground.js'],
      });
    }
  }
});