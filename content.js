
chrome.runtime.onMessage.addListener((payload, sender, resp) => {

  const chatArea = document.querySelector(".AO");

  const popUp = createPopUp(payload);

  chatArea.appendChild(popUp);

  animatePopUp(popUp);

});

const createPopUp = ({ explanation, suggestion, trm }) => {
  const popUp = document.createElement("div");

  popUp.style.background = "#ff9966";
  popUp.style.padding = "15px";
  popUp.style.paddingTop = "3px";
  popUp.style.boxSizing = "border-box";
  popUp.style.opacity = ".8";
  popUp.style.overflow = "auto";
  popUp.style.width = "350px";
  popUp.style.height = "150px";
  popUp.style.position = "absolute";
  popUp.style.bottom = "150px";
  popUp.innerHTML = `<h2>\u26A0\uFE0F  ${toTitleCase(trm)}</h2>
  <p>Algumas palavras, frases e expressões carregam uma conotação discriminatória. A frase ou expressão utilizada no seu texto pode ser substituida e vai ajudar a moldar um vocabulário mais inclusivo, que tal nos ajudar a mudar esse cenário e utilizar as expressões como:
  <strong>${toTitleCase(suggestion)}</strong> no lugar?</p>`;
  return popUp;
}

const animatePopUp = (popUp) => {
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 3);
  function frame() {
    if (pos == 200) {
      clearInterval(id);
    } else {
      pos++;
      popUp.style.right = pos + 'px';
    }
  }
}

const toTitleCase = str => str.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
