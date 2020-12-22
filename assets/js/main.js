window.addEventListener(
  "load",
  function () {
    setTimeout(animation, 5500);
  },
  false
);

// width = screen.width;
// height = screen.height;
// alert(width + " x " + height);

function animation() {
  var el = document.getElementsByClassName("social_logos");
  for (var i = 0; i < el.length; i++) {
    el[i].style.transitionDuration = "0.5s";
  }
}

gsap.to(".slider", 1.3, { delay: 0.2, left: "100%", ease: Expo.easeInOut });

gsap.from(".my_photo", {
  opacity: 0,
  duration: 1.5,
  delay: 2,
  x: 360,
});

gsap.from(".my_info", { opacity: 0, duration: 3, delay: 2.3, y: 25 });

gsap.from(".animation", {
  opacity: 0,
  duration: 3,
  delay: 2.3,
  y: 25,
  ease: "expo.out",
  stagger: 0.3,
});

gsap.from(".social_logos", {
  opacity: 0,
  duration: 3,
  delay: 3.5,
  y: 30,
  ease: "elastic.out(1, 0.3)",
  stagger: 0.2,
});
