const introContainer = document.querySelector('.content__intro');
const heroContainer = document.querySelector('.content__image--hero');
const headingEl = document.querySelector('.heading');
const textEl = document.querySelector('.text');
const angleButtons = document.querySelectorAll('.nav__button');
const hamburgerButton = document.querySelector('.icon-hamburger');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.icon-close');

let activeIndex = 0;

const contents = [
  {
    heading: 'Discover innovative ways to decorate',
    text: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`,
    bgUrl: './style/images/desktop-image-hero-1.jpg',
  },
  {
    heading: 'We are available all across the globe',
    text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`,
    bgUrl: './style/images/desktop-image-hero-2.jpg',
  },
  {
    heading: 'Manufactured with the best materials',
    text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`,
    bgUrl: './style/images/desktop-image-hero-3.jpg',
  },
];

angleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    heroContainer.classList.remove('animation');
    headingEl.classList.remove('animation');
    textEl.classList.remove('animation');

    if (button.classList.contains('nav__button--pre')) {
      activeIndex--;
      activeIndex = activeIndex < 0 ? (activeIndex = 2) : activeIndex;
    } else {
      activeIndex++;
      activeIndex = activeIndex > 2 ? (activeIndex = 0) : activeIndex;
    }

    setTimeout(() => {
      heroContainer.classList.add('animation');
      headingEl.classList.add('animation');
      textEl.classList.add('animation');
    }, 0);
    getContents(activeIndex);
  });
});

function getContents(activeIndex) {
  const content = contents[activeIndex];

  headingEl.innerHTML = content.heading;
  textEl.innerHTML = content.text;

  heroContainer.style.background = `no-repeat url(${content.bgUrl}) 0% 0%`;
  heroContainer.style.backgroundSize = 'cover';
}

hamburgerButton.addEventListener('click', () => {
  modal.classList.add('active');
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('active');
});
