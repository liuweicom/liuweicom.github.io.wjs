	$(function(){
		
		function resize(){
			var windowWidth=$(window).width();
		var isSmallscreen=windowWidth<768;

		$("#main_id>.carousel-inner>.item").each(function(i,item ){
			var $item=$(item);
			var imgsrc=$item.data(isSmallscreen?'image-xs':'image-lg');
			$item.css("backgroundImage",'url("'+imgsrc+'")');
			if (isSmallscreen) {
				$item.html('<img src="'+imgsrc+'" alt=" "/>');
			
			}else {
				$item.empty();
			}
			console.log('success');

		});
			
		}
		$(window).on('resize',resize).trigger('resize');
		 // 初始化tooltips插件
  		$('[data-toggle="tooltip"]').tooltip();
  		/**
  		 * 控制标签页的标签容器宽度
   		*/

			/**
  			 * 控制标签页的标签容器宽度
   			*/
   			
			var $ulcontainer=$('.nav-tabs');
   			var width=30;
   		 $ulcontainer.children().each(function(i,item){
   		 	width+=item.clientWidth;
   		 });
   		 if(width>$(window).width()){
   		 	$ulcontainer.css('width',width).parent().css('overflow-x', 'scroll');
   		 }
   		 /**
   		 *获取产品标题
   		 */
   		 var $newTitle=$('.news-title');

   		 $('#news .nav-pills a').on('click',function(){
   		 	// console.log('11');
   		 	// 获取当前点击元素
   		 	var $this=$(this);
   		 	 // 获取对应的title值
   		 	var title=$this.data('title');
   		 	// 将title设置到相应的位置
   		 	$newTitle.text(title);
   		 });



	});