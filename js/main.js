// Adjust Slider Height
let upper = document.querySelector('.upper-bar'),
    nav = document.querySelector('.navbar'),
    slider = document.querySelector('.slider'),
    carouselItem = document.querySelector('.carousel-item'),
    winH = window.innerHeight,
    getH = (winH - (upper.offsetHeight + nav.offsetHeight));

slider.style.height = `${getH}px`;
// carouselItem.style.height = `${getH}px`;


// Featured-work shuffle
$('.featured-work ul li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
  if($(this).data('class') === 'all') {
    $('.shuffle-imgs .col-md').css('opacity', 1);
  } else {
    $('.shuffle-imgs .col-md').css('opacity', '.08');
    $($(this).data('class')).parent().css('opacity', 1);
  }
});