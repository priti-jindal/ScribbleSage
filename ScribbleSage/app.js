'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * search bar toggle
 */

const searchBar = document.querySelector("[data-search-bar]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleSearchBar = function () {
  searchBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(searchTogglers, "click", toggleSearchBar);

// Get the modal
let modal = document.getElementById('add-blog-modal');

// Get the button that opens the modal
let btn = document.getElementById("add-blog-btn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the form element
const blogForm = document.getElementById("blog-form");

// Add event listener directly to the form element
blogForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let title = document.getElementById("blog-title").value;
  let content = document.getElementById("blog-content").value;
  let blogContainer = document.querySelector(".container .blog-container"); // Modified this line

  let newBlog = document.createElement("div");
  newBlog.classList.add("blog");
  newBlog.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p>";
  blogContainer.appendChild(newBlog);

  // Close the modal
  modal.style.display = "none";

  // Reset form fields
  document.getElementById("blog-title").value = "";
  document.getElementById("blog-content").value = "";
});

// // Get the form element
// const blogForm = document.getElementById("blog-form");

// // Add event listener directly to the form element
// blogForm.addEventListener("submit", function(event) {
//   event.preventDefault();
//   let title = document.getElementById("blog-title").value;
//   let content = document.getElementById("blog-content").value;
//   let blogContainer = document.querySelector(".container .blog-container"); // Modified this line

//   let newBlog = document.createElement("div");
//   newBlog.classList.add("blog");
//   newBlog.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p>";
//   blogContainer.appendChild(newBlog);

//   // Close the modal
//   modal.style.display = "none";

//   // Reset form fields
//   document.getElementById("blog-title").value = "";
//   document.getElementById("blog-content").value = "";
// });

// // Get the form element
// const blogForm = document.getElementById("blog-form");

// // Add event listener directly to the form element
// blogForm.addEventListener("submit", function(event) {
//   event.preventDefault();
//   let title = document.getElementById("blog-title").value;
//   let content = document.getElementById("blog-content").value;
//   let blogContainer = document.querySelector(".container .blog-container"); // Modified this line

//   let newBlog = document.createElement("div");
//   newBlog.classList.add("blog");
//   newBlog.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p>";
//   blogContainer.appendChild(newBlog);

//   // Close the modal
//   modal.style.display = "none";

//   // Reset form fields
//   document.getElementById("blog-title").value = "";
//   document.getElementById("blog-content").value = "";
// });

// Get the form element
// const blogForm = document.getElementById("blog-form");

// // Add event listener directly to the form element
// blogForm.addEventListener("submit", function(event) {
//   event.preventDefault();
//   let title = document.getElementById("blog-title").value;
//   let content = document.getElementById("blog-content").value;
//   let blogContainer = document.querySelector(".blog-container");

//   let newBlog = document.createElement("div");
//   newBlog.classList.add("blog");
//   newBlog.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p>";
//   blogContainer.appendChild(newBlog);

//   // Close the modal
//   modal.style.display = "none";

//   // Reset form fields
//   document.getElementById("blog-title").value = "";
//   document.getElementById("blog-content").value = "";
// });


// Handle form submission
// document.getElementById("blog-form").addEventListener("submit", function(event) {
//   event.preventDefault();
//   let title = document.getElementById("blog-title").value;
//   let content = document.getElementById("blog-content").value;
//   let blogContainer = document.querySelector(".blog-container");

//   let newBlog = document.createElement("div");
//   newBlog.classList.add("blog");
//   newBlog.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p>";
//   blogContainer.appendChild(newBlog);

//   // Close the modal
//   modal.style.display = "none";

//   // Reset form fields
//   document.getElementById("blog-title").value = "";
//   document.getElementById("blog-content").value = "";
// });
