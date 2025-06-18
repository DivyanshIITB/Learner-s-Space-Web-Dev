document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById('quiz-form');
  const result = document.getElementById('quiz-result');

  quizForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const answer = document.querySelector('input[name="dept"]:checked');

    if (!answer) {
      result.textContent = "Please select an option!";
      result.style.color = "red";
    } else if (answer.value === "ME") {
      result.textContent = "Correct! I'm from Mechanical Engineering 🚀";
      result.style.color = "green";
    } else {
      result.textContent = "Oops! That's not right. Try again!";
      result.style.color = "orange";
    }
  });
});

