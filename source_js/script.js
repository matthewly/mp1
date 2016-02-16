


$(document).scroll(function() {
	/* Navbar highlighting */
	var scroll_top = $(document).scrollTop();
	var nav = $('#nav');
	var nav_bottom = nav.position().top + nav.outerHeight(true) + scroll_top;

	var div2_top = $('#gallery').position().top;
	var div3_top = $('#lore').position().top;

	/* Home */
	if (nav_bottom < 715) {
		$('#stats-header').css('color', '#000000');
		$('#stats-header').css('font-weight', 'normal');
	}
	/* Stats */
	else if (nav_bottom < div2_top && nav_bottom > 715) {
		$('#stats-header').css('color', '#40826D');
		$('#stats-header').css('font-weight', 'bold');

		$('#gallery-header').css('color', '#000000');
		$('#gallery-header').css('font-weight', 'normal');

		$('#lore-header').css('color', '#000000');
		$('#lore-header').css('font-weight', 'normal');

		$('.bg').css('background-image', 'url(\'./media/teemo_bg3.jpg\')');
	}
	/* Gallery */
	else if (nav_bottom > div2_top && nav_bottom < div3_top) {
		$('#stats-header').css('color', '#000000');
		$('#stats-header').css('font-weight', 'normal');

		$('#gallery-header').css('color', '#40826D');
		$('#gallery-header').css('font-weight', 'bold');

		$('#lore-header').css('color', '#000000');
		$('#lore-header').css('font-weight', 'normal');

		$('.bg').css('background-image', 'url(\'./media/teemo_bg2.jpg\')');
	}
	/* Lore */
	else {
		$('#stats-header').css('color', '#000000');
		$('#stats-header').css('font-weight', 'normal');

		$('#gallery-header').css('color', '#000000');
		$('#gallery-header').css('font-weight', 'normal');

		$('#lore-header').css('color', '#40826D');
		$('#lore-header').css('font-weight', 'bold');
	}

	/* Navbar resizing */
	if (scroll_top > 50) {
		$('.nav').css('height', '35px');
		$('.nav ul').css('font-size', '18px');
		$('.nav ul li').css('padding', '10px');
	} else {
		$('.nav').css('height', '50px');
		$('.nav ul').css('font-size', '22px');
		$('.nav ul li').css('padding', '14px');
	}
});

/* Smooth scrolling */
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

/* Carousel */
carousel = (function(){
  var container = $('.carousel')[0];
  var next = $('.next')[0];
  var prev = $('.prev')[0];
  var skins = $('.content li');
  var counter = 0;
  
  /* starting item */
  container.classList.add('active');
  skins[0].classList.add('current');

  /* previous button */
  prev.addEventListener('click', function() {
    skins[counter].classList.remove('current');
    counter = counter + -1;
    if (counter < 0) { 
      counter = skins.length - 1; 
    }
    skins[counter].classList.add('current');
  });

  /* next button */
  next.addEventListener('click', function() {
    skins[counter].classList.remove('current');
    counter = counter + 1;
    if (!skins[counter]) { 
      counter = 0;
    }
    skins[counter].classList.add('current');
  }); 
  
})();

/* Modal */
$('#pictures').click(function() {
	$('.modal').css('display', 'inline');
	$('.overlay').css('display', 'inline');
});

/* Modal close to stay at same spot */
$('#close').click(function(e) {
	e.preventDefault();
	$('.modal').css('display', 'none');
	$('.overlay').css('display', 'none');
});



