setInterval(mostraHora, 1000);
const intervalo = setInterval(atualizaImagem, 1000);

function mostraHora() {
    var clock = document.getElementById("clock");

    let d = new Date();
    let hora = d.getHours();
    let minuto = d.getMinutes();
    let segundo = d.getSeconds();

    let horaAtual = hora + ":" + minuto + ":" + segundo;

    clock.innerText = horaAtual;
}

function atualizaImagem() {

    let imagem;
    let legenda;

    let d = new Date();
    let hora = d.getHours();

    if (hora < 7) {
        let imagem = (document.getElementById("imagem").src =
            "https://techbreak.ig.com.br/wp-content/uploads/2020/04/2.jpg");
        let legenda = (document.getElementById("legenda").innerHTML =
            "Gotham está segura");
    } else if (hora < 9) {
        let imagem = (document.getElementById("imagem").src =
            "https://pbs.twimg.com/media/D1ZnZJSUYAES9i8?format=jpg&name=4096x4096");
        let legenda = (document.getElementById("legenda").innerHTML =
            "Batman está descansando");
    } else if (hora < 12) {
        let imagem = (document.getElementById("imagem").src =
            "https://manofmany.com/wp-content/uploads/2021/04/ben-affleck-workout-and-diet-4.jpg");
        let legenda = (document.getElementById("legenda").innerHTML =
            "Batman está Treinando");
    } else if (hora < 13) {
        let imagem = (document.getElementById("imagem").src =
            "https://pbs.twimg.com/media/DSs9KOiX4AAuNzJ?format=jpg&name=medium");
        let legenda = (document.getElementById("legenda").innerHTML =
            "Batman está Comendo");
    } else if (hora < 18) {
        let imagem = (document.getElementById("imagem").src =
            "https://s2.glbimg.com/KxdqmvWJfJiiRYdO3ju_0xKnHPk=/620x413/smart/e.glbimg.com/og/ed/f/original/2019/03/29/bruce-wayne-batman-hush.jpg");
        let legenda = (document.getElementById("legenda").innerHTML =
            "Batman está agindo como Bruce Wayne");
    }
    else if (hora < 20) {
        let imagem = (document.getElementById("imagem").src =
            "https://i.redd.it/h7nyyeluunr31.jpg");
        let legenda = (document.getElementById("legenda").innerHTML =
            "Investigando algum caso");
    }
    else if (hora == 0, 1, 2, 3, 4, 5, 6) {
        let imagem = (document.getElementById("imagem").src =
            "https://pbs.twimg.com/media/E9buzAYXsAQ4Tkh?format=jpg&name=large");
        let legenda = (document.getElementById("legenda").innerHTML =
            "Batman está em patrulha para proteger a cidade");
    }
}

document.getElementById('btn').addEventListener('click', function batsignalOn() {

    let imagem = (document.getElementById("imagem").src =
        "https://www.catalannews.com/cache/com_zoo/images/Batman_batsenal_Marini_limpia_1_d76f19c6968407a4355ba67ba49c2459.jpg");
    let legenda = (document.getElementById("legenda").innerHTML =
        "Você chamou o Batman e ele veio... clique na imagem para dispensa-lo");

    clearInterval(intervalo);
});