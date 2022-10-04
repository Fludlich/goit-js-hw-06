
function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor())


const getEl = selector=>document.querySelector(selector)
const body = getEl('body')


const span = getEl('span')


const button3 = getEl('.change-color')


button3.addEventListener('click', onChange)

function onChange (){
  // console.log( event)
  body.style.backgroundColor=`${getRandomHexColor()}`
  span.textContent=`${getRandomHexColor()}`
}
