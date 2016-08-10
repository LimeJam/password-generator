# LimeJam Password Generator
LimeJam Password Generator is the simple dictionary premutation script, <a href="https://password.limejam.com/">available</a> online to generate strong passwords for any online account types. Currenty the dictionary consist of the following blocks: 
* Lowercase: abcdefghjkmnpqrstuvwxyz
* Uppercase: ABCDEFGHJKLMNPQRSTUVWXYZ
* Numbers: 23456789
* Symbols: !#$%&*+-=?@^_
* Alike: ilo|IO01
* Ambiguous: {}\[]()\/'\"`~,;:.<>\\

To use the Password Generator, simply add the premutatio.js to your project and use premutatio(pgLength,dictionary) function, supplying it with desired password length and dictionary string respectively.

Add javascript

    <script type="text/javascript" src="/src/js/premutatio.js"></script>

Define dictionary variable (in the demo the dictionary is defined by dictionary() function)  

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

Generate the password

    var password = premutatio(pgLength,dictionary);