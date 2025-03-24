const apiKey = "AIzaSyAwZ-jhy-8Sm4D7i3rUZkQFHy-uMzm-NqI";  // YouTube API anahtarını buraya ekleyin

// Rastgele mesajlar
const messages = [
    "Bugün senin günün! 🎉",
    "Daha nice mutlu yıllara! 🥳",
    "Umarım harika bir yıl geçirirsin! 💖",
    "İyi ki doğdun,iyi ki hayatımda varsın! 😊",
    "Her günün bu kadar özel olsun! 🌟"
];

// Sayfa yüklendiğinde rastgele mesaj göster
document.addEventListener("DOMContentLoaded", () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("random-message").innerText = randomMessage;

    // Karanlık mod ayarını yükle
    loadTheme();
});

// Yeni rastgele mesaj gösterme fonksiyonu
function showRandomMessage() {
    const specialMessages = [
        "Hayatına renk katacak bir yıl diliyorum! 🎉",
        "Bu yılın en güzel yılın olsun! 💖",
        "Dilerim her günün çok özel geçer! ✨",
        "Her şey gönlünce olsun! 🌸",
        "Sen ve hayatın çok kıymetli 💫",
        "Her şey için teşekkür ederim 🤗",
        "İstediğini başarabilir ve yapabilirsin! 🌈"
    ];
    alert(specialMessages[Math.floor(Math.random() * specialMessages.length)]);
}

// Rastgele mesaj butonuna olay dinleyici ekle
document.getElementById("random-message-btn").addEventListener("click", showRandomMessage);

// Karanlık / Aydınlık mod
const darkModeButton = document.getElementById("dark-mode-btn");
const body = document.body;

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        darkModeButton.innerText = "Aydınlık Mod";
    } else {
        darkModeButton.innerText = "Karanlık Mod";
    }
}

darkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// YouTube API ile şarkı arama fonksiyonu
function searchMusic() {
    const searchQuery = document.getElementById("search-input").value;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const results = data.items;
            const searchResultsContainer = document.getElementById("search-results");
            searchResultsContainer.innerHTML = '';  // Önceki sonuçları temizle

            results.forEach(item => {
                const songDiv = document.createElement('div');
                songDiv.classList.add('song');
                songDiv.innerHTML = `
                    <p>${item.snippet.title}</p>
                `;
                songDiv.addEventListener('click', () => playSong(item.id.videoId));
                searchResultsContainer.appendChild(songDiv);
            });
        })
        .catch(error => console.log(error));
}

// Şarkı çalma fonksiyonu
function playSong(videoId) {
    const youtubePlayer = document.getElementById('youtube-player');
    youtubePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    document.getElementById('now-playing').innerText = "Şu anda çalıyor: " + videoId;
}
