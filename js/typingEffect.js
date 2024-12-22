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
    const slides = [
        {
            text: 'Learn more <a href="about.html">about me</a>.',
            image: 'images/AboutMe.jpeg'
        },
        {
            text: 'View <a href="projects.html">technical portfolio</a>.',
            image: 'images/TechnicalPortfolio.jpeg'
        },
        {
            text: 'Review <a href="employment.html">professional experience</a>.',
            image: 'images/ProfessionalExperience.jpeg'
        },
        {
            text: 'Explore <a href="skills.html">hobbies and skills</a>.',
            image: 'images/HobbiesAndSkills.jpeg'
        }
    ];

    const dynamicText = document.getElementById("dynamic-text");
    const virtualBlock = document.querySelector(".virtual-block");
    let currentIndex = 0;

    function updateSlide() {
        // Fade out the current text and background
        dynamicText.classList.remove("fade-in");
        dynamicText.classList.add("fade-out");
        virtualBlock.classList.add("fade-out");

        setTimeout(() => {
            // Update text and background image
            dynamicText.innerHTML = slides[currentIndex].text;
            virtualBlock.style.backgroundImage = `url('${slides[currentIndex].image}')`;

            // Increment index or loop back
            currentIndex = (currentIndex + 1) % slides.length;

            // Fade in the new text and background
            dynamicText.classList.remove("fade-out");
            dynamicText.classList.add("fade-in");
            virtualBlock.classList.remove("fade-out");
            virtualBlock.classList.add("fade-in");
        }, 1500); // Wait 500ms for fade-out to complete
    }

    // Initial text and background image
    dynamicText.innerHTML = slides[currentIndex].text;
    virtualBlock.style.backgroundImage = `url('${slides[currentIndex].image}')`;
    dynamicText.classList.add("fade-in");
    virtualBlock.classList.add("fade-in");
    currentIndex++;

    // Update slide every 5 seconds
    setInterval(updateSlide, 5000);
});


