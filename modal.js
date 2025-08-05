// (A) Grab elements
const modalSelectors = document.querySelectorAll('.modal-selector');
const modal = document.getElementById('projects-modal');
const titleEl = modal.querySelector('.gba-modal-title');
const imgContainer = modal.querySelector('.gba-modal-img');
const descEl = modal.querySelector('.gba-modal-desc');
const notesEl = modal.querySelector('.gba-modal-notes');
const controlsEl = modal.querySelector('.gba-modal-controls');
const closeBtns = modal.querySelectorAll('.modal-return-button');




modalSelectors.forEach(selector => selector.addEventListener('click', e => {
    e.preventDefault();
    const { title, image, description, notes } = selector.dataset;
    const projectUrl = selector.getAttribute('href');

    titleEl.innerHTML = `<h2>${title}</h2>`;
    imgContainer.innerHTML = `<img src="${image}" alt="${title}" style="width:100%;height:100%;">`
    descEl.innerHTML  = `<p>${description}</p>`;
    notesEl.innerHTML = notes;


    controlsEl.innerHTML = `
      <a href="${projectUrl}" class="modal-view-button">Go to Project ↗</a>`;
    showModal();


}))


// (B) Show function
function showModal() {
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; // lock background scroll
}

// (C) Hide function
function hideModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';       // restore scroll
}

// Close on any close-btn
closeBtns.forEach(btn => btn.addEventListener('click', hideModal));

// Close when clicking outside content
modal.addEventListener('click', e => {
  if (e.target === modal) hideModal();
});

// Close on ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    hideModal();
  }
});