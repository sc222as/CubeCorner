
function tenta(tentor) {

    var medel = 0;
    var max = 0;
    var min = 0;

    


    for (var i = 0; i < tentor.length; i++) {               //adderar indexet "i" till medel 
        
        medel = medel + tentor[i];
    }

    var resultat = [];

    resultat[0] = medel / tentor.length;                     //moment 1
    resultat[1] = max = Math.max.apply(Math, tentor);       //plockar ut högsta resultatet ur arrayen
    resultat[2] = min = Math.min.apply(Math, tentor);       //plockar ut lägsta resultatet ur arrayen

    console.log("Medel: " + resultat[0] + "\n" + "Max: " + resultat[1] + "\n" + "Min: " + resultat[2] + " \nFrågor? :)");

}
