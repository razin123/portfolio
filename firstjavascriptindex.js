var a= parseInt(prompt("Enter your first number: "));
var b= parseInt(prompt("Enter your second number: "));
var sum, sub, mul, div , exp, rem;



sum = a+b;
sum= parseFloat(sum);
document.write("<br>Summation is :"+sum);
sub = a-b;
document.write("<br>Substraction is :"+sub);
mul = a*b;
mul= parseFloat(mul);
document.write("<br>Multiplication is :"+mul);
div = a/b;
document.write("<br>Division is :"+div);
exp = a**b;
document.write("<br>Exponent is :"+exp);
rem = a%b;
document.write("<br>Remainder is :"+rem);
