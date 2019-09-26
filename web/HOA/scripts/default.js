$(window).load(function () {
	Postion();
});


$(window).resize(function () {
	Postion();
});



function Postion() {
	var nHeight = $('.banner_frame').height();
	var nWidth = $(window).width();
//	var nWidth3btns = $('.wrap').width();
	
	$('.bg_news_con_banner').css('height', nHeight + 'px'); //banner框高度同底圖
	$(".article-txt img").removeAttr('style'); //清除公告內頁的圖片style設定

	if (nWidth <= 623) { //小畫面	
		$('.btn-moviePlay').css('margin-top', (nWidth * 330 / 640) + 'px'); //播放鈕位置可與圖片縮放同步
		$('.download-block').css('margin-top', (nWidth * 150 / 640) + 'px'); //三個下載平台按鈕 位置可與圖片縮放同步
	} else if (nWidth <= 1100){ //中畫面
		$('.btn-moviePlay').css('margin-top', (nWidth * 450 / 1100) + 'px'); //播放鈕位置可與圖片縮放同步
		$('.download-block').css('margin-top', (nWidth * 170 / 1100) + 'px'); //三個下載平台按鈕 位置可與圖片縮放同步
	}
	else { //大畫面
		$('.btn-moviePlay').css('margin-top', '450px');
		$('.download-block').css('margin-top', '175px');
	}
	
}
