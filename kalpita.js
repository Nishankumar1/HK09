
const scores = [0, 0, 0, 0, 0, 0];


let clickedGames = new Set();
let messageDisplayed = false;


const domains = ['Computer Science', 'Electrical', 'Mechanical', 'Robotics', 'Aerospace', 'Medical'];


const roadmapLinks = [
    'CS_job_title.html',
    'EC_job_title.html',
    'M_jobs.html',
    'R_jobs.html',
    'A_job.html',
    'ME_job.html'
];


const ctx = document.getElementById('scoreChart').getContext('2d');
const scoreChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: domains,
        datasets: [{
            label: 'Scores',
            data: scores,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function generateRandomValue(gameNumber) {
    const randomValue = Math.floor(Math.random() * 10);
    scores[gameNumber - 1] = randomValue; 
    clickedGames.add(gameNumber); 
    updateScoreList();

   
    scoreChart.data.datasets[0].data = scores;
    scoreChart.update();

    
    alert(`${domains[gameNumber - 1]} Score: ${randomValue}`);

    
    if (clickedGames.size === 6 && !messageDisplayed) {
        messageDisplayed = true;
        displayMaxScoreMessage();
    }
}

function updateScoreList() {
    const scoreList = document.getElementById('scoreList');
    const listItems = scoreList.getElementsByTagName('li');
    for (let i = 0; i < scores.length; i++) {
        listItems[i].textContent = `${domains[i]}: ${scores[i]}`;
    }
}

function displayMaxScoreMessage() {
   
    const maxScore = Math.max(...scores);

   
    const maxScoreIndices = scores
        .map((score, index) => score === maxScore ? index : -1)
        .filter(index => index !== -1);

    
    const modal = document.getElementById('maxScoreModal');
    const message = document.getElementById('maxScoreMessage');
    const link = document.getElementById('modalLink');

    if (maxScoreIndices.length === 1) {
       
        const maxDomainIndex = maxScoreIndices[0]; 
        const maxDomain = domains[maxDomainIndex];
        message.textContent = `We have captured your interests in the ${maxDomain} domain and we recommend you to go through our roadmap and have a bright future.`;
        link.href = roadmapLinks[maxDomainIndex];
        link.textContent = `Explore the ${maxDomain} Roadmap`;
    } else {
       
        const maxDomains = maxScoreIndices.map(index => `${domains[index]}`).join(', ');
        message.textContent = `We have captured your interests in the following domains: ${maxDomains}. We recommend you to explore their roadmaps and have a bright future.`;

       
        const linkTexts = maxScoreIndices.map(index => {
            const domain = domains[index];
            return `<a href="${roadmapLinks[index]}" target="_blank">${domain}</a>`;
        }).join(', ');

        link.innerHTML = `Explore the roadmaps: ${linkTexts}`;
    }

    modal.style.display = 'block'; 
}

function closeModal() {
    const modal = document.getElementById('maxScoreModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('maxScoreModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

function resetGameState() {
    clickedGames.clear(); 
    messageDisplayed = false; 
}
