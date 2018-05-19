$(document).ready(function() {
    $("#header-navbar-collapse").click(function() {
        if($("#header-navbar-collapse-menu").css("width") == 0){
            $("#header-navbar-collapse-menu").css("width", "255px")
        }else{
            $("#header-navbar-collapse-menu").css("width", "0")
        }
    })
    $("#footer-social-google").click(function() {
        $(".footer-social-modal-google").modal("show");
    })
    $("#footer-social-wechat").click(function() {
        $(".footer-social-modal-wechat").modal("show");
    })
    $("#footer-social-email").click(function() {
        $(".footer-social-modal-email").modal("show");
    })
})