var pgLength = document.getElementById("pgLength").value;

var Lowercase = 0;
if (document.getElementById("Lowercase").checked) {
    Lowercase = 1
}
var Uppercase = 0;
if (document.getElementById("Uppercase").checked) {
    Uppercase = 1
}
var Numbers = 0;
if (document.getElementById("Numbers").checked) {
    Numbers = 1
}
var Symbols = 0;
if (document.getElementById("Symbols").checked) {
    Symbols = 1
}
var Alike = 0;
if (document.getElementById("Alike").checked) {
    Alike = 1
}
var Ambiguous = 0;
if (document.getElementById("Ambiguous").checked) {
    Ambiguous = 1
}

var dictionary = dictionary(Lowercase,Uppercase,Numbers,Symbols,Alike,Ambiguous);

function dictionary(Lowercase,Uppercase,Numbers,Symbols,Alike,Ambiguous) {
    var dictionary = "";


    if (Lowercase==1) {dictionary+="abcdefghjkmnpqrstuvwxyzabcdefghjkmnpqrstuvwxyz";}
    if (Uppercase==1) {dictionary+="ABCDEFGHJKLMNPQRSTUVWXYZABCDEFGHJKLMNPQRSTUVWXYZ";}
    if (Numbers==1) {dictionary+="234567892345678923456789234567892345678923456789";}
    if (Symbols==1) {dictionary+="!#$%&*+-=?@^_!#$%&*+-=?@^_!#$%&*+-=?@^_!#$%&*+-=?@^_";}
    if (Alike==1) {dictionary+="ilo|IO01ilo|IO01ilo|IO01ilo|IO01ilo|IO01ilo|IO01ilo|IO01";}
    if (Ambiguous==1) {dictionary+="{}[]()\/'\"`~,;:.<>\\{}[]()\/'\"`~,;:.<>\\{}[]()\/'\"`~,;:.<>\\"}

    return dictionary
}

function premutatio(pgLength,dictionary) {
    var premutatio = "";

    for (i = 0; i < pgLength; i++) {
        premutatio+=dictionary[Math.floor(Math.random() * dictionary.length)];
    }
    // if no character set is selected
    if (dictionary == '') {return "Please select at least one character set"}
    return premutatio
}
function setPwd() {
    document.getElementById("final_pass").value = premutatio(pgLength,dictionary);
}
