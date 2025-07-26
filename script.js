window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  document.body.style.overflow = 'hidden';
  loader.style.display = 'flex';

  setTimeout(() => {
    loader.classList.add('hide');
    setTimeout(() => {
      loader.style.display = 'none';
      document.body.style.overflow = 'auto';
      typeEffect();
    }, 1000); 
  }, 200); 
});

const originalTitle = document.title;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "🌿Come hereeeeeee! ";
  } else {
    document.title = originalTitle;
  }
});




 function toggleDropdown(header) {
    const dropdown = header.nextElementSibling;
    if (dropdown.style.maxHeight && dropdown.style.maxHeight !== "0px") {
      dropdown.style.maxHeight = "0px";
    } else {
      dropdown.style.maxHeight = dropdown.scrollHeight + "px";
    }
  }

  // function hoverArrow(el) {
  //   const arrow = el.querySelector(".job-arrow");
  //   arrow.classList.replace("text-black", "text-white");
  // }

  // function unhoverArrow(el) {
  //   const arrow = el.querySelector(".job-arrow");
  //   arrow.classList.replace("text-white", "text-black");
  // }

  function openModal(el) {
  const card = el.closest('.card');
  const modal = card.querySelector('.popupModal');
  const content = modal.querySelector('.popupContent');
  document.body.style.overflow = 'hidden'; 
 

  modal.classList.remove('hidden');
  setTimeout(() => {
    content.classList.remove('scale-95', 'opacity-0');
    content.classList.add('scale-100', 'opacity-100');
  }, 10);
}

function closeModal(el) {
  const modal = el.closest('.popupModal');
  const content = modal.querySelector('.popupContent');

  content.classList.remove('scale-100', 'opacity-100');
  content.classList.add('scale-95', 'opacity-0');
   document.body.style.overflow = 'auto';

  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
}