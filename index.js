const prompt = require('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Mellany Finelli";
const anoNascimento = 2007;
let anoAtual = 2024;
const idade = 17;

console.log("Olá!");
console.log("Meu nome é " + nomeCompleto + ", estamos no ano de " + anoAtual + ". Tenho " + idade + " anos" +", logo, nasci em " + anoNascimento + ".");

anoAtual = anoAtual + 1;
console.log(anoAtual);

console.log("Ano que vem, em " + anoAtual + ", pretendo fazer curso de fotografia na Escola Portfolio de Fotografia.");

console.log(`Olá!, meu nome é ${nomeCompleto} estamos no ano de ${anoAtual}. Tenho ${idade} anos, logo, nasci em ${anoNascimento}.`);

const listaDeViagens = new Array(
  `Paris`,
  `Japão`,
  `Nova Iorque`,
  `Portugual`,
  `itália`
);

console.log(listaDeViagens);

console.log(listaDeViagens[3]);
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(3,1);
console.log(listaDeViagens);

var nomeComprador = entrada("Qual é o seu nome?");
var idadeComprador = entrada("Qual é a sua idade?");

if(idadeComprador < 18){
  console.log("Sentimos muito " + nomeComprador + ", devido as diretrizes do nosso site em questão a crianças e adolescentes menores de 18 anos, não podemos vender nossas passagens, obrigada pela compreensão.")
};

if (idadeComprador >= 18){
  console.log("Obrigada por confiar em nossa empresa, Senhor(a) " + nomeComprador + ", Compra realizada com sucesso ")
};