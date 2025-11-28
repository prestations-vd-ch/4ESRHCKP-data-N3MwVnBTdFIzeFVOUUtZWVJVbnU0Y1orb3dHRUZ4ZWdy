document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("verifyCheckbox");
    const wrapper  = document.getElementById("verificationWrapper");
    const verifyBtn = document.querySelector(".btn-green[href='resultat.html']");

    if (!checkbox || !wrapper || !verifyBtn) return;

    verifyBtn.addEventListener("click", function (e) {
        if (!checkbox.checked) {
            e.preventDefault(); // empêche d'aller sur resultat.html
            wrapper.classList.add("has-error"); // 🔥 affiche barre + message
        } else {
            // ✔ checkbox ok → on laisse passer à la 2ème page
            window.location.href = "resultat.html";
        }
    });

// --- AJOUT POUR BLOQUER LES NUMÉROS EN LIEN SUR iPHONE / SAFARI ---
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href^='tel']").forEach(el => {
        el.replaceWith(document.createTextNode(el.textContent));
    });
});

});
