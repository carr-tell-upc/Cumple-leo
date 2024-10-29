document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDetail = document.getElementById("modal-detail");
    const closeModal = document.querySelector(".close");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const title = card.querySelector("h2").innerText;
            const detail = card.getAttribute("data-detail");

            modalTitle.innerText = title;
            modalDetail.innerText = detail;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target == modal) {
            modal.style.display = "none";
        }
    });
});
