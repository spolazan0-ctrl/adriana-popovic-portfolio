// Filter logic
const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.gallery .item');
filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  const f = btn.dataset.filter;
  items.forEach(it => {
    if (f === 'all' || it.dataset.category === f) {
      it.style.display = '';
    } else {
      it.style.display = 'none';
    }
  });
}));

// Lightbox
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbCap = document.getElementById('lightbox-caption');
const openLightbox = (src, caption) => {
  lbImg.src = src;
  lbCap.textContent = caption || '';
  lightbox.style.display = 'flex';
  lightbox.setAttribute('aria-hidden', 'false');
}
const closeLightbox = () => {
  lightbox.style.display = 'none';
  lightbox.setAttribute('aria-hidden', 'true');
  lbImg.src = '';
  lbCap.textContent = '';
}
document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

document.querySelectorAll('.gallery .item img').forEach(img => {
  img.addEventListener('click', () => {
    const cap = img.closest('figure').querySelector('figcaption')?.innerText || '';
    openLightbox(img.src, cap);
  });
});

// Open all images quickly
document.getElementById('view-all').addEventListener('click', () => {
  const firstVisible = [...document.querySelectorAll('.gallery .item img')].find(i => i.closest('.item').style.display !== 'none');
  if (firstVisible) firstVisible.click();
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
