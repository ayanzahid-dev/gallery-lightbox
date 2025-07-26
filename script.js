const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const caption = document.getElementById('caption');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showLightbox();
  });
});

function showLightbox() {
  lightbox.classList.add('active');
  lightboxImg.src = images[currentIndex].src;
  caption.textContent = `${currentIndex + 1} of ${images.length}`;
}

function closeLightbox() {
  lightbox.classList.remove('active');
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  showLightbox();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showLightbox();
}

closeBtn.addEventListener('click', closeLightbox);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);


lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'Escape') closeLightbox();
});
