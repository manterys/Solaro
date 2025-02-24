// AOS.init();

(function () {
  // Preloader
  function dkPreloader() {
    const pageWrapper = document.querySelector(".page-wrapper");
    const preloader = document.querySelector(".preloader");

    window.addEventListener("load", function () {
      preloader.classList.add("loaded");

      preloader.addEventListener("transitionend", function () {
        pageWrapper.classList.add("pageLoaded");
        preloader.style.display = "none";

        // AOS
        // https://github.com/michalsnik/aos
        AOS.init({
          duration: 600,
          offset: 150,
          once: true,
        });
      });
    });
  }

  // Navigation
  function dkNavigation() {
    const navLink = document.querySelectorAll(".navbar-collapse a");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const navbarToggler = document.querySelector(".navbar-toggler");
    navLink.forEach(function (link) {
      link.addEventListener("click", function (e) {
        navbarCollapse.classList.remove("show");
        navbarToggler.classList.add("collapsed");
        navbarToggler.setAttribute("aria-expanded", "false");
      });
    });
  }

  // MoveTo
  // https://github.com/hsnaydd/moveTo
  function dkMoveTo() {
    const easeFunctions = {
      easeInOutCubic: function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      },
    };

    const triggers = document.querySelectorAll(".smoothscroll");

    const moveTo = new MoveTo(
      {
        tolerance: 50,
        duration: 1000,
        easing: "easeInOutCubic",
        container: window,
      },
      easeFunctions
    );

    triggers.forEach(function (trigger) {
      moveTo.registerTrigger(trigger);
    });
  }

  // Swiper
  // https://swiperjs.com
  function dkHomeSwiper() {
    const homeSwiper = new Swiper('.home .swiper', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        speed: 500,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
  }

  // Swiper
  // https://swiperjs.com
  function dkTestimonialsSwiper() {
    const testimonialsSwiper = new Swiper('.testimonials .swiper', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 40,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    });
  }

// Scroll Up
  function dkScrollUp() {
    const pxShow = 900;
    const scrollUp = document.querySelector(".scroll-up");
    
    window.addEventListener('scroll', function() {
        if (!scrollUp) return;
        
        // Show or hide the button
        if (window.scrollY >= pxShow) scrollUp.classList.add("scroll-up--visible");
        
        if (window.scrollY >= pxShow) {
            if(!scrollUp.classList.contains('scroll-up--visible')) scrollUp.classList.add("scroll-up--visible")
        } else {
            scrollUp.classList.remove("scroll-up--visible")
        }
    })
  };

  function dkForm() {
    const formElem = document.getElementById('form');
    const alertSuccess = document.querySelector('.alert-success');
    const alertDanger = document.querySelector('.alert-danger');

    formElem.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch('mail.php', {
            method: 'POST',
            body: formData,
        }).then(function() {
            alertSuccess.style.display = 'block';
            setTimeout(() => (alertSuccess.style.display = 'none'), 4000);
            formElem.reset();
        }).catch(function() {
            alertDanger.style.display = 'block';
            setTimeout(() => (alertDanger.style.display = 'none'), 4000);
        });
    });
}

  dkPreloader();
  dkNavigation();
  dkMoveTo();
  dkHomeSwiper();
  dkTestimonialsSwiper();
  dkScrollUp();
  dkForm();
})();
