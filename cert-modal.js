// Get the modal elements
const modal = document.getElementById("cert-modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close-modal")[0];
const prevBtn = document.getElementById("prev-cert");
const nextBtn = document.getElementById("next-cert");

// Get all certificate cards
const cards = document.querySelectorAll('.cert-card');
let currentIndex = 0;

// Function to show certificate
function showCertificate(index) {
    currentIndex = index;
    const card = cards[index];
    const img = card.querySelector('img');
    const title = card.querySelector('h4');

    modalImg.src = img.src;
    captionText.innerHTML = title.innerHTML;
    modal.style.display = "flex";
}

// Add click event to each card
cards.forEach((card, index) => {
    card.addEventListener('click', function () {
        showCertificate(index);
    });
});

// Previous button
prevBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCertificate(currentIndex);
});

// Next button
nextBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % cards.length;
    showCertificate(currentIndex);
});

// Close the modal when clicking the (x)
closeBtn.onclick = function (e) {
    e.stopPropagation();
    modal.style.display = "none";
}

// Close the modal when clicking anywhere outside the image
modal.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    if (modal.style.display === "flex") {
        if (e.key === "ArrowLeft") {
            prevBtn.click();
        } else if (e.key === "ArrowRight") {
            nextBtn.click();
        } else if (e.key === "Escape") {
            closeBtn.click();
        }
    }
});