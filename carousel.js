let i = 0;
let images = [];
let slideTime = 9000; // 3 seconds

images[0] = 'https://wallpaperaccess.com/full/37946.jpg';
images[1] = 'https://wallpaperaccess.com/full/37949.jpg';
images[3] - 'https://wallpaperaccess.com/full/37945.jpg'
images[2] = 'https://wallpaperaccess.com/full/37955.jpg';
images[4] = 'https://wallpaperaccess.com/full/37965.jpg'
images[5] = 'https://wallpaperaccess.com/full/37962.jpg'
images[6] = 'https://wallpaperaccess.com/full/37964.jpg'
images[7] = 'https://wallpaperaccess.com/full/37963.jpg'
images[8] = 'https://wallpaperaccess.com/full/37961.jpg'
images[9] = 'https://wallpaperaccess.com/full/37967.jpg'

function changePicture() {
    
    if (i < images.length - 1) {
        i++;
    } else {
        i = 1;
    }
    if (images[i] === 'undefined') {
        images[i] ='https://wallpaperaccess.com/full/37946.jpg'
        document.body.style.backgroundImage = "url("+ images[i] +")";
    } else {    
        document.body.style.backgroundImage = "url(" + images[i] + ")";
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;