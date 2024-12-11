document.addEventListener("DOMContentLoaded", () => {
    const message = ["Hello!", "Welcome to Sunny's Website"];
    const welcomeMessage = document.getElementById("welcome-message");
    let part1 = message[0]; // "Hello!"
    let part2 = message[1]; // "Welcome to Sunny's Website"
    let charIndex1 = 0;
    let charIndex2 = 0;

    function typeEffect() {
        if (charIndex1 < part1.length) {
            welcomeMessage.innerHTML += part1.charAt(charIndex1);
            charIndex1++;
            setTimeout(typeEffect, 100);
        } else if (charIndex2 === 0) {
            // Add a line break after "Hello!" and before the second part
            welcomeMessage.innerHTML += "<br>";
            setTimeout(typeEffect, 500);
            charIndex2++; // Proceed to typing the second part
        } else if (charIndex2 <= part2.length) {
            welcomeMessage.innerHTML += part2.charAt(charIndex2 - 1);
            charIndex2++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();
});

document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        'Learn more<a href="about.html"> about me</a>.',
        'View <a href="projects.html">technical portfolio</a>.',
        'View <a href="employment.html">professional experience</a>.',
        'View <a href="employment.html">Hobbies and Skills</a>.'
    ];
    const dynamicText = document.getElementById("dynamic-text");
    let currentIndex = 0;

    function updateText() {
        // Fade out the current text
        dynamicText.classList.remove("fade-in");
        dynamicText.classList.add("fade-out");

        setTimeout(() => {
            // Change the text once faded out
            dynamicText.innerHTML = messages[currentIndex];
            currentIndex = (currentIndex + 1) % messages.length;

            // Fade in the new text
            dynamicText.classList.remove("fade-out");
            dynamicText.classList.add("fade-in");
        }, 500); // Wait 500ms for fade-out to complete
    }

    // Initial text display
    dynamicText.innerHTML = messages[currentIndex];
    dynamicText.classList.add("fade-in");
    currentIndex++;

    // Update text every 5 seconds
    setInterval(updateText, 5000);
});

