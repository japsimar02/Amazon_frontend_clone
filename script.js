let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".image-item")

let startSlider = 0
let endSlider = (imgItem.length - 1) * 100 

slideBtnLeft.addEventListener("click", handleLeftBtn)

function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click", handleRightBtn)

function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })

}

function renderSlideAuto() {

    if (startSlider >= -endSlider + 100) {
        handleRightBtn()
    }
    else {
        startSlider = 0;
    }
}
setInterval(renderSlideAuto, 3000);

const sidebarNavElement = document.getElementById("sidebar-nav-id")
const openSidebarNavElement = document.getElementById("open-nav-sidebar")
const closeSidebarNavElement = document.getElementById("close-nav-sidebar")

openSidebarNavElement.addEventListener("click", ()=>{
    sidebarNavElement.classList.toggle("sidebar-show")
})

closeSidebarNavElement.addEventListener("click", ()=>{
    sidebarNavElement.classList.toggle("sidebar-show")
})
