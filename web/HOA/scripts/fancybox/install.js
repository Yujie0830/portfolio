/////////////////////////////////////////////////// 
//  install.js                                   //
//  Ver :v2                                      //
//  Date:2012/5/19                               //
//  Create by edenlin                            //
///////////////////////////////////////////////////
/* 各頁FANCYBOX的設定 */
function init_Fancybox()
{

	$("a").each(function() { 
	
		if ($(this).hasClass("fancybox")) {
			
			if ($(this).hasClass("fancybox-buttons")) {
				$(this).attr("data-fancybox-group",$(this).attr("id"));
				$('.fancybox-buttons').fancybox({
					openEffect  : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',
					closeBtn  : false,
					helpers : {
						title : {type : 'inside'},
						buttons	: {}
					},
					afterLoad : function() {
						this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
					}
				});				
				
			} else {
				$('.fancybox').fancybox();
			}
		}
	});

}

$(document).ready(function() {
	init_Fancybox();
});