$(document).ready(function () {
    $(".checkbox-toggle").click(function () {
        let id = $(this).attr("class");

        $('.' + id).siblings().find(".active").removeClass("active");
        $('.' + id).addClass("active");
        localStorage.setItem("selectedolditem", id);
    });

    let selectedolditem = localStorage.getItem('selectedolditem');

    if (selectedolditem != null) {
        $('#' + selectedolditem).siblings().find(".active").removeClass("active");
        $('#' + selectedolditem).addClass("active");
    }
});
