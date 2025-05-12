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

switch(diaDaSemana) {
    case 0:
        DDSnocard.innerHTML = "Domingo";
        nomedoprato.innerHTML = "Feijoada";
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