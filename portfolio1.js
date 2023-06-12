const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

if(navToggle){
  navToggle.addEventListener('click', function(){
    navMenu.classList.add('show-menu')
  })
}
if(navClose){
  navClose.addEventListener('click', function(){
    navMenu.classList.remove('show-menu')
  })
}

//removing nav__menu when we click on any link
const navLink = document.querySelectorAll('.nav__link')

navLink.forEach(function(link){
  link.addEventListener('click',function(){
    navMenu.classList.remove('show-menu')
  })
})



window.addEventListener('scroll', orangeHeader)

function orangeHeader(){
  const header = document.getElementById('header')
  const scrollHeight = window.pageYOffset;
  if(scrollHeight >= 50){
    header.classList.add('orange-header')
  }else{
    header.classList.remove('orange-header')
  }
}
orangeHeader()



//sending an email
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')


const sendEmail = (e) =>{
  e.preventDefault()

  emailjs.sendForm('service_3sq78mm', 'template_2829xkf', '#contact-form', 'egBYCYHKFVHqyYR5u')
  .then(()=>{
    contactMessage.textContent = 'Message sent successfully'

    setTimeout(()=>{
      contactMessage.textContent = ''
    },5000)
    contactForm.reset()
  }, ()=>{
    contactMessage.textContent = 'Message not sent'
  })
}

contactForm.addEventListener('submit', sendEmail)


//show scrollup
window.addEventListener('scroll', scrollup)

function scrollup(){
  const scrollUp = document.getElementById('scroll-up')
  const scrollPx = window.pageYOffset;
  if(scrollPx >= 400){
    scrollUp.classList.add('show-scroll')
  }else{
    scrollUp.classList.remove('show-scroll')
  }
}
scrollup()

//scroll section active link
const sections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)
function scrollActive(){
  const scrollY = window.pageYOffset
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop-58,
          sectionId = current.getAttribute('id'),
          sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
          }else{
            sectionClass.classList.remove('active-link')
          }
  })
}

//scroll reveal

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay:400,
  //reset:true //animations repeat

})
sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin:'bottom'})
sr.reveal(`.about__data, .skills__data`, {origin:'left'})
sr.reveal(`.about__image, .skills__content`, {origin:'right'})
sr.reveal(`.services__card, .projects__card`, {interval:100})