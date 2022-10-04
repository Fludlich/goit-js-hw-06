
const input = document.querySelector('#font-size-control')
const span =document.querySelector('#text')
input.addEventListener('input', changeSize)
function changeSize (event){
 const arara= event.target.value
  span.style.fontSize=`${arara}px`
}
