const back_button = document.getElementById("back_button");
const home_button = document.getElementById("home_button");
const tableOfContents_button = document.getElementById(
  "tableOfContents_button"
);
const next_button = document.getElementById("next_button");
// Chapter1 & pages
const chapter_1 = document.getElementById("chapter_1");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

// Chapter2 & pages
const chapter_2 = document.getElementById("chapter_2");

let current_chapter = 1;
let current_Page = 1;

let chapter_1_Pages = 4;

// function to return home
function home() {
  window.location.href = "index.html";
}

// functions for next and return page
function next_page() {
  if (current_chapter == 1) {
    if (current_Page == chapter_1_Pages) {
      null;
    } else {
      current_Page++;
    }
  }
  if (current_Page == 1) {
    page1.style.display = "block";
    page2.style.display = "none";
  } else if (current_Page == 2) {
    page1.style.display = "none";
    page2.style.display = "block";
  } else if (current_Page == 3) {
    page2.style.display = "none";
    page3.style.display = "block";
  } else if (current_Page == 4) {
    page3.style.display = "none";
    page4.style.display = "block";
  }
  console.log(current_Page);
}

function return_page() {
  if (current_chapter == 1) {
    if (current_Page == 1) {
      null;
    } else {
      current_Page--;
    }
  }
  if (current_Page == 1) {
    page1.style.display = "block";
    page2.style.display = "none";
  } else if (current_Page == 2) {
    page1.style.display = "none";
    page2.style.display = "block";
    page3.style.display = "none";
  } else if (current_Page == 3) {
    page2.style.display = "none";
    page3.style.display = "block";
    page4.style.display = "none";
  } else if (current_Page == 4) {
    page3.style.display = "block";
    page4.style.display = "none";
  }
  console.log(current_Page);
}
