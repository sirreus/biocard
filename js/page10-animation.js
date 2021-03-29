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

var text = TweenMax.to("#page10-text", 1, { className: "+=__visible" });
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#page10-trigger1",
  duration: "35%",
  offset: "40%",
})
  .setTween(text)
  .addIndicators({ name: "show text" })
  .addTo(controller);

var textBlock = document.getElementById("page10-text-wrapper");
if ($(window).width() < 800) {
  var page7PinDuration = "80%";
  var page7PinOffset = "40%";
} else {
  var page7PinDuration = "40%";
  var page7PinOffset = "80%";
}
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#page10-trigger1",
  duration: page7PinDuration,
  offset: page7PinOffset,
})
  .setPin(textBlock)
  .addIndicators({ name: "pin text" })
  .addTo(controller);
