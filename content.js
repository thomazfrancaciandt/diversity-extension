
chrome.runtime.onMessage.addListener((payload, sender, resp) => {

  //.
  const chatArea = document.querySelector(".AO");

  chatArea.childNodes.forEach((node) => {
    if (node.classList.contains("DiversityExtensionPopUp")) {
      chatArea.removeChild(node);
    }
  });

  const popUp = createPopUp(payload);

  chatArea.appendChild(popUp);

  animatePopUp(popUp);

  clearAnimatePopUp(popUp);

});

const createPopUp = ({ explanation, suggestion, trm }) => {
  const popUp = document.createElement("div");

  popUp.classList.add("DiversityExtensionPopUp");
  popUp.style.background = "#ff9966";
  popUp.style.fontSize = "17px";
  popUp.style.display = "block";
  popUp.style.padding = "15px";
  popUp.style.paddingTop = "3px";
  popUp.style.boxSizing = "border-box";
  popUp.style.wordBreak = "break-word";
  popUp.style.opacity = ".8";
  popUp.style.width = "350px";
  popUp.style.height = "fit-content";
  popUp.style.position = "absolute";
  popUp.style.bottom = "150px";
  popUp.innerHTML = `<h2>\u26A0\uFE0F  ${toTitleCase(trm)}</h2>
  <p>${explanation} Que tal usar <strong>${toTitleCase(suggestion)}</strong> no lugar?</p>`;
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

const clearAnimatePopUp = (popUp) => {
  setTimeout(() => {
    let id = null;
    let pos = 200;
    clearInterval(id);
    id = setInterval(frame, 3);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
        popUp.style.display = "none";
      } else {
        pos--;
        popUp.style.right = pos + 'px';
      }
    }
  }, 20_000);
}

const toTitleCase = str => str.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
