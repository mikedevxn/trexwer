let open = document.getElementById("open-menu");
let menu = document.getElementById("nav-menu");
let closeMenu = document.getElementById("close-menu");

open.addEventListener('click', function() {

    closeMenu.onclick = function() {
        open.classList.remove("active");
        menu.classList.remove("active");
    }

    open.classList.toggle("active");
    menu.classList.toggle("active");
})

function generateCode() {
    let codeContainer = document.getElementById("code");
    let code = generateRandomCode();
    codeContainer.textContent = code;
}

function generateRandomCode() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    let code = "";
    let codeLength = 15;
    for (var i = 0; i < codeLength; i++) {
        let randomindex = Math.floor(Math.random() * caracteres.length);
        code += caracteres.charAt(randomindex);
    }
    return code;
}