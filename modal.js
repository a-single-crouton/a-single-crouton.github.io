// (A) Grab elements
const modalSelectors = document.querySelectorAll('.modal-selector');
const modal = document.getElementById('projects-modal');
const titleEl = modal.querySelector('.gba-modal-title');
const imgContainer = modal.querySelector('.gba-modal-img');
const descEl = modal.querySelector('.gba-modal-desc');
const notesEl = modal.querySelector('.gba-modal-notes');
const positivesHeaderEl = modal.querySelector('.gba-modal-positives-header');
const positivesEl = modal.querySelector('.gba-modal-positives');
const negativesHeaderEl = modal.querySelector('.gba-modal-negatives-header');
const negativesEl = modal.querySelector('.gba-modal-negatives');
const controlsEl = modal.querySelector('.gba-modal-controls');
const closeBtns = modal.querySelectorAll('.modal-return-button');

const projects = {
  "email-project": {
    title: "SMS Email Notification",
    image:"../images/email-project.png",
    description: `An SMS notification designed to be delivered by email and populated with recent message history dynamically populated using typescript. Needed to match existing application UI while functioning properly across all email platforms.`,
    notePositivesHeader: `Why It Matters`,
    notePositives: `This project was my first time dealing with the 
    constraints of email styling, HTML tables, as well as dynamically 
    constructing markup.
     I was particularly proud of how the speech bubbles were styled, 
     dynamically styling them based on whether they’re incoming or 
     outgoing texts.`,
    noteNegativesHeader: `What I Could’ve Done Better`,
    noteNegatives: `The iteration on this site is statically recreated 
    in vanilla HTML and JS since there’s no data to dynamically generate.
    <br> 
    If I had more time it’d be cool to precompile typescript for this 
    purpose but given the tight deadline I have the functionality felt 
    redundant. 
    <br><br>
    Oftentimes in professional email designs use images 
    to make it look fancier than it is. While I think something like
     this would look nicer to recruiters, it wouldn’t reflect the work
      I actually did and actively detracts from the purpose for this 
      particular project.
      <br><br>
      Finally I think if metadata was stored in 
      the API we used for notifications, then we could’ve added 
      information such as message status (i.e. ‘Undelivered’, 
      ‘Failed’, or ‘Sent’) as well as the time the last several
       messages were sent. `,
    url: `../email-project/email.html`
  },
  "banjaxed-project": {
    title: "Banjaxed Website, wordpress recreation project",
    image:"../images/banjaxed.png",
    description: `A redesign of banjaxed.com’s original wordpress 
    website. This was a prototype used as a benchmark for our junior
     development team as well as a proff-of-concept for a uniquely 
     designed website outside of WordPress.`,
    notePositivesHeader: `Why It Matters`,
    notePositives: `I was responsible for all the CSS animations 
    aside from the scrolling timeline. I was particularly proud of 
    how accurately the animations were compared to the originals, 
    as well as how our junior developers collaborated and delegated 
    tasks.`,
    noteNegativesHeader: `What I Could’ve Done Better`,
    noteNegatives: `Unfortunately once the main landing page was 
    completed, our CFO shot down the proposal for the website. Our 
    immediate manager decided that he’d seen enough and we moved on.
    <br><br> 
    Most of my regrets are tied to not finishing the project and the 
    newsletter system. I think this would’ve given me extremely 
    beneficial exposure to PHP and other server-side features. 
    However, at the time I think it back-end work was pretty far out 
    of my depth.`,
    url: `../email-project/email.html`
  },
  "edgeledger-project": {
    title: "lorem ipsum",
    image:"../images/email-project.png",
    description: `lorem ipsum`,
    notePositivesHeader: `lorem ipsum`,
    notePositives: `lorem ipsum`,
    noteNegativesHeader: `lorem ipsum`,
    noteNegatives: `lorem ipsum`,
    url: `../email-project/email.html`
  }

}


modalSelectors.forEach(selector => selector.addEventListener('click', e => {
    e.preventDefault();

    const key = selector.dataset.key;
    const info = projects[key];

    titleEl.innerHTML = `<h2>${info.title}</h2>`;
    imgContainer.innerHTML = `<img src="${info.image}" alt="${info.title}" style="width:100%;height:100%;">`
    descEl.innerHTML = info.description
    .split('\n\n')
    .map(p => `<p>${p.trim()}</p>`)
    .join('')

    positivesHeaderEl.innerHTML = `<h2>${info.notePositivesHeader}</h2>`
    positivesEl.innerHTML = `<p>${info.notePositives}</p>`
    negativesHeaderEl.innerHTML = `<h2>${info.noteNegativesHeader}</h2>`
    negativesEl.innerHTML = `<p>${info.noteNegatives}</p>`

    controlsEl.innerHTML = `
      <a href="${info.url}" class="modal-view-button">Go to Project ↗</a>
    `;


    // const { title, image, description, notes } = selector.dataset;
    // const projectUrl = selector.getAttribute('href');

    // titleEl.innerHTML = `<h2>${title}</h2>`;
    // imgContainer.innerHTML = `<img src="${image}" alt="${title}" style="width:100%;height:100%;">`
    // descEl.innerHTML  = `<p>${description}</p>`;
    // notesEl.innerHTML = notes;


    // controlsEl.innerHTML = `
    //   <a href="${projectUrl}" class="modal-view-button">Go to Project ↗</a>`;
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