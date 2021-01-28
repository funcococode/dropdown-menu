const togglers = Array.from(document.querySelectorAll(".dropdownBtn"));
const ddm = document.querySelectorAll(".dropdownMenu");

togglers.forEach(tog => {
    tog.addEventListener("mouseover", e => {
        for (let i = 0; i < togglers.length; i++) {
            if (togglers[i] != tog) {
                document.getElementById(togglers[i].getAttribute("data-menu")).classList.remove("visible");
            }
        }
        document.getElementById(e.target.getAttribute("data-menu")).classList.add("visible")
    })

    tog.addEventListener("mouseout", e => {
        document.getElementById(e.target.getAttribute("data-menu")).classList.remove("visible")
    })
})

ddm.forEach(menu => {
    menu.addEventListener("mouseover", function (e) {
        menu.classList.add("visible");
    })
    menu.addEventListener("mouseout", function (e) {
        menu.classList.remove("visible");
    })
})



const ll = document.getElementById("leadLine");
addEventListener("mousemove", (e) => {
    console.log(e.target);
    ll.style.transform = `translate(${e.x * 0.02}px,${e.y * 0.02}px)`;
})