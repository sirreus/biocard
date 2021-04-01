var controller = new ScrollMagic.Controller();

var darked = TweenMax.to("#blue-page", 1, { className: "+=__darkblue" });
if ($(window).width() < 800) {
  var page7DarkOffset = "-60%";
} else {
  var page7DarkOffset = "-100%";
}
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#page10-trigger1",
  duration: "35%",
  offset: page7DarkOffset,
})
  .setTween(darked)
  .addIndicators({ name: "darked" })
  .addTo(controller);

var textBlock = document.getElementById("page10-text-wrapper");
var page7PinDuration = "140%";
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#page10-trigger2",
  duration: page7PinDuration,
})
  .setPin(textBlock)
  .addIndicators({ name: "pin text" })
  .addTo(controller);

var text = TweenMax.to("#page10-text", 1, { className: "+=__visible" });
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#page10-trigger3",
  duration: "35%",
})
  .setTween(text)
  .addIndicators({ name: "show text" })
  .addTo(controller);
