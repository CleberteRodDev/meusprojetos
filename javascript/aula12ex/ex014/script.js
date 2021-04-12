function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min} horas.`
    if(hora >= 0 && hora < 12){
        //bomdia
        img.src = "foto-manha.png"
        document.body.style.background = "#e2cd9f";
    }else if(hora >= 12 && hora < 18){
        //boatarde
        img.src = "foto-tarde.png"
        document.body.style.background = "#b9846f"
    }else{
        //boanoite
        img.src = "noite-foto.png"
        document.body.style.background = "#515154"
    }
}
