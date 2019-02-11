// Отримання кнопки для того щоб покласти на неї собитие

document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;

autoSlider();

var left = 0;
var right = 0;
var timer;

//  Автослайдер

function autoSlider () {
   timer = setTimeout(sliderLeft, 2000);
}

function sliderLeft() {
    var poloska = document.getElementById('poloska');
    left = left - 128;
    if (left < -896) {
        left = 0;
        clearTimeout (timer);
    }
    poloska.style.left = left + 'px';
    autoSlider ();
    
}

function sliderRight() {
    var poloska = document.getElementById('poloska');
    left += 128;
    if (left > 0) {
        left = -896;
    }
    poloska.style.left = left + 'px';
    
}