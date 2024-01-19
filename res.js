function changeContent(contentType) {
  var homeSection = document.getElementById('home-section');
  var aboutSection = document.getElementById('about-section');
  var contactSection = document.getElementById('contact-section');

  homeSection.classList.add('hidden');
  aboutSection.classList.add('hidden');
  contactSection.classList.add('hidden');

  if (contentType === 'Home') {
    homeSection.classList.remove('hidden');
    smoothScrollTo(homeSection);
  } else if (contentType === 'About') {
    aboutSection.classList.remove('hidden');
    smoothScrollTo(aboutSection);
  } else if (contentType === 'Contact') {
    contactSection.classList.remove('hidden');
    smoothScrollTo(contactSection);
  }
}

function smoothScrollTo(element) {
  window.scrollTo({
    behavior: 'smooth',
    top: element.offsetTop,
  });
}
