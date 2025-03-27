// Search Filter
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function () {
    let filter = searchInput.value.toLowerCase();
    let cards = document.querySelectorAll(".temple-card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(filter) ? "block" : "none";
    });
});