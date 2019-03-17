charactersJSON = {
    "Lowercase": "abcdefghjkmnpqrstuvwxyz",
    "Uppercase": "ABCDEFGHJKLMNPQRSTUVWXYZ",
    "Numbers": "23456789",
    "Symbols": "!#$%&*+-=?@^_",
    "Alike": "ilo|IO01",
    "Ambiguous": "{}[]()\/'\"`~,;:.<>\\"
}


function computeSetRepeat(set, charactersJSON) {
/**
 *  computeFraction(set, charactersJSON) {
 * set - string
 * charactersJSON -  JSON with key:value pairs of character sets
*/
    //safe defaults
    if (typeof(set)==='undefined') {
        return ""
    }
    else {
        var denominator = 1;
        for (var i in charactersJSON) {
            denominator*=charactersJSON[i].length;

            console.log(charactersJSON[i]);
            console.log(denominator);
        }
        var repeat = Math.floor(denominator/set.length);

        var setRepeat = "";
        for (var j = 0; j<repeat; i++) {
            setRepeat+=set;
        }

        return setRepeat
    }
}
function computeDictionary(Lowercase,Uppercase,Numbers,Symbols,Alike,Ambiguous,balanced) {
    var dictionary = "";

    if (Lowercase) {dictionary+="abcdefghjkmnpqrstuvwxyzabcdefghjkmnpqrstuvwxyz";}
    if (Uppercase) {dictionary+="ABCDEFGHJKLMNPQRSTUVWXYZABCDEFGHJKLMNPQRSTUVWXYZ";}
    if (Numbers) {dictionary+="234567892345678923456789234567892345678923456789";}
    if (Symbols) {dictionary+="!#$%&*+-=?@^_!#$%&*+-=?@^_!#$%&*+-=?@^_!#$%&*+-=?@^_";}
    if (Alike) {dictionary+="ilo|IO01ilo|IO01ilo|IO01ilo|IO01ilo|IO01ilo|IO01ilo|IO01";}
    if (Ambiguous) {dictionary+="{}[]()\/'\"`~,;:.<>\\{}[]()\/'\"`~,;:.<>\\{}[]()\/'\"`~,;:.<>\\";}

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

//computed onLoad
function setPwd() {
    var Lowercase = false;
    if (document.getElementById("Lowercase").checked) {
        Lowercase = true;
    }
    var Uppercase = false;
    if (document.getElementById("Uppercase").checked) {
        Uppercase = true;
    }
    var Numbers = false;
    if (document.getElementById("Numbers").checked) {
        Numbers = true;
    }
    var Symbols = false;
    if (document.getElementById("Symbols").checked) {
        Symbols = true;
    }
    var Alike = false;
    if (document.getElementById("Alike").checked) {
        Alike = true;
    }
    var Ambiguous = false;
    if (document.getElementById("Ambiguous").checked) {
        Ambiguous = true;
    }

    //commented out due to poor performance computeSetRepeat("abc",charactersJSON);

    var pgLength = document.getElementById("pgLength").value;
    var dictionary = computeDictionary(Lowercase,Uppercase,Numbers,Symbols,Alike,Ambiguous);

    document.getElementById("final_pass").value = premutatio(pgLength,dictionary);
}
