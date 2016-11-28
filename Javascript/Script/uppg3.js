




function guessthenumber()
{
var secretnumber = Math.floor((Math.random() * 101) + 1);     //Genererar ett hemligt nummer och avrundar det till närmsta heltal (neråt)
var gissning = prompt("Guess a secret number, I'm thinking of a number between 1 and 100");     //säger till användaren att mata in ett heltal som sparas i variabeln gissning
var antalgissningar = 1;                                                                        //räknare för antal gissningar

    while (gissning != secretnumber)                                                            /* så länge gissning inte är detsamma som det hemliga numret så kommer det loopas att svaret är fel och variabeln hogrelagre kommer skrivas över hela tiden och berätta om det är högre eller lägre */
    {
        if (gissning < secretnumber)                                                            
        {
            var hogrelagre = "högre";
        }

        else  
        {
            var hogrelagre = "lägre";
        }
        antalgissningar++;

        gissning = prompt("tyvärr så är svaret " + hogrelagre + " än " + gissning + " försök igen");
    }
    alert("Du gissa rätt! Det hemliga talet var " +secretnumber+ " Det tog bara " + antalgissningar + " antal gissningar! Du är awesome!");  //grattis du Gissade rätt! Have a cookie :) Visar det hemliga talet och hur många ggr du gissa :).
}
