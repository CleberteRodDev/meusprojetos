var nome = window.prompt("Qual o seu nome?")
var caixa = document.getElementById('nome')
caixa.innerHTML = `Olá, ${nome}. Seu nome tem ${nome.length} letras! E fica assim em maúsculo ${nome.toUpperCase()}`