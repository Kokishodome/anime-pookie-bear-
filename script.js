let backgroundImgs = document.getElementById('backgroundImgs')
let rightArrow = document.getElementById('rightArrow')
let images = ['onePIECE.jpg', 'DEMONslayerrrrr.png', 'jjk.jpg', 'pokemOOOOOOOOOOONNNNNNNN.jpg', 'bakugo....jpg']
let imageNumber = 0
let posters = document.getElementById('posters')

rightArrow.onclick = function () {
    if (imageNumber < posters.children.length - 1) {
        posters.children[imageNumber].classList.remove('active')
        posters.children[imageNumber + 1].classList.add('active')
        imageNumber++
        for (let i = 0; i < 5; i++) {
        posters.children[i].style.transform = 'translateX(calc(-' + imageNumber + '00% - 20px))'
        }
        let firstImage = backgroundImgs.children[1]
        firstImage.style.transition = '0.3s !important'
        let zeroImage = backgroundImgs.children[0]
        zeroImage.src = images[imageNumber - 1]
        setTimeout(() => {
            firstImage.style.opacity = 0
            setTimeout(() => {
                firstImage.style.transition = '0'
                firstImage.style.opacity = 1
                firstImage.src = images[imageNumber]
            }, 300);
        }, 0);
    }
}


// finish css and make everything pretty and perferct :D (post on github)


