// Styling/Interactions for the Game Buttons/Links below:

document.getElementById('sub-gs1-id').addEventListener("click", function() {
    document.getElementById('sub-gs1-id').style.opacity = "0";
    document.getElementById('sub-gs1-id').style.transform = "translateY(-100%)";
    document.getElementById('sub-gs1-id').style.visibility = "hidden";
    document.getElementById('sub-gs1-id').style.transition = ".3s";
    document.getElementById('sub-game-selections-id').style.display = "block";
    document.getElementById('sub-game-selections-id').style.opacity = "1";
    document.getElementById('sub-game-selections-id').style.transform = "translateX(0%)";
    document.getElementById('sub-game-selections-id').style.visibility = "visible";
    document.getElementById('sub-game-selections-id').style.transition = ".3s";
    document.getElementById('down-arrow-id').style.display = "none";
    document.getElementById('close-id').style.display = "block";
    document.getElementById('gs4-id').style.marginTop = "0rem";
  });

document.getElementById('close-id').addEventListener("click", function() {
    document.getElementById('down-arrow-id').style.display = "block";
    document.getElementById('close-id').style.display = "none";
    document.getElementById('sub-gs1-id').style.display = "block";
    document.getElementById('sub-gs1-id').style.opacity = "1";
    document.getElementById('sub-gs1-id').style.transform = "translateY(0%)";
    document.getElementById('sub-gs1-id').style.visibility = "visible";
    document.getElementById('sub-gs1-id').style.transition = ".3s";
    document.getElementById('sub-game-selections-id').style.opacity = "0";
    document.getElementById('sub-game-selections-id').style.transform = "translateX(-100%)";
    document.getElementById('sub-game-selections-id').style.visibility = "hidden";
    document.getElementById('sub-game-selections-id').style.transition = "0s";
    document.getElementById('gs4-id').style.marginTop = "-8.4rem";
  });