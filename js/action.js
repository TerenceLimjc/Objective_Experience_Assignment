
// Add active class to the current button (highlight it)
var header = document.getElementById("menuDiv");
var section = header.getElementsByClassName("section");
for (var i = 0; i < section.length; i++) {
  section[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    this.style.color = "#ffff"
  });
}
