function triangel () {

    var sida1 = parseInt(prompt("Skriv in sida 1"));
    var sida2 = parseInt(prompt("Skriv in sida 2")); //tar in de tv� sidorna

    if (sida1 < 1 || sida2 < 1) {
        alert("Talet m�ste vara st�rre �n 0..")
        return;
    }
    var x = Math.pow(2, sida1)  //tar sida1 g�nger sig sj�lv
    var y = Math.pow(2, sida2)  //tar sida2 g�nger sig sj�lv
    var z = x + y;              //tar sida1 + sida2 och l�gger in i variabeln z
    alert (Math.sqrt(z));       //roten ur z


}