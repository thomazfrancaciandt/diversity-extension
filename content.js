chrome.runtime.onMessage.addListener((msg, sender, resp) => {
  console.log(msg);

  if (msg.message.includes("termo racista")) {
    confirm(`${msg.message} eh uma palavra indevida.`);
  }
});
