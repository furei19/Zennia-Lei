const audioPlayer = document.getElementById("audioPlayer");
let toggle = 0;

function playMusic(songElement) {
  document.getElementById("audio-controls-pause-play").style.display = "flex";
  document.getElementById("pause").style.display = "block";
  document.getElementById("play").style.display = "none";
  const songImage = document.getElementById("songImage");
  const songTitle = document.getElementById("songTitle");

  // Query the image and title within the clicked songElement
  const songImgElement = songElement.querySelector("img");
  const songTitleElement = songElement.querySelector("h4");

  // Get the audio source from the data-audio attribute
  const audioSource = songElement.getAttribute("data-audio");

  // Remove highlight from any previously highlighted song
  const previouslyActive = document.querySelector(".active-song");
  if (previouslyActive) {
    previouslyActive.classList.remove("active-song");
    previouslyActive.style.backgroundColor = ""; // Reset background color
  }

  // Highlight the clicked song
  songElement.classList.add("active-song");
  songElement.style.backgroundColor = "#e7e7e7";

  // Update the now-playing image, title, and audio
  if (songImgElement) {
    songImage.src = songImgElement.src;
  }

  if (songTitleElement) {
    songTitle.textContent = songTitleElement.textContent;
  }

  if (audioSource) {
    audioPlayer.src = audioSource; // Update the audio source
    audioPlayer.load(); // Load the new audio
    audioPlayer.play(); // Start playing
  }
}

function clickHandler() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    document.getElementById("pause").style.display = "block";
    document.getElementById("play").style.display = "none";
  } else {
    audioPlayer.pause();
    document.getElementById("play").style.display = "block";
    document.getElementById("pause").style.display = "none";
  }
}

function toggle_drop_down(element, containerId) {
  const arrow = element.querySelector(".arrow");
  const arrowDown = element.querySelector(".arrow-down");
  const container = document.getElementById(containerId);

  // Determine if the clicked container is currently open
  const isCurrentlyOpen = container.style.display === "grid";

  // Close all containers and reset arrows
  document.querySelectorAll(".wrapped-title").forEach((title) => {
    const otherArrow = title.querySelector(".arrow");
    const otherArrowDown = title.querySelector(".arrow-down");
    const otherContainerId = title
      .getAttribute("onclick")
      .match(/'([^']+)'/)[1];
    const otherContainer = document.getElementById(otherContainerId);

    if (otherContainer) {
      otherContainer.style.display = "none"; // Close all other containers
      otherArrow.style.display = "block"; // Reset all arrows to initial state
      otherArrowDown.style.display = "none";
    }
  });

  // Toggle the clicked container based on its current state
  if (isCurrentlyOpen) {
    container.style.display = "none";
    arrow.style.display = "block";
    arrowDown.style.display = "none";
  } else {
    container.style.display = "grid";
    arrow.style.display = "none";
    arrowDown.style.display = "block";
  }

  console.log(
    `${isCurrentlyOpen ? "Closed" : "Opened"} container: ${containerId}`
  );
}
