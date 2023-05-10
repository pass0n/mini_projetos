const calcularValores = document.querySelector("#btnCalc");

calcularValores.addEventListener("click", (resultado) => {

    const num1 = parseFloat(document.querySelector("#txtValor1").value);
    const num2 = parseFloat(document.querySelector("#txtValor2").value);
    const operacao = document.querySelector("#cbxOperacao").value;

    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        default:
            resultado = undefined;
            break;
    }

    document.querySelector("#txtResultado").innerHTML = resultado;
});