function odliczanie(){
    var data = new Date();

    var dzien = data.getDate();
    var miesiac = data.getMonth();

    var nazwamiesiac;
    switch(miesiac) {
        case 0:
            nazwamiesiac = "Styczeń";
            break;
        case 1:
            nazwamiesiac = "Luty";
            break;
        case 2:
            nazwamiesiac = "Marzec";
            break;
        case 3:
            nazwamiesiac = "Kwiecień";
            break;
        case 4:
            nazwamiesiac = "Maj";
            break;
        case 5:
            nazwamiesiac = "Czerwiec";
            break;
        case 6:
            nazwamiesiac = "Lipiec";
            break;
        case 7:
            nazwamiesiac = "Sierpień";
            break;
        case 8:
            nazwamiesiac = "Wrzesień";
            break;
        case 9:
            nazwamiesiac = "Październik";
            break;
        case 10:
            nazwamiesiac = "Listopad";
            break;
        case 11:
            nazwamiesiac = "Grudzień";
            break;
      }
    var rok = data.getFullYear();

    var godzina = data.getHours();
    if(godzina<10) godzina = "0" + godzina;

    var minuta = data.getMinutes();
    if(minuta<10) minuta = "0" + minuta;
    
    var sekunda = data.getSeconds();
    if(sekunda<10) sekunda = "0" + sekunda;

    document.getElementById("date").innerHTML = dzien + " " + nazwamiesiac + " " + rok;
    document.getElementById("clock").innerHTML = godzina + ":" + minuta + ":" + sekunda;

    setTimeout("odliczanie()", 1000);
}