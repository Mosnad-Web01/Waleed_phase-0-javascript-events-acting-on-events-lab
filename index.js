// Get the dodger element
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4"; // Set color to pink
dodger.style.bottom = "0px"; // Ensure it starts at the bottom
dodger.style.left = "0px"; // Start position

// Function to move dodger left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move dodger right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left < 360) {
    // 400px - 40px (width of dodger)
    dodger.style.left = `${left + 1}px`;
  }
}

// Add event listener for keydown
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
