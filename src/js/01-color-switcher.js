const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyElement = document.querySelector('body');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

let timerId = null;
stopBtn.setAttribute('disabled', true);

function onStartBtnClick() {
  timerId = setInterval(() => {
    bodyElement.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
}

function onStopBtnClick() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
