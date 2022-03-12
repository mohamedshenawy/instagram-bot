var input = document.getElementById("my-search-input");
var searchIcon = document.getElementById("my-search-icon");
var xSearchIcon = document.getElementById("my-x-search-icon");
var body = document.getElementsByTagName("body")[0];
var header = document.getElementById("header");
var rightSide = document.getElementById("right-side");

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

this.addEventListener("scroll", function () {
  if (this.scrollY > 100) {
    header.style.position = "fixed";
    header.style.zIndex = 99999999;
  } else {
    header.style.position = "static";
  }
});

function DBlClick(e) {
  var d = e.firstElementChild;

  d.style.visibility = "visible";

  setTimeout(() => {
    d.style.visibility = "hidden";
  }, 1000);
}

function likePost(e) {
  if (e.style.color == "red") {
    e.style.color = "black";
  } else {
    e.style.color = "red";
  }
}

function savePost(e) {
  var bm = e.firstElementChild;
  var secondClass = bm.classList[1];
  if (secondClass == "fa-regular") {
    bm.classList.remove(secondClass);
    bm.classList.add("fa-solid");
  } else {
    bm.classList.remove(secondClass);
    bm.classList.add("fa-regular");
  }
}
