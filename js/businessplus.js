// jQuery for page scrolling feature - requires jQuery Easing plugin
$( document ).ready(function() {

	
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
		$('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
	
	// Highlight the top nav as scrolling occurs
	$('#content').scrollspy({
		target: '.navbar-fixed-top'
	});
	
	
	// Floating label headings for the contact form

	$("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
	
	
	//home section image size to window size.
	var height = $(window).height();
    $(".home").css("height",height);
	$(".home_wrap").css("height",height);
	$(".home").css("max-width","100%");
	
	   //Flex slider in home section
	 $('.flexslider').flexslider({
        animation: "slide",
		direction: "vertical",
		controlNav: false,               
		directionNav: false,           
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
	  
	  
	 function initialize()
		{
		var mapProp = {
		  center:new google.maps.LatLng(51.508742,-0.120850),
		  zoom:5,
		  mapTypeId:google.maps.MapTypeId.ROADMAP
		  };
		var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
		}

		google.maps.event.addDomListener(window, 'load', initialize);
	
	  
	  /*Javascript for portfolio*/
    var $container = $('#container');
    $container.isotope({
      itemSelector : '.element',
      masonry : {
        columnWidth : 0
      },
      masonryHorizontal : {
        rowHeight: 0
      },
      cellsByRow : {
        columnWidth : 0,
        rowHeight : 0
      },
      cellsByColumn : {
        columnWidth : 0,
        rowHeight : 0
      },
      getSortData : {
        symbol : function( $elem ) {
          return $elem.attr('data-symbol');
        },
        category : function( $elem ) {
          return $elem.attr('data-category');
        },
      /*  number : function( $elem ) {
          return parseInt( $elem.find('.number').text(), 10 );
        },
        weight : function( $elem ) {
          return parseFloat( $elem.find('.weight').text().replace( /[\(\)]/g, '') );
        },
        name : function ( $elem ) {
          return $elem.find('.name').text();
        }
		*/
      }
    });
    
	var $sortBy = $('#sort-by');
    $('#shuffle a').click(function(){
      $container.isotope('shuffle');
      $sortBy.find('.selected').removeClass('selected');
      $sortBy.find('[data-option-value="random"]').addClass('selected');
      return false;
    });
	
	
	/*Portfolio JS*/
	 // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
	getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });

  
  // change is-checked class on buttons
  $('.filter_group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
    });
  });

	////imran's works starts here/////
/////Apear plugin/////

/////on appear of about////
 $('#head-cover').appear();
  $(document.body).on('appear', '#head-cover', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInUp');
    })
  });

////on appear of services/////


 $('#service-cover').appear();
  $(document.body).on('appear', '#service-cover', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInUp');
    })
  });

////on appear of portfolio/////


 $('#port-cover').appear();
  $(document.body).on('appear', '#port-cover', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInUp');
    })
  });

////on appear resume///////

 $('#resume-cover').appear();
  $(document.body).on('appear', '#resume-cover', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInUp');
    })
  });

////on appear of Contact us/////

 $('#contact-cover').appear();
  $(document.body).on('appear', '#contact-cover', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInUp');
    })
  });

////on appear of Skills/////

 $('#skill-cover').appear();
  $(document.body).on('appear', '#skill-cover', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInUp');
    })
  });

//////personal profile animation///

 $('#prof-content').appear();
  $(document.body).on('appear', '#prof-content', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInRight');
    })
  });

 $('.prof').appear();
  $(document.body).on('appear', '.prof', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInUp');
    })
  });

 $('#prof-img').appear();
  $(document.body).on('appear', '#prof-img', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInLeft');
    })
  });

////end of content animation of profile/////

/////Animation of Resume starts here/////

 $('#edu1').appear();
  $(document.body).on('appear', '#edu1', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInLeft');
    })
  });

 $('#edu2').appear();
  $(document.body).on('appear', '#edu2', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInLeft');
    })
  });

 $('#exp1').appear();
  $(document.body).on('appear', '#exp1', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInRight');
    })
  });

 $('#exp2').appear();
  $(document.body).on('appear', '#exp2', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInRight');
    })
  });

////End of Resume Animation/////

//////skills starts/////

 $('.skill-list').appear();
  $(document.body).on('appear', '.skill-list', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInRight');
    })
  });

/////skills end///////

////Service section Animation starts/////

 $('#serv1').appear();
  $(document.body).on('appear', '#serv1', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInRight');
    })
  });

 $('#serv2').appear();
  $(document.body).on('appear', '#serv2', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInRight');
    })
  });

 $('#serv3').appear();
  $(document.body).on('appear', '#serv3', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInRight');
    })
  });

 $('#serv4').appear();
  $(document.body).on('appear', '#serv4', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInLeft');
    })
  });

 $('#serv5').appear();
  $(document.body).on('appear', '#serv5', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInLeft');
    })
  });


 $('#serv6').appear();
  $(document.body).on('appear', '#serv6', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInLeft');
    })
  });

///////Service section AnimationEnds here//
//// code for carousel slider in heading////
$('.carousel').carousel({
  interval: 3000
});
 //Photoshop progress bar animation

 var flag = true;
 $('.proficiency-bar').appear();
 $(document.body).on('appear', '.proficiency-bar', function(e, $affected) {
  $('.proficiency-bar').find('.fill');
  if(flag){
   $($('.proficiency-bar').find('.fill')).each(function() {
     var maxvalue = $(this).attr('data-value');
     $(this).animate({
      width: maxvalue  + "%"
     }, 500);
    });
    flag=false;
  }
 });


//Illustrator progress bar animation

 var flag = true;
 $('#illustrator').appear();
 $(document.body).on('appear', '#illustrator', function(e, $affected) {
  $('#illustrator').find('.fill');
  if(flag){
   $($('#illustrator').find('.fill')).each(function() {
     var maxvalue = $(this).attr('data-value');
     $(this).animate({
      width: maxvalue  + "%"
     }, 300);
    });
    flag=false;
  }
 });

//Fireworks progress bar animation

 var flag = true;
 $('#firworks').appear();
 $(document.body).on('appear', '#firworks', function(e, $affected) {
  $('#firworks').find('.fill');
  if(flag){
   $($('#firworks').find('.fill')).each(function() {
     var maxvalue = $(this).attr('data-value');
     $(this).animate({
      width: maxvalue  + "%"
     }, 300);
    });
    flag=false;
  }
 });

//German progress bar animation

 var flag = true;
 $('#german').appear();
 $(document.body).on('appear', '#german', function(e, $affected) {
  $('#german').find('.fill');
  if(flag){
   $($('#german').find('.fill')).each(function() {
     var maxvalue = $(this).attr('data-value');
     $(this).animate({
      width: maxvalue  + "%"
     }, 300);
    });
    flag=false;
  }
 });


////js for testimonials/////
// When the DOM is ready, run this function

  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });

////animation for download resume//

 $('.down-icon').appear();
  $(document.body).on('appear', '.down-icon', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInDown');
    })
  });



 $('.down-cv-text').appear();
  $(document.body).on('appear', '.down-cv-text', function(e, $affected) {
    $affected.each(function() {
      $(this).addClass('animated fadeInDown');
    })
  });

});

$( window ).resize(function() {
	//home section image size to window size.
	var height = $(window).height();
    $(".home").css("height",height);
	$(".home_wrap").css("height",height);
	$(".home").css("max-width","100%");

});


$(window).load(function(){
	
	jQuery('#portfolio #filters .filter.active').click();
    ////code for closing the navbar
   $('.nav').click( function() {
        $('.navbar-collapse').removeClass('in');
    });  
 
});

 
