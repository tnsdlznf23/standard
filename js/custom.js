// 버튼을 클릭하면 전체 메뉴를 보이게 하세요.
$(".tit .btn") .click(function(e){
    e.preventDefault();
    $("#cont_nav").slideToggle(200);
    $(this).toggleClass("on");
})

//배너
$(".ban").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true
});

//탭메뉴
var $tab_list = $(".tab_menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e) {
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}

$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

//갤러리
$(".gallery_img").slick({
    arrows: false,
    fade: true,
    pauseOnHover: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});
$(".play").click(function(){
    $(".gallery_img").slick("slickPlay");
})
$(".pause").click(function(){
    $(".gallery_img").slick("slickPause");
})
$(".prev").click(function(){
    $(".gallery_img").slick("slickPrev");
})
$(".next").click(function(){
    $(".gallery_img").slick("slickNext");
})

//레이어팝업
$(".layer").click(function(e){
    e.preventDefault();
    $("#layer").show();
});
$("#layer .close").click(function(e){
    e.preventDefault();
    $("#layer").hide();
});

//윈도우 팝업
$(".window").click(function(e){
    e.preventDefault;
    window.open("sample_popup.html","popup01","width=800,height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
})

//라이트 팝업
lightGallery(document.getElementById('lightgallery'), {
plugins: [lgZoom, lgThumbnail],
speed: 500
});
