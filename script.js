// 1. Verificação de Par ou Ímpar:
function verificarPar(numero) {
  if (numero % 2 === 0) {
    console.log("Par");
  } else {
    console.log("Ímpar");
  }
}
console.log("--- 1. Verificação de Par ou Ímpar ---");
verificarPar(4);
verificarPar(7);
console.log("\n"); 

// 2. Operações Matemáticas Simples:
function calcular(num1, num2) {
  const soma = num1 + num2;
  const subtracao = num1 - num2;
  const multiplicacao = num1 * num2;
  const divisao = num2 !== 0 ? num1 / num2 : "Não é possível dividir por zero";

  return {
    soma: soma,
    subtracao: subtracao,
    multiplicacao: multiplicacao,
    divisao: divisao,
  };
}
console.log("--- 2. Operações Matemáticas Simples ---");
const resultados = calcular(10, 5);
console.log("Soma:", resultados.soma);
console.log("Subtração:", resultados.subtracao);
console.log("Multiplicação:", resultados.multiplicacao);
console.log("Divisão:", resultados.divisao);
const resultadosDivisaoPorZero = calcular(10, 0);
console.log("Divisão por zero (exemplo):", resultadosDivisaoPorZero.divisao);
console.log("\n");

// 3. Laço While para Contagem Regressiva:
console.log("--- 3. Laço While para Contagem Regressiva ---");
let contador = 10;
while (contador >= 1) {
  console.log(contador);
  contador--;
}
console.log("\n");

// 4. Manipulação de Strings: Inverter Texto
function inverterTexto(texto) {
  return texto.split("").reverse().join("");
}
console.log("--- 4. Manipulação de Strings: Inverter Texto ---");
console.log("JavaScript invertido:", inverterTexto("JavaScript"));
console.log("Olá Mundo invertido:", inverterTexto("Olá Mundo"));
console.log("\n");

// 5. Contagem de Caracteres em uma String:
function contarCaracteres(texto) {
  return texto.length;
}
console.log("--- 5. Contagem de Caracteres em uma String ---");
console.log("Número de caracteres em 'Batman':", contarCaracteres("Batman"));
console.log("Número de caracteres em 'Gotham City':", contarCaracteres("Gotham City"));
console.log("\n");

// 6. Acessando Propriedades de Objetos:
console.log("--- 6. Acessando Propriedades de Objetos ---");
const carro = {
  marca: "Ford",
  modelo: "Mustang",
  ano: 1969,
};
console.log("Modelo do carro:", carro.modelo);
console.log("\n");

// 7. Função com Parâmetros Opcionais:
function mensagemPersonalizada(nome, mensagem = "Olá!") {
  console.log(`${mensagem} ${nome}!`);
}
console.log("--- 7. Função com Parâmetros Opcionais ---");
mensagemPersonalizada("Bruce");
mensagemPersonalizada("Selina", "E aí");
console.log("\n");

// 8. Calculadora de Média:
function media(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}
console.log("--- 8. Calculadora de Média ---");
console.log("Média de 7, 8, 9:", media(7, 8, 9));
console.log("Média de 10, 10, 10:", media(10, 10, 10));
console.log("\n");

// 9. Laço for com Condição:
console.log("--- 9. Laço for com Condição ---");
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(`${i}: Múltiplo de 3`);
  } else {
    console.log(`${i}: Não múltiplo de 3`);
  }
}
console.log("\n");

// 10. Verificação de Palavra Palíndroma:
function verificarPalindromo(palavra) {
  const palavraFormatada = palavra.toLowerCase().replace(/\s/g, '');
  const palavraInvertida = palavraFormatada.split("").reverse().join("");
  return palavraFormatada === palavraInvertida;
}
console.log("--- 10. Verificação de Palavra Palíndroma ---");
console.log("'arara' é palíndromo?", verificarPalindromo("arara"));
console.log("'reviver' é palíndromo?", verificarPalindromo("reviver"));
console.log("'palindromo' é palíndromo?", verificarPalindromo("palindromo"));
console.log("'A man a plan a canal Panama' é palíndromo?", verificarPalindromo("A man a plan a canal Panama"));
console.log("\n");