const data = new Date();
const diaDaSemana = data.getDay();

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

switch (diaDaSemana) {
  case 0:
    DDSnocard.innerHTML = "Domingo";
    nomedoprato.innerHTML = "Estamos fechados";
    break;
  case 1:
    DDSnocard.innerHTML = "Segunda-Feira";
    nomedoprato.innerHTML = "Frango com Quiabo";
    break;
  case 2:
    DDSnocard.innerHTML = "Terça-Feira";
    nomedoprato.innerHTML = "Bife Acebolado";
    break;
  case 3:
    DDSnocard.innerHTML = "Quarta-Feira";
    nomedoprato.innerHTML = "Peixe com Batata";
    break;
  case 4:
    DDSnocard.innerHTML = "Quinta-Feira";
    nomedoprato.innerHTML = "Carne Moída com Batata";
    break;
  case 5:
    DDSnocard.innerHTML = "Sexta-Feira";
    nomedoprato.innerHTML = "Frango com Batata";
    break;
  case 6:
    DDSnocard.innerHTML = "Sábado";
    nomedoprato.innerHTML = "Macarrão com Carne";
    break;
}

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