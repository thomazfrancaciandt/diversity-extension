const url = "*://chat.google.com/u/0/_/DynamiteWebUi/data/batchexecute*";
const typingCode = "xok6wd";

chrome.webRequest.onBeforeRequest.addListener((details) =>{
  const rawInput = details.requestBody.formData["f.req"][0];

  if (rawInput.includes(typingCode)) {
    const [[[_, userMessage]]] = JSON.parse(rawInput);
    const [ message ] = JSON.parse(userMessage);

    console.log(message);
  }
  
  },
  {urls: [url]},
  ['requestBody']
);
