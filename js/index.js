const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let i = setInterval(blurimg, 30);

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function blurimg() {        // TT/IG: oyy_gus
  load++                  // Don't forget to full senyum:)
  if (load > 99) {
    clearInterval(i)
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 2, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`
}