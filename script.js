
/* =========================
   ELEMENTS
========================= */

const screens = document.querySelectorAll(".screen");

const openLetter = document.getElementById("openLetter");

const progressContainer =
    document.getElementById("progressContainer");

const progressBar =
    document.getElementById("progressBar");

const pageLabel =
    document.getElementById("pageLabel");

const pageNumber =
    document.getElementById("pageNumber");

const navigation =
    document.getElementById("navigation");

const nextButton =
    document.getElementById("nextButton");

const backButton =
    document.getElementById("backButton");

const floatingHearts =
    document.getElementById("floatingHearts");

const hugButton =
    document.getElementById("hugButton");

const teddyBear =
    document.getElementById("teddyBear");

const hugMessage =
    document.getElementById("hugMessage");

const yesButton =
    document.getElementById("yesButton");

const timeButton =
    document.getElementById("timeButton");

const finalResponse =
    document.getElementById("finalResponse");


/* =========================
   SCREEN MANAGEMENT
========================= */

let currentScreen = 0;

const totalScreens = screens.length;

const screenNames = [
    "A little surprise",
    "My apology",
    "Your feelings",
    "My heart",
    "11 years of us",
    "A teddy hug",
    "My promise",
    "Forever my Hira"
];


function showScreen(index) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    screens[index].classList.add("active");

    currentScreen = index;

    // Show progress after opening envelope
    progressContainer.classList.add("visible");

    // Progress percentage
    const percentage =
        ((index) / (totalScreens - 1)) * 100;

    progressBar.style.width = percentage + "%";

    // Page label
    pageLabel.textContent = screenNames[index];

    pageNumber.textContent =
        `${String(index).padStart(2, "0")} / 07`;

    // Previous button
    backButton.style.display =
        index <= 1 ? "none" : "inline-block";

    // Next button
    nextButton.style.display =
        index === totalScreens - 1 ? "none" : "inline-block";

    // Navigation
    navigation.style.display =
        index === totalScreens - 1 ? "none" : "flex";

}


/* =========================
   OPEN THE ENVELOPE
========================= */

openLetter.addEventListener("click", function () {

    const envelope =
        document.querySelector(".envelope");

    envelope.classList.add("open");

    openLetter.textContent = "Opening your letter... 💗";

    createBurst(15);

    setTimeout(() => {

        showScreen(1);

    }, 1000);

});


/* =========================
   NEXT
========================= */

nextButton.addEventListener("click", function () {

    if (currentScreen < totalScreens - 1) {

        showScreen(currentScreen + 1);

    }

});


/* =========================
   BACK
========================= */

backButton.addEventListener("click", function () {

    if (currentScreen > 1) {

        showScreen(currentScreen - 1);

    }

});


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("heart");

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "🌸",
        "✨"
    ];

    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.floor(Math.random() * 18 + 12) + "px";

    heart.style.animationDuration =
        Math.floor(Math.random() * 5 + 6) + "s";

    floatingHearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 11000);

}

setInterval(createHeart, 700);


/* =========================
   HEART BURST
========================= */

function createBurst(amount) {

    for (let i = 0; i < amount; i++) {

        setTimeout(createHeart, i * 100);

    }

}


/* =========================
   TEDDY HUG
========================= */

hugButton.addEventListener("click", function () {

    teddyBear.classList.remove("teddy-hug");

    // Restart animation
    void teddyBear.offsetWidth;

    teddyBear.classList.add("teddy-hug");

    hugMessage.textContent =
        "A big squeeze for my Ammu! 🧸❤️";

    createBurst(12);

    setTimeout(() => {

        teddyBear.classList.remove("teddy-hug");

    }, 1000);

});


/* =========================
   FINAL BUTTON
========================= */

yesButton.addEventListener("click", function () {

    finalResponse.classList.add("show");

    finalResponse.innerHTML = `
        <strong>My Jaan! 🥹❤️</strong><br><br>

        If I could, I would hug you right now
        and kiss your forehead.<br><br>

        Thank you for being in my life
        all these years, Hira.<br><br>

        I love you, Ammu.
        More hugs are waiting for you. 🧸💕
    `;

    createBurst(35);

    yesButton.textContent =
        "Sending you a million hugs ❤️";

});


/* =========================
   GIVE HER TIME
========================= */

timeButton.addEventListener("click", function () {

    finalResponse.classList.add("show");

    finalResponse.innerHTML = `
        <strong>It's okay, my Hira. ❤️</strong><br><br>

        You don't have to forgive me immediately.
        I understand that you were hurt.<br><br>

        Take your time, Jaan.
        Your feelings matter to me.<br><br>

        I'm genuinely sorry.
        I love you, and I'll show it
        through my actions. 🫂
    `;

});


/* =========================
   START
========================= */

// Initial screen
screens.forEach(screen => {
    screen.classList.remove("active");
});

document.getElementById("intro").classList.add("active");

navigation.style.display = "none";

progressContainer.classList.remove("visible");

createHeart();
createHeart();
createHeart();
