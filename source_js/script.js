var divs = document.getElementsByTagName('div');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();

    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    //alert(this.className);
    this.style.backgroundColor=backgroundColor;
}

/* Smooth scrolling */
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

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

		$('.bg').css('background-image', 'url(\'../media/teemo_bg3.jpg\')');
	}
	/* Gallery */
	else if (nav_bottom > div2_top && nav_bottom < div3_top) {
		$('#stats-header').css('color', '#000000');
		$('#stats-header').css('font-weight', 'normal');

		$('#gallery-header').css('color', '#40826D');
		$('#gallery-header').css('font-weight', 'bold');

		$('#lore-header').css('color', '#000000');
		$('#lore-header').css('font-weight', 'normal');

		$('.bg').css('background-image', 'url(\'../media/teemo_bg2.jpg\')');
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

/* Carousel */
carousel = (function(){
  var container = $('.carousel')[0];
  var next = $('.next')[0];
  var prev = $('.prev')[0];
  var items = $('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  container.classList.add('active');
  
  /* starting item */
  current = items[counter];
  current.classList.add('current');

  /* next button */
  next.addEventListener('click', function(ev) {
    current.classList.remove('current');
    counter = counter + 1;
    if (!items[counter]) { 
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  });

  /* previous button */
  prev.addEventListener('click', function(ev) {
    current.classList.remove('current');
    counter = counter + -1;
    if (counter < 0) { 
      counter = amount - 1; 
    }
    current = items[counter];
    current.classList.add('current');
  });
  
})();



