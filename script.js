
const SECRET_PIN = "2724";

const pinForm = document.getElementById("pinForm");
const pinInput = document.getElementById("pin");
const message = document.getElementById("message");
const moon = document.getElementById("moon");

// Check that the required elements exist
if (pinForm && pinInput && message) {
  pinForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredPin = pinInput.value.trim();

    if (enteredPin === SECRET_PIN) {
      message.style.color = "#b9b2ff";
      message.textContent = "Welcome to our universe ✨";

      sessionStorage.setItem("beyondStarsUnlocked", "true");

      // Redirect to the story page
      pinForm.querySelector("button[type='submit']").disabled = true;

      setTimeout(function () {
        window.location.assign(
          new URL("chat.html", window.location.href).href
        );
      }, 500);

    } else {
      message.style.color = "#ffb4c7";
      message.textContent = "Incorrect PIN. Try again ✦";

      pinInput.value = "";
      pinInput.focus();
    }
  });
}

// Moon-click easter egg
if (moon && message) {
  moon.addEventListener("click", function () {
    moon.textContent = moon.textContent === "☾" ? "☽" : "☾";
    message.textContent = "The moon has a little secret for you ✨";
    message.style.color = "#c5baff";
  });
}
