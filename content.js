chrome.runtime.onMessage.addListener((payload, sender, resp) => {

  const {explicacao, sugestoes, t } = payload;
  
  alert(`"${t}"
Algumas palavras, frases e expressões carregam uma conotação discriminatória. A frase ou expressão utilizada no seu texto pode ser substituida e vai ajudar a moldar um vocabulario mais inclusivo, que tal nos ajudar a mudar esse cenario e utilizar as expressões:
${sugestoes} no lugar?`)

});
