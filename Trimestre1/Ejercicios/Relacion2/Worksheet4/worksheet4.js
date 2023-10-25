document.write("<table border='2px solid black'><tbody>")

for(i=0;i<6;i++){
    
    switch (i){
        case 0:
            document.write("<tr><td>'screen.width'</td><td>"+screen.width +"</td></tr>")

            break;
        case 1:
            document.write("<tr><td>'screen.height'</td><td>"+screen.height +"</td></tr>")

            break;
        case 2:
            document.write("<tr><td>'screen.availWidth'</td><td>"+screen.availWidth +"</td></tr>")

            break;
        case 3:
            document.write("<tr><td>'screen.availHeight'</td><td>"+screen.availHeight +"</td></tr>")

            break;
        case 4:
            document.write("<tr><td>'screen.colorDepth'</td><td>"+screen.colorDepth +"</td></tr>")

            break;
        case 5:
            document.write("<tr><td>'screen.pixelDepth'</td><td>"+screen.pixelDepth +"</td></tr>")

            break;
    }
    
}


document.write("</tbody></table>")