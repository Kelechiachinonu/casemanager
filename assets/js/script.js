
var Index = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    Index++;
    if (Index > x.length) {
        Index = 1
    }
    x[Index - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
};