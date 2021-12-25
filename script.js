const modal = document.getElementById("leadModal");
const btn = document.getElementById("btnNo");

window.onscroll = function modalHomePage() {
    if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        modal.style.display = "block";
        window.onscroll = null;
    }
}

btn.onclick = function() {
    modal.style.display = "none";
}