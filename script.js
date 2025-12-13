let backgroundImgs = document.getElementById('backgroundImgs')
let rightArrow = document.getElementById('rightArrow')

rightArrow.onclick = function () {
    let firstImage = backgroundImgs.children[1]
    firstImage.style.opacity = 0
    setTimeout(() => {
        firstImage.style.transition = '0s'
        firstImage.style.opacity = 1
        firstImage.src = 'DEMONslayerrrrr.png'
    }, 300);
}
