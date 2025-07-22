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


function openModal() {

  document.getElementById('popupModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden'; 

  const modal = document.getElementById("popupModal");
  const content = document.getElementById("popupContent");
  modal.classList.remove("hidden");

  void content.offsetWidth;

  content.classList.remove("scale-100", "opacity-0");
  content.classList.add("scale-100", "opacity-100");
}

function closeModal() {
  document.body.style.overflow = 'auto'; 
  const modal = document.getElementById("popupModal");
  const content = document.getElementById("popupContent");

 
  content.classList.remove("scale-100", "opacity-100");
  content.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}