var Memory = {

    array: [], // array att ha spelplanen i
    counter: 0, //counter f�r hur m�nga r�tt man ska ha innan spelet slutar
    forsok: 1, //antal f�rs�k man gjort
    klick: 0,  //om det �r f�rsta eller andra klicket 

    init: function () {        
        array = RandomGenerator.getPictureArray(4, 2);                                                                              //h�r tar vi informationen fr�n randomgenerater och l�gger i en array
        Memory.spelplan();                                                                                                          //skickar iv�g allt till spelplanen
    },

    spelplan: function () {        	
        var div = document.getElementById("memory");                                                                                //g�r s� att spelplanen byggs upp i div-taggen memory
        var table = document.createElement("table");
        div.appendChild(table);

        var id = 0;                                                                                                                 //idet som brickan kommer f�

        for (var rows = 0; rows < 4; rows++) {
            var tr = document.createElement("tr");                                                                                  //f�r varje rad som skapas s� skapar vi ocks� en tr-tagg
            tr.className = "rows";
            table.appendChild(tr);

            for (var cols = 0; cols < 2; cols++) {                                                                                  //f�r varje kolumn s� skapar vi: en td-tagg, en a tagg och en img tagg.
                var td = document.createElement("td");
                td.className = "cols";
                tr.appendChild(td);
                var a = document.createElement("a");
                a.setAttribute("href", "#");                                                                                       //g�r s� att a-taggen inte f�r n�n s�kv�g s� man inte kan fuska
                td.appendChild(a);
                var img = document.createElement("img");
                img.setAttribute("src", "pics/0.png");                                                                              //img-taggen f�r i detta fallet ett fr�getecken som bild eftersom det �r 0.png
                img.className = "pics";
                a.appendChild(img);
                Memory.klickadbricka(id, a, img)                                                                                    //skickar allt vidare till klickadbricka
                id++;                                                                                                               //s�tter id till +1
            }
        }
    },



    klickadbricka: function (id, a, img) {                                                                                          //Funktionen som s�ger vad som ska h�nda efter man klickat p� en bricka                                
        a.onclick = function () {                                                                                                   //G�r s� att man inte kan klicka p� en bricka flera g�nger
            if (img.getAttribute("src") === "pics/0.png") {
                Memory.array.push(a);
                if (Memory.array.length === 1 || Memory.array.length === 2) {                                                       //oavsett om det �r f�rsta eller andra klicket s� kommer bilden att bytas mot en slumpad bild
                    var bricka = this.getElementsByTagName("img")[0].setAttribute("src", "pics/" + array[id] + ".png");             //h�r s� fixas vi s� att den slumpade bilden l�nkas in r�tt
                    if (Memory.array.length === 2) {                                                                                //detta k�rs bara om det �r andra g�ngen man klickar
                        setTimeout(function () {
                            Memory.kontroll(Memory.array);                                                                          //Skickar vidare till funktionen som kontrollerar brickorna
                        }, 750);                                                                                                    //timeout funktionen g�r s� att man f�r se brickorna i 750ms om dom �r fel
                    }
                }
            }
            else {
                return;
                alert(" N�got �r fel.. Du f�rs�ker v�l inte fuska? ;)");
            }
        }
    },

    kontroll: function (array, a, img) {                                                                                            //funktionen f�r att kontrollera om brickorna �r lika eller olika

        var brickaett = array[0].getElementsByTagName("img")[0].getAttribute("src");                                                //l�gg tv� olika brickor i varsin variabel
        var brickatva = array[1].getElementsByTagName("img")[0].getAttribute("src");


        if (brickaett === brickatva) {                                                                                              //detta k�rs om bilderna �r lika

            Memory.counter++;                                                                                                       //r�knar upp till fyra r�tta resultat och n�r det �r fyra s� presenteras vinst-texten
            if (Memory.counter === 4) {                                                                                             // om man k�r med fler brickor f�r man �ndra denna (t.ex. 8 r�tt �r lika med en 4x4 spelplan)
                alert("Congratulations!!! You have won!! Omg you are so awesome! .\n Number of tries: " + Memory.forsok + "")
            }
            Memory.array = [];                                                                                                      //t�mmer arrayen
            Memory.klick = 0;
        }

        else {                                                                                                                      //om brickorna inte �r lika s� �terg�r dom till fr�getecknet
            array[0].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
            array[1].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");

            Memory.array = [];                                                                                                      //t�mmer arrayen
            Memory.klick = 0;
        }
        Memory.forsok++;                                                                                                            //r�knar upp f�rs�k med ett 
    }






}
window.onload = Memory.init;
