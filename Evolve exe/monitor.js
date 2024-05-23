//campos das matérias
const q1uninter = document.querySelector("#q1uninter");
const q1udemy = document.querySelector("#q1udemy");
const q1livros = document.querySelector("#q1livros");
const q2uninter = document.querySelector("#q2uninter");
const q2udemy = document.querySelector("#q2udemy");
const q2livros = document.querySelector("#q2livros");

//checkbox de seleção de matéria
const cpuninter = document.querySelector("#cpuninter");
const cpudemy = document.querySelector("#cpudemy");
const cplivros = document.querySelector("#cplivros");

//seleção entre soma e média
const operacao = document.querySelector("#seloperacao");
//execução do calculo
const executar = document.querySelector("#executar");
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
    if ((cpuninter.checked == false && cpudemy.checked == false && cplivros.checked == false)
        ||(cpuninter.checked == false && cpudemy.checked == false)
        || (cpuninter.checked == false && cplivros.checked == false)
        || (cpudemy.checked == false && cplivros.checked == false))
        {statusint = 1;}
    else {
        statusint = 0;}
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
    const verq1_1 = q1uninter.value;
    const verq1_2 = q1udemy.value;
    const verq1_3 = q1livros.value;
    const verq2_1 = q2uninter.value;
    const verq2_2 = q2udemy.value;
    const verq2_3 = q2livros.value;
    let q1valido;
    let q2valido;
    //valida preenchimento das questões das horas nas matérias selecionadas
    if (cpuninter.checked == true && verq1_1 == ''){
        q1valido = 0;
    }
        else if (cpudemy.checked == true && verq1_2 == ''){
        q1valido = 0;
        }
        else if (cplivros.checked == true && verq1_3 == ''){
            q1valido = 0;
        }
        else {
            q1valido = 1;
        }
    //valida preenchimento das questões dos dias nas matérias selecionadas
    if (cpuninter.checked == true && verq2_1 == ''){
        q2valido = 0;
    }
        else if (cpudemy.checked == true && verq2_2 == ''){
        q2valido = 0;
        }
        else if (cplivros.checked == true && verq2_3 == ''){
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
            resdias.innerHTML = "";}   
    //altera texto do status
    if (q1valido === 0 && q2valido === 0) 
        {restatus.innerHTML = "Insira valores em horas e/ou dias nas matérias selecionadas!"}
    ;
    //altera exibição do subbloco do status
    if (q1valido === 0 && q2valido === 0) 
        {divstatus.style.display = "block";}
    
        else if (q1valido === 1 || q2valido === 1) {
            divstatus.style.display = "none"; 
        }
    //altera a exibição do subbloco do resultado de horas
    if (q1valido === 0) 
        {divresulhrs.style.display = "none";
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
        const vlq1uninter = parseInt(q1uninter.value);
        const vlq1udemy = parseInt(q1udemy.value);
        const vlq1livros = parseInt(q1livros.value);
        let rescalchrs;
    //soma os campos conforme marcação dos blocos das mátérias
    if (operacao.value === "Somar")
        if (cpuninter.checked == true && cpudemy.checked == true && cplivros.checked == true)
            rescalchrs = vlq1uninter + vlq1udemy + vlq1livros;
        else if (cpuninter.checked == true && cpudemy.checked == true)
            rescalchrs = vlq1uninter + vlq1udemy;
        else if (cpuninter.checked == true && cplivros.checked == true)
            rescalchrs = vlq1uninter + vlq1livros;
        else if (cpudemy.checked == true && cplivros.checked == true)
            rescalchrs = vlq1udemy + vlq1livros;
    ;
    //faz a média dos campos conforme marcação dos blocos das mátérias
    if (operacao.value === "Media")
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

//executa o calculo de dias
function calcdias() {
    const vlq2uninter = parseInt(q2uninter.value);
    const vlq2udemy = parseInt(q2udemy.value);
    const vlq2livros = parseInt(q2livros.value);
    let rescalcdias;
    //soma os campos conforme marcação dos blocos das mátérias
    if (operacao.value === "Somar")
        if (cpuninter.checked == true && cpudemy.checked == true && cplivros.checked == true)
            rescalcdias = vlq2uninter + vlq2udemy + vlq2livros;
        else if (cpuninter.checked == true && cpudemy.checked == true)
            rescalcdias = vlq2uninter + vlq2udemy;
        else if (cpuninter.checked == true && cplivros.checked == true)
            rescalcdias = vlq2uninter + vlq2livros;
        else if (cpudemy.checked == true && cplivros.checked == true)
            rescalcdias = vlq2udemy + vlq2livros;
    ;
     //faz a média dos campos conforme marcação dos blocos das mátérias
    if (operacao.value === "Media")
        if (cpuninter.checked == true && cpudemy.checked == true && cplivros.checked == true)
            rescalcdias = (vlq2uninter + vlq2udemy + vlq2livros) / 3;
        else if (cpuninter.checked == true && cpudemy.checked == true)
            rescalcdias = (vlq2uninter + vlq2udemy) / 2;
        else if (cpuninter.checked == true && cplivros.checked == true)
            rescalcdias = (vlq2uninter + vlq2livros) / 2;
        else if (cpudemy.checked == true && cplivros.checked == true)
            rescalcdias = (vlq2udemy + vlq2livros) / 2;     
    ;
    return (resdias.innerHTML = rescalcdias + " dias ao todo");  
}

