var randomno1 = Math.floor(Math.random() * 6) + 1;
var randomimg1 = "dice" + randomno1 + ".png";
var randomdiceimg1 = document.querySelectorAll("img")[0];
randomdiceimg1.setAttribute("src", randomimg1);

var randomno2 = Math.floor(Math.random() * 6) + 1;
var randomimg2 = "dice" + randomno2 + ".png";
var randomdiceimg2 = document.querySelectorAll("img")[1];
randomdiceimg2.setAttribute("src", randomimg2);

if(randomno1 > randomno2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if(randomno2 > randomno1){
    document.querySelector("h1").innerHTML="🚩 Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}