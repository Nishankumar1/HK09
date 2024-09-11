document.addEventListener('DOMContentLoaded', function () {
    const videos = [
        { video: document.getElementById('video1'), progress: document.getElementById('progress1'), check: document.getElementById('check1') },
        { video: document.getElementById('video2'), progress: document.getElementById('progress2'), check: document.getElementById('check2') },
        { video: document.getElementById('video3'), progress: document.getElementById('progress3'), check: document.getElementById('check3') },
    ];

    let currentVideoIndex = 0;

    const nextButton = document.getElementById('nextButton');

    function updateProgress(item) {
        const percentage = (item.video.currentTime / item.video.duration) * 100;
        item.progress.style.width = `${percentage}%`;
    }

    function handleVideoEnd() {
        videos[currentVideoIndex].check.classList.add('active');
        nextButton.disabled = false;
        nextButton.classList.add('enabled');
    }

    function switchToNextVideo() {
        if (currentVideoIndex < videos.length - 1) {
            videos[currentVideoIndex].video.style.display = 'none';
            currentVideoIndex++;
            videos[currentVideoIndex].video.style.display = 'block';
            nextButton.disabled = true;
            nextButton.classList.remove('enabled');
        }
    }

    videos.forEach((item, index) => {
        item.video.addEventListener('timeupdate', function () {
            updateProgress(item);
        });

        item.video.addEventListener('ended', function () {
            handleVideoEnd();
        });
    });

    nextButton.addEventListener('click', function () {
        switchToNextVideo();
    });
});
