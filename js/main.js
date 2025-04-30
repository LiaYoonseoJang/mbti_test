let currentQuestion = 0;
let answers = [];

const questions = [
  {
    question: "You see a mud puddle. What do you do?",
    A: "Jump in immediately!",
    B: "Walk around it carefully."
  },
  {
    question: "You’re offered a snack. What do you choose?",
    A: "Something new and spicy!",
    B: "A comforting classic."
  }
  // Add more questions here
];

function nextQuestion(choice) {
  answers.push(choice);
  currentQuestion++;

  if (currentQuestion < questions.length) {
    updateQuestion();
  } else {
    // Decide result (simplified logic)
    const aCount = answers.filter(a => a === "A").length;
    const resultType = aCount > questions.length / 2 ? "adventurous_pig" : "calm_pig";

    // Pass result via URL
    window.location.href = `result.html?type=${resultType}`;
  }
}

function updateQuestion() {
  document.querySelector(".question").textContent = questions[currentQuestion].question;
  document.querySelectorAll(".answer")[0].textContent = questions[currentQuestion].A;
  document.querySelectorAll(".answer")[1].textContent = questions[currentQuestion].B;

  const progress = ((currentQuestion / questions.length) * 100).toFixed(1);
  document.querySelector(".progress").style.width = `${progress}%`;
}

// On load
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".question")) {
    updateQuestion();
  }

  if (window.location.pathname.includes("result.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get("type");

    showResult(type);
  }
});

function showResult(type) {
  const resultTitle = document.querySelector(".result-title");
  const resultDesc = document.querySelector(".result-desc");
  const resultImg = document.querySelector(".result-img");

  if (type === "adventurous_pig") {
    resultTitle.textContent = "✨Adventurous Pig✨";
    resultDesc.textContent = "You love excitement and spontaneity!";
    resultImg.src = "assets/img/adventurous_pig.png";
  } else {
    resultTitle.textContent = "🧘 Calm Pig 🧘";
    resultDesc.textContent = "You enjoy peaceful surroundings and familiar routines.";
    resultImg.src = "assets/img/calm_pig.png";
  }
}
