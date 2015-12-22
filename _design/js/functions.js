function s_(a) {
    document.getElementById(a).focus();
    document.getElementById(a).select()
}
function AY_(a, f, b) {
    var d = Math.floor(Math.random() * a.length);
    var c = Math.floor(Math.random() * f);
    var e = b.substring(0, c) + a.substring(d, d + 1) + b.substring(c, f);
    b = e;
    return b
}

function Em0(r, k, l, m, o, c, x9) {
    var d = "abcdefghjkmnpqrstuvwxyz";
    var h = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    var p = "23456789";
    var j = "!#$%&*+-=?@^_";
    if (!k) {
        d += "ilo";
        h += "IO";
        p += "01";
        j += "|"
    }
    var a = "";
    var g = 0;
    if (!x9) {
        j += "{}[]()\/'\"`~,;:.<>\\";
    }
    if (l == 1) {
        a += d;
        g++
    }
    if (m == 1) {
        a += h;
        g++
    }
    if (o == 1) {
        a += p;
        g++
    }
    if (c == 1) {
        a += j;
        g++
    }
    if (g == 0) {
        q = "You must select at least one character set!";
        return q
    }
    var n = a.length;
    var f = r - g;
    var q = "";
    for (var e = 0; e < f; e++) {
        var b = Math.floor(Math.random() * n);
        q += a.substring(b, b + 1)
    }
    if (m) {
        q = AY_(h, f, q);
        f++
    }
    if (l) {
        q = AY_(d, f, q);
        f++
    }
    if (o) {
        q = AY_(p, f, q);
        f++
    }
    if (c) {
        q = AY_(j, f, q)
    }
    return q
}

function d2O() {
    var b = document.getElementById("pgLength").value;
    var f = 0;
    if (document.getElementById("Nosimilar").checked) {
        f = 1
    }
    var a = 0;
    if (document.getElementById("Symbols").checked) {
        a = 1
    }
    var a6 = 0;
    if (document.getElementById("NoAmb").checked) {
        a6 = 1
    }
    var g = 0;
    if (document.getElementById("Lowercase").checked) {
        g = 1
    }

    var l = 0;
    if (document.getElementById("Uppercase").checked) {
        l = 1
    }
    var p = 0;
    if (document.getElementById("Numbers").checked) {
        p = 1
    }

    var o = Em0(b, f, g, l, p, a, a6);
    document.getElementById("final_pass").value = o;


}

function Jm0(b) {
    var c, a, e, d = document.cookie.split(";");
    for (c = 0; c < d.length; c++) {
        a = d[c].substr(0, d[c].indexOf("="));
        e = d[c].substr(d[c].indexOf("=") + 1);
        a = a.replace(/^\s+|\s+$/g, "");
        if (a == b) {
            return unescape(e)
        }
    }
}

function x2J() {
    var d = document.cookie.split(";");
    for (var c = 0; c < d.length; c++) {
        var b = d[c];
        var e = b.indexOf("=");
        var a = e > -1 ? b.substr(0, e) : b;
        document.cookie = a + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }
}

function Q2S(b) {
    var a = Jm0(b);
    if (a != null && a != "") {
        if (a == "true") {
            document.getElementById(b).checked = true
        } else {
            document.getElementById(b).checked = false
        }
    } else {
        if ((b == "NoAmb") == false) {
            document.getElementById(b).checked = true
        }
    }
}


function OIU() {
    //if (window.top !== window.self) window.top.location.replace(window.self.location.href);
    Q2S("Symbols");
    Q2S("Lowercase");
    Q2S("Uppercase");
    Q2S("Numbers");
    Q2S("Nosimilar");
    Q2S("NoAmb");


    var a = Jm0("pgLength");
    if (a != null && a != "") {
        document.getElementById("pgLength").value = a
    } else {
        document.getElementById("pgLength").value = 16
    }
    d2O();
}