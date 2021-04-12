var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', saiu)

function clicar(){
    a.innerHTML = `Ui clicô`
    a.style.backgroundColor = 'pink'
}
function entrar(){
    a.innerHTML = 'Ui entrô'
    a.style.backgroundColor =  'darkred'
}
function saiu(){
    a.innerHTML = 'Num sai não'
    a.style.backgroundColor = 'lightblue'
}