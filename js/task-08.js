
// preventDefault()
let getEl = selector => document.querySelector(selector)
const login = document.querySelector('.login-form')
const submitt = document.querySelector('button')
class User {
    constructor(email, password){
        this.email=email;
        this.password=password;
    }
    }
const newUser=[]
login.addEventListener("submit", send)

function send (event){
    event.preventDefault();
    let email = getEl('.email').value
    let password = getEl('.password').value
    if(email.length===0 ||password.length===0){
        alert('Must be required')
        return
    }
     let createdUser = new User(email,password)
        newUser.push(createdUser)
        console.log(newUser)
        getEl('.login-form').reset()

}

