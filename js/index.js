(function ($, undefined) {
  $(document).ready(function () {
    //обработчик скролл (функция ) выполняющяя
    $(document).scroll(function () {
      //если ширина документа будет меньше шапка(функции которую мы пропишем дальше ) не будет срабатывать
      if ($(document).width() < 1024) return false;
      //обращаемся к функции скроллТОп она помогает узнать сколько мы проскролили
      //обращаетмся к обьеку $('.full-page') берем .height() и делим высоту на 2
      if ($(document).scrollTop() > $('.full-page').height() / 2) {
        //и когда мы дойдем до нужной высоты берем обьект с классом $('header') и через  .addClass добавляем наш класс с свойствами ('fixed') что бы шапка бы так как мы хотим
        $('header').addClass('fixed');
      } else {
        //так же мы добавляем возможность убрать этот класс от $('header') когда скролл будет выше нужной нам высоты
        $('header').removeClass('fixed');
      }
    });
    ///////////////////////////////////////////////////////////////////////////////

    //добавми кнопке в футоре поднимать нас в начало сайта

    //мы оборащаемся к блоку вешаем на него обработчик события .on задаем событие ("click", ) и дальше говорим какая функция будет вызвана
    $('.up-btn').on('click', function () {
      //обращаемся к html тегу а так же к тегу body и дальше для них используем такую функцию как .animate (возволяет анимировать какой либо тег по каким либо свойствам)
      $('html, body').animate(
        {
          //в нашем случае мы будем использовать такую анимацию как sctollTop
          // и задаем его значение 0 чтобы проскролилось в самый верх(отступ html body равен 0)
          scrollTop: 0,
        },
        //и задаем скорость прокрутки
        'slow'
      );
    });
    ///////////////////////////////////////////////////////////////////////////////
    //меню
    //на кнопку @show-menu мы вешаем обработчик .on и при нажатии("click, ") у нас будет срабатывать функция которая будет делать
    $('#show-menu').on('click', function () {
      $('#hidden-menu').animate(
        {
          right: 0,
        },
        500
      );
    });
    ///////////////////////////////////////////////////////////////////////////////
    $('#hidden-menu .close').on('click', function () {
      $('#hidden-menu').animate(
        {
          right: '-300px',
        },
        200
      );
    });
    ///////////////////////////////////////////////////////////////////////////////
    $('#slider').slick({
      dots: false,
      prevArrow:
        '<div class="arrow-prev"><i class="fa-solid fa-arrow-left"></i></div>',
      nextArrow:
        '<div class="arrow-next"><i class="fa-solid fa-arrow-right"></i></div>',
      infinite: true, //прокручивание слайдов или если фолс то стопнется на последнем слайде

      slidesToShow: 2, //кол-во показываемых слайдов
      slidesToScroll: 2, //кол-во вращающихся слайдов
    });
    ///////////////////////////////////////////////////////////////////////////////
  });
})(jQuery);
