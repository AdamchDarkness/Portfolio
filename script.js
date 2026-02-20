// Typewriter Effect
const typedTextSpan = document.querySelector(".typewriter-text");
if(typedTextSpan) {
    const textArray = [
        "Python Architectures", 
        "Full Stack Systems", 
        "Mobile Applications", 
        "System Automation"
    ];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }
    
    setTimeout(type, newTextDelay + 250);
}

// Mobile Menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');

    if (nav.classList.contains('nav-active')) {
        Object.assign(nav.style, {
            display: 'flex',
            flexDirection: 'column',
            position: 'fixed',
            top: '0',
            right: '0',
            height: '100vh',
            width: '70%',
            background: '#0B0E14',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '999',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
            transform: 'translateX(0)'
        });
    } else {
        nav.style.display = 'none';
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 768) {
            nav.classList.remove('nav-active');
            nav.style.display = 'none';
            burger.classList.remove('toggle');
        }
    });
});