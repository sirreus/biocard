var controller = new ScrollMagic.Controller();

var rotate = TweenMax.to(".page6-ngramma", 1, {
  rotation: 720,
  ease: Linear.easeNone,
});
var scene = new ScrollMagic.Scene({
  triggerElement: "#page6-trigger1",
  duration: 1000,
  pushFollowers: false,
})
  .setTween(rotate)
  .addIndicators({ name: "rotate ngramme" })
  .addTo(controller);
