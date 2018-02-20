/* function tripledouble(num1, num2) {  */
var num1 = 1222345;
/* var num2 = 12345;  */
/* if ( */
var re = new RegExp('^\d*(\d)\1{2}\d*$', 'g');
numSplit = num1.test(re);
alert(numSplit);
/* === false) {
alert(0);
} */ /* else {
const numSplit = num1.toString().match(/^\d*(\d)\1{2}\d*$/g).toString();
alert(typeof numSplit);
} */
/* if (numSplit !== null) {
alert(numSplit);

} */
/*
const numTrim = numSplit.replace(/[, ]+/g, " ").trim();
alert(numTrim);
var index = numTrim.indexOf(" ");  // Gets the first index where a space occours
var id = numTrim.substr(0, index);
alert(id.charAt(0));// Gets the first part
var text = numTrim.substr(index + 1);
alert(text.charAt(0));
alert(id);
alert(text);
var numTrim1 = id.charAt(0);
alert(numTrim1);
var numTrim2 = text.charAt(0);
const numVar = new RegExp('(' + numTrim1 + '|' + numTrim2 + '){1}', 'g');
alert(numVar);
var num2Str = num2.toString();
const num2Split = numVar.test(num2Str);
if (num2Split === true) {
return 1;
} else {
return 0;
}

}
*/
/* var num1 = 12345;
var num2 = 12345;
alert(tripledouble(num1, num2));  */
