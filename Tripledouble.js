function tripledouble(num1, num2) {
/*tests num1 to see if there are triples...if not, return 0 */
if ((/^\d*(\d)\1{2}\d*$/g).test(num1) === false) {
return 0;
} else {
/*check for sets of triples, take the sets, turn to strings*/
const numSplit = num1.toString().match(/(\d)\1{2}/g).toString();

const numTrim = numSplit.replace(/[, ]+/g, " ").trim();
alert(numTrim);
const numTrim0 = numTrim.charAt(0);
/*if there are triples, is there more than one set?*/
const index = numTrim.indexOf(" ");
const id = numTrim.substr(0, index);
const text = numTrim.substr(index + 1);
const text2 = numTrim.substr(index + 5);
const numTrim1 = id.charAt(0);
alert(numTrim1);
const numTrim2 = text.charAt(0);
alert(numTrim2);
const numTrim3 = text2.charAt(0);
alert(numTrim3);
const numVar = new RegExp('(' + numTrim0 + '){2}', 'g');
alert(numVar);
const numVar2 = new RegExp('(' + numTrim1 + '){2}|(' + numTrim2 + '){2}', 'g');
alert(numVar2);
const numVar3 = new RegExp('(' + numTrim1 + '){2}|(' + numTrim2 + '){2}|(' + numTrim3 + '){2}', 'g');
alert(numVar3);
const num2Str = num2.toString();
alert(num2Str);
const num2Split = numVar.test(num2Str);
alert(num2Split);
const num3Split = numVar2.test(num2Str);
alert(num3Split);
const num4Split = numVar3.test(num2Str);
alert(num4Split);
if (numTrim.length > 9 && num4Split === true) {
alert(3);
} else
if (numTrim.length > 5 && num3Split === true) {
alert(1);
 } else
if (numTrim.length === 3 && num2Split === true) {
alert(2);
} else {
alert(0);
}
}

}
var num1 = 7387354333888999;
var num2 = 3826752;
alert(tripledouble(num1, num2));
