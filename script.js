let backgroundImgs = document.getElementById('backgroundImgs')
let rightArrow = document.getElementById('rightArrow')
let images = ['onePIECE.jpg','DEMONslayerrrrr.png','jjk.jpg']
let imageNumber = 0

rightArrow.onclick = function () {
    imageNumber++
    let firstImage = backgroundImgs.children[1]
    firstImage.style.transition = '0.3s !important'
    setTimeout(() => {   
        firstImage.style.opacity = 0
        setTimeout(() => {
            firstImage.style.transition = '0s'
            firstImage.style.opacity = 1
            firstImage.src = images[imageNumber]
        }, 300);
    }, 0);
}


// make the search button look normal,