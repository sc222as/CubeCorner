function triangel () {

    var sida1 = parseInt(prompt("Skriv in sida 1"));
    var sida2 = parseInt(prompt("Skriv in sida 2")); //tar in de två sidorna

    if (sida1 < 1 || sida2 < 1) {
        alert("Talet måste vara större än 0..")
        return;
    }
    var x = Math.pow(2, sida1)  //tar sida1 gånger sig själv
    var y = Math.pow(2, sida2)  //tar sida2 gånger sig själv
    var z = x + y;              //tar sida1 + sida2 och lägger in i variabeln z
    alert (Math.sqrt(z));       //roten ur z


}