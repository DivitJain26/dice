// generating random vales fom 1 to 6

var randomVal1 = Math.round( ( Math.random()*5 ) + 1 );
var randomVal2 = Math.round( ( Math.random()*5 ) + 1 );

var randomImg1 = "images/" + "dice" + randomVal1 + ".png";
var randomImg2 = "images/" + "dice" + randomVal2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImg1);
document.querySelector(".img2").setAttribute("src", randomImg2);


var heading = document.querySelector(".heading");

if (randomVal1 > randomVal2) {
    heading.innerHTML="🚩 Player 1 wins";
}
else if (randomVal1 < randomVal2) {
    heading.innerHTML="Player 2 wins 🚩";
}
else {
    heading.innerHTML="Draw";
}







