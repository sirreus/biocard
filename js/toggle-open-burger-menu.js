$(document).ready(function () {
  // объявляем глобальную переменную
  var modifier = null;

  $("#menu-button").click(function () {
    // грабим элемент на тему классов
    var buttonClasses = $(this).attr("class").split(" ");

    /**
     * проверяем если у кнопки больше чем 1 класс,
     * т.е. есть модификатор
     * записываем в глобальную переменную этот модификатор
     */
    if (buttonClasses.length > 1) {
      modifier = buttonClasses[1];
    }
    // если нет модификатора, то ничего не делаем

    $(this).toggleClass(modifier);

    if ($(this).hasClass(modifier)) {
      $("#menu").slideUp("slow", function () {
        $("#menu").css("display", "none");
      });
      // вырезаем цвет из модификатора и используем для лого
      var color = modifier.split("__to-open-")[1];
      $(".logo").attr("src", `./assets/logo-${color}.svg`);
    } else {
      $("#menu").slideDown("slow", function () {});
      // для меню лого всегда ставим черное лого
      $(".logo").attr("src", "./assets/logo-black.svg");
    }
  });
});
