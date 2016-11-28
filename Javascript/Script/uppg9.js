var cell = new Array(5);
for (i = 0; i < cell.length; ++i)
    cell[i] = new Array();

cell[0][0] = "Förnamn:";
cell[0][1] = "Efternamn:";
cell[0][2] = "Telefon:";
cell[1][0] = "Johan";
cell[1][1] = "Leitet";
cell[1][2] = "7716";
cell[2][0] = "Mats";
cell[2][1] = "Loock";
cell[2][2] = "7714";
cell[3][0] = "Simon";
cell[3][1] = "Carlberg";
cell[3][2] = "1337";
cell[4][0] = "bara";
cell[4][1] = "lite";
cell[4][2] = "text";


function generateTable(cell) {
    document.write("<table>");
    for (var row = 0; row < cell.length; row++) {
        document.write("<tr>");

        if (row % 2 !== 0) {
            var bgColor = "silver";
        }
        else {
            bgColor = "white";
        }

        for (var col = 0; col < cell[row].length; col++) {

            if (row === 0) {
                document.write("<th style='background:" + bgColor + ";'>" + cell[row][col] + "</th>");
            }
            else {
                document.write("<td style='background:" + bgColor + ";'>" + cell[row][col] + "</td>");
            }
        }
        document.write("</tr>");

    }
    document.write("</table>");



}