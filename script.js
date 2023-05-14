
// Function to toggle dark mode
function toggleDarkMode() {
    var body = document.body;
    var currentBackgroundColor = body.style.backgroundColor;
  
    if (currentBackgroundColor === "" || currentBackgroundColor === "rgb(23, 25, 39)") {
      // Switch to light mode
      body.style.backgroundColor = "#ffffff";
    } else {
      // Switch to dark mode
      body.style.backgroundColor = "#171927";
    }
  }
  