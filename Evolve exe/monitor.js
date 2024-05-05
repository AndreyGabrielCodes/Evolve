const cpuninter = document.querySelector("#cpuninter");
const cpudemy = document.querySelector("#cpudemy");
const cplivros = document.querySelector("#cplivros");

const operacao = document.querySelector("#operacao");
const executar = document.querySelector("#executar");
let reshrs = document.querySelector("#reshrs");
let resdias = document.querySelector("#resdias");
let restatus = document.querySelector("#restatus");
let statusint;
let finalstatus;

function status() {
if ((cpuninter.checked == false && cpudemy.checked == false && cplivros.checked == false)
    ||(cpuninter.checked == false && cpudemy.checked == false)
    || (cpuninter.checked == false && cplivros.checked == false)
    || (cpudemy.checked == false && cplivros.checked == false))
    statusint = 1;
else if ((cpuninter.checked == true && cpudemy.checked == true && cplivros.checked == true)
    ||(cpuninter.checked == true && cpudemy.checked == true)
    || (cpuninter.checked == true && cplivros.checked == true)
    || (cpudemy.checked == true && cplivros.checked == true))
    statusint = 0;

if (statusint === 1)
    finalstatus = "Selecione 2 ou 3 para comparar";
else if (statusint === 0)
    finalstatus = "Cálculo realizado";

return (restatus.innerHTML = finalstatus);
}

function calchrs() {
        const q1uninter = document.getElementById("q1uninter");
        const q1udemy = document.getElementById("q1udemy");
        const q1livros = document.getElementById("q1livros");
        const vlq1uninter = parseInt(q1uninter.value);
        const vlq1udemy = parseInt(q1udemy.value);
        const vlq1livros = parseInt(q1livros.value);
        let rescalchrs;
        let textocalchrs;
    if ((cpuninter.checked == false && cpudemy.checked == false && cplivros.checked == false)
        ||(cpuninter.checked == false && cpudemy.checked == false)
        || (cpuninter.checked == false && cplivros.checked == false)
        || (cpudemy.checked == false && cplivros.checked == false))
        textocalchrs = "Selecione 2 ou 3 para comparar";
    else if ((cpuninter.checked == true && cpudemy.checked == true && cplivros.checked == true)
        ||(cpuninter.checked == true && cpudemy.checked == true)
        || (cpuninter.checked == true && cplivros.checked == true)
        || (cpudemy.checked == true && cplivros.checked == true))
        textocalchrs = " horas totais";

   if (textocalchrs === "Selecione 2 ou 3 para comparar")
        rescalchrs = "";

    if (operacao.value === "somar")
        if (cpuninter.checked == true && cpudemy.checked == true && cplivros.checked == true)
            rescalchrs = vlq1uninter + vlq1udemy + vlq1livros;
        else if (cpuninter.checked == true && cpudemy.checked == true)
            rescalchrs = vlq1uninter + vlq1udemy;
        else if (cpuninter.checked == true && cplivros.checked == true)
            rescalchrs = vlq1uninter + vlq1livros;
        else if (cpudemy.checked == true && cplivros.checked == true)
            rescalchrs = vlq1udemy + vlq1livros;
    ;
    if (operacao.value === "media")
        if (cpuninter.checked == true && cpudemy.checked == true && cplivros.checked == true)
            rescalchrs = (vlq1uninter + vlq1udemy + vlq1livros) / 3;
        else if (cpuninter.checked == true && cpudemy.checked == true)
            rescalchrs = (vlq1uninter + vlq1udemy) / 2;
        else if (cpuninter.checked == true && cplivros.checked == true)
            rescalchrs = (vlq1uninter + vlq1livros) / 2;
        else if (cpudemy.checked == true && cplivros.checked == true)
            rescalchrs = (vlq1udemy + vlq1livros) / 2;     
    ;
    return (reshrs.innerHTML = rescalchrs + textocalchrs);  
}

function calcdias() {
        const q2uninter = document.getElementById("q2uninter");
        const q2udemy = document.getElementById("q2udemy");
        const q2livros = document.getElementById("q2livros");
        const vlq2uninter = parseInt(q2uninter.value);
        const vlq2udemy = parseInt(q2udemy.value);
        const vlq2livros = parseInt(q2livros.value);
        let rescalcdias;
        let textocalcdias;
    if ((cpuninter.checked == false && cpudemy.checked == false && cplivros.checked == false)
        ||(cpuninter.checked == false && cpudemy.checked == false)
        || (cpuninter.checked == false && cplivros.checked == false)
        || (cpudemy.checked == false && cplivros.checked == false))
        textocalcdias = "Selecione 2 ou 3 para comparar";
    else if ((cpuninter.checked == true && cpudemy.checked == true && cplivros.checked == true)
        ||(cpuninter.checked == true && cpudemy.checked == true)
        || (cpuninter.checked == true && cplivros.checked == true)
        || (cpudemy.checked == true && cplivros.checked == true))
        textocalcdias = " dias totais";

    if (textocalcdias === "Selecione 2 ou 3 para comparar")
        rescalcdias = "";

    if (operacao.value === "somar")
        if (cpuninter.checked == true && cpudemy.checked == true && cplivros.checked == true)
            rescalcdias = vlq2uninter + vlq2udemy + vlq2livros;
        else if (cpuninter.checked == true && cpudemy.checked == true)
            rescalcdias = vlq2uninter + vlq2udemy;
        else if (cpuninter.checked == true && cplivros.checked == true)
            rescalcdias = vlq2uninter + vlq2livros;
        else if (cpudemy.checked == true && cplivros.checked == true)
            rescalcdias = vlq2udemy + vlq2livros;
    ;
    if (operacao.value === "media")
        if (cpuninter.checked == true && cpudemy.checked == true && cplivros.checked == true)
            rescalcdias = (vlq2uninter + vlq2udemy + vlq2livros) / 3;
        else if (cpuninter.checked == true && cpudemy.checked == true)
            rescalcdias = (vlq2uninter + vlq2udemy) / 2;
        else if (cpuninter.checked == true && cplivros.checked == true)
            rescalcdias = (vlq2uninter + vlq2livros) / 2;
        else if (cpudemy.checked == true && cplivros.checked == true)
            rescalcdias = (vlq2udemy + vlq2livros) / 2;     
    ;
    return (resdias.innerHTML = rescalcdias + textocalcdias);  
};

