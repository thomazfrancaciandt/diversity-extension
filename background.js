// chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
//   console.log(details)
//   if (details.frameId > 0) {
//     chrome.scripting.executeScript({
//       target: {tabId: details.tabId, allFrames: false},
//       files: ['foreground.js'],
//     });
//   }
// });

const url = "*://chat.google.com/u/0/_/DynamiteWebUi/data/batchexecute*";

chrome.webRequest.onBeforeRequest.addListener((details) =>{
    console.log(details);
  },
  {urls: [url]}
);
