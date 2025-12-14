let step = 0;
let time = 45 * 60;
let timerInterval;

const steps = document.querySelectorAll("#steps li");
const progressBar = document.getElementById("progressBar");
const timerDisplay = document.getElementById("timer");

function toggleIngredients() {
    const ingredients = document.getElementById("ingredients");
    const btn = document.getElementById("ingredientBtn");

    ingredients.classList.toggle("hidden");

    if (ingredients.classList.contains("hidden")) {
        btn.textContent = "Show Ingredients";
    } else {
        btn.textContent = "Hide Ingredients";
    }
}

function startCooking() {
    step = 0;
    highlightStep();
    startTimer();
}

function nextStep() {
    if (step < steps.length - 1) {
        step++;
        highlightStep();
    }
}

function highlightStep() {
    steps.forEach(s => s.style.background = "none");
    steps[step].style.background = "#fdebd0";
    progressBar.style.width = ((step + 1) / steps.length) * 100 + "%";
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (time <= 0) {
            clearInterval(timerInterval);
        } else {
            time--;
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            timerDisplay.innerText =
                "Time Left: " + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        }
    }, 1000);
}
