document.addEventListener("DOMContentLoaded", () => {
  /* ===== Hamburger Menu Toggle ===== */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    // Toggle the class that slides the menu in/out
    navLinks.classList.toggle("nav-open");
    // Optionally, animate the hamburger icon (if you add styles for .open)
    navToggle.classList.toggle("open");
  });

  /* ===== Rating System ===== */
  const stars = document.querySelectorAll(".star");
  const ratingResult = document.getElementById("ratingResult");
  let currentRating = 0;

  stars.forEach((star) => {
    // When user clicks a star
    star.addEventListener("click", () => {
      currentRating = star.getAttribute("data-value");
      updateStarColors(currentRating);
      ratingResult.textContent = `Your rating: ${currentRating}`;
    });

    // When user hovers over a star
    star.addEventListener("mouseover", () => {
      const hoverValue = star.getAttribute("data-value");
      updateStarColors(hoverValue);
    });

    // When user stops hovering
    star.addEventListener("mouseout", () => {
      updateStarColors(currentRating);
    });
  });

  function updateStarColors(rating) {
    stars.forEach((star) => {
      const starValue = star.getAttribute("data-value");
      star.style.color = (starValue <= rating) ? "#ffa500" : "#ccc";
    });
  }
});
