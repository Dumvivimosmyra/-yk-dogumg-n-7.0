// Karanlık/Aydınlık Mod Değişimi
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Yazı Yazma Yarışması
const textToType = document.getElementById("text-to-type").innerText;
const userInput = document.getElementById("user-input");
const result = document.getElementById("result");

function checkInput() {
    if (userInput.value === textToType) {
        result.innerHTML = "Tebrikler! 🎉";
    } else {
        result.innerHTML = "";
    }
}

// Mesaj Gönderme
function sendMessage() {
    const message = document.getElementById("message").value;
    document.getElementById("message-result").innerHTML = "Mesajınız gönderildi: " + message;
}
