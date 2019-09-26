/**************************************************
 Mobile Banner.js 
 Ver 1.0
 Create by edenlin - 2013/10/11
 **************************************************/
$(window).load(function(){
	

	var _speed = 600,
		_width = $("#abgneBlock ul.list li").width(),
		_max   = $("#abgneBlock ul.list li").length,
		_index = 0,
		_rate  = (500/315),
		timer;
	
	//設定寬度隨之變大變小
	var setWidth=function(){
		_width = $("#abgneBlock").width();
		$("#abgneBlock").css("height",_width/_rate);
		$("#abgneBlock ul.list").css("width",_width*_max); //不讓li往下堆疊用
		$("#abgneBlock ul.list li").css("width",_width);
		$("#abgneBlock .list img").css("width",_width);
	}
	
	//輪播
	var alternate=function(w,i){
		if (i<0 && _index <= 0)  _index = _max ;
		if (i>0 && _index >= (_max-1)) _index = -1;

		_index = (_index + i);

		$("ul.list").stop().animate({
			left: w * _index *i
		}, _speed, function(){
			timer = setTimeout(auto, 4000);
			// 當廣告移動到正確位置後, 依判斷來啟動計時器
			var banner_index = _index-1;
			$('.banner_link').attr("href",$("ul.list").find('li a:eq('+banner_index+')').attr('href'));
		});
	
	}
	
	//自動播放器
	var auto = function() {
		alternate(- _width,1)
	}
	
	//按左鍵
	$("#btn_prev").click(function(){
		clearTimeout(timer);
		alternate(_width,-1);
	})
	
	//按右鍵
	$("#btn_next").click(function(){
		clearTimeout(timer);
		alternate(- _width,1);
	})	
	
	//移到按鈕上時則暫時清除自動播放器
	$("#btn_prev,#btn_next").hover(function(){
		//clearTimeout(timer);
	})

	
	/* 視窗調整時 */
	$(window).resize(function(){
		setWidth();
	});	
	/* 視窗載入時 */
	$(window).load(function(){
		setWidth();
	});	
	
	/* 觸控滑動BANNER */
	$("#abgneBlock ul.list").touchwipe({
		 wipeLeft: function() { clearTimeout(timer);  alternate(- _width,1); },
		 wipeRight: function() { clearTimeout(timer); alternate(_width,-1); },
		 min_move_x: 20,
		 min_move_y: 20,
		 preventDefaultEvents: true
	});	
	
	
	setWidth();
	timer = setTimeout(auto, 4000);
	
	/*--遊戲特色圖輪播--*/
    $("#flexiselDemo3").flexisel({
        visibleItems: 2,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:500,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 1
            },
            tablet: { 
                changePoint:900,/*--寬度1000時，可視物件改為1個--*/
                visibleItems: 1
            }
        }
    });
	/*--/遊戲特色圖輪播--*/
})
