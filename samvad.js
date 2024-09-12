// Main index page - opening tabs for User 1 and User 2
document.addEventListener('DOMContentLoaded', function () {
    const user1Btn = document.getElementById('user1Btn');
    const user2Btn = document.getElementById('user2Btn');

    user1Btn.addEventListener('click', function () {
        window.open('user.html?user=1', '_blank', 'width=400,height=400');
    });

    user2Btn.addEventListener('click', function () {
        window.open('user.html?user=2', '_blank', 'width=400,height=400');
    });
});

// User chat page functionality
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get('user'); // Get the user (either 1 or 2)
    const chatBox = document.getElementById('chatBox');
    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');

    // Function to update chat from localStorage
    function updateChat() {
        const chatHistory = localStorage.getItem('chatHistory');
        chatBox.innerHTML = chatHistory ? chatHistory : '';
    }

    // Update the chat box when the page loads
    updateChat();

    // Listen for new messages from other tabs
    window.addEventListener('storage', function () {
        updateChat();
    });

    // Send message
    sendBtn.addEventListener('click', function () {
        const message = messageInput.value;
        if (message.trim()) {
            const currentTime = new Date().toLocaleTimeString();
            const formattedMessage = `<p><strong>User ${user}:</strong> ${message} <small>${currentTime}</small></p>`;
            
            // Get existing chat history and append new message
            let chatHistory = localStorage.getItem('chatHistory') || '';
            chatHistory += formattedMessage;
            localStorage.setItem('chatHistory', chatHistory);

            // Update the chat box
            updateChat();

            // Clear the message input
            messageInput.value = '';
        }
    });
});
