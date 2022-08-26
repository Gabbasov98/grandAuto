$(".case__btn").click(function () {
    $(this).toggleClass("case__btn--active")
    $(this).siblings(".case__text").slideToggle()
    changeCaseButtonsPosition()
})



changeCaseButtonsPosition()
setConsultContainerWidth()

$(window).resize(function() {
    changeCaseButtonsPosition()
    setConsultContainerWidth()
});


function changeCaseButtonsPosition() {
    let caseImgHeight = $(".case__img img").height()
    $(".swiper-button-prev").css("top",`${caseImgHeight/2}px`)
    $(".swiper-button-next").css("top",`${caseImgHeight/2}px`)
}


function setConsultContainerWidth() {
    if(window.innerWidth>992) {
        let containerWidth = $(".case .container").width()
        $(".consult__container").css("width", `${containerWidth * 0.52}`)
    }
}

