const messages = [
    "Chị chắc chứ?",
    "Thật sự chắc luôn hả??",
    "Chị chắc chắn chứ?",
    "Làm ơn mà... 🥺",
    "Nghĩ lại một chút đi!",
    "Nếu chị nói không, em sẽ buồn lắm đó...",
    "Em sẽ rất buồn...",
    "Em sẽ rất rất rất buồn...",
    "Thôi được rồi, em sẽ không hỏi nữa...",
    "Đùa thôi, hãy đồng ý nhé! 😊"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}