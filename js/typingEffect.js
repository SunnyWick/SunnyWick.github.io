document.addEventListener("DOMContentLoaded", () => {
    const message = ["Hello!", "Welcome"];
    const welcomeMessage = document.getElementById("welcome-message");
    let part1 = message[0]; 
    let part2 = message[1]; 
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

// Project typing
document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typing-text");
    const smallerTypingElement = document.getElementById("typing-subtext"); // For "Click to expand"
    let projectCharIndex = 0;
    let subtextCharIndex = 0;

    function typeProjectEffect() {
        const projectMessage = "Projects";
        const subtextMessage = "Click on a project to expand";

        if (projectCharIndex < projectMessage.length) {
            // Type the "Projects" message
            typingElement.innerHTML += projectMessage.charAt(projectCharIndex);
            projectCharIndex++;
            setTimeout(typeProjectEffect, 100); // Adjust typing speed
        } else if (subtextCharIndex < subtextMessage.length) {
            // Type the "Click to expand" message on a new line
            smallerTypingElement.innerHTML += subtextMessage.charAt(subtextCharIndex);
            subtextCharIndex++;
            setTimeout(typeProjectEffect, 100); // Adjust typing speed
        }
    }

    // Start typing effect
    typeProjectEffect();
});


//projects button
document.addEventListener("DOMContentLoaded", () => {
    const projectItems = document.querySelectorAll(".project-item");

    projectItems.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("expanded");
        });
    });
});


// Toggle the "show" class
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navbarLinks = document.querySelector(".navbar-links");

    menuIcon.addEventListener("click", () => {
        navbarLinks.classList.toggle("show"); // Toggle the "show" class
    });
});

// Toggle the show for employment
document.addEventListener("DOMContentLoaded", () => {
    const timelineContents = document.querySelectorAll(".timeline-content");

    timelineContents.forEach((content) => {
        content.addEventListener("click", () => {
            content.classList.toggle("expanded");
        });
    });
});

//Text for employment
document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("Emp-text");
    const smallerTypingElement = document.getElementById("Emp-subtext");

    const mainText = "Experiences and Responsibilities";
    const subText = `This is a list of some positions I've held over the past two years. Please visit my <a href="https://www.linkedin.com/in/sunnywick" target="_blank" style="color: white; text-decoration: underline;">LinkedIn</a> for a more comprehensive look.`;

    let mainCharIndex = 0;

    function typeMainTextEffect() {
        if (mainCharIndex < mainText.length) {
            typingElement.innerHTML += mainText.charAt(mainCharIndex);
            mainCharIndex++;
            setTimeout(typeMainTextEffect, 100); // Adjust typing speed
        } else {
            // Once the main text is done, directly add the subtext with innerHTML
            smallerTypingElement.innerHTML = subText;
        }
    }

    // Start the typing effect for the main text
    typeMainTextEffect();
});







