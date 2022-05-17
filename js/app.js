$btn = document.querySelector(".mobile-btn");
$nav = document.querySelector("nav");

const showMenu = () => {
    $nav.classList.toggle("show");
}

$btn.addEventListener('click', showMenu);