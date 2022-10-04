const input = document.querySelector('#name-input')
console.log(input.value)
const span = document.querySelector('#name-output')
console.log(span.textContent)
input.addEventListener('input', onInputChange)
function onInputChange (event){
    console.log(event.currentTarget.value)
    span.textContent=event.currentTarget.value
    if(event.currentTarget.value.length===0){
       console.log(event.currentTarget.value)
        span.textContent='Anonymous'
    }
}
