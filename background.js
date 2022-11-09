const url = "*://chat.google.com/u/0/_/DynamiteWebUi/data/batchexecute*";
const termsPath = chrome.runtime.getURL("./terms.json");
const typingCode = "xok6wd";

const getTerms = () => {
  return fetch(termsPath)
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

chrome.webRequest.onBeforeRequest.addListener((details) =>{
  const rawInput = details.requestBody.formData["f.req"][0];
  
  if (rawInput.includes(typingCode)) {
    const [[[_, userMessage]]] = JSON.parse(rawInput);
    const [ message ] = JSON.parse(userMessage);
    
    getTerms()
    .then((data) => console.log(data));

    console.log(message);

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message});
    });
  }
  
  },
  {urls: [url]},
  ['requestBody']
);
