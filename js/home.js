var input = document.getElementById("my-search-input");
var searchIcon = document.getElementById("my-search-icon");
var xSearchIcon = document.getElementById("my-x-search-icon");
var body = document.getElementsByTagName("body")[0];

input.addEventListener("focus", function () {
  searchIcon.style.display = "none";
  xSearchIcon.style.display = "inline";
});

body.addEventListener("click", function (e) {
  if (e.target.id != "my-search-input") {
    searchIcon.style.display = "inline";
    xSearchIcon.style.display = "none";
  }
});
