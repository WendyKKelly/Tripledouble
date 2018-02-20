
function tripledouble(num1, num2) {
if ((/^\d*(\d)\1{2}\d*$/g).test(num1) === false) {
return 0;
} else {
const numSplit = num1.toString().match(/(\d)\1{2}/g).toString();
const numTrim = numSplit.replace(/[, ]+/g, " ").trim();
alert(numTrim);
if (numTrim.length >1 ) {
var index = numTrim.indexOf(" ");  // Gets the first index where a space occours
var id = numTrim.substr(index);
var text = numTrim.substr(index + 1);
var numTrim1 = id.charAt(0);
var numTrim2 = text.charAt(0);
const numVar = new RegExp('(' + numTrim1 + '|' + numTrim2 + '){1}', 'g');
alert(numVar);
} else {
if (numTrim.length === 1) {
const numVar2 = new RegExp('(' + numTrim + '){1}', 'g');
var num2Str = num2.toString();
const num3Split = numVar2.test(num2Str);
const num2Split = numVar.test(num2Str);
if (num2Split === true | num3Split === true) {
return 1;
} else {
return 0;
}
}
}
}
}
var num1 = 12222345;
var num2 = 12345;
alert(tripledouble(num1, num2));
