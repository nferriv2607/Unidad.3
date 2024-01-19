
function calcular(){
  let a, b, c;
  a= parseInt (prompt("Inserta un número:"));
  b=parseInt (prompt("Inserta otro número:"));
  c= a + b;
  d=a - b;
  e=a*b;
  f=a/b;
  g=a%b;

  alert ("El primer número es " + a +"\nEl segundo número es " +b + "\n La suma es "+c +"\n La resta es "+d +"\n El producto es " +e +"\nLa división es "+f +"\nEl resto es "+g);
 }