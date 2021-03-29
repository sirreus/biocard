var controller = new ScrollMagic.Controller();

var title1 = TweenMax.to("#page4-title1", 1, { className: "+=__visible" });
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#page4-trigger1",
  duration: "35%",
})
  .setTween(title1)
  .addIndicators({ name: "show title1" })
  .addTo(controller);

var title2 = TweenMax.to("#page4-title2", 1, { className: "+=__visible" });
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#page4-trigger1",
  duration: "35%",
})
  .setTween(title2)
  .addIndicators({ name: "show title2" })
  .addTo(controller);

var subtitle = TweenMax.to("#page4-subtitle", 1, { className: "+=__visible" });
var scene3 = new ScrollMagic.Scene({
  triggerElement: "#page4-trigger4",
  duration: "35%",
})
  .setTween(subtitle)
  .addIndicators({ name: "show subtitle" })
  .addTo(controller);

var text = TweenMax.to("#page4-text", 1, { className: "+=__visible" });
var scene4 = new ScrollMagic.Scene({
  triggerElement: "#page4-trigger4",
  duration: "25%",
})
  .setTween(text)
  .addIndicators({ name: "show text" })
  .addTo(controller);

var titleBlock = document.getElementById("page4-title-block");
var scene5 = new ScrollMagic.Scene({
  triggerElement: "#page4-trigger2",
  duration: "15%",
})
  .setPin(titleBlock)
  .addIndicators({ name: "pin title block" })
  .addTo(controller);

if ($(window).width() > 760) {
  var subtitleUp = TweenMax.to("#page4-subtitle", 1, {
    transform: "translateY(-150%)",
  });
  var scene6 = new ScrollMagic.Scene({
    triggerElement: "#page4-trigger3",
    duration: "20%",
    offset: "-65%",
  })
    .setTween(subtitleUp)
    .addIndicators({ name: "subtitle up" })
    .addTo(controller);

  var subtitleUp = TweenMax.to("#page4-text", 1, {
    transform: "translateY(-50%)",
  });
  var scene6 = new ScrollMagic.Scene({
    triggerElement: "#page4-trigger3",
    duration: "20%",
    offset: "-65%",
  })
    .setTween(subtitleUp)
    .addIndicators({ name: "text go up" })
    .addTo(controller);

  ["#page4-title-block", "#page4-text-wrapper"].forEach((elem) => {
    if ($(window).width() > 1024 && $(window).width() < 1440) {
      var elemDown = TweenMax.to(elem, 1, { transform: "translateY(600px)" });
      var scene7 = new ScrollMagic.Scene({
        triggerElement: "#page4-trigger5",
        duration: "100%",
      })
        .setTween(elemDown)
        .addIndicators({ name: "elem down" })
        .addTo(controller);
    } else if ($(window).width() >= 800 && $(window).width() <= 1024) {
      var elemDown = TweenMax.to(elem, 1, { transform: "translateY(700px)" });
      var scene7 = new ScrollMagic.Scene({
        triggerElement: "#page4-trigger5",
        duration: "100%",
      })
        .setTween(elemDown)
        .addIndicators({ name: "elem down" })
        .addTo(controller);
    } else {
      var elemDown = TweenMax.to(elem, 1, { transform: "translateY(500px)" });
      var scene7 = new ScrollMagic.Scene({
        triggerElement: "#page4-trigger5",
        duration: "100%",
      })
        .setTween(elemDown)
        .addIndicators({ name: "elem down" })
        .addTo(controller);
    }
  });
}
