function Ajax(url, callback) {
    var xhr = this.getXHR();

    xhr.onreadystatechange = function() {                                                   //Svarsfunktionen
        if (xhr.readyState === 4) {                                                         //k�r kod 4 f�r det �r i praktiken bara den som anv�nds
            if (xhr.status >= 200 && xhr.status <= 300 || xhr.status === 304) {             //allt som �r st�rre �n 200 och mindre �n 300 (eller �n 304) tolkas som okej
                callback(xhr.responseText);                                                 //responsetext inneh�ller datan s� den skickar vi tillbaka
                }
                else {
                    console.log("L�sfel, status:" + xhr.status);
                }
            }
        };

        xhr.open("get", url, true);                                                         //konfiguration av anropet.. asynkront anrop

        xhr.send(null);                                                                     //skickar.. vill inte skicka n�tt s� skriver null
}
    Ajax.prototype.getXHR = function() {
        var xhr = null;
        try {
            xhr = new XMLHttpRequest();                                                     //skapar ett xhr-objekt
            }
            catch (error) {
                try {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");                           //ger st�d f�r IE 5 och 6
                    }
                catch (error) {
                    throw new Error("no XHR objects available.");                           //funkar det inte �nd� s� skiter vi i det :)
                    }
                }
                return xhr;
                };