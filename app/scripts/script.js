function openNav() {
  var overlayWrapper = document.getElementById("header")
  overlayWrapper.classList.toggle("active");
}
  
function prev() {
  document.getElementById('slider-scroller').scrollLeft -= 380;
}
function next() {
  document.getElementById('slider-scroller').scrollLeft += 380;
}
function EXPprev() {
  document.getElementById('slider-scroller-exp').scrollLeft -= 380;
}
function EXPnext() {
  document.getElementById('slider-scroller-exp').scrollLeft += 380;
}

function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  let marqueeInterval;

  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);

  function startMarquee() {
    marqueeInterval = setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }

  function stopMarquee() {
    clearInterval(marqueeInterval);
  }

 parentSelector.addEventListener('mouseenter', stopMarquee);
  parentSelector.addEventListener('mouseleave', startMarquee);

  startMarquee();
}

window.addEventListener('load', () => Marquee('.marquee', 0.3));