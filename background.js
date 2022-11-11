const url = "*://chat.google.com/u/0/_/DynamiteWebUi/data/batchexecute*";
const termsPath = chrome.runtime.getURL("./terms.json");
const typingCode = "xok6wd";

chrome.runtime.onInstalled.addListener(() => {
  fetch(termsPath)
    .then(async(response)=> {
      chrome.storage.local.set({
        terms: await response.json()
      })
    })
    .catch((err) => console.log(err));
});

chrome.webRequest.onBeforeRequest.addListener((details) =>{
  const rawInput = details.requestBody.formData["f.req"][0];
  
  if (rawInput.includes(typingCode)) {
    const [[[_, userMessage]]] = JSON.parse(rawInput);
    const [ message ] = JSON.parse(userMessage);
    
    
    chrome.storage.local.get("terms", ({ terms }) => {
      console.log(terms);
    });
    
    console.log(message);

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message});
    });
  }
  
  },
  {urls: [url]},
  ['requestBody']
);
