function caseSlider() {
    var swiper = new Swiper('.case .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.case .swiper-button-next',
            prevEl: '.case .swiper-button-prev',
        },
        pagination: {
            el: '.case .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

caseSlider()
