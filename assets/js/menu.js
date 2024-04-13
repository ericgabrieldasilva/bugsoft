$(function(){

	openMenu();

	function openMenu(){
		$('div.btn-menu, nav.menu-mobile a').click(function(){
			var menu = $('nav.menu-mobile ul');
			if (menu.is(':hidden')){
				$('div.btn-menu').addClass('menu-active');
				menu.slideDown();
			}else{
				$('div.btn-menu').removeClass('menu-active');
				menu.slideUp();
			}
		});
	}

});