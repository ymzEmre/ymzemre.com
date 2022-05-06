window.addEventListener(
  'load',
  function () {
    setTimeout(animation, 5500);
  },
  false
);

function animation() {
  var el = document.getElementsByClassName('social-icon');
  for (var i = 0; i < el.length; i++) {
    el[i].style.transitionDuration = '0.5s';
  }
}

gsap.to('.slider', 1.3, { delay: 0.2, left: '100%', ease: Expo.easeInOut });

gsap.from('.dev-vscode', {
  opacity: 0,
  duration: 3,
  delay: 5,
  x: 50,
  ease: 'elastic.out(1, 0.3)',
  stagger: 0.2,
});
gsap.from('.dev-vue', {
  opacity: 0,
  duration: 3,
  delay: 5.5,
  y: -50,
  ease: 'elastic.out(1, 0.3)',
  stagger: 0.2,
});
gsap.from('.dev-react', {
  opacity: 0,
  duration: 3,
  delay: 6.5,
  y: -50,
  ease: 'elastic.out(1, 0.3)',
  stagger: 0.2,
});
gsap.from('.dev-node', {
  opacity: 0,
  duration: 3,
  delay: 7.5,
  y: -50,
  ease: 'elastic.out(1, 0.3)',
  stagger: 0.2,
});
gsap.from('.dev-mongo', {
  opacity: 0,
  duration: 3,
  delay: 8.5,
  y: -50,
  ease: 'elastic.out(1, 0.3)',
  stagger: 0.2,
});
gsap.from('.dev-aws', {
  opacity: 0,
  duration: 3,
  delay: 9.5,
  y: -50,
  ease: 'elastic.out(1, 0.3)',
  stagger: 0.2,
});

gsap.from('.my_info', { opacity: 0, duration: 3, delay: 2.3, y: 25 });

gsap.from('.animation', {
  opacity: 0,
  duration: 3,
  delay: 2.3,
  y: 25,
  ease: 'expo.out',
  stagger: 0.3,
});

gsap.from('.social-icon', {
  opacity: 0,
  duration: 3,
  delay: 4,
  y: 30,
  ease: 'elastic.out(1, 0.3)',
  stagger: 0.2,
});
