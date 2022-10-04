const input = document.querySelector('#validation-input')

input.addEventListener('blur', inputLength)
function inputLength (){
    if(input.value.length>input.dataset.length || input.value.length===0){
        input.classList.remove('valid')
        input.classList.add('invalid')
    }  else{
            input.classList.remove('invalid')
            input.classList.add('valid')
        }

}
