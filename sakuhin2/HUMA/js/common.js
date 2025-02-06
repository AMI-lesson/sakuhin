document.querySelector("#navControl a").addEventListener("click", function (e) {
    e.preventDefault(); // デフォルト動作を防ぐ
    document.querySelector(".l-header__nav").classList.toggle("is-active");
    document.querySelector(".l-header__inner").classList.toggle("is-active");
});
