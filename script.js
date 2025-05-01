function winMessage() {
    alert("🔥 Itulah semangat seorang pemenang! Terus maju dan jangan pernah menyerah! 💪🔥");
}

function moveButton() {
    const btn = document.getElementById("noButton");
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX * 0.8);
    const randomY = Math.floor(Math.random() * maxY * 0.8);
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
