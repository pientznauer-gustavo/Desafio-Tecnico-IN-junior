let real = parseFloat(prompt("Digite um valor em reais (R$)"));


let dolar = real/5.70;
let euro = real/6.10;

console.log("VALOR INSERIDO: R$" + real.toFixed(2))
console.log("Valor em dólar: US$" + dolar.toFixed(2))
console.log("Valor em euro: €" + euro.toFixed(2))
