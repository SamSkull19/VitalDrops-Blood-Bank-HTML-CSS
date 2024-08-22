const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false, 
    },


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },        
        620: {
            slidesPerView: 1
        },        
        1024: {
            slidesPerView: 1
        },
    }
});
