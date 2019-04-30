charactersJSON = {
    "Lowercase": "abcdefghjkmnpqrstuvwxyz",
    "Uppercase": "ABCDEFGHJKLMNPQRSTUVWXYZ",
    "Numbers": "23456789",
    "Symbols": "!#$%&*+-=?@^_",
    "Alike": "ilo|IO01",
    "Ambiguous": "{}[]()\/'\"`~,;:.<>\\"
}


function computeBalancedDictionary(Lowercase,Uppercase,Numbers,Symbols,Alike,Ambiguous) {
    var dictionary = "";

    // number >= 30 is OK for an alphabet length to achieve balanced dictionary

    if (Lowercase) {dictionary+=premutatio(30,charactersJSON.Lowercase);}
    if (Uppercase) {dictionary+=premutatio(30,charactersJSON.Uppercase);}
    if (Numbers) {dictionary+=premutatio(30,charactersJSON.Numbers);}
    if (Symbols) {dictionary+=premutatio(30,charactersJSON.Symbols);}
    if (Alike) {dictionary+=premutatio(30,charactersJSON.Alike);}
    if (Ambiguous) {dictionary+=premutatio(30,charactersJSON.Ambiguous);}

    var balancedDictionary = premutatio(dictionary.length,dictionary);

    return balancedDictionary
}

function premutatio(pgLength,dictionary) {
    var premutatio = "";

    for (i = 0; i < pgLength; i++) {
        premutatio+=dictionary[Math.floor(Math.random() * dictionary.length)];
    }
    // if no character set is selected
    if (dictionary == "") {return "Please select at least one character set"}
    
    return premutatio
}

//computed onLoad
function setPwd() {
    var pwdValue = "";
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

    if (!Lowercase && !Uppercase && !Numbers && !Symbols && !Alike && !Ambiguous) {
        pwdValue = "Please select at least one character set";
    }
    else {
        var pgLength = document.getElementById("pgLength").value;
        var balancedDictionary = computeBalancedDictionary(Lowercase,Uppercase,Numbers,Symbols,Alike,Ambiguous);
        pwdValue = premutatio(pgLength,balancedDictionary);
    }
    
    document.getElementById("final_pass").value = pwdValue;
}
