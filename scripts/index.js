/* JS Document */

$(window).ready(function () {
	arrow();
});

$(window).load(function () {
	Postion();
	banner();

	// Wait for window load
	$("#page-loading").fadeOut("slow");

	$('.btn-more a').click(function(){
		$('.active').removeClass("fadeOut");
		$('.active').addClass("fadeIn");		
	});

	$('.btn-back a').click(function(){
		$('.active').removeClass("fadeIn");
		$('.active').addClass("fadeOut");		
	});
});

$(window).resize(function () {
	Postion();
	banner();
});


function Postion() {
	$('.banner-block .btn-more a').click(function(){
		//$('.banner-block .active').fadeIn();
		$('.banner-block .active').css({'display':'block'});
		$('.banner-block .btn-top a').css({'display':'block'});
		$('.banner-block .btn-back a').css({'display':'block'});
		$('.banner-block .btn-more a').css({'display':'none'});
	});

	$('.banner-block .btn-back a').click(function(){
		$('.banner-block .active').css({'display':'none'});
		$('.banner-block .btn-top a').css({'display':'none'});
		$('.banner-block .btn-back a').css({'display':'none'});
		$('.banner-block .btn-more a').css({'display':'block'});
	});

	$('.web-block .btn-more a').click(function(){
		$('.web-block .active').css({'display':'block'});		
		$('.web-block .btn-top a').css({'display':'block'});
		$('.web-block .btn-back a').css({'display':'block'});
		$('.web-block .btn-more a').css({'display':'none'});
	});

	$('.web-block .btn-back a').click(function(){
		$('.web-block .active').css({'display':'none'});
		$('.web-block .btn-top a').css({'display':'none'});
		$('.web-block .btn-back a').css({'display':'none'});
		$('.web-block .btn-more a').css({'display':'block'});
	});
};

function arrow(){
	//$('.btn-nextArrow').animate({"top":"+=20"}, 800);
	//$('.btn-nextArrow').animate({"top":"-=20"}, 800);
	setTimeout(arrow,80);
};

function banner(){
	var $ofweidht = window.innerWidth;

    //if( $ofweidht < 750) {
	//	$('.banner-block ul>li:nth-of-type(9)').addClass("active");	
	//} else {
	//	$('.banner-block ul>li:nth-of-type(9)').removeClass("active");		
	//}
};


// 滑到指定位置 -------------------------
$(function btn(){
	// 選單 的 click 事件，畫面移至下方活動介紹區塊的滾動效果
	$('.btn-nextArrow').click(function(){
		var $MENU_info = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$MENU_info.animate({
			scrollTop: $('#about-block').offset().top
		}, 400, 'linear'); 
		return false;
	});
	$('.banner-block .btn-more a').click(function(){
		var $MENU_info = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$MENU_info.animate({
			scrollTop: $('#banner-more').offset().top
		}, 400, 'linear'); 
		return false;
	});
	$('.web-block .btn-more a').click(function(){
		var $MENU_info = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$MENU_info.animate({
			scrollTop: $('#web-more').offset().top
		}, 400, 'linear'); 
		return false;
	});
	$('.banner-block .btn-top a').click(function(){
		var $MENU_info = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$MENU_info.animate({
			scrollTop: $('#banner').offset().top
		}, 400, 'linear'); 
		return false;
	});
	$('.web-block .btn-top a').click(function(){
		var $MENU_info = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$MENU_info.animate({
			scrollTop: $('#web').offset().top
		}, 400, 'linear'); 
		return false;
	});
	$('.banner-block .btn-back a').click(function(){
		var $MENU_info = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$MENU_info.animate({
			scrollTop: $('#banner').offset().top
		}, 800, 'linear'); 
		return false;
	});
	$('.web-block .btn-back a').click(function(){
		var $MENU_info = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$MENU_info.animate({
			scrollTop: $('#web').offset().top
		}, 800, 'linear'); 
		return false;
	});
});