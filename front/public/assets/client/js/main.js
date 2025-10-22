$(document).ready(function() {

 $("#owl-demo").owlCarousel({

      nav:true, // Show next and prev buttons
	 dots:false,
     slideSpeed : 300,
     paginationSpeed : 400,

     // items : 5, 
     // itemsDesktop : 5,
     // itemsDesktopSmall : 1,
     // itemsTablet: 1,
     // itemsMobile : 1
	   responsive:{
          0:{
              items:1,
			  itemsDesktop : 1,
          },
          600:{
              items:2,
			  itemsDesktop : 2,
          },
          900:{
            items:3,
			itemsDesktop : 3,
          },
          1100:{
              items:5,
			  itemsDesktop : 5,
          }
        }

 });

});
function myfuctioncheck(){
	
	
		var number = document.getElementsByClassName("items").length +1;
			$('#owl-demo').trigger('add.owl.carousel', ['<div class="items"> '+number+' slide </div>'])
				.trigger('refresh.owl.carousel');

}


(function ($) {
    'use strict';


  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 20;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

          if (!$('#header').hasClass('header-scrolled')) {
            scrollto += scrolled;
          }
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
          class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');
    
        $(document).on('click', '.mobile-nav-toggle', function(e) {
          $('body').toggleClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').toggle();
        });
    
        $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
          e.preventDefault();
          $(this).next().slideToggle(300);
          $(this).parent().toggleClass('active');
        });
    
        $(document).click(function(e) {
          var container = $(".mobile-nav, .mobile-nav-toggle");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
              $('body').removeClass('mobile-nav-active');
              $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
              $('.mobile-nav-overly').fadeOut();
            }
          }
        });
      } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
      }
    
      if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      }
    
      // Real view height for mobile devices
      if (window.matchMedia("(max-width: 767px)").matches) {
        $('#hero').css({
          height: $(window).height()
        });
      }
    
      // Back to top button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
      });
    
      $('.back-to-top').click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
      });


       // Header Fix in Screen
      window.onscroll = function() {myFunction()};
      var header = document.getElementById("header");
      var sticky = header.offsetTop;      
      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");         
        } else {
          header.classList.remove("sticky");
        }
      }


    jQuery(document).ready(function () {

   // Menu menu slide right side in Screen
      $('.mobileicon').click(function() {
        $('#mySidenav').addClass('menuactive');
        });
        $('.closebtn').click(function() {
          $('#mySidenav').removeClass('menuactive');
       }); 


       $('.mobilefilterbtn a.filterbtn').click(function() {
        $('.filtersellbike').addClass('filteractive');
        });
        $('.closebtn').click(function() {
          $('.filtersellbike').removeClass('filteractive');
       });  

         $('.mobilefilterbtn a.sortbtn').click(function() {
        $('.bikeprice').addClass('sortbtnactive');
        });
        $('.closebtn').click(function() {
          $('.bikeprice').removeClass('sortbtnactive');
       }); 



$(window).load(function() {
	  if($.cookie('dlnumbercookie')!=undefined){
		  $('#sellbikecarousel').append("<div class='item'>"+$.cookie('dlnumbercookie')+"</div>");
		// console.log($.cookie());
	  $('#dlnumber').val($.cookie('dlnumbercookie'));
	  }
});

       $('.sendbtn2').click(function() {
		   $('#dlnumbercheck').empty();
		    $('#dlnumberdiv').remove();
			$('#yearboxdiv').remove();
			$('#bikebranddiv').remove();
			$('#bikemodeldiv').remove();
			$('#kmdrivendiv').remove();
			$('#ownershipdiv').remove();
			$('#selectcitysellbikediv').remove();
			$('#currentcitydiv').remove();
			$('div.owl-item:empty').hide();
		    if($('#dlnumber').val()==''){
				$('.sellbikeformpopup').removeClass('stepone');
			   $('#dlnumbercheck').append("<p style='color:red'>Driving Licence is required</p>");				         
		   }else{ 
		    var owl = $('#summeritems');
				owl.owlCarousel();
			   $.cookie('dlnumbercookie', $('#dlnumber').val().toUpperCase(), { expires: 7, path: '/' });
			   $('#owl-demo').trigger('add.owl.carousel', ["<div id='dlnumberdiv' data-class='stepone'  onclick='seleteddiv(this)' title='"+$.cookie('dlnumbercookie')+"' class='items'>"+$.cookie('dlnumbercookie')+"</div>"])
				.trigger('refresh.owl.carousel');
			   $('.sellbikeformpopup').addClass('stepone'); 
			  
				owl.trigger('refresh.owl.carousel');
		   }
        
        });


        $('.yearbox ul li').click(function() {
			$('.yearbox ul li').removeClass('active');
			$('#yearboxdiv').remove();
			$('#bikebranddiv').remove();
			$('#bikemodeldiv').remove();
			$('#kmdrivendiv').remove();
			$('#ownershipdiv').remove();
			$('#selectcitysellbikediv').remove();
			$('#currentcitydiv').remove();
			$('div.owl-item:empty').hide();
			$.cookie('yearcookie', $(this).data('value'), { expires: 7, path: '/' });
			$('#owl-demo').trigger('add.owl.carousel', ["<div id='yearboxdiv' data-class='steptwo'  onclick='seleteddiv(this)' title='"+$.cookie('yearcookie')+"' class='items'>"+$.cookie('yearcookie')+"</div>"])
				.trigger('refresh.owl.carousel');
			$(this).addClass('active')
         $('.sellbikeformpopup').addClass('steptwo');
         $('.sellbikeformpopup').removeClass('stepone');
        });


       $('.bikebrand ul li').click(function() {
		   
			$('#bikebranddiv').remove();
			$('#bikemodeldiv').remove();
			$('#kmdrivendiv').remove();
			$('#ownershipdiv').remove();
			$('#selectcitysellbikediv').remove();
			$('#currentcitydiv').remove();
			$('div.owl-item:empty').hide();
		  $('.sellbikeformpopup').addClass('stepthree');
          $('.sellbikeformpopup').removeClass('steptwo');
		  $.cookie('brandidcookie', $(this).data('id'), { expires: 7, path: '/' });
		  $.cookie('brandvaluecookie', $(this).data('value'), { expires: 7, path: '/' });
		  $('#owl-demo').trigger('add.owl.carousel', ["<div id='bikebranddiv' data-class='stepthree'  onclick='seleteddiv(this)' title='"+$.cookie('brandvaluecookie')+"' class='items'>"+$.cookie('brandvaluecookie')+"</div>"])
				.trigger('refresh.owl.carousel');
		   var arraydata= "";
		    $.ajax({
                url: $(this).data('url'),
                method: 'POST',
                data: { brandid: $(this).data('id')},
                success: function(datas) {
                  arraydata = JSON.parse(datas);
                    $('#myULmodel').empty();
                    arraydata.forEach(function(row, index){
						if(index==0){
                        $('#myULmodel').append("<li class='active' data-id="+row.id+" data-value="+row.name+"><span class='check'><i class='fa fa-check'></i></span>"+row.name+"</li>");
						}else{
                        $('#myULmodel').append("<li class='' data-id="+row.id+" data-value="+row.name+"><span class='check'><i class='fa fa-check'></i></span>"+row.name+"</li>");
						}
                    });
                },
                error: function(err) {
                    console.log(err)
                }
            });
        });

       $('body').on('click', '.bikemodel ul li', function() {
		   
			$('#bikemodeldiv').remove();
			$('#kmdrivendiv').remove();
			$('#ownershipdiv').remove();
			$('#selectcitysellbikediv').remove();
			$('#currentcitydiv').remove();
			$('div.owl-item:empty').hide();
		  $.cookie('bikemodelidcookie', $(this).data('id'), { expires: 7, path: '/' });
		  $.cookie('bikemodelvaluecookie', $(this).data('value'), { expires: 7, path: '/' });
		  $('#owl-demo').trigger('add.owl.carousel', ["<div id='bikemodeldiv' data-class='stepfive'  onclick='seleteddiv(this)' title='"+$.cookie('bikemodelvaluecookie')+"' class='items'>"+$.cookie('bikemodelvaluecookie')+"</div>"])
				.trigger('refresh.owl.carousel');
          $('.sellbikeformpopup').addClass('stepfive');
          $('.sellbikeformpopup').removeClass('stepthree');
        });

       // $('.bikevariant ul li').click(function() {
          // $('.sellbikeformpopup').addClass('stepfive');
          // $('.sellbikeformpopup').removeClass('stepfour');
        // });

        $('.kmdriven ul li, .kmdriven button').click(function() {
			
			$('#kmdrivendiv').remove();
			$('#ownershipdiv').remove();
			$('#selectcitysellbikediv').remove();
			$('#currentcitydiv').remove();
			$('div.owl-item:empty').hide();
		  $('.kmdriven ul li').removeClass('active');
		  $.cookie('kmdrivencookie', $(this).data('value'), { expires: 7, path: '/' });
		  $('#owl-demo').trigger('add.owl.carousel', ["<div id='kmdrivendiv' data-class='stepsix'  onclick='seleteddiv(this)' title='"+$.cookie('kmdrivencookie')+"' class='items'>"+$.cookie('kmdrivencookie')+"</div>"])
				.trigger('refresh.owl.carousel');
		  $(this).addClass('active')
		  $('.sellbikeformpopup').addClass('stepsix');
		  $('.sellbikeformpopup').removeClass('stepfive');
        });

         $('.ownership ul li').click(function() {
			 
			$('#ownershipdiv').remove();
			$('#selectcitysellbikediv').remove();
			$('#currentcitydiv').remove();
			$('div.owl-item:empty').hide();
		  $('.ownership ul li').removeClass('active'); 
		  $.cookie('ownershipidcookie', $(this).data('id'), { expires: 7, path: '/' });
		  $.cookie('ownershipvaluecookie', $(this).data('value'), { expires: 7, path: '/' });
		  $('#owl-demo').trigger('add.owl.carousel', ["<div id='ownershipdiv' data-class='stepseven'  onclick='seleteddiv(this)' title='"+$.cookie('ownershipvaluecookie')+"' class='items'>"+$.cookie('ownershipvaluecookie')+"</div>"])
				.trigger('refresh.owl.carousel');
		  $(this).addClass('active')
          $('.sellbikeformpopup').addClass('stepseven');
          $('.sellbikeformpopup').removeClass('stepsix');
        });
		
		
		$('#selectcitysellbike').change(function() {
			
			$('#selectcitysellbikediv').remove();
			$('#currentcitydiv').remove();
			$('div.owl-item:empty').hide();
				$.cookie('currentcityidcookie', $(this).val(), { expires: 7, path: '/' });
				$.cookie('currentcityvaluecookie', $( "#selectcitysellbike option:selected" ).text(), { expires: 7, path: '/' });
			    $('#owl-demo').trigger('add.owl.carousel', ["<div class='items' id='selectcitysellbikediv' data-class='stepeight'  onclick='seleteddiv(this)' title='"+$.cookie('currentcityvaluecookie')+"'>"+$.cookie('currentcityvaluecookie')+"</div>"])
				.trigger('refresh.owl.carousel');
			$('.sellbikeformpopup').addClass('stepeight');
			$('.sellbikeformpopup').removeClass('stepseven');
		});

         $('.currentcity ul li').click(function() {
			 
			$('#currentcitydiv').remove();
			$('div.owl-item:empty').hide();
			 $.cookie('currentcityidcookie', $(this).data('id'), { expires: 7, path: '/' });
			 $.cookie('currentcityvaluecookie', $(this).data('value'), { expires: 7, path: '/' });
			 $('#owl-demo').trigger('add.owl.carousel', ["<div class='items' id='currentcitydiv'  data-class='stepeight'  onclick='seleteddiv(this)' title='"+$.cookie('currentcityvaluecookie')+"'>"+$.cookie('currentcityvaluecookie')+"</div>"])
				.trigger('refresh.owl.carousel');
			 
          $('.sellbikeformpopup').addClass('stepeight');
          $('.sellbikeformpopup').removeClass('stepseven');
        });



      
      // Left side Menu Plus and Minues  
      $('.link').click(function () {
        //Inner 
        var jqInner = $(this).next();
        if (jqInner.is(':visible'))
        {
            jqInner.slideUp()
            $(this).find('span').html('+');
        }
        else
        {
            jqInner.slideDown()
            $(this).find('span').html('-');
        }
      });

       // Sell Bike Year Hide and Show Start
      $('.moreYear').click(function() {
        $('.registrationyear').addClass('activeyear');
        });
      

        
        $('.testimonials-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,            
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                767:{
                    items:2
                },
                768:{
                  items:2
              },
                1000:{
                    items:2
                }
            }
        });


        $('.sellbike-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:true,         
            autoplay:false,
            responsive:{
              0:{
                  items:2
              },
              600:{
                  items:2
              },
              900:{
                items:2
              },
              1100:{
                  items:2
              }
            }
        });


        $('.bike-comparisons').owlCarousel({
          loop:true,
          margin:10,
          nav:true,         
          autoplay:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:3
              }
          }
      });

      $('.showrooms-bike').owlCarousel({
        loop:true,
        margin:10,
        nav:true,         
        autoplay:false,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          900:{
            items:2
          },
          1100:{
              items:3
          }
        }
      });
      

      $('.popular-bike').owlCarousel({       
        loop:true,
        margin:10,
        nav:true,        
        autoplay:false,       
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            900:{
              items:3
            },
            1100:{
                items:4
            }
        }
    });

    $('.popular-scooter').owlCarousel({         
      loop:true,
      margin:10,
      nav:true,         
      autoplay:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          900:{
            items:3
          },
          1100:{
              items:4
          }
      }
  });


        $('.client_products').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay:false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });


        $('.bike-marque').owlCarousel({
            loop:true,
            margin:10,
            nav:true,         
            autoplay:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                900:{
                  items:3
                },
                1100:{
                    items:4
                }
            }
        });


        
// Datepicker  
$('.input-group.date').datepicker({
  format: "dd/mm/yyyy"
});

  
  // EMI Loan Progress bar Start 
  $('#draggable-point').draggable({
  axis: 'x',
  cursor: 'move',
  containment: "#audio-progress"
  });      
  $('#draggable-point').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = (100 * parseFloat($(this).css("left"))) / (parseFloat($(this).parent().css("width"))) + "%";         
    $('#audio-progress-bar').css({
      'width': xPos
    });
  }
  });
  //  EMI Loan Progress bar End 
  
  // Rate Loan Progress bar Start 
  $('#rate-point').draggable({
  axis: 'x',
  containment: "#rate-audio-progress"
  });      
  $('#rate-point').draggable({
  drag: function() {
  var offset = $(this).offset();
  var xPos = (100 * parseFloat($(this).css("left"))) / (parseFloat($(this).parent().css("width"))) + "%";         
  $('#rate-audio-progress-bar').css({
  'width': xPos
  });
  }
  });
  //  Rate Loan Progress bar End 
  
  
  // Tenure Loan Progress bar Start 
  $('#tenure-point').draggable({
  axis: 'x',
  containment: "#tenure-audio-progress"
  });      
  $('#tenure-point').draggable({
  drag: function() {
  var offset = $(this).offset();
  var xPos = (100 * parseFloat($(this).css("left"))) / (parseFloat($(this).parent().css("width"))) + "%";         
  $('#tenure-audio-progress-bar').css({
  'width': xPos
  });
  }
  });
  //  Tenure Loan Progress bar End
  

        $('.gallery').mauGallery({
                columns: {
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4
                },
                lightBox: true,
                lightboxId: 'myAwesomeLightbox',
                showTags: true,
                tagsPosition: 'top'
        });   


       
        
        //slicknav
        $('ul.nav.navbar-nav').slicknav({
          allowParentLinks: true
        });

        // PrettyPhoto
        $("a[data-gal^='prettyPhoto']").prettyPhoto();


        

     

     





    });
}(jQuery));