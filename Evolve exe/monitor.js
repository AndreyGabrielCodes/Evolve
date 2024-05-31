//campos das matérias
const q1bloco1 = document.querySelector("#q1bloco1");
const q1bloco2 = document.querySelector("#q1bloco2");
const q1bloco3 = document.querySelector("#q1bloco3");
const q2bloco1 = document.querySelector("#q2bloco1");
const q2bloco2 = document.querySelector("#q2bloco2");
const q2bloco3 = document.querySelector("#q2bloco3");

//checkbox de seleção de matéria
const checkbloco1 = document.querySelector("#checkbloco1");
const checkbloco2 = document.querySelector("#checkbloco2");
const checkbloco3 = document.querySelector("#checkbloco3");

//seleção entre soma e média
const operacao = document.querySelector("#seloperacao");
//retorno do calculo
let reshrs = document.querySelector("#reshrs");
let resdias = document.querySelector("#resdias");

//exibição dos subblocos desativada ao entrar  
let divstatus = document.querySelector("#status");
divstatus.style.display = "none";
let divresulhrs = document.querySelector("#resultadohrs");
divresulhrs.style.display = "none";
let divresuldias = document.querySelector("#resultadodias");
divresuldias.style.display = "none";

//verifica se os campos de seleção de matéria está ativo ou não
function status() {
    let statusint;
    let restatus = document.querySelector("#restatus");
    //valida marcação dos campos de seleção
    if ((checkbloco1.checked == false && checkbloco2.checked == false && checkbloco3.checked == false)
        || (checkbloco1.checked == false && checkbloco2.checked == false)
        || (checkbloco1.checked == false && checkbloco3.checked == false)
        || (checkbloco2.checked == false && checkbloco3.checked == false)) { statusint = 1; }
    else {
        statusint = 0;
    }
    //altera o resultado dos sobblocos status, dias e horas
    if (statusint === 1)
        restatus.innerHTML = "Selecione 2 ou 3 matérias para calcular!";
    if (statusint === 1)
        resdias.innerHTML = "";
    if (statusint === 1)
        reshrs.innerHTML = "";
    //altera exibição dos subblocos
    if (statusint === 1)
        divstatus.style.display = 'block';
    if (statusint === 1)
        divresulhrs.style.display = 'none';
    if (statusint === 1)
        divresuldias.style.display = 'none';
    //executa a function valorexiste
    if (statusint === 0)
        valorexiste();
}

//verifica se o campo horas ou dias está preenchido
function valorexiste() {
    const verq1_1 = q1bloco1.value;
    const verq1_2 = q1bloco2.value;
    const verq1_3 = q1bloco3.value;
    const verq2_1 = q2bloco1.value;
    const verq2_2 = q2bloco2.value;
    const verq2_3 = q2bloco3.value;
    let q1valido;
    let q2valido;
    //valida preenchimento das questões das horas nas matérias selecionadas
    if (checkbloco1.checked == true && verq1_1 == '') {
        q1valido = 0;
    }
    else if (checkbloco2.checked == true && verq1_2 == '') {
        q1valido = 0;
    }
    else if (checkbloco3.checked == true && verq1_3 == '') {
        q1valido = 0;
    }
    else {
        q1valido = 1;
    }
    //valida preenchimento das questões dos dias nas matérias selecionadas
    if (checkbloco1.checked == true && verq2_1 == '') {
        q2valido = 0;
    }
    else if (checkbloco2.checked == true && verq2_2 == '') {
        q2valido = 0;
    }
    else if (checkbloco3.checked == true && verq2_3 == '') {
        q2valido = 0;
    }
    else {
        q2valido = 1;
    }
    //executa a function das horas
    if (q1valido === 1)
        calchrs();
    else {
        reshrs.innerHTML = "";
    }
    //executa a function dos dias
    if (q2valido === 1)
        calcdias();
    else {
        resdias.innerHTML = "";
    }
    //altera texto do status
    if (q1valido === 0 && q2valido === 0) { restatus.innerHTML = "Insira valores em horas e/ou dias nas matérias selecionadas!" }
    ;
    //altera exibição do subbloco do status
    if (q1valido === 0 && q2valido === 0) { divstatus.style.display = "block"; }

    else if (q1valido === 1 || q2valido === 1) {
        divstatus.style.display = "none";
    }
    //altera a exibição do subbloco do resultado de horas
    if (q1valido === 0) {
        divresulhrs.style.display = "none";
    }
    else {
        divresulhrs.style.display = "block";
    }
    //altera a exibição do subbloco do resultado de dias
    if (q2valido === 0)
        divresuldias.style.display = 'none'
            ;
    else {
        divresuldias.style.display = "block";
    }
}

//executa o calculo de horas
function calchrs() {
    const vlq1bloco1 = parseInt(q1bloco1.value);
    const vlq1bloco2 = parseInt(q1bloco2.value);
    const vlq1bloco3 = parseInt(q1bloco3.value);
    let rescalchrs;
    //soma os campos conforme marcação dos blocos das mátérias
    if (operacao.value === "Somar")
        if (checkbloco1.checked == true && checkbloco2.checked == true && checkbloco3.checked == true)
            rescalchrs = vlq1bloco1 + vlq1bloco2 + vlq1bloco3;
        else if (checkbloco1.checked == true && checkbloco2.checked == true)
            rescalchrs = vlq1bloco1 + vlq1bloco2;
        else if (checkbloco1.checked == true && checkbloco3.checked == true)
            rescalchrs = vlq1bloco1 + vlq1bloco3;
        else if (checkbloco2.checked == true && checkbloco3.checked == true)
            rescalchrs = vlq1bloco2 + vlq1bloco3;
    ;
    //faz a média dos campos conforme marcação dos blocos das mátérias
    if (operacao.value === "Media")
        if (checkbloco1.checked == true && checkbloco2.checked == true && checkbloco3.checked == true)
            rescalchrs = (vlq1bloco1 + vlq1bloco2 + vlq1bloco3) / 3;
        else if (checkbloco1.checked == true && checkbloco2.checked == true)
            rescalchrs = (vlq1bloco1 + vlq1bloco2) / 2;
        else if (checkbloco1.checked == true && checkbloco3.checked == true)
            rescalchrs = (vlq1bloco1 + vlq1bloco3) / 2;
        else if (checkbloco2.checked == true && checkbloco3.checked == true)
            rescalchrs = (vlq1bloco2 + vlq1bloco3) / 2;
    ;
    return (reshrs.innerHTML = rescalchrs + " horas totais");
}

//executa o calculo de dias
function calcdias() {
    const vlq2bloco1 = parseInt(q2bloco1.value);
    const vlq2bloco2 = parseInt(q2bloco2.value);
    const vlq2bloco3 = parseInt(q2bloco3.value);
    let rescalcdias;
    //soma os campos conforme marcação dos blocos das mátérias
    if (operacao.value === "Somar")
        if (checkbloco1.checked == true && checkbloco2.checked == true && checkbloco3.checked == true)
            rescalcdias = vlq2bloco1 + vlq2bloco2 + vlq2bloco3;
        else if (checkbloco1.checked == true && checkbloco2.checked == true)
            rescalcdias = vlq2bloco1 + vlq2bloco2;
        else if (checkbloco1.checked == true && checkbloco3.checked == true)
            rescalcdias = vlq2bloco1 + vlq2bloco3;
        else if (checkbloco2.checked == true && checkbloco3.checked == true)
            rescalcdias = vlq2bloco2 + vlq2bloco3;
    ;
    //faz a média dos campos conforme marcação dos blocos das mátérias
    if (operacao.value === "Media")
        if (checkbloco1.checked == true && checkbloco2.checked == true && checkbloco3.checked == true)
            rescalcdias = (vlq2bloco1 + vlq2bloco2 + vlq2bloco3) / 3;
        else if (checkbloco1.checked == true && checkbloco2.checked == true)
            rescalcdias = (vlq2bloco1 + vlq2bloco2) / 2;
        else if (checkbloco1.checked == true && checkbloco3.checked == true)
            rescalcdias = (vlq2bloco1 + vlq2bloco3) / 2;
        else if (checkbloco2.checked == true && checkbloco3.checked == true)
            rescalcdias = (vlq2bloco2 + vlq2bloco3) / 2;
    ;
    return (resdias.innerHTML = rescalcdias + " dias ao todo");
}