let backgroundImgs = document.getElementById('backgroundImgs')
let rightArrow = document.getElementById('rightArrow')
let images = ['onePIECE.jpg', 'DEMONslayerrrrr.png', 'jjk.jpg']
let imageNumber = 0
let posters = document.getElementById('posters')

rightArrow.onclick = function () {
    posters.children[imageNumber].classList.remove('active')
    posters.children[imageNumber+1].classList.add('active')
    for (let i = 0; i < 5; i++) {
        posters.children[i].style.transform = 'translateX(-100%)'
    }
    imageNumber++
    let firstImage = backgroundImgs.children[1]
    firstImage.style.transition = '0.3s !important'
    setTimeout(() => {
        firstImage.style.opacity = 0
        setTimeout(() => {
            firstImage.style.transition = '0'
            firstImage.style.opacity = 1
            firstImage.src = images[imageNumber]
        }, 300);
    }, 0);
}


