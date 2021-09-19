let hiddeImg = document.querySelectorAll('.hiden__img');
let blockVideo = document.querySelectorAll('.youtube');
let closeVideo = document.querySelectorAll('.close');


for (let i = 0; i < hiddeImg.length; i++) {
    hiddeImg[i].addEventListener('click', function() {
        hiddeImg[i].style.display = 'none';
        let showVideo = document.querySelectorAll('.youtube');
        for (let i = 0; i < showVideo.length; i++);

        showVideo[i].closest('.youtube').classList.remove('hide');
        showVideo[i].closest('.youtube').classList.add('show');
        for (let i = 0; i < closeVideo.length; i++) {
            closeVideo[i].addEventListener('click', function() {
                showVideo[i].classList.add('hide');
                showVideo[i].classList.remove('show');
                hiddeImg[i].style.display = 'block';
                let sss = hiddeImg[i].parentElement('.iframe')
                console.log(sss)


            });
        };


    });
};








// clickVideo.addEventListener('click', function() {
//     blockVideo.classList.add('show');
//     blockVideo.classList.remove('hide');
//     clickVideo.style.display = 'none';

// });
// close.addEventListener('click', function() {
//     blockVideo.classList.remove('show');
//     blockVideo.classList.add('hide');
//     clickVideo.style.display = 'block';
// });

// priceVideo.addEventListener('click', function() {
//     priceVideo.style.display = 'none';
//     priceBlockVideo.classList.toggle('show');
//     priceBlockVideo.classList.toggle('hide');
// });




// for (let i of hiddeImg) {
//     i.addEventListener('click', function() {

//         for (let e of blockVideo) {
//             e.classList.remove('hide');
//             e.classList.add('show');
//             i.style.display = 'none';
//         }
//         for (let s of closeVideo) {
//             s.addEventListener('click', function() {
//                 for (let e of blockVideo) {
//                     e.classList.add('hide');
//                     e.classList.remove('show');
//                     i.style.display = 'block';
//                 }
//             });
//         }
//     });
// }