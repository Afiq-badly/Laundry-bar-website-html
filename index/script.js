window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollButton = document.querySelector('.scroll-button');
  if (document.body.scrollTop > (document.documentElement.clientHeight / 4) || document.documentElement.scrollTop > (document.documentElement.clientHeight / 4)) {
    scrollButton.classList.add('show');
  } else {
    scrollButton.classList.remove('show');
  }
}

function scrollToTop() {
  var scrollOptions = {
    top: 0,
    behavior: 'smooth'
  };
  window.scrollTo(scrollOptions);
}

window.addEventListener("scroll", function() {
  var header = document.querySelector(".header");
  if (window.pageYOffset > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll() {
  const section2 = document.querySelector('.section2');
  if (isInViewport(section2)) {
    section2.classList.add('show');
    window.removeEventListener('scroll', handleScroll);
  } else {
    section2.classList.remove('show');
    section2.classList.add('reverse');
  }
}

window.addEventListener('scroll', handleScroll);
