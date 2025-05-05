window.onload = function () {
  const questions = [
    {
      question: "When I hang out with my friends, I...",
      answers: [
        "I make sure everyone is having a good time",
        "I prefer listening to what everyone else over speaking",
        "I make lots of jokes to lighten the mood!",
        "I always take the lead and make plans for the rest of the group"
      ]
    },
    {
      question: "In a new place, surrounded by strangers, I...",
      answers: [
        "I am off exploring—walking around to see what’s what!",
        "I find somewhere to sit down and mind my own business",
        "I walk up to someone and say hi",
        "I am busy scanning and analyzing everything around me"
      ]
    },
    {
      question: "Finally it’s the weekend, I...",
      answers: [
        "I gather my friends for a chill hangout, making sure everyone is included and having a fun time",
        "I spend a much needed solo day, where I can reflect with my thoughts",
        "I stay in my bed and NEVER step out!",
        "Gotta stay on trend—visiting the newest café and updating my story with all the aesthetic shots"
      ]
    },
    {
      question: "It’s bedtime, I lay down in bed and I ...",
      answers: [
        "I fall asleep hoping I made someone’s day a little easier",
        "I fall asleep replaying the happy moments from today",
        "I fall asleep chuckling at the silly stuff that happened",
        "I fall asleep planning what stuff should be done tomorrow"
      ]
    }
  ];

  let currentQuestion = 0;
  const userAnswers = [];

  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");

  function showQuestion(index) {
    const q = questions[index];
    questionText.textContent = "Q. " + q.question;
    answerButtons.innerHTML = "";

    q.answers.forEach((answer, i) => {
      const btn = document.createElement("button");
      btn.classList.add("answer");
      btn.innerHTML = `<span class="checkmark">✔</span>${answer}`;
      btn.addEventListener("click", () => {
        if (document.querySelector(".answer.selected")) return;
        userAnswers.push(i);

        document.querySelectorAll(".answer").forEach(b => {
          b.disabled = true;
          b.classList.remove("selected");
        });
        btn.classList.add("selected");

        if (currentQuestion === questions.length - 1) {
          showViewResultButton();
        } else {
          setTimeout(() => {
            currentQuestion++;
            showQuestion(currentQuestion);
          }, 600);
        }
      });
      answerButtons.appendChild(btn);
    });
  }

  function showViewResultButton() {
    const btn = document.createElement("button");
    btn.textContent = "VIEW RESULT";
    btn.classList.add("start-btn");
    btn.style.marginTop = "24px";
    btn.addEventListener("click", () => {
      localStorage.setItem("mininiAnswers", JSON.stringify(userAnswers));
      window.location.href = "result.html";
    });
    answerButtons.appendChild(btn);
  }

  showQuestion(currentQuestion);
};
