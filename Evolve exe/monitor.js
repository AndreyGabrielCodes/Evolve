const cpuninter = document.querySelector("#cpuninter");
const cpudemy = document.querySelector("#cpudemy");
const cplivros = document.querySelector("#cplivros");

const operacao = document.querySelector("#operacao");
const executar = document.querySelector("#executar");
let resposta = document.querySelector("#resposta");

executar.addEventListener("click", calchrs);

function calchrs() {
        const q1uninter = document.getElementById("q1uninter");
        const q1udemy = document.getElementById("q1udemy");
        const q1livros = document.getElementById("q1livros");
        const vlq1uninter = parseInt(q1uninter.value);
        const vlq1udemy = parseInt(q1udemy.value);
        const vlq1livros = parseInt(q1livros.value);
        const selecao = operacao.value;
        let rescalchrs
        let textores
        let nenhumamarc
    if ((cpuninter.checked == false && cpudemy.checked == false && cplivros.checked == false)
        ||(cpuninter.checked == false && cpudemy.checked == false)
        || (cpuninter.checked == false && cplivros.checked == false)
        || (cpudemy.checked == false && cplivros.checked == false))
        nenhumamarc = 1;
    else if ((cpuninter.checked == true && cpudemy.checked == true && cplivros.checked == true)
        ||(cpuninter.checked == true && cpudemy.checked == true)
        || (cpuninter.checked == true && cplivros.checked == true)
        || (cpudemy.checked == true && cplivros.checked == true))
        nenhumamarc = 0;


    
    if (nenhumamarc === 1)
        textores = "";
    if (nenhumamarc === 0)
        textores = " horas totais";
    
    if (nenhumamarc = 1)
            rescalchrs = "Selecione 2 ou 3 para comparar"
        if (selecao === "somar")
            if (cpuninter.checked == true && cpudemy.checked == true && cplivros.checked == true)
                rescalchrs = vlq1uninter + vlq1udemy + vlq1livros;
            else if (cpuninter.checked == true && cpudemy.checked == true)
                rescalchrs = vlq1uninter + vlq1udemy;
            else if (cpuninter.checked == true && cplivros.checked == true)
                rescalchrs = vlq1uninter + vlq1livros;
            else if (cpudemy.checked == true && cplivros.checked == true)
                rescalchrs = vlq1udemy + vlq1livros;
            return (resposta.innerHTML = rescalchrs + textores);      
        ;
    ;
        
    
}

