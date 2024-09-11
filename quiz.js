document.getElementById('finishQuiz').addEventListener('click', function() {
    let score = 0;
    const correctAnswers = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10']; 

    correctAnswers.forEach(function(answer) {
        const selected = document.querySelector(`input[name="${answer}"]:checked`);
        if (selected && selected.value === 'correct') {
            score++;
        }
    });

    alert(`You scored ${score} out of 10!`);
    window.location.href = 'certificate.html';
});


