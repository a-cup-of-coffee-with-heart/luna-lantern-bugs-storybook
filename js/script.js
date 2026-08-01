// ============================================
// 1. AMBIENT FIREFLIES (purely decorative)
// ============================================
function spawnFireflies(count = 14) {
  const sky = document.getElementById('sky');
  for (let i = 0; i < count; i++) {
    const f = document.createElement('div');
    f.className = 'firefly';
    f.style.left = Math.random() * 100 + 'vw';
    f.style.top = Math.random() * 100 + 'vh';
    f.style.animationDelay = (Math.random() * 6) + 's, ' + (Math.random() * 2) + 's';
    sky.appendChild(f);
  }
}
spawnFireflies();

// ============================================
// 2. INITIALIZE THE FLIPBOOK
//    (StPageFlip / page-flip library — loaded via CDN in index.html)
// ============================================
const bookEl = document.getElementById('book');

const pageFlip = new St.PageFlip(bookEl, {
  width: 340,
  height: 480,
  size: 'stretch',
  minWidth: 260,
  maxWidth: 480,
  minHeight: 380,
  maxHeight: 680,
  showCover: true,        // treat first/last page as a hard cover
  usePortrait: true,       // stack to single page on narrow screens
  flippingTime: 700,
  maxShadowOpacity: 0.5,
  mobileScrollSupport: true,
  swipeDistance: 20        // how far a finger must drag to count as a swipe
});

pageFlip.loadFromHTML(document.querySelectorAll('#book .page'));

// ============================================
// 3. BUTTON NAVIGATION (for accessibility / desktop clicks)
// ============================================
document.getElementById('prevBtn').addEventListener('click', () => pageFlip.flipPrev());
document.getElementById('nextBtn').addEventListener('click', () => pageFlip.flipNext());

// hide the "swipe to turn" hint after the first interaction
const hint = document.getElementById('swipeHint');
pageFlip.on('flip', () => { if (hint) hint.style.opacity = '0'; });

// ============================================
// 4. ENDING ANIMATION — triggered on the very last page (back cover)
// ============================================
let endingPlayed = false;

pageFlip.on('flip', (e) => {
  const isLastPage = e.data === pageFlip.getPageCount() - 1;
  if (isLastPage && !endingPlayed) {
    endingPlayed = true;
    playEndingBurst();
  }
  // reset so it can play again if the reader flips back and returns
  if (!isLastPage) endingPlayed = false;
});

function playEndingBurst(pieces = 26) {
  const symbols = ['♥', '✦', '☕', '★'];
  for (let i = 0; i < pieces; i++) {
    setTimeout(() => {
      const span = document.createElement('span');
      span.className = 'burst-piece';
      span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      span.style.left = Math.random() * 100 + 'vw';
      span.style.color = Math.random() > 0.5 ? 'var(--coral)' : 'var(--gold)';
      span.style.animationDuration = (2.6 + Math.random() * 1.4) + 's';
      document.body.appendChild(span);
      setTimeout(() => span.remove(), 4200);
    }, i * 60);
  }
}
