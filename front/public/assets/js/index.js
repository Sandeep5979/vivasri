$(function () {
    // HERO SLIDER
    var menu = [];
    jQuery('.swiper-slide').each(function (index) {
        menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
    });
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        autoplay: true,
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            progress: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },

            touchStart: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },

            setTransition: function (speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                        speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    // DATA BACKGROUND IMAGE
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
})

$(function () {
    // Animation events
    swiper.on('.hero-slider', function () {
        $('.slide-inner .sliderProductImg').removeClass('animated animate__fadeInDown').css('opacity', '0');
        $('.slide-inner .sliderSurface').removeClass('animated animate__fadeInUp').css('opacity', '0');
        $('.banner-text .btn-one').removeClass('animated animate__fadeInDown').css('opacity', '0');
    });

    swiper.on('.hero-slider', function () {
        $('.slide-inner .sliderProductImg').addClass('animated animate__fadeInDown').css('opacity', '1');
        $('.slide-inner .sliderSurface').addClass('animated animate__fadeInUp').css('opacity', '1');
        $('.banner-text .btn-one').addClass('animated animate__fadeInDown').css('opacity', '1');
    });
})


// Astrologer Slider

$(function () {
    $('.astroslider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1.5
            },
            500: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
})


// Product Slider


$(function () {
    $('.productSlider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1.5
            },
            500: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
})

// testomonial slider
$(function () {
    $('.testiSlider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1.5
            },
            500: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
})


// Video Slider
$(function () {
    $('.videoSlider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
})

// Blogs Slider
$(function () {
    $('.blogSlider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
})

$(document).ready(function () {
    var lastScrollTop = 0;

    function handleScroll() {
        var st = $(window).scrollTop(); // Get the scroll position of the window

        if (st > lastScrollTop && st >= 100) {
            // downscroll code
            $('.headerSection').addClass('scroll-down').removeClass('scroll-up');
        } else if (st < lastScrollTop) {
            // upscroll code
            $('.headerSection').addClass('scroll-up').removeClass('scroll-down');
        }

        if (st <= 1) {
            // Reset classes when at the top of the page
            $('.headerSection').removeClass('scroll-down scroll-up');
        }

        lastScrollTop = st; // Update last scroll position
    }

    // Call the handleScroll function on scroll
    $(window).scroll(handleScroll);
});


// Scroll Top Button
document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.querySelector(".scrollToTop");
    const rootElement = document.documentElement;
    const bodyElement = document.body;
    const progressBar = document.getElementById("progress-bar");
    const pathLength = document
        .querySelector("#progress-bar > svg > path")
        .getTotalLength();

    scrollToTopBtn.addEventListener("click", () => {
        rootElement.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.addEventListener("scroll", () => {
        const scrollAmount = pathLength / 100;
        const scrollPosition = Math.round(
            ((rootElement.scrollTop || bodyElement.scrollTop) /
                ((rootElement.scrollHeight || bodyElement.scrollHeight) -
                    innerHeight)) *
            100 *
            scrollAmount
        );

        if (scrollPosition > 5) {
            scrollToTopBtn.classList.add("showBtn");
            progressBar.style.setProperty("--scrollAmount", scrollPosition + "px");
        } else {
            scrollToTopBtn.classList.remove("showBtn");
        }
    });
});


// menu Button
// document.querySelectorAll(".hamburger").forEach((element) => {
//     element.addEventListener("click", (event) => {
//         element.classList.toggle("is-active");
//     });
// });

$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".mainHeader").animate({
            width: "toggle"
        });
    });
});

$(document).ready(function () {
    $(".listmenubtn").click(function () {
        $(".panelSidebar").animate({
            width: "toggle"
        });
    });
});




$(document).ready(function () {
    $('.megaMenu > a').on('click', function () {
        $(this).closest('.megaMenu').find('.headerSubNav').slideToggle();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Select the logo image
    var logoImage = document.querySelector('img[alt="Astrovala"]');

    // Function to change the image src based on the class
    function toggleLogoImage() {
      var header = document.querySelector(".headerSection");

      if (header.classList.contains("scroll-up") || header.classList.contains("scroll-down")) {
        // Set the logo to 'assets/img/logo.svg'
        logoImage.src = "assets/img/logo.svg";
      } else {
        // Set the logo to 'assets/img/logo-light.png'
        logoImage.src = "assets/img/logo-light.png";
      }
    }

    // Listen for class changes on the header
    var observer = new MutationObserver(toggleLogoImage);
    observer.observe(document.querySelector(".headerSection"), {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Initial check to set the correct logo on page load
    toggleLogoImage();
  });


  $(document).ready(function () {
    var isOpen = false;

    // Toggle the menu on hamburger click
    $('.hamburger').on('click', function (e) {
        e.stopPropagation(); // Prevent closing the menu on hamburger click

        if (!isOpen) {
            $('.dropdownmenu').css({ right: '-30%' }).show().animate({ right: '0' }, 500);
        } else {
            closeMenu();
        }

        $(this).toggleClass('is-active'); // Toggle the 'is-active' class
        isOpen = !isOpen;
    });

    // Close the menu when clicking outside of the menu
    $(document).on('click', function () {
        if (isOpen) {
            closeMenu();
            isOpen = false;
            $('.hamburger').removeClass('is-active'); // Remove 'is-active' class
        }
    });

    // Prevent the menu from closing when clicking inside it
    $('.dropdownmenu').on('click', function (e) {
        e.stopPropagation();
        $('.hamburger').removeClass('is-active'); // Also remove 'is-active' class here
    });

    // Function to close the menu
    function closeMenu() {
        $('.dropdownmenu').animate({ right: '-30%' }, 500, function () {
            $(this).hide();
        });
    }
});



  // go to top with side bar nav
$(function () {
    $(window).scroll(function () {


    }).scroll();
    $('.navibtn').click(function () {
        var target = $(this).data('target'); // Get the target section ID from data attribute
        $('html, body').animate({
            scrollTop: $(target).offset().top - 150 // Scroll to the top of the target section with an offset of 100px
        }, 100); // Adjust the duration of the animation as needed
    });

})


$(document).ready(function () {
    $(window).on('scroll', function () {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.sectionTop').each(function () {
                var sectionID = $(this).attr('id');
                if ($(this).position().top <= windscroll + 150) {
                    $('.navWrapper ul li a.active').removeClass('active');
                    $('.navWrapper ul li a[href="#' + sectionID + '"]').addClass('active');
                }
            });
        } else {
            $('.navWrapper ul li a.active').removeClass('active');
            $('.navWrapper ul li a:first').addClass('active');
        }
    });

});

$(document).ready(function () {
    $(".prparaReadBtn").click(function () {
        $(".prlistMorePara").slideToggle();
        $(this).text($(this).text() === 'Expend [+]' ? 'Less [-]' : 'Expend [+]');
    });
});


var currYear = (new Date()).getFullYear();
var today = new Date();
var formattedDate = ("0" + today.getDate()).slice(-2) + "/" + 
                    ("0" + (today.getMonth() + 1)).slice(-2) + "/" + 
                    today.getFullYear();

$(document).ready(function() {
  $("#bdate").val(formattedDate);
  
  $(".datepicker").datepicker({
    defaultDate: today,
    setDefaultDate: true,
    maxDate: today,
    yearRange: [1950, currYear],
    format: "dd/mm/yyyy"
  });
});

$(document).ready(function() {
    $('.timepicker').timepicker({
      defaultTime: 'now',   // Set default time to the current time
      twelveHour: false,    // Use 24-hour format (set to `true` for 12-hour format)
      autoclose: true,      // Close the timepicker automatically after selection
    });
  });



  // Blogs Slider
$(function () {
    $('.horoscopeSlider').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 550,
        autoplayHoverPause: true,
        // animateIn: 'animate__fadeIn',
        // animateOut: 'animate__fadeOut',
        smartSpeed: 500,
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 6
            },
            1000: {
                items: 8
            }
        }
    })
})


// Shipping Address
$(function () {
    $(document).ready(function () {
        $('#differentAddress').change(function () {
            if ($(this).is(':checked')) {
                $('.shipping-address').slideDown();
            } else {
                $('.shipping-address').slideUp();
            }
        });
    });
})


$(function () {
    $('#sendOTP').click(function () {
        $(this).closest('.signUpotherOptions').hide(); // Hides the parent
        $('.otpForm').show(); // Show the form outside the parent
    });
});



$(document).ready(function () {
    // Toggle submenu on click
    $(".hassubmaiside").click(function () {
        $(this).toggleClass("active");
        $(this).find(".submainsidebar").animate({
            height: "toggle"
        });
    });

    var currentPage = window.location.href;

    // Auto-expand and add active class for submenu links
    $(".hassubmaiside").each(function () {
        var isActive = false;

        $(this)
            .find(".submainsidebar a")
            .each(function () {
                if (this.href === currentPage) {
                    $(this).addClass("active"); // Add active class to the link
                    isActive = true; // Mark the parent menu as active
                }
            });

        if (isActive) {
            $(this).addClass("active"); // Add active class to .hassubmaiside
            $(this).find("> a").addClass("active"); // Add active class to .hassubmaiside > a
            $(this).find(".submainsidebar").css("display", "block"); // Show the submenu
        }
    });

    // Auto-add active class for mainsidebar links
    $(".mainsidebar > li > a").each(function () {
        if (this.href === currentPage) {
            $(this).addClass("active"); // Add active class to the matching link
        }
    });
});



function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$("#imageUpload").change(function() {
    readURL(this);
});

// age drop down
function setupDropdown(dropdown, min = 18, max = 62, labelSuffix = " years") {
      const numbersGrid = dropdown.querySelector(".numbers-grid");
      const selectedValue = dropdown.querySelector(".selectedValue");
      const dropdownMenu = dropdown.querySelector(".dropdown-menu");
      const dropdownToggle = dropdown.querySelector(".dropdown-toggle");

      // Generate numbers
      for (let i = min; i <= max; i++) {
        const div = document.createElement("div");
        div.classList.add("number");
        div.textContent = i;
        div.addEventListener("click", () => {
          numbersGrid.querySelectorAll(".number").forEach(n => n.classList.remove("active"));
          div.classList.add("active");
          selectedValue.textContent = i + labelSuffix;
          dropdownMenu.classList.remove("active");
        });
        numbersGrid.appendChild(div);
      }

      dropdownToggle.addEventListener("click", () => {
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
          if (menu !== dropdownMenu) menu.classList.remove("active");
        });
        dropdownMenu.classList.toggle("active");
      });
    }

    // Setup multiple dropdowns
    document.querySelectorAll(".dropdown").forEach((dropdown, idx) => {
      if (idx === 2) {
        setupDropdown(dropdown, 100, 200, " cm"); // height example
      } else {
        setupDropdown(dropdown, 18, 62, " years");
      }
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown-menu").forEach(menu => menu.classList.remove("active"));
      }
    });

    // running numbers
    function animateCounter(counter) {
      let target = +counter.getAttribute("data-target");
      let current = 0;
      let increment = target / 200; // adjust 200 = speed factor

      let updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      updateCounter();
    }

    // Intersection Observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
        } else {
          entry.target.textContent = "0"; // reset when out of view
        }
      });
    }, { threshold: 0.5 });

    // Observe all counters
    document.querySelectorAll(".counter").forEach(counter => {
      observer.observe(counter);
    });

    // age range ruler
    document.querySelectorAll(".range-container").forEach(container => {
      const minRange = container.querySelector(".minAge");
      const maxRange = container.querySelector(".maxAge");
      const minAgeValue = container.querySelector(".minAgeValue");
      const maxAgeValue = container.querySelector(".maxAgeValue");

      minRange.addEventListener("input", () => {
        if (parseInt(minRange.value) > parseInt(maxRange.value)) {
          minRange.value = maxRange.value;
        }
        minAgeValue.value = minRange.value;
      });

      maxRange.addEventListener("input", () => {
        if (parseInt(maxRange.value) < parseInt(minRange.value)) {
          maxRange.value = minRange.value;
        }
        maxAgeValue.value = maxRange.value;
      });
    });

    // height range
    function cmToFeetInches(cm) {
      let inches = Math.round(cm / 2.54);
      let feet = Math.floor(inches / 12);
      let remainingInches = inches % 12;
      return `${feet}'${remainingInches}" (${cm}cm)`;
    }

    document.querySelectorAll(".range-container2").forEach(container => {
      const minRange = container.querySelector(".minHeight");
      const maxRange = container.querySelector(".maxHeight");
      const minHeightValue = container.querySelector(".minHeightValue");
      const maxHeightValue = container.querySelector(".maxHeightValue");

      function updateValues() {
        if (parseInt(minRange.value) > parseInt(maxRange.value)) {
          minRange.value = maxRange.value;
        }
        minHeightValue.value = cmToFeetInches(minRange.value);
        maxHeightValue.value = cmToFeetInches(maxRange.value);
      }

      minRange.addEventListener("input", updateValues);
      maxRange.addEventListener("input", updateValues);

      // initialize on load
      updateValues();
    });

    // select
    $(document).ready(function() {
        // Apply Select2 to ALL select boxes with the class
        $('.searchable-select').select2({
          placeholder: "-- Select --",
          allowClear: true
        });
      });