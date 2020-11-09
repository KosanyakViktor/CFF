let blockMenu = document.querySelector('.menu');
let openBlock = document.querySelector('.home');

function hide() {
  blockMenu.classList.remove('nonactive')
}

function show() {
  blockMenu.classList.add('nonactive')
}

blockMenu.addEventListener('mouseleave', show);
blockMenu.addEventListener('mouseenter', hide);
openBlock.addEventListener('mouseleave', show);
openBlock.addEventListener('mouseenter', hide);


var goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);
function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }
function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }


// JQuery //


$(function(){
  $('#recall').submit(function(e){
   e.preventDefault();
   var data = $(this).serialize();
   $.ajax({
  url: 'mail.php',
  type: 'POST',
  data: data,
  beforeSend: function(){
  $('#submit').next().text('Отправляю...');
  },
  success: function(res){
  $('#recall').find('input').val('');
  $('#submit').next().html(res);
  },
  error: function(){
  alert('Ошибка!');
  }
   });
  });
 });
 
 // Slick //

 $('.responsive').slick({
  dots: true,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
     {
       breakpoint:1170,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: true
       }
     },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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