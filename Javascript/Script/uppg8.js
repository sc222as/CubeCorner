function birthday() {
    var manad;
    var dag;

    manad = parseInt(prompt("Vilken m�nad fyller du �r (1-12)?") - 1); //-1 f�r att januari ska tolkas som m�nad ett och inte m�nad 0
    dag = parseInt(prompt("Vilken dag fyller du �r (1-31)?"));

    var dagensdatum = new Date();

    var datum = new Date(dagensdatum.getFullYear(), manad, dag);

    var fodelsedag = datum - dagensdatum;

    
    if (datum.getDate() === dagensdatum.getDate()) {      //kollar om det �r idag personen fyller �r och gratulerar p� l�mpligt s�tt :)
        alert("Grattis p� f�delsedagen!!!!111!!1!!oneoneone!! omg!!!111!!gz!!11!!1!");
    }
    else if (fodelsedag > dagensdatum.getDate()) {
        alert("Du fyller �r om: " + Math.ceil(fodelsedag / 86400000) + " dagar."); //kollar hur m�nga dagar det �r till personen fyller �r  
    }                                                                               // 86400000 g�r om svaret till heltal
    else {
        
        datum.setFullYear(dagensdatum.getFullYear() + 1);       //om datumet �r n�sta �r s� plussar den p� med ett �r.
        fodelsedag = datum - dagensdatum;
        alert("Du fyller �r om: " + Math.ceil(fodelsedag / 86400000) + " dagar.");
    }
}
