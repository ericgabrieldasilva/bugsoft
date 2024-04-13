$(function(){

	openFaq();
	function openFaq(){
		$('div.btn').click(function(){
			var text = $('div.faq-text');
			if (text.is(':visible')){
				text.slideUp();
				$('div.btn i').css('transform', 'rotate(0deg)');
			}

			if ($(this).next().is(':hidden')){
				$(this).next().slideDown();
				$(this).find('i').css('transform', 'rotate(180deg)');
			}		
			
		});

	}
	
});