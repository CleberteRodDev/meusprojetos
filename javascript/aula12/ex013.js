var agora = new Date()
var diaDaSem = agora.getDay()

//console.log(diaDaSem)

switch(diaDaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sábado')
        break
    case 6:
        console.log('Domingo')
        break
    default:
        console.log('[ERRO} Dia inválido')
        break
}