var Memory = {

    array: [], // array att ha spelplanen i
    counter: 0, //counter för hur många rätt man ska ha innan spelet slutar
    forsok: 1, //antal försök man gjort
    klick: 0,  //om det är första eller andra klicket 

    init: function () {        
        array = RandomGenerator.getPictureArray(4, 2);                                                                              //här tar vi informationen från randomgenerater och lägger i en array
        Memory.spelplan();                                                                                                          //skickar iväg allt till spelplanen
    },

    spelplan: function () {        	
        var div = document.getElementById("memory");                                                                                //gör så att spelplanen byggs upp i div-taggen memory
        var table = document.createElement("table");
        div.appendChild(table);

        var id = 0;                                                                                                                 //idet som brickan kommer få

        for (var rows = 0; rows < 4; rows++) {
            var tr = document.createElement("tr");                                                                                  //för varje rad som skapas så skapar vi också en tr-tagg
            tr.className = "rows";
            table.appendChild(tr);

            for (var cols = 0; cols < 2; cols++) {                                                                                  //för varje kolumn så skapar vi: en td-tagg, en a tagg och en img tagg.
                var td = document.createElement("td");
                td.className = "cols";
                tr.appendChild(td);
                var a = document.createElement("a");
                a.setAttribute("href", "#");                                                                                       //gör så att a-taggen inte får nån sökväg så man inte kan fuska
                td.appendChild(a);
                var img = document.createElement("img");
                img.setAttribute("src", "pics/0.png");                                                                              //img-taggen får i detta fallet ett frågetecken som bild eftersom det är 0.png
                img.className = "pics";
                a.appendChild(img);
                Memory.klickadbricka(id, a, img)                                                                                    //skickar allt vidare till klickadbricka
                id++;                                                                                                               //sätter id till +1
            }
        }
    },



    klickadbricka: function (id, a, img) {                                                                                          //Funktionen som säger vad som ska hända efter man klickat på en bricka                                
        a.onclick = function () {                                                                                                   //Gör så att man inte kan klicka på en bricka flera gånger
            if (img.getAttribute("src") === "pics/0.png") {
                Memory.array.push(a);
                if (Memory.array.length === 1 || Memory.array.length === 2) {                                                       //oavsett om det är första eller andra klicket så kommer bilden att bytas mot en slumpad bild
                    var bricka = this.getElementsByTagName("img")[0].setAttribute("src", "pics/" + array[id] + ".png");             //här så fixas vi så att den slumpade bilden länkas in rätt
                    if (Memory.array.length === 2) {                                                                                //detta körs bara om det är andra gången man klickar
                        setTimeout(function () {
                            Memory.kontroll(Memory.array);                                                                          //Skickar vidare till funktionen som kontrollerar brickorna
                        }, 750);                                                                                                    //timeout funktionen gör så att man får se brickorna i 750ms om dom är fel
                    }
                }
            }
            else {
                return;
                alert(" Något är fel.. Du försöker väl inte fuska? ;)");
            }
        }
    },

    kontroll: function (array, a, img) {                                                                                            //funktionen för att kontrollera om brickorna är lika eller olika

        var brickaett = array[0].getElementsByTagName("img")[0].getAttribute("src");                                                //lägg två olika brickor i varsin variabel
        var brickatva = array[1].getElementsByTagName("img")[0].getAttribute("src");


        if (brickaett === brickatva) {                                                                                              //detta körs om bilderna är lika

            Memory.counter++;                                                                                                       //räknar upp till fyra rätta resultat och när det är fyra så presenteras vinst-texten
            if (Memory.counter === 4) {                                                                                             // om man kör med fler brickor får man ändra denna (t.ex. 8 rätt är lika med en 4x4 spelplan)
                alert("Congratulations!!! You have won!! Omg you are so awesome! .\n Number of tries: " + Memory.forsok + "")
            }
            Memory.array = [];                                                                                                      //tömmer arrayen
            Memory.klick = 0;
        }

        else {                                                                                                                      //om brickorna inte är lika så återgår dom till frågetecknet
            array[0].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
            array[1].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");

            Memory.array = [];                                                                                                      //tömmer arrayen
            Memory.klick = 0;
        }
        Memory.forsok++;                                                                                                            //räknar upp försök med ett 
    }






}
window.onload = Memory.init;
