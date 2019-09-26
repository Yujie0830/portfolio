$(window).load(function () {
	Hero();
	sideBar();
	$('.type_btn ul li').eq(0).trigger('click'); //模擬按下英雄全部分類的按鈕，列出全部英雄頭像，只在畫面第一次載入啟動，resize不作動
	$('.info_block ul li').css({'opacity':'0','display':'none'});
	$('.info_block ul li').eq(0).css({'display':'block'});//載入頁面時，出現第一個英雄介紹畫面，只在畫面第一次載入啟動，resize不作動
	$('.info_block ul li').eq(0).stop().animate({opacity:1}, '300', 'linear');//淡入進來
});


$(window).resize(function () {
	Hero();
	sideBar();
});


function sideBar() {
	$('.sidebar').css('margin-top', '-' + ($('.sidebar').height()/2) + 'px'); //右邊選單垂直置中
	$('.sidebar').css('margin-left', '+' + ($('.news-contentBG-top').width()/2) + 'px'); //右邊選單置右
}



function Hero() {
	var nWidth = $(window).width();	
	
	if (nWidth <= 623) { //小畫面	
		$('.news-content-block').css('margin-top', (nWidth * 640 / 640) + 'px'); //撐出天邊主視覺高度
	} else if (nWidth <= 1100){ //中畫面
		$('.news-content-block').css('margin-top', (nWidth * 530 / 1100) + 'px'); //撐出天邊主視覺高度
	} else{ //大畫面
		$('.news-content-block').css('margin-top', '530px');//撐出天邊主視覺高度
	}
	
	
//英雄分類切換start--by米
	$('.type_btn ul li').click(function(){
	  var _index = $(this).index();
	  var type= ".type_" + _index;	
	  //每按一次就全關閉效果部份	  
	  $('.type_btn ul li').removeClass('active');
	  $('.hero_list_block ul li').css({'opacity':'0','display':'none'});
	  //開啟要顯示的英雄分類
	  $(this).addClass('active');	  
	  if (_index === 0) { //如果點選到是全部不分類		  
		$('.hero_list_block ul li').css({'display':'block'});
		$('.hero_list_block ul li').stop().animate({opacity:1}, '300', 'linear');//淡入進來		
		} else{ //點選到各別分類
		$(type).css({'display':'block'});	    
	  	$(type).stop().animate({opacity:1}, '300', 'linear');//淡入淡出進來
		}
	  return false;
	 });	
//英雄分類切換end--by米
	
//單獨英雄介紹切換start--by米
	$('.hero_list_block ul li').click(function(){
	  var _index2 = $(this).index();
	  //每按一次就全關閉效果部份		 
	  $('.info_block ul li').css({'opacity':'0','display':'none'});
	  //開啟要顯示的英雄分類
	  $('.info_block ul li').eq(_index2).css({'display':'block'});
	  $('.info_block ul li').eq(_index2).stop().animate({opacity:1}, '300', 'linear');//淡入進來
	  return false;
	 });	
//單獨英雄介紹切換end--by米
}


$(function btn(){
	// btn_back_hero_block a 的 click 事件，畫面移至下方英雄介紹區塊的滾到效果
	$('.hero_list_block ul li').click(function(){
		// 讓捲軸用動畫的方式移動到 #hero_info 位置 並加入動畫效果
		// 修正 Opera 問題
		var $hero_info = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$hero_info.animate({
			scrollTop: $('#hero_info').offset().top
		}, 300, 'linear'); 
		return false;
	});
	
	// btn_back_hero_block a 的 click 事件，回英雄列表按鈕滾到效果
	$('.btn_back_hero_block a').click(function(){
		// 讓捲軸用動畫的方式移動到 #hero_top 位置 並加入動畫效果
		// 修正 Opera 問題
		var $hero_top = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$hero_top.animate({
			scrollTop: $('#hero_top').offset().top
		}, 300, 'linear'); 
		return false;
	});
	
	// sidebar a 的 click 事件，回新手引導按鈕滾動效果
	$('.sidebar-goGuide').click(function(){
		// 讓捲軸用動畫的方式移動到 #hero_top 位置 並加入動畫效果
		// 修正 Opera 問題
		var $sidebar_guide = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$sidebar_guide.animate({
			scrollTop: $('#guide_top').offset().top
		}, 300, 'linear'); 
		return false;
	});
	
	// sidebar a 的 click 事件，回天梯系統按鈕滾動效果
	$('.sidebar-goRanking').click(function(){
		// 讓捲軸用動畫的方式移動到 #hero_top 位置 並加入動畫效果
		// 修正 Opera 問題
		var $sidebar_ranking = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$sidebar_ranking.animate({
			scrollTop: $('#ranking_top').offset().top
		}, 300, 'linear'); 
		return false;
	});
	
	// sidebar a 的 click 事件，回自由流派按鈕滾動效果
	$('.sidebar-goEquipment').click(function(){
		// 讓捲軸用動畫的方式移動到 #hero_top 位置 並加入動畫效果
		// 修正 Opera 問題
		var $sidebar_equipment = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$sidebar_equipment.animate({
			scrollTop: $('#equipment_top').offset().top
		}, 300, 'linear'); 
		return false;
	});
	
	// sidebar a 的 click 事件，回英雄列表按鈕滾動效果
	$('.sidebar-goHero').click(function(){
		// 讓捲軸用動畫的方式移動到 #hero_top 位置 並加入動畫效果
		// 修正 Opera 問題
		var $sidebar_hero = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$sidebar_hero.animate({
			scrollTop: $('#hero_top').offset().top
		}, 300, 'linear'); 
		return false;
	});
	
	// sidebar a 的 click 事件，回副本關卡按鈕滾動效果
	$('.sidebar-goInstance').click(function(){
		// 讓捲軸用動畫的方式移動到 #hero_top 位置 並加入動畫效果
		// 修正 Opera 問題
		var $sidebar_instance = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$sidebar_instance.animate({
			scrollTop: $('#instance_top').offset().top
		}, 300, 'linear'); 
		return false;
	});
	
	// float a 的 click 事件，回最頂端按鈕滾動效果
	$('.float').click(function(){
		// 讓捲軸用動畫的方式移動到 #hero_top 位置 並加入動畫效果
		// 修正 Opera 問題
		var $float_goTop = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$float_goTop.animate({
			scrollTop: $('#menu_top').offset().top
		}, 300, 'linear'); 
		return false;
	});
});
