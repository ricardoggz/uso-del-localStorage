//Uso del localStorage
//localStorage solo almacena cadenasdetextoo strings
//Mandar información al localStorage
localStorage.setItem('name','Luis Axel Reyes')

//Leer información del localStorage
const userName = document.getElementById('name')
userName.innerText=localStorage.getItem('name')

//Eliminar información del localStorage
const deleteButton = document.getElementById('delete')
deleteButton.addEventListener('click',function(){
    localStorage.removeItem('name')
    userName.innerText=''
})

//Mandar objetos o arreglos al localStorage
let names = ['Ricardo', 'Luis']
localStorage.setItem('names', JSON.stringify(names))
//obetener un objeto del localStorage
console.log(JSON.parse(localStorage.getItem('names')))