/* ANIMATIONS */ 

const home_btn = document.querySelector('.btn#home');
const about_btn = document.querySelector('.btn#about');
const contact_btn = document.querySelector('.btn#contact');
// const home = document.querySelector('.slides#home');
const about = document.querySelector('.slides#about');
const contact = document.querySelector('.slides#contact');


const animations = () => {
 home_btn.addEventListener('click', (e, err) => {
  if (err) throw err;
  e.preventDefault();
  about.style.transform = 'translateX(-100%)';
  contact.style.transform = 'translateX(100%)';
 });
 about_btn.addEventListener('click', (e, err) => {
  if (err) throw err;
  e.preventDefault();
  about.style.transform = 'translateX(0)';
  contact.style.transform = 'translateX(100%)';
 });
 contact_btn.addEventListener('click', (e, err) => {
  if (err) throw err;
  e.preventDefault();
  contact.style.transform = 'translateX(0)';
  about.style.transform = 'translateX(-100%)';
 });
};

animations();

console.log('4565')