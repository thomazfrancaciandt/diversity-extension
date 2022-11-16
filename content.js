chrome.runtime.onMessage.addListener((payload, sender, resp) => {

  const {explanation, suggestion, trm } = payload;
  
  alert(`"${trm}"
Algumas palavras, frases e expressões carregam uma conotação discriminatória. A frase ou expressão utilizada no seu texto pode ser substituida e vai ajudar a moldar um vocabulario mais inclusivo, que tal nos ajudar a mudar esse cenario e utilizar as expressões:
${suggestion} no lugar?`)

});
