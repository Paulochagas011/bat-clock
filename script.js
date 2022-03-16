let madrugada = 0;
let manha = 7;
let lunchTime = 12;
let tarde = 13;
let noite = 18; 

setInterval(mostraHora,1000);

function mostraHora(){

    var clock = document.getElementById('clock');

    let d = new Date();
    let hora = d.getHours();
    let minuto = d.getMinutes();
    let segundo = d.getSeconds();
    
    let horaAtual = hora + ':' + minuto + ':' + segundo;

    clock.innerText = horaAtual;  
};

function batsignalOn(){
    imagem = document.getElementById('imagem').src= 'https://cdn.ome.lt/cm0XROMGnEo_7eGqtGh94-yVqM0=/987x0/smart/uploads/conteudo/fotos/Batsinal-1_ESaMYXF.png';
    
};


