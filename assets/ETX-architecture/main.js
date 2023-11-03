


const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
navToggle.addEventListener('click', () =>{
navMenu.classList.add('show-menu')
})
}

if(navClose){
navClose.addEventListener('click', () =>{
navMenu.classList.remove('show-menu')
})
}

const navlink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
  
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        :header.classList.remove('blur-header')
  }
  
  window.addEventListener('scroll' , blurHeader)


/*=============== SCROLL SECTIONS ACTIVE ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



document.getElementById('language-toggle').addEventListener('click', function() {
    // Toggle visibility of English and Spanish text
    var englishElements = document.querySelectorAll('.english-text');
    var spanishElements = document.querySelectorAll('.spanish-text');

    // Function to hide English and show Spanish text
    function switchToSpanish() {
        englishElements.forEach(function(el) {
            el.style.display = 'none';
        });

        spanishElements.forEach(function(el) {
            el.style.display = 'block';
        });
    }

    // Function to hide Spanish and show English text
    function switchToEnglish() {
        englishElements.forEach(function(el) {
            el.style.display = 'block';
        });

        spanishElements.forEach(function(el) {
            el.style.display = 'none';
        });
    }

    // Check if English text is currently visible
    var isEnglishVisible = (englishElements[0].style.display !== 'none' && englishElements[0].style.display !== '');

    // Toggle between English and Spanish based on current visibility
    if (isEnglishVisible) {
        switchToSpanish();
    } else {
        switchToEnglish();
    }
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
e.preventDefault()

emailjs.sendForm('service_d40481b', 'template_dcpq7hd', '#contact-form', '63hhzmg0WOb4hsyug')

  .then(() =>{
    contactMessage.textContent = 'Message Sent ✅'
    alert("Thank you for contacting Home Swift ! We will review the information provided and we will get back to you shortly !");
  }, () =>{
    contactMessage.textContent = 'Message not sent (service error) ❌'
    alert("Message not sent succesfully (service error)");
  })
}

contactForm.addEventListener('submit', sendEmail)


/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
	distance: '80px',
	duration: 2500,
  })
  
  sr.reveal(`.top`,{
	origin: 'top',
  })

  sr.reveal(`.bottom`,{
	origin: 'bottom',
  })

  sr.reveal(`.left`,{
    origin: 'left',
  })

  sr.reveal(`.right`,{
    origin: 'right',
  })