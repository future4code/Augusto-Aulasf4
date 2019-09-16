// Exercício 1
/*
const idade = prompt("Qual e sua idade ao fim do ano?");
const anoAtual = 2019;

console.log("Ano de nascimento :", anoAtual - idade);

console.log("Dias de vida :", idade * 365);

console.log("Horas de vida :", idade * 365 * 24);

console.log("Segundos de vida :", idade * 365 * 24 * 3600);

// Exercício 1)a-
console.log('Exercicio 1)a)');
const abacaxi = 6.30;
const uva = 5;
const bala = 0.10;

console.log('R$',abacaxi+uva+bala);

// Exercício 1)b-
console.log('Exercicio 1)b)');
const fahrenheit = 95;
const celsius = (fahrenheit-32)*5/9;
const kelvin = celsius + 273.15;

console.log('Fahrenheit :', fahrenheit);
console.log('Celsius :', celsius);
console.log('Kelvin :', kelvin);
// Exercicio 2)a-
console.log('Exercicio 2)a)');
let f = prompt('Fale uma temperatura em Fahrenheit para conversao.');
let c = (f-32)*5/9;
let k = c + 273.15;

console.log('Fahrenheit :', f);
console.log('Celsius :', c);
console.log('Kelvin :', k);
//b-
console.log('Exercicio 2)b)');
let nome = prompt('Informe seu nome.');
let sobrenome = prompt('Informe seu sobrenome.');

console.log(nome+' ' +sobrenome);
//c-
console.log('Exercicio 2)c)');
let rua = prompt('Por favor, informe sua rua.');
let n = prompt('Por favor, informe seu numero.');
let complemento = prompt('Por favor, informe o complemento.');
let bairro = prompt('Por favor, informe seu bairro.');
let cidade = prompt('Por favor, informe sua cidade.');

console.log(rua+', '+n+' - '+complemento+' - '+bairro+', '+cidade);

//exercicio 3)a-
console.log('Exercicio 3)a)');
let tranca = confirm('A casa esta trancada? ');
let chave = confirm('Voce tem a chave da casa?');

const entrar = (!tranca || chave)
console.log('Vou entrar em casa?', entrar);

//exercicio 3)b-
console.log('Exercicio 3)b)');
let estaChovendo = confirm('Esta chovendo? ');
let estouComGuardaChuva = confirm('Tem guarda chuva?');

const vouMeMolhar = (!estouComGuardaChuva && estaChovendo)
console.log('Vou me Molhar?', vouMeMolhar);

//exercicio 4
console.log('Exercicio 4)');
let salarioMinimo = prompt('Quanto esta valendo o salario minimo?');
let quantosQuilowatt = prompt('Quantos quilowatts sua casa consome?');

const valorQuilowatt = salarioMinimo/5
const totalPagar = quantosQuilowatt*valorQuilowatt

console.log('valor unitario do quilowatt R$',valorQuilowatt+',00');
console.log('Sua residencia deve pagar R$',totalPagar+',00');
console.log('Com os 15% de desconto R$', 85/100*totalPagar+',00');
*/
const CapacidadeMax = 10;
const velMax = 14;

let passageiros = prompt('Quantos Passageiros?');
let andares= prompt('Qual Andar Deseja?');;

if (passageiros==0){
	andares = 0;
}else if (passageiros>=11){
	andares=andares;
  alert('Capacidade Maxima Ultrapassada!')
}

while(passageiros==10){
  andares--;
  
  if(andares==0){
    passageiros=0;
  }
  console.log('Andar :' +andares);
}


console.log('Passageiros :'+passageiros,'Andar :'+andares);


