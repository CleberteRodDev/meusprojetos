var agora = new Date()
var hora = agora.getHours
console.log(`Agora são ${agora} hora.`)
if(hora > 5 && hora < 12){
    console.log('Bom dia')
}else if (hora >= 13 && hora <= 17){
    console.log('Boa tarde')
}else if (hora >= 18 && hora <= 23){
    console.log('Boa noite')
}else{
    console.log('Boa madrugada')
}