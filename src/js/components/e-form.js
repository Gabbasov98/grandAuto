$("button.consult__desc").click(function() {
    $(this).parents(".consult").removeClass("step2")
    $(this).parents(".consult").removeClass("completed")
})

$(".consult__thank-btn").click(function() {
    $(this).parents(".consult").removeClass("step2")
    $(this).parents(".consult").removeClass("completed")
})

$("#form1 .consult__btn").click(function(e) {
    e.preventDefault()
    if (validateForm1()) {
        $(this).parents(".consult").addClass("step2")
    }
})

$("#form2 .consult__btn").click(function(e) {
    e.preventDefault()
    if (validateForm2()) {
        $(this).parents(".consult").addClass("completed")
        $(this).parents(".consult").find("form").trigger("reset")
    }
})

$("#form3 .consult__btn").click(function(e) {
    e.preventDefault()
    if (validateForm3()) {
        $(this).parents(".consult").addClass("completed")
        $(this).parents(".consult").find("form").trigger("reset")
    }
})


function validateForm1() {
    let brandSelect = $("#brand")
    let modelSelect = $('#model')
    let generationSelect = $('#generation')

    let brandValid = inputIsFilled(brandSelect)
    let modelValid = inputIsFilled(modelSelect)
    let generationValid = inputIsFilled(generationSelect)

    if (brandValid && modelValid && generationValid) {
        return true
    }
}

function validateForm2() {
    let name = $("#name")
    let phone = $('#phone')

    let nameIsValid = inputIsFilled(name)
    let phoneIsValid = inputIsFilled(phone)


    if (nameIsValid && phoneIsValid) {
        return true
    }
}

function validateForm3() {
    let name = $("#name2")
    let phone = $('#phone2')

    let nameIsValid = inputIsFilled(name)
    let phoneIsValid = inputIsFilled(phone)


    if (nameIsValid && phoneIsValid) {
        return true
    }
}


function inputIsFilled(input) {
    let val = $(input).find("input").val()
    if (val === "") {
        setInputColor(input, true)
        return false
    } else {
        setInputColor(input, false)
        return true
    }
}

function setInputColor(input, isError) {
    if (isError) {
        $(input).addClass("fg__input--error")
    } else {
        $(input).removeClass("fg__input--error")
    }
}