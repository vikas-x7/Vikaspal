  // const roles = ["backend", "frontend", "fullstack", "AI integration"];
  // let roleIndex = 0;
  // let charIndex = 0;
  // let typingElement = document.getElementById("typing");
  // let isDeleting = false;

  // function typeEffect() {
  //   const currentRole = roles[roleIndex];
  //   const displayedText = isDeleting
  //     ? currentRole.slice(0, --charIndex)
  //     : currentRole.slice(0, ++charIndex);

  //   typingElement.textContent = displayedText;

  //   if (!isDeleting && charIndex === currentRole.length) {
  //     setTimeout(() => (isDeleting = true), 1000);
  //   } else if (isDeleting && charIndex === 0) {
  //     isDeleting = false;
  //     roleIndex = (roleIndex + 1) % roles.length;
  //   }

  //   setTimeout(typeEffect, isDeleting ? 60 : 100);
  // }

  // document.addEventListener("DOMContentLoaded", typeEffect);
