var randomVal1 = Math.round( ( Math.random()*5 ) + 1 );
var randomVal2 = Math.round( ( Math.random()*5 ) + 1 );

var randomImg1 = "images/" + "dice" + randomVal1 + ".png";
var randomImg2 = "images/" + "dice" + randomVal2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImg1);
document.querySelector(".img2").setAttribute("src", randomImg2);

// chainging main heading

var heading = document.querySelector(".heading");

if ( randomOutput(".img1") > randomOutput(".img2") ) {
    heading.innerHTML="🚩 Player 1 wins";
}
else if ( randomOutput(".img1") < randomOutput(".img2") ) {
    heading.innerHTML="Player 2 wins 🚩";
}
else {
    heading.innerHTML="Draw";
}





