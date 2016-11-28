function convert(text) {
    alert("Okonverterad text;\n" + text); //skriver ut orginaltexten
 
    var konverteradtext = ""; //en liten variabel

    for (var i = 0; i < text.length; i++) {
        var bokstav = text.charAt(i); //lägger en bokstav framåt hela tiden i variabeln bokstav eftersom i blir +1 hela tiden
        var convbokstav;
        if (bokstav == "a" || bokstav == "A") {             //gör om a och A till #
            convbokstav = "#";
            konverteradtext = konverteradtext + convbokstav;
        }
        else if (bokstav == bokstav.toLowerCase() && bokstav != " ") {   //gör om till små bokstäver om det inte är ett " "
            convbokstav = bokstav.toUpperCase();
            konverteradtext = konverteradtext + convbokstav;
        }
        else if (bokstav == bokstav.toUpperCase() && bokstav != " ") {  //gör om till stora bokstäver om det inte är ett " "
            convbokstav = bokstav.toLowerCase();
            konverteradtext = konverteradtext + convbokstav;
        }
        else {
            convbokstav = bokstav;
            konverteradtext = konverteradtext + convbokstav;        //gör ingenting med tecken som inte kan konverteras
        }
    }
    alert(konverteradtext);


}