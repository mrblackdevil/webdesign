
// loader
var percent = 1;
$('body').loadie(percent);
// hamburger
$(document).ready(function() {
	$('.header__btn').click(function() {
		var state =1;
		return function() {
			if (state === 1) {
				state = 2;
				$('.header__menu-line1').addClass('header__menu-line1--first');
				$('.header__menu-line2').addClass('header__menu-line2--second');
				$('.header__menu-line3').addClass('header__menu-line3--third');
				$('.header__navigate').addClass('animate__nav')
			}
			else if (state === 2) {
				state = 1;
				$('.header__menu-line1').removeClass('header__menu-line1--first');
				$('.header__menu-line2').removeClass('header__menu-line2--second');
				$('.header__menu-line3').removeClass('header__menu-line3--third');
				$('.header__navigate').addClass('animate__nav-close');
				$('.header__navigate').removeClass('animate__nav');
				$('.header__navigate').removeClass('animate__nav-close');

			}
		}
	}());
});
// Плавный скрол вниз
	jQuery(document).ready(function($) {
		$('a').click(function(event) {
			var elementClick = $(this).attr('href');
			var dest = $(elementClick).offset().top;
			$('html,body').animate({scrollTop: dest}, 1100);
		});
	});

/* Magnific Popup  doc/GitHub        ->  https://github.com/dimsemenov/Magnific-Popup
website how us it                    ->  http://dimsemenov.com/plugins/magnific-popup/documentation.html
js file generator default all in     ->  http://dimsemenov.com/plugins/magnific-popup//
*/
$('button').magnificPopup({
  items: {
      src: '#popup',
      type: 'inline'
  }
});



$('.process__video-link').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      dailymotion: {
        index: 'dailymotion.com',
        id: function(url) {
          var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
          if (m !== null) {
            if(m[4] !== undefined) {
              return m[4];
            }
            return m[2];
          }
          return null;
        },
        src: 'https://www.youtube.com/embed/9ZfN87gSjvI'
      }
    }
  }


});

/* Slider Slick  doc/GitHub          ->  https://github.com/kenwheeler/slick/
website how us it                 ->  http://kenwheeler.github.io/slick/
*/
$(document).ready(function(){
	$('.slider__main').slick({
		dots: false,
		infinite: true,
		arrow: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: '<i class="fa fa-chevron-right">',
		prevArrow: '<i class="fa fa-chevron-left">',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
});

// Ajax Send Form
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});


// Responsive-Tabs doc/GitHub    ->  http://vdw.github.io/Tabslet/
$('.tabs').tabslet({
  mouseevent: 'click',
  attribute: 'href',
  animation: true
});

// Acardion   page --> http://apps.komposta.net/jquery/navgoco/demo/
$(document).ready(function() {
    $("#demo2").navgoco({accordion: true});
});

// jQuery Mask Plugin  ---> https://igorescobar.github.io/jQuery-Mask-Plugin/
// github              ---> https://github.com/igorescobar/jQuery-Mask-Plugin
$(document).ready(function(){
  $('.date').mask('00/00/0000');
  $('.time').mask('00:00:00');
  $('.date_time').mask('00/00/0000 00:00:00');
  $('.cep').mask('00000-000');
  $('.phone').mask('0000-0000');
  $('.phone_with_ddd').mask('(00) 0000-0000');
  $('.phone_us').mask('(000) 000-0000');
  $('.mixed').mask('AAA 000-S0S');
  $('.cpf').mask('000.000.000-00', {reverse: true});
  $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
  $('.money').mask('000.000.000.000.000,00', {reverse: true});
  $('.money2').mask("#.##0,00", {reverse: true});
  $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
    translation: {
      'Z': {
        pattern: /[0-9]/, optional: true
      }
    }
  });
  $('.ip_address').mask('099.099.099.099');
  $('.percent').mask('##0,00%', {reverse: true});
  $('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
  $('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
  $('.fallback').mask("00r00r0000", {
      translation: {
        'r': {
          pattern: /[\/]/,
          fallback: '/'
        },
        placeholder: "__/__/____"
      }
    });
  $('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
});
