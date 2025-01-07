function playMusic(songElement) {
    const songImage = document.getElementById("songImage");
    const songTitle = document.getElementById("songTitle");
    const audioPlayer = document.getElementById("audioPlayer");

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