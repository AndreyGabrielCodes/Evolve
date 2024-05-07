const q1uninter = document.querySelector("#q1uninter");
const q1udemy = document.querySelector("#q1udemy");
const q1livros = document.querySelector("#q1livros");

const q2uninter = document.querySelector("#q2uninter");
const q2udemy = document.querySelector("#q2udemy");
const q2livros = document.querySelector("#q2livros");

const cpuninter = document.querySelector("#cpuninter");
const cpudemy = document.querySelector("#cpudemy");
const cplivros = document.querySelector("#cplivros");

const operacao = document.querySelector("#operacao");
const executar = document.querySelector("#executar");
let reshrs = document.querySelector("#reshrs");
let resdias = document.querySelector("#resdias");

function status() {
    let statusint;
    let restatus = document.querySelector("#restatus");
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
    restatus.innerHTML = "Selecione 2 ou 3 para comparar";
if (statusint === 0)
    valorexiste();
}

function valorexiste() {
    const verq1_1 = q1uninter.value;
    const verq1_2 = q1udemy.value;
    const verq1_3 = q1livros.value;
    const verq2_1 = q2uninter.value;
    const verq2_2 = q2udemy.value;
    const verq2_3 = q2livros.value;
    let q1valido;
    let q2valido;
    //horas
    if ((verq1_1 >= 1 && verq1_2 >= 1 && verq1_3 >= 1) 
    || (verq1_1 >= 1 && verq1_2 >= 1)
    || (verq1_1 >= 1 && verq1_3 >= 1)
    || (verq1_2 >= 1 && verq1_3 >= 1))
        q1valido = 1;
    if ((verq1_1 == '' && verq1_2 == '' && verq1_3 == '') 
    || (verq1_1 == '' && verq1_2 == '')
    || (verq1_1 == '' && verq1_3 == '')
    || (verq1_2 == '' && verq1_3 == ''))
        q1valido = 0;

    //dias
    if ((verq2_1 >= 1 && verq2_2 >= 1 && verq2_3 >= 1) 
    || (verq2_1 >= 1 && verq2_2 >= 1)
    || (verq2_1 >= 1 && verq2_3 >= 1)
    || (verq2_2 >= 1 && verq2_3 >= 1))
        q2valido = 1;
    if ((verq2_1 == '' && verq2_2 == '' && verq2_3 == '') 
    || (verq2_1 == '' && verq2_2 == '')
    || (verq2_1 == '' && verq2_3 == '')
    || (verq2_2 == '' && verq2_3 == ''))
        q2valido = 0;

if (q1valido === 1)
        calchrs();
    else if (q1valido === 0)
        reshrs.innerHTML = "";
;
if (q2valido === 1)
        calcdias()
    else if (q2valido === 0)
        resdias.innerHTML = "";    
;

if (q1valido === 1 || q2valido === 1)
        restatus.innerHTML = "Valores gerados"
    else if (q1valido === 0 && q2valido === 0) 
        restatus.innerHTML = "Insira valores em horas e/ou dias";
;
}

function calchrs() {
    const vlq1uninter = parseInt(q1uninter.value);
    const vlq1udemy = parseInt(q1udemy.value);
    const vlq1livros = parseInt(q1livros.value);
    let rescalchrs;

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
return (reshrs.innerHTML = rescalchrs + " horas totais");  
}

function calcdias() {
        const vlq2uninter = parseInt(q2uninter.value);
        const vlq2udemy = parseInt(q2udemy.value);
        const vlq2livros = parseInt(q2livros.value);
        let rescalcdias;

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
    return (resdias.innerHTML = rescalcdias + " dias totais");  
};