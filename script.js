// 1

for (let i = 1; i <=30; i++); {
    if (i % 2 !=0){
        console.log(i);
    }
}

// 2
var qtde = 0;
for (let i = 1; i <=70; i++) {
    if(i % 7 ==0) {
        qtde++; // --> qtde = qtde + 1;
    }
}
console.log("Quantidade de Múltiplos:" +qtde);

// 3
var inicio = parseInt(prompt("Digite o início"));
var fim = parseInt(prompt("Digite o fim"));
var qtPares = 0;
var qtImpares = 0;

for (let i = inicio; i <= fim; i++) {
    if (i % 2 == 0) {
        qtPares++;
    } else {
        qtImpares++;
    }
}

// 4

var inicio = parseInt(prompt("Digite o início"));
var fim = parseInt(prompt("Digite o fim"));

var somaMultiplos = 0;

for (let i = inicio; i <=fim; i++); {
    if (i % 11 == 0) {
        somaMutiplos +=i; // --> somaMultiplos = somaMultiplos + i;
    }
}

console.log("Soma múltiplos de 11:" + somaMultiplos);

// 6
var num = parseInt(prompt("Digite um número"));

var contImpares = 0;

for (let i = i; i < Infinity; i ++) {
    if (i % 2 !=0){
        console.log(i);
        contImpares++;
    }

    if(contImpares == num){
        break;
    }
}

// 7

var n = parseInt(prompt("Digite um número"));

var ehPrimo = true;

for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        ehPrimo = false;
        break;
    }
}

if(ehPrimo) {
console.log(n + "é primo");
} else {
    console.log(n + "não é primo");
}