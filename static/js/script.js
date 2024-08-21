function negotiatePrice() {
    const customerOffer = document.getElementById('customer-offer').value;
    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ customer_offer: customerOffer })
    })
    .then(response => response.text())
    .then(data => {
        appendMessage('You: ' + customerOffer);
        appendMessage('Chatbot: ' + data);
        document.getElementById('customer-offer').value = '';
    })
    .catch(error => {
        console.error('Error:', error);
        appendMessage('Chatbot: Sorry, an error occurred. Please try again later.');
    });
}

function appendMessage(message) {
    const chatMessages = document.querySelector('.chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}