chrome.runtime.onMessage.addListener((payload, sender, resp) => {

  console.log(payload);
  
  alert(`Explicaco: ${payload.explicacao}\nSugestoes: ${payload.sugestoes}`)

  console.log(sender);
});
