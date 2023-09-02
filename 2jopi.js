let cat = document.querySelector(".cat")
let text = document.querySelector(".secret")
let music = new Audio("monday left me broken cat meme .mp3")
text.addEventListener("click", function () {
    let a = prompt("введитее пароль")
    if (a == "monday") {
        music.play()
        cat.style.display = "inline"
    }
})
