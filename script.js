const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const editJob = document.getElementById("editJob");
const jobTitle = document.getElementById("jobTitle");

editJob.addEventListener("click", () => {
    const newTitle = prompt("Enter new job title:");
    if (newTitle) {
        jobTitle.textContent = newTitle;
    }
});

const skillsBtn = document.getElementById("skillsBtn");
const skillsSection = document.getElementById("skillsSection");

skillsBtn.addEventListener("click", () => {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        skillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        skillsBtn.textContent = "Show Skills";
    }
});

const achieveBtn = document.getElementById("achieveBtn");
const achievementSection = document.getElementById("achievementSection");

achieveBtn.addEventListener("click", () => {
    if (achievementSection.style.display === "none") {
        achievementSection.style.display = "block";
        achieveBtn.textContent = "Hide Achievements";
    } else {
        achievementSection.style.display = "none";
        achieveBtn.textContent = "Show Achievements";
    }
});

const message = document.getElementById("message");
const counter = document.getElementById("counter");

message.addEventListener("keyup", () => {
    const max = 120;
    const remaining = max - message.value.length;
    counter.textContent = remaining;
});

function messageForm() {
    const name = document.getElementById("nameField").value.trim();
    const email = document.getElementById("emailField").value.trim();

    if (name === "" || email === "") {
        alert("Fill out all fields.");
        return false;
    }
    return true;
}

const date = document.getElementById("date");

const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };

date.textContent = today.toLocaleDateString(undefined, options);
