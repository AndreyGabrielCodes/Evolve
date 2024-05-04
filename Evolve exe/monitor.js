const cpuninter = document.querySelector("#cpuninter");
const cpudemy = document.querySelector("#cpudemy");
const cplivros = document.querySelector("#cplivros");

const operacao = document.querySelector("#operacao");
const executar = document.querySelector("#executar");
let resposta = document.querySelector("#resposta");

executar.addEventListener("click", calchoras);

function calchoras() {
        const q1uninter = document.getElementById("q1uninter");
        const q1udemy = document.getElementById("q1udemy");
        const q1livros = document.getElementById("q1livros");
        const vlq1uninter = parseInt(q1uninter.value);
        const vlq1udemy = parseInt(q1udemy.value);
        const vlq1livros = parseInt(q1livros.value);
        const selecao = operacao.value;
    if (selecao === "somar")
        if (cpuninter.checked == true)
                resposta.innerHTML = vlq1uninter + vlq1udemy + " horas totais";;
    if (selecao === "media")
        if (cpuninter.checked == true)
                resposta.innerHTML = (vlq1uninter + vlq1udemy)/2 + " horas totais";;
}

