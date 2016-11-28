function birthday() {
    var manad;
    var dag;

    manad = parseInt(prompt("Vilken månad fyller du år (1-12)?") - 1); //-1 för att januari ska tolkas som månad ett och inte månad 0
    dag = parseInt(prompt("Vilken dag fyller du år (1-31)?"));

    var dagensdatum = new Date();

    var datum = new Date(dagensdatum.getFullYear(), manad, dag);

    var fodelsedag = datum - dagensdatum;

    
    if (datum.getDate() === dagensdatum.getDate()) {      //kollar om det är idag personen fyller år och gratulerar på lämpligt sätt :)
        alert("Grattis på födelsedagen!!!!111!!1!!oneoneone!! omg!!!111!!gz!!11!!1!");
    }
    else if (fodelsedag > dagensdatum.getDate()) {
        alert("Du fyller år om: " + Math.ceil(fodelsedag / 86400000) + " dagar."); //kollar hur många dagar det är till personen fyller år  
    }                                                                               // 86400000 gör om svaret till heltal
    else {
        
        datum.setFullYear(dagensdatum.getFullYear() + 1);       //om datumet är nästa år så plussar den på med ett år.
        fodelsedag = datum - dagensdatum;
        alert("Du fyller år om: " + Math.ceil(fodelsedag / 86400000) + " dagar.");
    }
}
