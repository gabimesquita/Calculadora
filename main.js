let inputResultado = document.getElementById("inputDisplayResultado")

let calculo = {
    valorSalvo: null,
    funcaoParaCalcular: null
};

//Adicionar event para iniciar quando carregar
window.addEventListener("load", function () {
    atribuirEventos()
})

//Atribuir eventos para botões
function atribuirEventos() {    
    document.getElementById("btnValor0").addEventListener("click", clicarNumero);
    document.getElementById("btnValor1").addEventListener("click", clicarNumero);
    document.getElementById("btnValor2").addEventListener("click", clicarNumero);
    document.getElementById("btnValor3").addEventListener("click", clicarNumero);
    document.getElementById("btnValor4").addEventListener("click", clicarNumero);
    document.getElementById("btnValor5").addEventListener("click", clicarNumero);
    document.getElementById("btnValor6").addEventListener("click", clicarNumero);
    document.getElementById("btnValor7").addEventListener("click", clicarNumero);
    document.getElementById("btnValor8").addEventListener("click", clicarNumero);
    document.getElementById("btnValor9").addEventListener("click", clicarNumero);

    document.getElementById("btnLimpar").addEventListener("click", limparDados);
    document.getElementById("btnPonto").addEventListener("click", clicarPonto);

    document.getElementById("btnDividir").addEventListener("click", clicarOperador);
    document.getElementById("btnMultiplicar").addEventListener("click", clicarOperador);
    document.getElementById("btnSubtrair").addEventListener("click", clicarOperador);
    document.getElementById("btnSomar").addEventListener("click", clicarOperador);

    document.getElementById("btnResultado").addEventListener("click", clicarResultado);
}

// Inserir número na calculadora
function clicarNumero() {    
    if (isNaN(inputResultado.value)) {
        inputResultado.value = event.target.textContent;
            } else {        
            if (inputResultado.value == 0) {
               inputResultado.value = event.target.textContent;
            } else {
            inputResultado.value += event.target.textContent;
        }
    }
}

//Função que soma dois valores
function somarValores(valor1, valor2){
    return valor1 + valor2;
}

//Função que subtrai segundo valor do primeiro
function subtrairValores(valor1, valor2){
    return valor1 - valor2;
}

//Função que multiplica dois valores
function multiplicarValores(valor1, valor2){
    return valor1 * valor2;
}

//Função que divide o primeiro valor pelo segundo
function dividirValores(valor1, valor2){
    if(valor2 == 0){
        return "Erro, divisão por zero!";
    }else{
        return valor1 / valor2;
    }
}

//Limpa todos os dados do input e cálculo
function limparDados(){
    inputResultado.value = "";
    calculo.valorSalvo = null,
    calculo.funcaoParaCalcular = null;
}

//inserir ponto no cálculo
function clicarPonto(){
    if(inputResultado.value === "" || isNaN(inputResultado.value)){ // isNaN confere se não é número(retorna true se não é número, ou false se é número
        inputResultado.value = "0.";
    }else if(!inputResultado.value.includes(".")){ // includes vai ver se value possui valor
        inputResultado.value = inputResultado.value + ".";
    }
}

//Atualiza o objeto de cálculo ao clicar nos operadores
function clicarOperador() {
    if(!isNaN(inputResultado.value)){
        if(calculo.valorSalvo == null){
            calculo.valorSalvo=Number(inputResultado.value);
        } else if(calculo.funcaoParaCalcular != null){
            calculo.valorSlavo=calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));
        }       
    } 
    let operador = event.target.textContent;
    atribuirOperacao(operador);
    inputResultado.value = operador;
}

//Atribuição de operadores ao objeto de cálculo
function atribuirOperacao(operador){
    if(operador == "+"){
        calculo.funcaoParaCalcular = somarValores;
    } else if(operador == "-"){
        calculo.funcaoParaCalcular = subtrairValores;
    } else if(operador == "*"){
        calculo.funcaoParaCalcular = multiplicarValores;
    } else {
        calculo.funcaoParaCalcular = dividirValores;
    }
}

//Exibe resultado quando clica no =
function clicarResultado() {
    if(!isNaN(inputResultado.value) && calculo.funcaoParaCalcular != null){
            let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));
            inputResultado.value = resultado;
            calculo.valorSalvo = resultado;
            calculo.funcaoParaCalcular = null;
    }
}