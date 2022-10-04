const numberOfLi = document.querySelectorAll('.item')
console.log('Number of categories:',numberOfLi.length)
let lili =[]
function blabla(numberOfLi) {
        for (const la of numberOfLi) {
            lili.push(la)
            // console.log(la)
            
            const ara = la.querySelector('ul')
            const uru = ara.children
            const rara = la.querySelector('h2')
            console.log('Category:',rara.textContent)
            console.log('Elements:',uru.length)
        }
 return
    
}

console.log(blabla(numberOfLi))
