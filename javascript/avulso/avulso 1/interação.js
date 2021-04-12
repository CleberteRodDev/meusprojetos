// var b = document.getElementsByClassName('butao')
// b.addEventListener('click', somar)
// b.addEventListener('click', Multiplicar)
// b.addEventListener('click', Subtrair)
// b.addEventListener('click', Dividir)
function somar(){
    // b.style.backgroundColor = 'pink'
    var tn1 = window.document.getElementById('txtn1')
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}

function Multiplicar(){
    b.style.backgroundColor = 'pink'
    var tm1 = window.document.getElementById('txtm1')
    var tm2 = window.document.querySelector('input#txtm2')
    var res = window.document.getElementById('res2')
    var m1 = Number(tm1.value)
    var m2 = Number(tm2.value)
    var m = m1 * m2
    res.innerHTML = `A mulplicação de ${m1} e ${m2} é igual a <strong>${m}</strong>`
}

function Subtrair(){
    b.style.backgroundColor = 'pink'
    var ts1 = window.document.getElementById('txts1')
    var ts2 = window.document.querySelector('input#txts2')
    var res = window.document.getElementById('res3')
    var s1 = Number(ts1.value)
    var s2 = Number(ts2.value)
    var sub = s1 - s2
    res.innerHTML = `A subtração de ${s1} e ${s2} é igual a ${sub}`
}

function Dividir(){
    b.style.backgroundColor = 'pink'
    var td1 = window.document.getElementById('txtd1')
    var td2 = window.document.querySelector('input#txtd2')
    var res = window.document.getElementById('res4')
    var d1 = Number(td1.value)
    var d2 = Number(td2.value)
    var div = d1 / d2
    res.innerHTML = `A divisão de ${d1} por ${d2} é igual a ${div}`
}