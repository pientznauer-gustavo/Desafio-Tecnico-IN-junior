function delta(a, b, c){
    x = (Math.pow(b,2) - (4*a*c));
    return x;
}
let a;
let b;
let c;

alert("Vamos calcular as raízes de uma equação quadrática");
alert("ax^2 + bx + c = 0");

let x1;
let x2;
a = prompt("Digite A");
b = prompt("Digite B");
c = prompt("Digite C");

y = delta(a, b, c)
if (y > 0){
    x1 = (-(b) + Math.sqrt(y))/(2*a);
    x2 = (-(b) - Math.sqrt(y))/(2*a);
    console.log("x1 = "+ x1)
    console.log("x2 = "+ x2)
} else if(y == 0){
    x1 = (-(b) + Math.sqrt(y))/(2*a);
    console.log("Raiz única");
    console.log("X = "+ x1);
} else{
    console.log("EQUAÇÃO NÃO POSSUI RAÍZES REAIS")
}