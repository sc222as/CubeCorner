var Desktop = {
    count: 0,
    init: function () {
        Desktop.photoYao();
    },
    // Detta stycket i koden skapar själva Iconen som man ska klicka på
    photoYao: function () {
        var a_myPictures = document.createElement("a");
        a_myPictures.setAttribute("href", "#");
        a_myPictures.className = "a_myPictures"
        var img = document.createElement("img");
        img.className = "menuIcons";
        img.setAttribute("src", "appPics/photo_scenery.png");
        a_myPictures.appendChild(img);
        var menu = document.getElementById("menubar");
        menu.appendChild(a_myPictures);
    
    //När man klickar på iconen så startar följande function
    a_myPictures.onclick = function(){
        Desktop.count++;
        var theWindow = new Window("Pictures", "appPics/photo_scenery.png");    //Gör så att det skapas ett litet fönster där bilderna ska presenteras
        var url = "Backend/getJSONThumbs.php";                                  //Kallar på Json
        url.className="url";                                                    //Här så skickar vi informationen till Ajaxen
        new Ajax(url, function(data){
            var maxHeight = 0;
	      	var maxWidth = 0;
	        var images = JSON.parse(data);
            
            for (var i = 0; i < images.length; i++) {
	        var div_images = document.createElement("div");
	        div_images.className = "div_images";
                                                                                //Här så räknar vi så att vi får ut vilken som är det längsta och bredaste bilden. Detta för att vi senare
            if (images[i].thumbWidth > maxWidth) {                              //ska kunna göra så att alla blir så stora. Känns som den enklaste lösningen
	                maxWidth = images[i].thumbWidth;
	            	}
	            
	        if (images[i].thumbHeight > maxHeight) {
	                maxHeight = images[i].thumbHeight;
	            	}

            var img = document.createElement("img");                            //Inget avancerat. Skapar en img-tagg och slänger in den i en klass
            img.className = "span_images";
            img.src = "pics/thumbs/" + images[i].fileName;                      //Hämtar de små blidernas url 
            img.width = images[i].thumbWidth;
            img.height = images[i].thumbHeight;

            var a_images = document.createElement("a");                         //Här så gör vi det möjligt att klicka på bilderna
	            	a_images.href = "#";
	            	a_images.id = i;

                    var myWindow_content = theWindow.getContent();              //När man trycker på en bild så kommer dom att komma upp i ett nytt fönster           
					myWindow_content.appendChild(a_images);

                    a_images.appendChild(div_images);                                               
                div_images.style.width = maxWidth + "px";
                div_images.style.height = maxHeight + "px";
                div_images.appendChild(img);

                a_images.onclick = function(id){                                    //Om man klickar på en bild så händer följande saker
                    var id = this.id;
                    Desktop.count++;

                    new Window(images[id].fileName, "appPics/photo_scenery.png");   
                       
                        window.removeLoading();                                     //Tar bort Laddnings-iconen
                        
                        var bigImage = document.getElementById("myWindow_content_"+Desktop.count);          //Här specificerar vi hur det nya fönstret är uppbyggt
						var bigImage_top = document.getElementById("myWindow_top_"+Desktop.count);
						var bigImage_bottom = document.getElementById("myWindow_bottom_"+Desktop.count);

                        bigImage.className="bigImage";
                        bigImage_top.className="bigImage_top";
                        bigImage_bottom.className="bigImage_bottom";
                        bigImage.style.backgroundImage = "url(pics/" + images[id].fileName + ")";           //Visar bilden som är klickad på
						bigImage.style.width = images[id].width + "px";
						bigImage.style.height = images[id].height + "px";
						bigImage_top.style.width = images[id].width + "px";
						bigImage_bottom.style.width = images[id].width + "px";

                        var setAsDesktopLink = document.createElement("a");                                 //Gör så att man kan klicka på knappen "Use as wallpaper"
						setAsDesktopLink.className="setAsDesktop";
						setAsDesktopLink.href="#";
						var setAsDesktopText = document.createTextNode("Use as wallpaper")
						bigImage_bottom.appendChild(setAsDesktopLink);
						setAsDesktopLink.appendChild(setAsDesktopText);

                        setAsDesktopLink.onclick = function(){                                              //Själva funktionen för att göra den som bakgrundsbild
						
						document.getElementById("container").style.backgroundImage = "url(pics/" + images[id].fileName + ")";
						}
                    }

                    
            }
            window.removeLoading();                                                                         //Tar bord laddningsiconen när Ajax-anropet avslutas
            });
            }
            },
            };
            
            window.onload = Desktop.init;