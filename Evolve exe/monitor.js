const q1uninter = document.querySelector("#q1uninter");
const q1udemy = document.querySelector("#q1udemy");
const q1livros = document.querySelector("#q1livros");

const q2uninter = document.querySelector("#q2uninter");
const q2udemy = document.querySelector("#q2udemy");
const q2livros = document.querySelector("#q2livros");

const operacao = document.querySelector("#operacao");
const executar = document.querySelector("#executar");
let resposta = document.querySelector("#resposta");

executar.addEventListener("click", calchoras);

function calchoras() {
    const vlq1uninter = parseInt(q1uninter.value);
    const vlq1udemy = parseInt(q1udemy.value);
    const vlq1livros = parseInt(q1livros.value);
    const selecao = operacao.value;
if (selecao === "somar")
        resposta.innerHTML = vlq1uninter + vlq1udemy + " horas totais";
if (selecao === "media")
        resposta.innerHTML = vlq1uninter + vlq1livros;
}