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

const loginCerto = "LynFine";
const senhaCerta = 0708;

console.log("");
console.log("    ========================");
console.log("    ✉✉ AGÊNCIA DE VIAGENS ✉✉");
console.log("    ========================");
console.log("");

console.log(" __↓ Faça seu login abaixo ↓__");
console.log("");
var login = entrada("➤ Nome: ");
var senha = entrada("➤ Senha: ");
console.log("");

while(login != loginCerto){
  console.log("Login incorreto!");
  login = entrada ("➤ Digite seu login novamente: ");
   console.log("");
}
while(senha != senhaCerta){
  console.log("Senha incorreta!");
  senha = entrada ("➤ Digite sua senha novamente: ");
   console.log("");
}
const listaDeViagens = new Array(
  `Paris`,
  `Japão`,
  `Nova Iorque`,
  `Portugual`,
  `itália`
);
console.log(listaDeViagens);

listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);
listaDeViagens.splice(3,1);

console.log(listaDeViagens);
  console.log(listaDeViagens[3])

 console.log("");
var nomeComprador = entrada("➤ Qual é o seu nome? ");
var idadeComprador = entrada("➤ Qual é a sua idade? ");
console.log("");

if(idadeComprador < 18){
  console.log(`Olá ${nomeComprador}, devido sua idade ser ${idadeComprador} anos, não podemos vender nossas passagens sem a companhia e autorização dos seus pais ou responsáveis, obrigada pela compreensão!`);
};

if (idadeComprador >= 18){
  console.log(`Obrigada por confiar em nossa empresa ${nomeComprador}, por ter ${idadeComprador} anos, seu cadastro segue corretamente nossas diretrizes! ✉✉
  Qual seria o destino da viagem?`)
  console.log(listaDeViagens);
};