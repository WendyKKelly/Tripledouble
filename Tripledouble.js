
function tripledouble(num1, num2) {
console.log(num1);
console.log(num2);
const numSplit = num1.toString().split(/^\d*(\d)\1{2}\d*$/g).toString();
const numTrim = numSplit.replace(/[, ]+/g, " ").trim();
const numVar = new RegExp('^\\d*(' + numTrim + ')\\1{1}\\d*$');
num2Str = num2.toString();
const num2Split = numVar.test(num2Str);
if (num2Split === true) {
return 1;
} else {
return 0;
}
}
var num1 = 7990;
var num2 = 999999999999;
tripledouble(num1, num2);
