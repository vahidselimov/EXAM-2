function deyis() {
    document.body.classList.toggle("light-theme");
    let btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("light-theme")) {
        btn.innerHTML = "🌙 Gecə";
    } else {
        btn.innerHTML = "☀️ Gündüz";
    }
}
