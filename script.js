function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topMenu") {
        x.className += " responsive";
    } else {
        x.className = "topMenu";
    }
}
