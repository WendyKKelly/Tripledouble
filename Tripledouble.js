function tripledouble(num1, num2) {
/*tests num1 to see if there are triples...if not, return 0 */
if ((/^\d*(\d)\1{2}\d*$/g).test(num1) === false) {
return 0;
} else {
/* check for sets of triples, take the sets, turn to strings
const numSplit = num1.toString().match(/(\d)\1{2}/g).toString();
const numTrim = numSplit.replace(/[, ]+/g, " ").trim();
if there are triples, is there more than one set?
const index = numTrim.indexOf(" ");
const id = numTrim.substr(0, index);
const text = numTrim.substr(index + 1);
const numTrim1 = id.charAt(0);
const numTrim2 = text.charAt(0);
const numVar = new RegExp('(' + numTrim1 + '|' + numTrim2 + '){1}', 'g');
const num2Str = num2.toString();
const num2Split = numVar.test(num2Str);
const numVar2 = new RegExp('(' + numTrim + '){1}', 'g');
const num3Split = numVar2.test(num2Str);
if (numTrim.length > 3 && num2Split === true) {
alert(1);
} else
if (numTrim.length === 3 && num3Split === true) { */
alert(1);
/*  else {
alert(0);
}
} */
}
}
var num1 = 451999277;
var num2 = 41177722899;
alert(tripledouble(num1, num2));
