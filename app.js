const nav = document.querySelector('nav');
const footerDate = document.querySelector('.footer-date');
const navLinks = document.querySelector('.nav-links');
const questionCont = document.querySelector('.question-center');
const questions = document.querySelectorAll('.question');

// Sticky Nav
window.addEventListener('scroll', (e) => {
  const navHeight = nav.getBoundingClientRect().height;
  const scrollHeight = window.scrollY;
  if (scrollHeight > navHeight) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

// Date
footerDate.textContent = new Date().getFullYear();

// Scroll Into View
navLinks.addEventListener('click', (e) => {
  e.preventDefault();
  const id = e.target.getAttribute('href');
  scrollToView(id);
});

function scrollToView(id) {
  if (!id) return;
  const element = document.querySelector(id);
  const navHeight = nav.getBoundingClientRect().height;
  const fixedNav = nav.classList.contains('sticky');
  let position = element.offsetTop - navHeight;

  if (!fixedNav) {
    position -= navHeight;
  }

  window.scrollTo({
    left: 0,
    top: position,
    behavior: 'smooth',
  });
}

// Accordion

questionCont.addEventListener('click', displayActiveQuestion);

function displayActiveQuestion(e) {
  const activeQuestion = e.target.closest('.question');
  if (!activeQuestion) return;
  if (activeQuestion.classList.contains('active')) {
    activeQuestion.classList.remove('active');
    return;
  }
  questions.forEach((question) => question.classList.remove('active'));
  activeQuestion.classList.add('active');
}
