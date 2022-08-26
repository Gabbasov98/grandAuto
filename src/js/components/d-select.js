$(".fg-select .fg__input").click(function () {
    $(this).parents(".fg-select").addClass("open")
})

$(".fg__option").click(function () {
    let parent = $(this).parents(".fg-select")
    $(parent).find(".fg__input input").val($(this).html())
    $(parent).find(".fg__input").removeClass("fg__input--error")
    closeSelect()
})

$(".fg__close").click(function () {
    closeSelect()
})


function closeSelect() {
    $(".fg-select").removeClass("open")
}

$(document).mouseup(function (e){
    var div = $('.fg__dropdown');
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        if($(div).parents(".fg-select").hasClass("open")){
            $(div).parents(".fg-select").removeClass("open")
        }
    }
});
