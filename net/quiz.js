document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const correctAnswers = {
        q1: 'c', // Correct answer for question 1: //
        q2: 'd', // Correct answer for question 2: Both A and C
        q3: 'a'  // Correct answer for question 3: "object"
    };

    let score = 0;
    const form = new FormData(this);

    for (let [question, answer] of form.entries()) {
        if (correctAnswers[question] === answer) {
            score++;
        }
    }

    document.getElementById('result').textContent = `You got ${score} out of 3 correct.`;
});

document.querySelector('input[type="reset"]').addEventListener('click', function() {
    document.getElementById('result').textContent = '';
});
