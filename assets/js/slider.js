$(function(){

	var bg = $('div.bg');
	var desc = $('div.description-single');
	var indiceAtual = 0;
	var indiceMaximo = bg.length;
	var delay = 6000;
	var timer;

	initSlider();
	clickSlider();

	//Iniciando o slider
	function initSlider(){
		//Adicionando a tag span dinâmicamente na DOM
		for (var i = 0; i < indiceMaximo; i++){
			if (i == 0){
				$('div.bullets-nav').append('<span style="background-color: #fff;"></span>');
			}else{
				$('div.bullets-nav').append('<span></span>');
			}
		
		}
		desc.eq(0).fadeIn();
		bg.eq(0).fadeIn(2000);
		timer = setInterval(function(){
			alterarSlider();
		}, delay);
	}

	//Função para mudar a imagem quando clicar nas bullets
	function clickSlider(){
		$('div.bullets-nav span').click(function(){
			clearInterval(timer);
			timer = setInterval(function(){
				alterarSlider();
			}, delay);
			desc.eq(indiceAtual).stop().fadeOut(100);
			bg.eq(indiceAtual).stop().fadeOut(2000);
			indiceAtual = $(this).index();
			desc.eq(indiceAtual).stop().fadeIn(2000);
			bg.eq(indiceAtual).stop().fadeIn(2000);
			$('div.bullets-nav span').css('background', 'none');
			$('div.bullets-nav span').eq(indiceAtual).css('background-color', '#fff');
		});
	}

	//Função para mudar de imagem
	function alterarSlider(){
		desc.eq(indiceAtual).stop().fadeOut(100);
		bg.eq(indiceAtual).stop().fadeOut(2000);
		indiceAtual += 1;
		if (indiceAtual == indiceMaximo){
			indiceAtual = 0;
		} 
		desc.eq(indiceAtual).stop().fadeIn(2000);
		bg.eq(indiceAtual).stop().fadeIn(2000);
		$('div.bullets-nav span').css('background', 'none');
		$('div.bullets-nav span').eq(indiceAtual).css('background-color', '#fff');
	}

});