function convert(text) {
    alert("Okonverterad text;\n" + text); //skriver ut orginaltexten
 
    var konverteradtext = ""; //en liten variabel

    for (var i = 0; i < text.length; i++) {
        var bokstav = text.charAt(i); //l�gger en bokstav fram�t hela tiden i variabeln bokstav eftersom i blir +1 hela tiden
        var convbokstav;
        if (bokstav == "a" || bokstav == "A") {             //g�r om a och A till #
            convbokstav = "#";
            konverteradtext = konverteradtext + convbokstav;
        }
        else if (bokstav == bokstav.toLowerCase() && bokstav != " ") {   //g�r om till sm� bokst�ver om det inte �r ett " "
            convbokstav = bokstav.toUpperCase();
            konverteradtext = konverteradtext + convbokstav;
        }
        else if (bokstav == bokstav.toUpperCase() && bokstav != " ") {  //g�r om till stora bokst�ver om det inte �r ett " "
            convbokstav = bokstav.toLowerCase();
            konverteradtext = konverteradtext + convbokstav;
        }
        else {
            convbokstav = bokstav;
            konverteradtext = konverteradtext + convbokstav;        //g�r ingenting med tecken som inte kan konverteras
        }
    }
    alert(konverteradtext);


}