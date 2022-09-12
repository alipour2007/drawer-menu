function openDrawer(data, width) {

    var drawerOverlay = document.createElement("div");
    drawerOverlay.classList.add("my-drawer-overlay");
    document.body.appendChild(drawerOverlay);

    drawerOverlay.addEventListener("click", function () {
        closeDrawer();
    })

    var drawerWrraper = document.createElement("div");
    drawerWrraper.style.width = width;
    drawerWrraper.className = "my-drawer";
    drawerWrraper.innerHTML = data;
    document.body.appendChild(drawerWrraper);


    setTimeout(() => {
        drawerWrraper.classList.add("open");
    }, 60);

}

function closeDrawer() {
    const lastDrawer = Array.from(document.querySelectorAll(".my-drawer.open")).pop();
    const lastOverlay = Array.from(document.querySelectorAll(".my-drawer-overlay")).pop();

    lastOverlay.remove();
    lastDrawer.classList.remove("open");

    setTimeout(() => {
        lastDrawer.remove();
    }, 600);
}
