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
