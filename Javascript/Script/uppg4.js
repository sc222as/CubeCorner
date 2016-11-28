

function meny() {
    while ( val !== 0)  {
        var val = prompt("0. Exit \n\n1. Fahrenheit to Celsius\n2. Celsius to Fahrenheit\n3. Guess number");
        if (val == 0) break

        if (val == 1) {
            var fahrenheit = prompt("fahrenheit?")
            var celsius = (fahrenheit - 32) * 5 / 9;
            alert(celsius) 
         }
        if (val == 2) {
            var celsius = prompt("celsius?")
            var fahrenheit = 9 / 5 * celsius + 32;
            alert(fahrenheit)
         }

        if (val == 3) {
         guessthenumber(); }

        

    };
    console.log("Klart");
};