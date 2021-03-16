window.onload = function (e) {
  var block = document.getElementById("doctor");
  console.log(block);

  window.addEventListener("scroll", function () {
    function elementInViewport(el) {
      var top = el.offsetTop;
      var height = el.offsetHeight;

      return top <= window.pageYOffset && top + height >= window.pageYOffset;
    }

    var d = elementInViewport(block);
    if (d) {
      block.style.position = "fixed";
    }
  });
};
