document.addEventListener('DOMContentLoaded', function () {
    const user1ChatBox = document.getElementById('user1ChatBox');
    const user1Input = document.getElementById('user1Input');
    const user1Send = document.getElementById('user1Send');
    
    const user2ChatBox = document.getElementById('user2ChatBox');
    const user2Input = document.getElementById('user2Input');
    const user2Send = document.getElementById('user2Send');

    
    function updateChats(message, user) {
        const formattedMessage = `<p><strong>${user}:</strong> ${message}</p>`;
        if (user === "User 1") {
            user1ChatBox.innerHTML += formattedMessage;
            user2ChatBox.innerHTML += formattedMessage;
        } else {
            user2ChatBox.innerHTML += formattedMessage;
            user1ChatBox.innerHTML += formattedMessage;
        }
    }
   
    user1Send.addEventListener('click', function () {
        const message = user1Input.value;
        if (message.trim()) {
            updateChats(message, "Expert");
            user1Input.value = '';
        }
    });

    user2Send.addEventListener('click', function () {
        const message = user2Input.value;
        if (message.trim()) {
            updateChats(message, "Learner");
            user2Input.value = '';
        }
    });
});
