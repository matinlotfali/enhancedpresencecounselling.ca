const nav = document.getElementsByTagName("nav").item(0);
const nav_archors = nav.getElementsByTagName("a");

for (const a of nav_archors) {
    a.addEventListener("click", () => {
        nav.classList.remove("shown");
    });
}

function toggle_menu() {
    nav.classList.toggle("shown");
    if(window.scrollY < 400)
        window.scroll(0, 400);
}
