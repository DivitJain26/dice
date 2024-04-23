// calling function

randomOutput(".img1");
randomOutput(".img2");

// generating function

function randomOutput(img) {

    var randomVal = Math.round( ( Math.random()*5 ) + 1 );
    var randomImg = "images/" + "dice" + randomVal + ".png";
    document.querySelector(img).setAttribute("src", randomImg);
    return randomVal;
}

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





