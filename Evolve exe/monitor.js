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
    let vlcompararuninter = document.getElementById("compararuninter");
    let vlcompararudemy = document.getElementById("compararudemy");
    let vlcompararlivros = document.getElementById("compararlivros");
    const selecao = operacao.value;
    if (selecao === "somar")
        if (vlcompararuninter.checked == true && vlcompararudemy.checked == true)
                resposta.innerHTML = vlq1uninter + vlq1udemy + " horas totais";
        else if (vlcompararuninter.checked == true && vlcompararlivros.checked == true)
                resposta.innerHTML = vlq1uninter + vlq1livros + " horas totais";
        else (vlcompararudemy.checked == true && vlcompararlivros.checked == true)
            resposta.innerHTML = vlq1udemy + vlq1livros + " horas totais";

    if (selecao === "media")
        if (vlcompararuninter.checked == true && vlcompararudemy.checked == true)
                resposta.innerHTML = (vlq1uninter + vlq1udemy)/2 + " horas de media";
        else if (vlcompararuninter.checked == true && vlcompararlivros.checked == true)
                resposta.innerHTML = (vlq1uninter + vlq1livros)/2 + " horas de media";
        else (vlcompararudemy.checked == true && vlcompararlivros.checked == true)
            resposta.innerHTML = (vlq1udemy + vlq1livros)/2 + " horas de media";
}