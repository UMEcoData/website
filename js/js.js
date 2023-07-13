console.log("js linked")

document.querySelector("#hamburger").addEventListener("click", function() {
    console.log("hamburger clicked")
    display_status = document.querySelector("#nav_one").style.display

    if (display_status == "block") {
        document.querySelector("#nav_one").style.display = "none"
        document.querySelector("#hamburger").style.border = "none"
        document.querySelector("#hamburger").style.padding = "none"

    }
    else {
        document.querySelector("#nav_one").style.display = "block"
        document.querySelector("#hamburger").style.border = "2px #000 solid"
        document.querySelector("#hamburger").style.padding = "2px"
    }
})
