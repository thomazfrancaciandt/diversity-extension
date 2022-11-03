const url = "*://chat.google.com/u/0/_/DynamiteWebUi/data/batchexecute*";

chrome.webRequest.onBeforeRequest.addListener((details) =>{
  console.log(details.requestBody.formData);
  },
  {urls: [url]},
  ['requestBody']
);
