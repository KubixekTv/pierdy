function licz(){
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var placehold = document.getElementById("placeholderScore");
    var score = document.getElementById("score");
    var scoreBG = document.getElementById("scoreBG");
    var napis = "";

    placehold.style.display = "none";
    score.style.display = "block";
    scoreBG.style.color = "white";
    if(x == null || x == "", y == null || y == "", x == 0 || y == 0){
        napis = "Podano złe dane...";
    }
    else if(x == y){
        napis = "Liczby są takie same...";
    }
    else{
        if(x<y && y>x){
            for(var i = x; i<=y; i++){
                napis = napis + i + " ";
            }
        }
        else if(y<x && x>y){
            for(var i = y; i<=x; i++){
                napis = napis + i + " ";
            }
        }
    }
    napis = " " + napis;
    score.innerHTML = napis;
}