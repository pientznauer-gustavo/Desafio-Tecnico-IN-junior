function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = parseInt(prompt("Quantos termos da sequência de Fibonacci você quer ver?"));

while (isNaN(n) || n <= 0) {
    n = parseInt(prompt("Valor inválido! Digite um número inteiro positivo:"));
}

console.log(`Os ${n} primeiros termos da sequência de Fibonacci são:`);

for (let i = 0; i < n; i++) {
    console.log(`Fibonacci(${i + 1}) = ${fibonacci(i)}`);
}
