document.getElementById('finishQuiz').addEventListener('click', function () {
    let score = 0;
    const correctAnswers = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'];

    correctAnswers.forEach(function (answer) {
        const selected = document.querySelector(`input[name="${answer}"]:checked`);
        if (selected && selected.value === 'correct') {
            score++;
        }
    });

    if (score >= 8) {
        let userName = prompt(`Congratulations! You scored ${score} out of 10! Please enter your name for the certificate:`);
        
        if (userName) {
            
            localStorage.setItem('userName', userName);

        
            window.location.href = 'certificate.html';
        }
    } else {
        if (confirm(`You scored ${score} out of 10. Would you like to try again?`)) {
            window.location.reload(); 
        }
    }
});
