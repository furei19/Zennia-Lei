window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
  }, 1000); // 3000 milliseconds = 3 seconds
});
