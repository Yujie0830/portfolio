/* JS Document */

$(window).ready(function () {
	arrow();
});

$(window).load(function () {
	Postion();

	$('.btn-more a').click(function(){
		$('.banner-more').removeClass("fadeOut");
		$('.banner-more').addClass("fadeIn");		
	});

	$('.btn-back a').click(function(){
		$('.banner-more').removeClass("fadeIn");
		$('.banner-more').addClass("fadeOut");		
	});
});

$(window).resize(function () {
	Postion();

});

function Postion() {
	$('.btn-more a').click(function(){
		$('.banner-more').css({'display':'block'});		
		$('.btn-top a').css({'display':'block'});
		$('.btn-back a').css({'display':'block'});
		$('.btn-more a').css({'display':'none'});
	});

	$('.btn-back a').click(function(){
		$('.banner-more').css({'display':'none'});
		$('.btn-top a').css({'display':'none'});
		$('.btn-back a').css({'display':'none'});
		$('.btn-more a').css({'display':'block'});
	});
};

function arrow(){
	$('.btn-nextArrow').animate({"top":"+=15"}, 800);
	$('.btn-nextArrow').animate({"top":"-=15"}, 800);
	setTimeout(arrow,80);
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
	$('.btn-more a').click(function(){
		var $MENU_info = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$MENU_info.animate({
			scrollTop: $('#banner-more').offset().top
		}, 400, 'linear'); 
		return false;
	});
	$('.btn-top a').click(function(){
		var $MENU_info = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$MENU_info.animate({
			scrollTop: $('#sort-block').offset().top
		}, 400, 'linear'); 
		return false;
	});
	$('.btn-back a').click(function(){
		var $MENU_info = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$MENU_info.animate({
			scrollTop: $('#sort-block').offset().top
		}, 400, 'linear'); 
		return false;
	});
});