




function guessthenumber()
{
var secretnumber = Math.floor((Math.random() * 101) + 1);     //Genererar ett hemligt nummer och avrundar det till n�rmsta heltal (ner�t)
var gissning = prompt("Guess a secret number, I'm thinking of a number between 1 and 100");     //s�ger till anv�ndaren att mata in ett heltal som sparas i variabeln gissning
var antalgissningar = 1;                                                                        //r�knare f�r antal gissningar

    while (gissning != secretnumber)                                                            /* s� l�nge gissning inte �r detsamma som det hemliga numret s� kommer det loopas att svaret �r fel och variabeln hogrelagre kommer skrivas �ver hela tiden och ber�tta om det �r h�gre eller l�gre */
    {
        if (gissning < secretnumber)                                                            
        {
            var hogrelagre = "h�gre";
        }

        else  
        {
            var hogrelagre = "l�gre";
        }
        antalgissningar++;

        gissning = prompt("tyv�rr s� �r svaret " + hogrelagre + " �n " + gissning + " f�rs�k igen");
    }
    alert("Du gissa r�tt! Det hemliga talet var " +secretnumber+ " Det tog bara " + antalgissningar + " antal gissningar! Du �r awesome!");  //grattis du Gissade r�tt! Have a cookie :) Visar det hemliga talet och hur m�nga ggr du gissa :).
}
