const data = new Date();
var diaDaSemana = data.getDay();

console.log(diaDaSemana);

// 0 - Domingo
// 1 - Segunda
// 2 - Terça
// 3 - Quarta
// 4 - Quinta
// 5 - Sexta
// 6 - Sábado

const DDSnocard = document.getElementById("DDSnocard");
const nomedoprato = document.getElementById("nomedoprato");
const pratododiafoto = document.getElementById("pratododiafoto");
function pratododia() {
  switch (diaDaSemana) {
    case 0:
      DDSnocard.innerHTML = "Domingo";
      nomedoprato.innerHTML = "Estamos fechados";
      pratododiafoto.src = "../img/fechado.png";
      break;
    case 1:
      DDSnocard.innerHTML = "Segunda-Feira";
      nomedoprato.innerHTML = "Virado à Paulista";
      pratododiafoto.src = "../img/comidas/27.jpeg";
      break;
    case 2:
      DDSnocard.innerHTML = "Terça-Feira";
      nomedoprato.innerHTML = "Bife a rolê";
      pratododiafoto.src = "../img/comidas/bifearole.jpg";
      break;
    case 3:
      DDSnocard.innerHTML = "Quarta-Feira";
      nomedoprato.innerHTML = "Feijoada";
      pratododiafoto.src = "../img/comidas/24.jpeg";
      break;
    case 4:
      DDSnocard.innerHTML = "Quinta-Feira";
      nomedoprato.innerHTML = "Macarrão com frango assado";
      pratododiafoto.src = "../img/comidas/macarrao.png";
      break;
    case 5:
      DDSnocard.innerHTML = "Sexta-Feira";
      nomedoprato.innerHTML = "Estrogonoff de carne/frango";
      pratododiafoto.src = "../img/comidas/estrogonofe.jpg";
      break;
    case 6:
      DDSnocard.innerHTML = "Sábado";
      nomedoprato.innerHTML = "Feijoada";
      pratododiafoto.src = "../img/comidas/24.jpeg";
      break;
  }

// diaDaSemana = 0;

//    diaDaSemana++;
//    if (diaDaSemana > 6) {
//      diaDaSemana = 0;
//    }
}

// setInterval(function() {
//     pratododia();
// }, 2000);

pratododia();

function attCarrossel() {
  const width = window.innerWidth;
  const img_carrossel1 = document.getElementById("img-carrossel-id1");
  const img_carrossel2 = document.getElementById("img-carrossel-id2");
  const img_carrossel3 = document.getElementById("img-carrossel-id3");

  if (width < 501) {
    img_carrossel1.src = "../img/carrossel/carrosselimg1mob.png";
    img_carrossel2.src = "../img/carrossel/carrosselimg2mob.png";
    img_carrossel3.src = "../img/carrossel/carrosselimg3mob.png";
  } else {
    img_carrossel1.src = "../img/carrossel/carrosselimg1pc.png";
    img_carrossel2.src = "../img/carrossel/carrosselimg2pc.png";
    img_carrossel3.src = "../img/carrossel/carrosselimg3pc.png";
  }
}
attCarrossel();
window.addEventListener("resize", attCarrossel);
