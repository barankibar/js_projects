const open = document.getElementById("open");
const close = document.getElementById("close");
const popup = document.getElementById("contain");

open.addEventListener("click", () => {
    popup.classList.add("active");
    open.classList.add("decline");
});

close.addEventListener("click", () => {
    popup.classList.remove("active");
    open.classList.remove("decline");
});