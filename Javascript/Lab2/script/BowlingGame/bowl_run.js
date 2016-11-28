/* I denna fil körs vår applikation.
 * Vi använder window.onload för att starta applikationen när
 * fönstret laddat klart. * 
 */

var bowlingApp = {

	init: function(){
		
		/* Vi skapar en array och fyller den med Player-objekt */
		var players = [];
		
		players[0] = new Player("Penny", 25, "Left");
		players[1] = new Player("Leonard", 30, "Right");
		players[2] = new Player("Sheldon", 29, "Right");

		// Vi skapar oss ett spel		
		var game = new BowlingGame(players);
		
		// och vi startar spelet.
		game.play();
		
		
		/* Här anropar vi de funktioner som skapats och sparats undan i en array 
		 * Detta används för att visa på ett visst problem med closures
		 * Se BowlingGame.js
		 */
		game.pins[1]();
		game.pins[2]();
		game.pins[10]();
	}	
	
};

// Här ser vi till att starta applikationen när fönstret laddat klart.
window.onload = bowlingApp.init;  // Observera att du inte ska skriva: bowlingApp.init();