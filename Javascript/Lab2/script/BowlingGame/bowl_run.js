/* I denna fil k�rs v�r applikation.
 * Vi anv�nder window.onload f�r att starta applikationen n�r
 * f�nstret laddat klart. * 
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
		
		
		/* H�r anropar vi de funktioner som skapats och sparats undan i en array 
		 * Detta anv�nds f�r att visa p� ett visst problem med closures
		 * Se BowlingGame.js
		 */
		game.pins[1]();
		game.pins[2]();
		game.pins[10]();
	}	
	
};

// H�r ser vi till att starta applikationen n�r f�nstret laddat klart.
window.onload = bowlingApp.init;  // Observera att du inte ska skriva: bowlingApp.init();