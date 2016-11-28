

var MessageBoard = {

    messages: [],

    init: function () {


        var text = document.getElementById("textfalt");
        var msg = document.getElementById("messages");                                          // h�mtar ut referenser till olika noder och skickar dom till olika variabler
        var skicka = document.getElementById("skickaknapp");
        skicka.onclick = function () {
            var meddelande = document.getElementById("textfalt").value;                         //om jag trycker p� skicka knappen s� skickar den in textf�ltet i var meddelande

            if (meddelande != "") {                                                             //Denna satsen k�rs bara om man skrivit in n�got i textf�ltet
                var pushtext = MessageBoard.messages.push(new Message(meddelande, new Date())); //.push pushar in det som skrivs sist i arrayen
                renderMessages();                                                                //F�ljer labbf�rslaget och skickar in datan i funktionen renderMessage
                document.getElementById("textfalt").value = "";                                 
            };
        }

        text.onkeypress = function (e) {
            if (!e) var e = window.event;                                                       //H�r �r koden som g�r att man skickar p� enter och om man h�ller inne shift-tangenten
            if (!e.shiftKey && e.keyCode === 13) {                                              //s� skickas inte meddelandet
                document.getElementById("skickaknapp").click();
                return false;

            }
        }

        var renderMessages = function () {
            //Remove all messages
            document.getElementById("messages").innerHTML = "";

            //Renders all messages
            for (var i = 0; i < MessageBoard.messages.length; ++i) {
                renderMessage(i);
            }
            var obj = document.getElementById("messages");
            bj.scrollTop = obj.scrollHeight
        }

        var removeMessage = function (messageID) {

            var sakerkoll = confirm("Vill du ta bort ditt meddelande?");                        //F�r fram en ruta som fr�gar om du vill ta bort meddelandet och tar bort ett fr�n meddelandecountern
            if (sakerkoll) {                                                                    // om meddelandecountern �r h�gre �n noll
                MessageBoard.messages.splice(messageID, 1);
                var msgID = messageID - 1;
                if (msgID < 0) {
                    nummer(messageID - 1);
                }
            }




        }

        var renderMessage = function (messageID) {
            var msgDiv = document.getElementById("messages");
            var mainNode = document.createElement("div");                   //l�gger till en ny meddelanderuta
            msgDiv.appendChild(mainNode);


            var msgNode = document.createElement("p");
            msgNode.innerHTML = MessageBoard.messages[messageID].getText();
            mainNode.appendChild(msgNode);                                                          //appendchild l�gger till msgNode sist i v�r mainNode

            var buttonNode = document.createElement("div");
            buttonNode.className = "buttons";
            mainNode.appendChild(buttonNode);                                                       //appendchild l�gger till buttonNode sist i v�r mainNode

            var dateNode = document.createElement("a");
            dateNode.href = '#';                                                                    //G�r s� mark�ren �ndras n�r jag h�ller �ver knappen
            dateNode.innerHTML = "<img src ='pics/pics/information.png' alt='' /> "
            buttonNode.appendChild(dateNode);                                                       //appendchild l�gger till dateNode sist i v�r buttonNode
            dateNode.onclick = function () {
                alert(MessageBoard.messages[messageID].getDate());
                return false;
            }

            var removeNode = document.createElement("a");
            removeNode.href = '#';                                                                  //G�r s� mark�ren �ndras n�r jag h�ller �ver knappen
            removeNode.innerHTML = "<img src ='pics/pics/close.png' alt=''/>";
            removeNode.onclick = function () {
                removeMessage(messageID);
                renderMessages();
                return false;
            }

            buttonNode.appendChild(removeNode);

            var timeNode = document.createElement("p");
            timeNode.className = "tid";
            timeNode.innerHTML = MessageBoard.messages[messageID].getTime();
            mainNode.appendChild(timeNode);                                                     //appendchild l�gger till timenode sist efter mainNode

            nummer(messageID);

        }
        var nummer = function (messageID) {
            var nummerDiv = document.getElementById("nummer");
            nummerDiv.innerHTML = "";
            nummerDiv.innerHTML = ("Antal meddelande ") + (messageID + 1);
        }




    }
};


   
   
   
   
   
   
   
   
    window.onload = MessageBoard.init;