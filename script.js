(function() {
  let squares = document.querySelectorAll(".square");
  let display = document.querySelector("#display");
  let newColor = document.querySelector(".newColor");

  changeColor();

  newColor.addEventListener("click", changeColor);

  function changeColor() {
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = genrateRandomHexColor();
      squares[i].addEventListener("click", function() {
        display.textContent = this.style.backgroundColor;
      });
    }
  }

  function genrateRandomHexColor() {
    let random, hexArr, str;

    str = "#";
    hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

    for (var i = 0; i < 6; i++) {
      random = Math.floor(Math.random() * hexArr.length);
      str += hexArr[random];
    }

    return str;
  }
})();
