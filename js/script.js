$(function () {
	//slider
	$('.slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive:[
	  {
	  	breakpoint: 1281,
	  	settings:{
	  		dots: true,
	  		arrows: false,
	  		slidesToShow: 2,
	  	}
	  },
	  {
	  breakpoint: 871,
	  	settings:{
	  		dots: true,
	  		arrows: false,
	  		slidesToShow: 1,
	  	}
	  }
	  ]
	});
	//popup window 
	//button call
	$('.button__call').click(function(){
		$('.popup').fadeIn(500);
		$('.popup').show()
		$(".popup__header").html("Заказать звонок")
		$('.body').css ({
			'overflow-y': 'hidden',
		})
		$('.popup__email').css ({
			'display': 'none',
		})
		return false;	
	});
	$('.popup__close').click(function(){
		$('.popup').fadeOut(100);
		$('.popup').hide('.popup');
		$('body').css ({
			'overflow-y': 'scroll',
		})
		return false;
	});
	$('.popup__overlay').click(function(event){
		if(event.target==this){
			$('.popup').fadeOut(100);
			$('.popup').hide('.popup');
			$('body').css ({
				'overflow-y': 'scroll',
			})
			return false;
		}
	});
	//popup window
	//button request
	$('.button__request').click(function(){
		$('.popup').fadeIn(500);
		$('.popup').show()
		$(".popup__header").html($(this).text())
		$('.body').css ({
			'overflow-y': 'hidden',
		})
		$('.popup__email').css ({
			'display': 'block',
		})
		return false;	
	});
	$('.popup__close').click(function(){
		$('.popup').fadeOut(100);
		$('.popup').hide('.popup');
		$('body').css ({
			'overflow-y': 'scroll',
		})
		return false;
	});
	$('.popup__overlay').click(function(event){
		if(event.target==this){
			$('.popup').fadeOut(100);
			$('.popup').hide('.popup');
			$('body').css ({
				'overflow-y': 'scroll',
			})
			return false;
		}
	});
	//popup menu
	$('.icofont-navigation-menu').click(function(){
		$('.icofont-navigation-menu').toggleClass('icofont-ui-close');
		if ($('.icofont-ui-close').is(':visible')){
			$('.icofont-ui-close').addClass('icofont-ui-close_size');
			$('.nav-menu').addClass('popup-menu');
			$('.nav-menu').addClass('popup-menu_position');

		}
			else {
				$('.icofont-navigation-menu').removeClass('icofont-ui-close_size');
				$('.nav-menu').removeClass('popup-menu');
				$('.nav-menu').removeClass('popup-menu_position');
		}
		return false;
	});
});