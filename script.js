const MOVIES = [
  {
    id: 1,
    title: "Ditto",
    genre: ["Drama", "Romance"],
    rating: 8.9,
    duration: "2h 18m",
    release: "2026",
    director: "ADOR Films",
    cast: ["Minji", "Hanni", "Danielle", "Haerin", "Hyein"],
    description: "A nostalgic story about youth, friendship, and a connection that feels real even when you're not sure it ever was. Set against cold winter days and memories that blur with reality.",
    posterImage: "https://wallpaperaccess.com/full/26621741.jpg",
    heroImage: "https://wallpaperaccess.com/full/26621741.jpg",
    trailerUrl: "https://www.youtube-nocookie.com/embed/pSUydWEqKwE?autoplay=1",
    regularPrice: 320,
    vipPrice: 480
  },
  {
    id: 2,
    title: "What You Want",
    genre: ["Drama"],
    rating: 8.2,
    duration: "2h 04m",
    release: "2026",
    director: "HYBE Cinema",
    cast: ["Cortis", "K-Creative Studio"],
    description: "A young individual caught between rigid societal expectations and passion embarks on a late-night journey across the metropolitan lights.",
    posterImage: "https://phinf.wevpstatic.net/MjAyNTA4MTVfNzgg/MDAxNzU1MTg4MzE5MjIx.sk6sXT82gkeaVu8dGgs2zdRfBuPhAw3tPTKvvGxiH1Ag.EAa8L_cF19QaYax0Sk0fEUwqz4TRKPIfSaxzYPaRHkUg.JPEG/6cd0d1f2-4ad1-4700-a1d0-19098ed9aba3.jpeg",
    heroImage: "https://phinf.wevpstatic.net/MjAyNTA4MTVfNzgg/MDAxNzU1MTg4MzE5MjIx.sk6sXT82gkeaVu8dGgs2zdRfBuPhAw3tPTKvvGxiH1Ag.EAa8L_cF19QaYax0Sk0fEUwqz4TRKPIfSaxzYPaRHkUg.JPEG/6cd0d1f2-4ad1-4700-a1d0-19098ed9aba3.jpeg",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    regularPrice: 320,
    vipPrice: 480
  },
  {
    id: 3,
    title: "Silent Hill: The Forgotten",
    genre: ["Horror", "Thriller"],
    rating: 8.5,
    duration: "1h 48m",
    release: "2026",
    director: "Christophe Gans",
    cast: ["Adelaide Kane", "Thomas Doherty"],
    description: "When Mara enters Silent Hill in search of a missing friend, the impenetrable fog begins peeling away layers of reality and repressed guilt.",
    posterImage: "https://images3.alphacoders.com/137/1379104.jpg",
    heroImage: "https://images3.alphacoders.com/137/1379104.jpg",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    regularPrice: 340,
    vipPrice: 500
  },
  {
    id: 4,
    title: "The Last Of Us: Part III",
    genre: ["Action", "Drama", "Thriller"],
    rating: 9.2,
    duration: "3h 10m",
    release: "2026",
    director: "Neil Druckmann",
    cast: ["Bella Ramsey", "Kaitlyn Dever", "Isabela Merced"],
    description: "In a world scarred by catastrophic loss, survivors must confront compounding consequences of previous choices while forging paths toward redemption.",
    posterImage: "https://images5.alphacoders.com/137/thumb-1920-1377065.png",
    heroImage: "https://images5.alphacoders.com/137/thumb-1920-1377065.png",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    regularPrice: 350,
    vipPrice: 520
  },
  {
    id: 5,
    title: "Chungking Express (4K)",
    genre: ["Drama", "Romance"],
    rating: 8.8,
    duration: "1h 42m",
    release: "2026 Remaster",
    director: "Wong Kar Wai",
    cast: ["Takeshi Kaneshiro", "Faye Wong", "Tony Leung"],
    description: "Two lovelorn Hong Kong police officers navigate heartbreak and fleeting encounters in neon-soaked urban landscapes.",
    posterImage: "https://wallpaperaccess.com/full/4243368.jpg",
    heroImage: "https://wallpaperaccess.com/full/4243368.jpg",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    regularPrice: 320,
    vipPrice: 480
  },
  {
    id: 6,
    title: "Recollective",
    genre: ["Animation", "Drama", "Romance"],
    rating: 8.7,
    duration: "2h 10m",
    release: "2026",
    director: "Studio Lumière",
    cast: ["Koki Uchiyama", "Shun Oguri"],
    description: "An introspective student unexpectedly falls in love right before graduation, forcing him to decide whether to protect his heart or take the leap.",
    posterImage: "https://i.pinimg.com/1200x/b5/75/fd/b575fd57e0955536c4368cbbd6389740.jpg",
    heroImage: "https://i.pinimg.com/1200x/b5/75/fd/b575fd57e0955536c4368cbbd6389740.jpg",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    regularPrice: 300,
    vipPrice: 450
  },
  {
    id: 7,
    title: "Neon Horizon: 2088",
    genre: ["Sci-Fi", "Action", "Thriller"],
    rating: 9.1,
    duration: "2h 32m",
    release: "2026",
    director: "Kenji Sato",
    cast: ["Rinko Kikuchi", "Hiroyuki Sanada", "Andrew Koji"],
    description: "In a submerged neo-cyberpunk megalopolis, an outlaw memory courier uncovers an encrypted neuro-blueprint capable of altering human consciousness.",
    posterImage: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=900&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1600&fit=crop",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    regularPrice: 350,
    vipPrice: 530
  },
  {
    id: 8,
    title: "Whispers in the Starlight",
    genre: ["Animation", "Fantasy", "Romance"],
    rating: 9.0,
    duration: "1h 56m",
    release: "2026",
    director: "Makoto Shinkai Studio",
    cast: ["Nana Mori", "Ryunosuke Kamiki"],
    description: "When an astrophysicist detects harmonic radio signals from a distant comet, she connects with a forgotten companion across alternate celestial timelines.",
    posterImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&h=900&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600&fit=crop",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    regularPrice: 310,
    vipPrice: 460
  },
  {
    id: 9,
    title: "The Obsidian Key",
    genre: ["Horror", "Mystery", "Thriller"],
    rating: 8.6,
    duration: "2h 02m",
    release: "2026",
    director: "Guillermo del Toro",
    cast: ["Mia Goth", "Willem Dafoe", "Bill Skarsgård"],
    description: "An antique appraiser is summoned to catalog an ancestral estate in the Black Forest, only to realize the architecture itself is an ancient occult prison.",
    posterImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&h=900&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1600&fit=crop",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    regularPrice: 330,
    vipPrice: 490
  },
  {
    id: 10,
    title: "Symphony of the Dunes",
    genre: ["Adventure", "Sci-Fi", "Drama"],
    rating: 9.4,
    duration: "2h 45m",
    release: "2026",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Florence Pugh"],
    description: "An epic planetary expedition across forbidden desert sands to unlock the acoustic frequencies that preserve interplanetary balance.",
    posterImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=900&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1600&fit=crop",
    trailerUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1",
    regularPrice: 360,
    vipPrice: 550
  }
];

const HERO_FEATURED = [MOVIES[0], MOVIES[1], MOVIES[4], MOVIES[2]];

const SNACKS = [
  { id: 'popcorn', name: "Gourmet Truffle Butter Popcorn", price: 160, icon: "🍿", desc: "Freshly popped kernels tossed in real French butter & black truffle salt." },
  { id: 'nachos', name: "Loaded Artisan Nachos Grande", price: 190, icon: "🧀", desc: "Warm tortilla chips with rich queso, jalapeños & house salsa dip." },
  { id: 'fries', name: "Crispy Parmesan Truffle Fries", price: 175, icon: "🍟", desc: "Golden shoestring potatoes dusted with herbs & aged Italian parmesan." },
  { id: 'soda', name: "CINÉVA Signature Craft Soda", price: 95, icon: "🥤", desc: "Choice of Classic Cherry Cola, Yuzu Sparkling Fizz, or Iced Peach Tea." }
];

const CINEMAS = [
  { id: 1, name: "CINÉVA Central", location: "BGC High Street, Taguig", screens: 12, features: ["IMAX Laser", "Dolby Atmos", "VIP Recliner"] },
  { id: 2, name: "CINÉVA Grand Luxe", location: "Rockwell Center, Makati", screens: 8, features: ["Butler Service", "In-Seat Dining", "4K Sound"] },
  { id: 3, name: "CINÉVA Promenade", location: "Greenhills, San Juan", screens: 6, features: ["Laser Projection", "Dolby Atmos", "Club Bar"] },
  { id: 4, name: "CINÉVA Seaside Dome", location: "Mall of Asia, Pasay", screens: 10, features: ["Giant IMAX", "D-BOX Motion", "Barco 4K"] }
];

const COMING_SOON = [
  { id: 101, title: "Aurora Rising", genre: "Sci-Fi / Adventure", date: "Mar 20, 2026", posterImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=450&fit=crop" },
  { id: 102, title: "Ghostlight", genre: "Horror / Mystery", date: "Apr 04, 2026", posterImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=450&fit=crop" },
  { id: 103, title: "The Glass Garden", genre: "Drama / Romance", date: "Apr 25, 2026", posterImage: "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?w=300&h=450&fit=crop" },
  { id: 104, title: "Velocity 9", genre: "Action / Heist", date: "May 14, 2026", posterImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=300&h=450&fit=crop" }
];

const SHOWTIMES = ["11:00 AM", "1:45 PM", "4:30 PM", "7:15 PM", "10:00 PM"];
const SERVICE_FEE = 45;

const state = {
  currentFilter: "all",
  searchQuery: "",
  heroIndex: 0,
  activeBgLayer: 1,
  heroTimer: null,
  lightsDimmed: false,
  soundscapeActive: false,
  audioCtx: null,
  droneNodes: null,
  favorites: JSON.parse(localStorage.getItem("cineva_favorites") || "[]"),
  booking: {
    movie: null,
    cinema: null,
    date: null,
    time: null,
    seats: [],
    concessions: {},
    paymentMethod: "gcash",
    discount: 0,
    step: 1,
    holdTimerInterval: null,
    secondsLeft: 600
  },
  tickets: JSON.parse(localStorage.getItem("cineva_tickets") || "[]")
};

const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
const formatPeso = n => '₱' + Math.max(0, n).toLocaleString('en-PH');
const genRef = () => 'CV-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);

function haptic(ms = 12) {
  if (navigator.vibrate) navigator.vibrate(ms);
}

/* ============ SOUND FX ENGINE ============ */
function getAudioContext() {
  if (!state.audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) state.audioCtx = new AudioContext();
  }
  if (state.audioCtx && state.audioCtx.state === 'suspended') {
    state.audioCtx.resume();
  }
  return state.audioCtx;
}

function playUiSound(type = 'click') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } else if (type === 'success') {
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + (i * 0.08));
        gain.gain.setValueAtTime(0.1, ctx.currentTime + (i * 0.08));
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (i * 0.08) + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + (i * 0.08));
        osc.stop(ctx.currentTime + (i * 0.08) + 0.35);
      });
    }
  } catch (e) {}
}

function toggleSoundscape() {
  const btn = $('#soundscapeBtn');
  const ctx = getAudioContext();
  if (!ctx) return toast('Web Audio not supported in this browser.');

  if (!state.soundscapeActive) {
    try {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(160, ctx.currentTime);

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(55, ctx.currentTime); // 55Hz Low Sub A

      osc2.type = 'sawtooth';
      osc2.frequency.setValueAtTime(110.5, ctx.currentTime); // 110.5Hz Binaural drone

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 2.5);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();

      state.droneNodes = { osc1, osc2, gain };
      state.soundscapeActive = true;
      btn.classList.add('active-audio');
      toast('Dolby Spatial soundscape enabled 🎧', 'success');
    } catch(err) {
      toast('Audio context busy.');
    }
  } else {
    if (state.droneNodes) {
      state.droneNodes.gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
      setTimeout(() => {
        state.droneNodes.osc1.stop();
        state.droneNodes.osc2.stop();
        state.soundscapeActive = false;
        btn.classList.remove('active-audio');
        toast('Soundscape muted.');
      }, 850);
    }
  }
}

/* ============ TOAST SYSTEM ============ */
function toast(msg, type = 'info') {
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  const icon = type === 'success'
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>'
    : type === 'error'
    ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>'
    : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>';

  t.innerHTML = `<div class="toast-icon">${icon}</div><div class="toast-msg">${msg}</div>`;
  $('#toastContainer').appendChild(t);
  setTimeout(() => {
    t.classList.add('out');
    setTimeout(() => t.remove(), 350);
  }, 3200);
}

/* ============ CAROUSEL & HERO ============ */
function renderHeroIndicators() {
  const c = $('#heroIndicators');
  c.innerHTML = HERO_FEATURED.map((_, i) => `
    <div class="hero-dot-wrap ${i === state.heroIndex ? 'active' : ''}" data-i="${i}">
      <div class="hero-dot-fill"></div>
    </div>
  `).join('');

  c.querySelectorAll('.hero-dot-wrap').forEach(d => {
    d.addEventListener('click', () => {
      haptic(10);
      playUiSound('click');
      clearInterval(state.heroTimer);
      setHero(parseInt(d.dataset.i));
      startHeroTimer();
    });
  });
}

function setHero(i) {
  state.heroIndex = i;
  const m = HERO_FEATURED[i];
  const content = $('#heroContent');

  content.classList.remove('text-enter');
  content.classList.add('text-exit');

  const layer1 = $('#heroBg1');
  const layer2 = $('#heroBg2');

  if (state.activeBgLayer === 1) {
    layer2.style.backgroundImage = `url('${m.heroImage}')`;
    layer2.classList.add('active');
    layer1.classList.remove('active');
    state.activeBgLayer = 2;
  } else {
    layer1.style.backgroundImage = `url('${m.heroImage}')`;
    layer1.classList.add('active');
    layer2.classList.remove('active');
    state.activeBgLayer = 1;
  }

  setTimeout(() => {
    $('#heroTitle').textContent = m.title;
    $('#heroMeta').innerHTML = `
      <span class="hero-rating">★ ${m.rating}</span>
      <span class="dot">•</span>
      <span>${m.genre.join(', ')}</span>
      <span class="dot">•</span>
      <span>${m.duration}</span>
      <span class="dot">•</span>
      <span class="badge-format">IMAX 4K LASER</span>
    `;
    $('#heroDesc').textContent = m.description;

    content.classList.remove('text-exit');
    content.classList.add('text-enter');
  }, 320);

  renderHeroIndicators();
}

function startHeroTimer() {
  clearInterval(state.heroTimer);
  state.heroTimer = setInterval(() => {
    const nextIdx = (state.heroIndex + 1) % HERO_FEATURED.length;
    setHero(nextIdx);
  }, 6500);
}

/* ============ MOVIES & FAVORITES ============ */
function toggleFavorite(id, e) {
  e.stopPropagation();
  haptic(15);
  playUiSound('click');
  const idx = state.favorites.indexOf(id);
  if (idx >= 0) {
    state.favorites.splice(idx, 1);
    toast('Removed from favorites.');
  } else {
    state.favorites.push(id);
    toast('Added to favorites! ❤️', 'success');
  }
  localStorage.setItem('cineva_favorites', JSON.stringify(state.favorites));
  updateFavCount();
  renderMovies();
}

function updateFavCount() {
  $('#favCount').textContent = state.favorites.length;
}

function renderMovies() {
  const grid = $('#moviesGrid');
  const q = state.searchQuery;
  const filtered = MOVIES.filter(m => {
    let matchFilter = true;
    if (state.currentFilter === 'favorites') {
      matchFilter = state.favorites.includes(m.id);
    } else if (state.currentFilter !== 'all') {
      matchFilter = m.genre.includes(state.currentFilter);
    }
    const matchSearch = !q || m.title.toLowerCase().includes(q) || m.genre.join(' ').toLowerCase().includes(q) || m.director.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    $('#emptyState').classList.remove('hidden');
    return;
  }
  $('#emptyState').classList.add('hidden');

  grid.innerHTML = filtered.map((m, idx) => {
    const isFav = state.favorites.includes(m.id);
    return `
      <article class="movie-card" data-id="${m.id}" style="animation: fadeIn 0.4s var(--ease) ${idx * 0.03}s both">
        <div class="movie-poster">
          <img src="${m.posterImage}" alt="${m.title}" loading="lazy" />
          <button class="fav-btn ${isFav ? 'favorited' : ''}" data-fav="${m.id}" title="Save to favorites">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
          <div class="movie-rating-badge">${m.rating}</div>
        </div>
        <div class="movie-info">
          <h3 class="movie-title">${m.title}</h3>
          <div class="movie-meta">
            <span>${m.genre.slice(0, 2).join(', ')}</span>
            <span>${m.duration}</span>
          </div>

          <div class="movie-prices">
            <div class="price-pill">
              <span class="lbl">Regular</span>
              <span class="val">${formatPeso(m.regularPrice)}</span>
            </div>
            <div class="price-pill vip">
              <span class="lbl">VIP Recliner</span>
              <span class="val">${formatPeso(m.vipPrice)}</span>
            </div>
          </div>

          <button class="movie-book" data-book="${m.id}">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 4h16v16H4z"/><path d="M4 10h16"/></svg>
            Select & Book
          </button>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', e => toggleFavorite(parseInt(btn.dataset.fav), e));
  });

  grid.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', e => {
      const bookBtn = e.target.closest('[data-book]');
      if (bookBtn) {
        haptic(15);
        playUiSound('click');
        const m = MOVIES.find(x => x.id == bookBtn.dataset.book);
        openBooking(m);
      } else {
        haptic(10);
        openMovieModal(MOVIES.find(x => x.id == card.dataset.id));
      }
    });
  });
}

$$('.filter').forEach(f => f.addEventListener('click', () => {
  haptic(10);
  playUiSound('click');
  $$('.filter').forEach(x => x.classList.remove('active'));
  f.classList.add('active');
  state.currentFilter = f.dataset.filter;
  renderMovies();
}));

/* ============ MODALS ============ */
function openModal(id) {
  const m = document.getElementById(id);
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const m = document.getElementById(id);
  m.classList.remove('open');
  document.body.style.overflow = '';
  if (id === 'trailerModal') $('#trailerWrapper').innerHTML = '';
  if (id === 'bookingModal' && state.booking.holdTimerInterval) {
    clearInterval(state.booking.holdTimerInterval);
  }
}

document.addEventListener('click', e => {
  if (e.target.matches('[data-close]') || e.target.classList.contains('modal-backdrop')) {
    haptic(10);
    $$('.modal.open').forEach(m => closeModal(m.id));
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') $$('.modal.open').forEach(m => closeModal(m.id));
});

function openTrailer(m) {
  $('#trailerWrapper').innerHTML = `
    <iframe src="${m.trailerUrl}" title="${m.title} Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `;
  openModal('trailerModal');
}

function openMovieModal(m) {
  $('#movieModalInner').innerHTML = `
    <div class="modal-movie-poster">
      <img src="${m.posterImage}" alt="${m.title}" />
    </div>
    <div class="modal-movie-details">
      <h2 class="modal-movie-title">${m.title}</h2>
      <div class="modal-movie-meta">
        <span class="hero-rating">★ ${m.rating}</span>
        <span>•</span>
        <span>${m.genre.join(', ')}</span>
        <span>•</span>
        <span>${m.duration}</span>
        <span>•</span>
        <span>${m.release}</span>
      </div>
      <p class="modal-movie-desc">${m.description}</p>

      <div class="movie-prices" style="margin-bottom:18px;max-width:280px">
        <div class="price-pill"><span class="lbl">Regular Seat</span><span class="val">${formatPeso(m.regularPrice)}</span></div>
        <div class="price-pill vip"><span class="lbl">VIP Recliner</span><span class="val">${formatPeso(m.vipPrice)}</span></div>
      </div>

      <div class="modal-movie-section">
        <h4>Director</h4>
        <div class="cast-list"><div class="cast-chip">${m.director}</div></div>
      </div>
      <div class="modal-movie-section">
        <h4>Cast</h4>
        <div class="cast-list">${m.cast.map(c => `<div class="cast-chip">${c}</div>`).join('')}</div>
      </div>
      <div style="display:flex;gap:10px;margin-top:auto">
        <button class="btn btn-outline" style="flex:1" id="modalTrailerBtn">Watch Trailer</button>
        <button class="btn btn-primary" style="flex:2" id="modalBookBtn">Book Tickets</button>
      </div>
    </div>
  `;
  openModal('movieModal');

  $('#modalTrailerBtn').addEventListener('click', () => {
    haptic(10);
    closeModal('movieModal');
    setTimeout(() => openTrailer(m), 250);
  });
  $('#modalBookBtn').addEventListener('click', () => {
    haptic(15);
    closeModal('movieModal');
    setTimeout(() => openBooking(m), 250);
  });
}

/* ============ 6-STEP BOOKING FLOW ============ */
function startSeatHoldTimer() {
  clearInterval(state.booking.holdTimerInterval);
  state.booking.secondsLeft = 600;
  $('#seatTimerBanner').classList.remove('hidden');

  state.booking.holdTimerInterval = setInterval(() => {
    state.booking.secondsLeft--;
    const mins = Math.floor(state.booking.secondsLeft / 60);
    const secs = state.booking.secondsLeft % 60;
    const str = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    const el = $('#seatCountdown');
    if (el) el.textContent = str;

    if (state.booking.secondsLeft <= 0) {
      clearInterval(state.booking.holdTimerInterval);
      toast('Seat hold reservation expired.', 'error');
      closeModal('bookingModal');
    }
  }, 1000);
}

function openBooking(movie) {
  state.booking = {
    movie,
    cinema: CINEMAS[0],
    date: null,
    time: null,
    seats: [],
    concessions: { popcorn: 0, nachos: 0, fries: 0, soda: 0 },
    paymentMethod: "gcash",
    discount: 0,
    step: 1,
    holdTimerInterval: null,
    secondsLeft: 600
  };
  openModal('bookingModal');
  $('#seatTimerBanner').classList.add('hidden');
  renderBookingStep();
}

function updateProgress() {
  $$('.progress-step').forEach(s => {
    const n = parseInt(s.dataset.step);
    s.classList.toggle('active', n === state.booking.step);
    s.classList.toggle('done', n < state.booking.step);
  });
}

function renderBookingStep() {
  updateProgress();
  const body = $('#bookingBody');
  const b = state.booking;
  if (b.step === 1) renderStep1(body);
  else if (b.step === 2) renderStep2(body);
  else if (b.step === 3) renderStep3(body);
  else if (b.step === 4) {
    renderStep4(body);
    startSeatHoldTimer();
  }
  else if (b.step === 5) renderStep5(body);
  else if (b.step === 6) renderStep6(body);
}

function renderStep1(body) {
  const m = state.booking.movie;
  body.innerHTML = `
    <div class="booking-step">
      <h3>Select Film</h3>
      <p class="sub">Verify your chosen film details and auditorium pricing tiers.</p>
      <div class="selected-movie-box">
        <div class="selected-movie-poster"><img src="${m.posterImage}" alt="${m.title}" /></div>
        <div class="selected-movie-details">
          <h4>${m.title}</h4>
          <p>${m.genre.join(' • ')}</p>
          <p>★ ${m.rating} • ${m.duration} • ${m.director}</p>
          <div class="movie-prices" style="max-width:240px;margin:8px 0">
            <div class="price-pill"><span class="lbl">Regular</span><span class="val">${formatPeso(m.regularPrice)}</span></div>
            <div class="price-pill vip"><span class="lbl">VIP Recliner</span><span class="val">${formatPeso(m.vipPrice)}</span></div>
          </div>
        </div>
      </div>
      <div class="booking-nav">
        <button class="btn btn-outline" data-close>Cancel</button>
        <button class="btn btn-primary" id="nextBtn">Select Venue →</button>
      </div>
    </div>
  `;
  $('#nextBtn').addEventListener('click', () => {
    haptic(12);
    playUiSound('click');
    state.booking.step = 2;
    renderBookingStep();
  });
}

function renderStep2(body) {
  body.innerHTML = `
    <div class="booking-step">
      <h3>Select Cinema Branch</h3>
      <p class="sub">Choose your preferred CINÉVA theatre location.</p>
      <div class="cinema-options">
        ${CINEMAS.map(c => `
          <div class="cinema-option ${state.booking.cinema?.id === c.id ? 'selected' : ''}" data-cid="${c.id}">
            <h5>${c.name}</h5>
            <p>${c.location}</p>
            <div style="margin-top:8px;display:flex;gap:4px;flex-wrap:wrap">
              ${c.features.map(f => `<span class="badge">${f}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="booking-nav">
        <button class="btn btn-outline" id="backBtn">← Back</button>
        <button class="btn btn-primary" id="nextBtn">Choose Schedule →</button>
      </div>
    </div>
  `;
  body.querySelectorAll('.cinema-option').forEach(o => o.addEventListener('click', () => {
    haptic(10);
    playUiSound('click');
    body.querySelectorAll('.cinema-option').forEach(x => x.classList.remove('selected'));
    o.classList.add('selected');
    state.booking.cinema = CINEMAS.find(c => c.id == o.dataset.cid);
  }));
  $('#backBtn').addEventListener('click', () => { haptic(10); state.booking.step = 1; renderBookingStep(); });
  $('#nextBtn').addEventListener('click', () => { haptic(12); playUiSound('click'); state.booking.step = 3; renderBookingStep(); });
}

function renderStep3(body) {
  const dates = getNextDays(7);
  if (!state.booking.date) state.booking.date = dates[0];
  if (!state.booking.time) state.booking.time = SHOWTIMES[0];

  body.innerHTML = `
    <div class="booking-step">
      <h3>Select Date & Showtime</h3>
      <p class="sub">Choose your preferred screening time.</p>
      <div class="date-selector">
        ${dates.map((d) => `
          <div class="date-chip ${state.booking.date.iso === d.iso ? 'selected' : ''}" data-date="${d.iso}">
            <div class="day">${d.day}</div>
            <div class="num">${d.num}</div>
          </div>
        `).join('')}
      </div>
      <h4 style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--accent);margin-bottom:12px">Available Showtimes</h4>
      <div class="time-options">
        ${SHOWTIMES.map(t => `<div class="time-chip ${state.booking.time === t ? 'selected' : ''}" data-time="${t}">${t}</div>`).join('')}
      </div>
      <div class="booking-nav">
        <button class="btn btn-outline" id="backBtn">← Back</button>
        <button class="btn btn-primary" id="nextBtn">Choose Seats →</button>
      </div>
    </div>
  `;

  body.querySelectorAll('.date-chip').forEach(d => d.addEventListener('click', () => {
    haptic(10);
    playUiSound('click');
    body.querySelectorAll('.date-chip').forEach(x => x.classList.remove('selected'));
    d.classList.add('selected');
    state.booking.date = dates.find(x => x.iso === d.dataset.date);
  }));

  body.querySelectorAll('.time-chip').forEach(t => t.addEventListener('click', () => {
    haptic(10);
    playUiSound('click');
    body.querySelectorAll('.time-chip').forEach(x => x.classList.remove('selected'));
    t.classList.add('selected');
    state.booking.time = t.dataset.time;
  }));

  $('#backBtn').addEventListener('click', () => { haptic(10); state.booking.step = 2; renderBookingStep(); });
  $('#nextBtn').addEventListener('click', () => { haptic(12); playUiSound('click'); state.booking.step = 4; renderBookingStep(); });
}

function getNextDays(n) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const out = [];
  const now = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    out.push({
      day: days[d.getDay()],
      num: d.getDate(),
      iso: d.toISOString().slice(0, 10),
      full: `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`
    });
  }
  return out;
}

function renderStep4(body) {
  const b = state.booking;
  const m = b.movie;
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatsPerRow = 10;
  const vipRows = ['E'];
  const coupleRows = ['F'];
  const occupied = new Set(['A3', 'A4', 'B8', 'C2', 'D5', 'D6', 'E3', 'E4']);

  body.innerHTML = `
    <div class="booking-step">
      <h3>Select Seats</h3>
      <p class="sub">Regular: ${formatPeso(m.regularPrice)} • VIP: ${formatPeso(m.vipPrice)} • Couple: ${formatPeso(m.vipPrice * 1.8)}</p>

      <div class="seat-layout">
        <div class="seat-map-wrapper">
          <div class="screen-container">
            <div class="screen-arc"></div>
            <div class="screen-text">Curved Laser Screen</div>
          </div>

          <div class="seat-perspective-preview" id="seatPerspective">
            <span>👁️</span> Tap any seat to preview viewing sweet spot & acoustics
          </div>

          <div class="seat-map-pan-container">
            <div class="seat-rows">
              ${rows.map(r => {
                const isVip = vipRows.includes(r);
                const isCouple = coupleRows.includes(r);

                return `
                  <div class="seat-row">
                    <div class="row-label">${r}</div>
                    ${Array.from({ length: isCouple ? 5 : seatsPerRow }).map((_, i) => {
                      const num = i + 1;
                      const id = isCouple ? `${r}${num * 2 - 1}-${num * 2}` : `${r}${num}`;
                      const isOcc = occupied.has(id);
                      const isSelected = b.seats.some(s => s.id === id);
                      const aisle = (!isCouple && (i === 2 || i === 7)) ? '<div class="aisle"></div>' : '';

                      return `
                        <div class="seat ${isVip ? 'vip' : ''} ${isCouple ? 'couple' : ''} ${isOcc ? 'occupied' : ''} ${isSelected ? 'selected' : ''}"
                             data-seat="${id}"
                             data-tier="${isCouple ? 'couple' : isVip ? 'vip' : 'regular'}"
                             data-row="${r}">
                          ${isCouple ? '♥' : num}
                        </div>${aisle}
                      `;
                    }).join('')}
                    <div class="row-label">${r}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="seat-legend">
            <div class="legend-item"><div class="legend-box"></div>Regular</div>
            <div class="legend-item"><div class="legend-box vip"></div>VIP</div>
            <div class="legend-item"><div class="legend-box couple"></div>Couple</div>
            <div class="legend-item"><div class="legend-box occ"></div>Occupied</div>
          </div>
        </div>

        <div class="booking-summary" id="seatSummary">
          ${renderSummaryHtml()}
        </div>
      </div>

      <div class="booking-nav">
        <button class="btn btn-outline" id="backBtn">← Back</button>
        <button class="btn btn-primary" id="nextBtn" ${b.seats.length === 0 ? 'disabled' : ''}>Add Snacks →</button>
      </div>
    </div>
  `;

  body.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', () => {
      if (seat.classList.contains('occupied')) return;
      haptic(15);
      playUiSound('click');
      const id = seat.dataset.seat;
      const tier = seat.dataset.tier;
      const row = seat.dataset.row;
      const idx = b.seats.findIndex(s => s.id === id);

      // Sweet spot perspective calculation
      const povEl = $('#seatPerspective');
      if (row === 'E' || row === 'D') {
        povEl.innerHTML = `<span>🎯</span> <strong>Seat ${id}:</strong> Master Audio Sweet Spot (38° Field of View)`;
      } else if (row === 'A' || row === 'B') {
        povEl.innerHTML = `<span>⚡</span> <strong>Seat ${id}:</strong> High Immersion Close-Up View`;
      } else {
        povEl.innerHTML = `<span>🛋️</span> <strong>Seat ${id}:</strong> Balanced Panoramic Sightline`;
      }

      if (idx >= 0) {
        b.seats.splice(idx, 1);
        seat.classList.remove('selected');
        toast(`Seat ${id} removed`);
      } else {
        if (b.seats.length >= 8) {
          toast('Max 8 seats per booking transaction', 'error');
          return;
        }
        let price = m.regularPrice;
        if (tier === 'vip') price = m.vipPrice;
        if (tier === 'couple') price = m.vipPrice * 1.8;

        b.seats.push({ id, tier, price });
        seat.classList.add('selected');
        toast(`Seat ${id} (${tier.toUpperCase()}) selected`, 'success');
      }

      $('#seatSummary').innerHTML = renderSummaryHtml();
      $('#nextBtn').disabled = b.seats.length === 0;
    });
  });

  $('#backBtn').addEventListener('click', () => { haptic(10); state.booking.step = 3; renderBookingStep(); });
  $('#nextBtn').addEventListener('click', () => { haptic(12); playUiSound('click'); state.booking.step = 5; renderBookingStep(); });
}

function calculateTotal() {
  const b = state.booking;
  const seatsTotal = b.seats.reduce((sum, s) => sum + s.price, 0);
  const snacksTotal = Object.entries(b.concessions).reduce((sum, [id, qty]) => {
    const item = SNACKS.find(s => s.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);
  const subtotal = seatsTotal + snacksTotal;
  const discountAmt = subtotal * b.discount;
  const fee = b.seats.length > 0 ? SERVICE_FEE : 0;
  const total = Math.max(0, subtotal - discountAmt + fee);

  return { seatsTotal, snacksTotal, subtotal, discountAmt, fee, total };
}

function renderSummaryHtml() {
  const b = state.booking;
  const { seatsTotal, snacksTotal, discountAmt, fee, total } = calculateTotal();

  return `
    <h4>Booking Ledger</h4>
    <div class="summary-row"><span>Film</span><strong>${b.movie?.title || '—'}</strong></div>
    <div class="summary-row"><span>Cinema</span><strong>${b.cinema?.name || '—'}</strong></div>
    <div class="summary-row"><span>Schedule</span><strong>${b.date?.full || '—'} • ${b.time || '—'}</strong></div>
    <div class="summary-divider"></div>
    <div class="summary-row">
      <span>Seats (${b.seats.length})</span>
      <div class="summary-chips">
        ${b.seats.length ? b.seats.map(s => `<span class="seat-chip">${s.id}</span>`).join('') : 'None'}
      </div>
    </div>
    <div class="summary-row"><span>Ticket Subtotal</span><strong>${formatPeso(seatsTotal)}</strong></div>
    ${snacksTotal > 0 ? `<div class="summary-row"><span>Snack Bar</span><strong>${formatPeso(snacksTotal)}</strong></div>` : ''}
    ${b.discount > 0 ? `<div class="summary-row" style="color:var(--success)"><span>VIP Promo (20% Off)</span><strong>-${formatPeso(discountAmt)}</strong></div>` : ''}
    <div class="summary-row"><span>Convenience Fee</span><strong>${formatPeso(fee)}</strong></div>
    <div class="summary-divider"></div>
    <div class="summary-total">
      <span>Total</span>
      <span>${formatPeso(total)}</span>
    </div>
  `;
}

function renderStep5(body) {
  const b = state.booking;

  body.innerHTML = `
    <div class="booking-step">
      <h3>Pre-Order Snacks</h3>
      <p class="sub">Delivered straight to your seat upon arrival.</p>

      <div class="seat-layout">
        <div class="concessions-list">
          ${SNACKS.map(s => `
            <div class="concession-item">
              <div class="concession-meta">
                <div class="concession-icon">${s.icon}</div>
                <div>
                  <div class="concession-title">${s.name}</div>
                  <div class="concession-price">${formatPeso(s.price)}</div>
                </div>
              </div>
              <div class="qty-counter">
                <button class="qty-btn" data-sub="${s.id}">-</button>
                <span class="qty-val" id="qty-${s.id}">${b.concessions[s.id] || 0}</span>
                <button class="qty-btn" data-add="${s.id}">+</button>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="booking-summary" id="snackSummary">
          ${renderSummaryHtml()}
        </div>
      </div>

      <div class="booking-nav">
        <button class="btn btn-outline" id="backBtn">← Change Seats</button>
        <button class="btn btn-primary" id="nextBtn">Proceed to Pay →</button>
      </div>
    </div>
  `;

  body.querySelectorAll('[data-add]').forEach(btn => {
    btn.addEventListener('click', () => {
      haptic(10);
      playUiSound('click');
      const id = btn.dataset.add;
      b.concessions[id] = (b.concessions[id] || 0) + 1;
      $(`#qty-${id}`).textContent = b.concessions[id];
      $('#snackSummary').innerHTML = renderSummaryHtml();
    });
  });

  body.querySelectorAll('[data-sub]').forEach(btn => {
    btn.addEventListener('click', () => {
      haptic(10);
      playUiSound('click');
      const id = btn.dataset.sub;
      if (b.concessions[id] > 0) {
        b.concessions[id] -= 1;
        $(`#qty-${id}`).textContent = b.concessions[id];
        $('#snackSummary').innerHTML = renderSummaryHtml();
      }
    });
  });

  $('#backBtn').addEventListener('click', () => { haptic(10); state.booking.step = 4; renderBookingStep(); });
  $('#nextBtn').addEventListener('click', () => { haptic(12); playUiSound('click'); state.booking.step = 6; renderBookingStep(); });
}

function renderStep6(body) {
  const b = state.booking;
  const { total } = calculateTotal();

  body.innerHTML = `
    <div class="booking-step">
      <h3>Select Payment</h3>
      <p class="sub">Instant encrypted checkout.</p>

      <div class="seat-layout">
        <div style="flex:1">
          <div class="payment-section-title">Payment Network</div>
          <div class="payment-modes">
            <div class="payment-mode-card ${b.paymentMethod === 'gcash' ? 'selected' : ''}" data-method="gcash">
              <div class="payment-mode-icon" style="color:#007DFE">📱</div>
              <div class="payment-mode-title">GCash</div>
              <span class="payment-mode-badge">E-Wallet</span>
            </div>
            <div class="payment-mode-card ${b.paymentMethod === 'maya' ? 'selected' : ''}" data-method="maya">
              <div class="payment-mode-icon" style="color:#00D66C">🟢</div>
              <div class="payment-mode-title">Maya</div>
              <span class="payment-mode-badge">E-Wallet</span>
            </div>
            <div class="payment-mode-card ${b.paymentMethod === 'card' ? 'selected' : ''}" data-method="card">
              <div class="payment-mode-icon" style="color:#e8b84a">💳</div>
              <div class="payment-mode-title">Card</div>
              <span class="payment-mode-badge">Visa/MC</span>
            </div>
            <div class="payment-mode-card ${b.paymentMethod === 'applepay' ? 'selected' : ''}" data-method="applepay">
              <div class="payment-mode-icon"></div>
              <div class="payment-mode-title">Apple Pay</div>
              <span class="payment-mode-badge">Express</span>
            </div>
          </div>

          <div class="payment-fields" id="paymentFieldsContainer">
            ${renderPaymentFields(b.paymentMethod)}
          </div>

          <div class="payment-section-title">Promo Code</div>
          <div class="promo-box">
            <input type="text" class="promo-input" id="promoInput" placeholder="Try: CINEMA20 or VIPLUXE" />
            <button class="promo-btn" id="applyPromoBtn">Apply</button>
          </div>
        </div>

        <div class="booking-summary" id="paySummary">
          ${renderSummaryHtml()}
        </div>
      </div>

      <div class="booking-nav">
        <button class="btn btn-outline" id="backBtn">← Back</button>
        <button class="btn btn-primary btn-lg" id="payNowBtn">Pay ${formatPeso(total)}</button>
      </div>
    </div>
  `;

  body.querySelectorAll('.payment-mode-card').forEach(card => {
    card.addEventListener('click', () => {
      haptic(10);
      playUiSound('click');
      body.querySelectorAll('.payment-mode-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      b.paymentMethod = card.dataset.method;
      $('#paymentFieldsContainer').innerHTML = renderPaymentFields(b.paymentMethod);
    });
  });

  $('#applyPromoBtn').addEventListener('click', () => {
    const code = $('#promoInput').value.trim().toUpperCase();
    if (code === 'CINEMA20' || code === 'VIPLUXE') {
      haptic(20);
      playUiSound('success');
      b.discount = 0.20;
      toast('20% VIP Voucher Applied!', 'success');
      $('#paySummary').innerHTML = renderSummaryHtml();
      const updated = calculateTotal();
      $('#payNowBtn').textContent = `Pay ${formatPeso(updated.total)}`;
    } else {
      haptic(30);
      toast('Invalid code. Try "CINEMA20"', 'error');
    }
  });

  $('#backBtn').addEventListener('click', () => { haptic(10); state.booking.step = 5; renderBookingStep(); });
  $('#payNowBtn').addEventListener('click', processPayment);
}

function renderPaymentFields(method) {
  if (method === 'gcash' || method === 'maya') {
    return `
      <div class="form-group">
        <label class="form-label">${method === 'gcash' ? 'GCash' : 'Maya'} Mobile Number</label>
        <input type="tel" class="form-input" placeholder="09XX XXX XXXX" value="0917 888 1234" />
      </div>
      <p style="font-size:11px;color:var(--text-muted);margin-top:4px">Instant OTP authorization code will be sent via SMS.</p>
    `;
  } else if (method === 'card') {
    return `
      <div class="form-group">
        <label class="form-label">Cardholder Name</label>
        <input type="text" class="form-input" placeholder="Juan Dela Cruz" value="Cinema Connoisseur" />
      </div>
      <div class="form-group">
        <label class="form-label">Card Number</label>
        <input type="text" class="form-input" placeholder="4123 •••• •••• 9876" value="•••• •••• •••• 5689" />
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">Expiry</label>
          <input type="text" class="form-input" placeholder="MM/YY" value="11/28" />
        </div>
        <div class="form-group">
          <label class="form-label">CVV</label>
          <input type="password" class="form-input" placeholder="•••" value="777" />
        </div>
      </div>
    `;
  } else {
    return `
      <div style="text-align:center;padding:12px;color:var(--text-dim);font-size:12px">
        <span> Double click power button to authenticate biometric payment.</span>
      </div>
    `;
  }
}

function processPayment() {
  haptic(25);
  const payBtn = $('#payNowBtn');
  payBtn.disabled = true;
  payBtn.innerHTML = `Securing Authorization...`;

  setTimeout(() => {
    confirmBooking();
  }, 1100);
}

function confirmBooking() {
  const b = state.booking;
  const { total } = calculateTotal();
  const ref = genRef();

  const ticket = {
    ref,
    movie: b.movie.title,
    poster: b.movie.posterImage,
    cinema: b.cinema.name,
    date: b.date.full,
    time: b.time,
    seats: b.seats.map(s => s.id).join(', '),
    qty: b.seats.length,
    concessions: Object.entries(b.concessions).filter(([_, qty]) => qty > 0).map(([id, qty]) => `${qty}x ${id}`).join(', ') || 'None',
    paymentMethod: b.paymentMethod.toUpperCase(),
    total,
    bookedAt: Date.now()
  };

  state.tickets.unshift(ticket);
  localStorage.setItem('cineva_tickets', JSON.stringify(state.tickets));

  closeModal('bookingModal');
  playUiSound('success');
  setTimeout(() => showConfirmationModal(ticket), 200);
  renderTickets();
}

function showConfirmationModal(t) {
  $('#confirmInner').innerHTML = `
    <div class="confirm-check">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>
    </div>
    <h2 class="confirm-title">Reservation Confirmed!</h2>
    <p class="confirm-sub">Your pass is securely stored in your digital passes wallet.</p>

    <div class="confirm-ticket">
      <div class="confirm-ticket-row"><span>Film</span><span>${t.movie}</span></div>
      <div class="confirm-ticket-row"><span>Cinema</span><span>${t.cinema}</span></div>
      <div class="confirm-ticket-row"><span>Schedule</span><span>${t.date} • ${t.time}</span></div>
      <div class="confirm-ticket-row"><span>Seats</span><span>${t.seats} (${t.qty} Passes)</span></div>
      <div class="confirm-ticket-row"><span>Snacks</span><span>${t.concessions}</span></div>
      <div class="confirm-ticket-row"><span>Payment</span><span>${t.paymentMethod}</span></div>
      <div class="confirm-ticket-row"><span>Total</span><span>${formatPeso(t.total)}</span></div>
      <div class="confirm-ref">
        <small>Booking Reference</small>
        <strong>${t.ref}</strong>
      </div>
    </div>

    <div style="display:flex;gap:8px">
      <button class="btn btn-outline" style="flex:1" id="dlTicketBtn">Print / PDF</button>
      <button class="btn btn-primary" style="flex:1" id="viewPassesBtn">View Passes</button>
    </div>
  `;

  openModal('confirmModal');

  $('#dlTicketBtn').addEventListener('click', () => {
    haptic(10);
    window.print();
  });

  $('#viewPassesBtn').addEventListener('click', () => {
    haptic(10);
    closeModal('confirmModal');
    document.getElementById('tickets').scrollIntoView({ behavior: 'smooth' });
  });

  toast("Pass saved to wallet!", 'success');
}

/* ============ MY TICKETS ============ */
function renderTickets() {
  const grid = $('#ticketsGrid');
  const countBadgeNav = $('#ticketCountBadgeNav');
  const countBadgeMob = $('#ticketCountBadgeMob');

  const count = state.tickets.length;
  if (count > 0) {
    if (countBadgeNav) { countBadgeNav.textContent = count; countBadgeNav.classList.remove('hidden'); }
    if (countBadgeMob) { countBadgeMob.textContent = count; countBadgeMob.classList.remove('hidden'); }
  } else {
    if (countBadgeNav) countBadgeNav.classList.add('hidden');
    if (countBadgeMob) countBadgeMob.classList.add('hidden');
  }

  if (count === 0) {
    grid.innerHTML = '';
    $('#ticketsEmpty').classList.remove('hidden');
    return;
  }
  $('#ticketsEmpty').classList.add('hidden');

  grid.innerHTML = state.tickets.map(t => `
    <div class="ticket-card" data-ref="${t.ref}">
      <div class="ticket-head">
        <div class="ticket-poster"><img src="${t.poster}" alt="${t.movie}" /></div>
        <div class="ticket-info">
          <div class="ticket-movie">${t.movie}</div>
          <div class="ticket-detail"><strong>${t.cinema}</strong></div>
          <div class="ticket-detail">${t.date} • ${t.time}</div>
          <div class="ticket-detail">Seats: <strong>${t.seats}</strong></div>
        </div>
      </div>
      <div class="ticket-body">
        <div class="ticket-id">
          <small>PASS ID</small>
          <strong>${t.ref}</strong>
        </div>
        <div class="ticket-qr">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <rect width="100" height="100" fill="#fff" />
            <path d="M10 10h30v30h-30zM15 15v20h20v-20zM60 10h30v30h-30zM65 15v20h20v-20zM10 60h30v30h-30zM15 65v20h20v-20zM50 10h5v15h-5zM50 35h5v25h-5zM70 60h20v5h-20zM60 70h15v20h-15zM80 80h10v10h-10z" fill="#000"/>
          </svg>
        </div>
      </div>
      <div class="ticket-actions">
        <button data-act="view">View Pass</button>
        <button data-act="download">Save PDF</button>
        <button data-act="cancel" class="cancel">Cancel</button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.ticket-card').forEach(card => {
    card.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        haptic(10);
        const ref = card.dataset.ref;
        const act = btn.dataset.act;
        const t = state.tickets.find(x => x.ref === ref);

        if (act === 'view') {
          showConfirmationModal(t);
        } else if (act === 'download') {
          showConfirmationModal(t);
          setTimeout(() => window.print(), 300);
        } else if (act === 'cancel') {
          if (confirm(`Cancel reservation for ${t.movie}? Full refund will be credited.`)) {
            haptic(20);
            state.tickets = state.tickets.filter(x => x.ref !== ref);
            localStorage.setItem('cineva_tickets', JSON.stringify(state.tickets));
            renderTickets();
            toast('Pass cancelled and refund issued.', 'error');
          }
        }
      });
    });
  });
}

/* ============ DIRECTORIES ============ */
function renderSnacksPreview() {
  $('#snacksPreviewGrid').innerHTML = SNACKS.map(s => `
    <div class="snack-card">
      <div class="snack-icon">${s.icon}</div>
      <div class="snack-info">
        <h4>${s.name}</h4>
        <p>${s.desc}</p>
        <div class="snack-price">${formatPeso(s.price)}</div>
      </div>
    </div>
  `).join('');
}

function renderCinemas() {
  $('#cinemasGrid').innerHTML = CINEMAS.map(c => `
    <div class="cinema-card">
      <div class="cinema-name">${c.name}</div>
      <div class="cinema-location">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        ${c.location}
      </div>
      <div class="cinema-screens">${c.screens} State-of-the-Art Halls</div>
      <div class="cinema-badges">${c.features.map(f => `<span class="badge">${f}</span>`).join('')}</div>
    </div>
  `).join('');
}

function renderComingSoon() {
  $('#comingGrid').innerHTML = COMING_SOON.map(m => `
    <div class="coming-card">
      <div class="coming-poster"><img src="${m.posterImage}" alt="${m.title}" loading="lazy" /></div>
      <div class="coming-info">
        <div>
          <div class="coming-title">${m.title}</div>
          <div class="coming-genre">${m.genre}</div>
          <div class="coming-date">Premieres ${m.date}</div>
        </div>
        <button class="notify-btn" data-id="${m.id}">Notify Me</button>
      </div>
    </div>
  `).join('');

  $$('.notify-btn').forEach(b => b.addEventListener('click', () => {
    haptic(10);
    playUiSound('click');
    if (b.classList.contains('notified')) {
      b.classList.remove('notified');
      b.textContent = 'Notify Me';
      toast('Notification removed');
    } else {
      b.classList.add('notified');
      b.textContent = '✓ Reminder Set';
      toast("We'll notify you when tickets open!", 'success');
    }
  }));
}

/* ============ GLOBAL LISTENERS & INITIALIZATION ============ */
window.addEventListener('load', () => {
  setTimeout(() => $('#loader').classList.add('done'), 900);
});

window.addEventListener('scroll', () => {
  $('#header').classList.toggle('scrolled', window.scrollY > 20);
  updateActiveNav();
});

function updateActiveNav() {
  const sections = ['home', 'movies', 'snacks', 'cinemas', 'coming', 'tickets'];
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= 200) current = id;
  });
  $$('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.section === current));
  $$('.mobile-nav-item').forEach(l => l.classList.toggle('active', l.dataset.section === current));
}

$('#soundscapeBtn').addEventListener('click', toggleSoundscape);

$('#dimmerBtn').addEventListener('click', () => {
  haptic(15);
  playUiSound('click');
  state.lightsDimmed = !state.lightsDimmed;
  document.body.classList.toggle('lights-dimmed', state.lightsDimmed);
  toast(state.lightsDimmed ? 'Theater mode active (Lights Dimmed).' : 'Theater lights restored.');
});

$('#hamburger').addEventListener('click', () => {
  haptic(10);
  $('#hamburger').classList.toggle('active');
  $('#nav').classList.toggle('open');
});

$$('.nav-link').forEach(l => l.addEventListener('click', () => {
  $('#hamburger').classList.remove('active');
  $('#nav').classList.remove('open');
}));

$('#searchToggle').addEventListener('click', () => {
  haptic(10);
  playUiSound('click');
  $('#searchBar').classList.add('open');
  setTimeout(() => $('#searchInput').focus(), 250);
});

$('#searchClose').addEventListener('click', () => {
  $('#searchBar').classList.remove('open');
  $('#searchInput').value = '';
  state.searchQuery = '';
  renderMovies();
});

$('#searchInput').addEventListener('input', e => {
  state.searchQuery = e.target.value.toLowerCase().trim();
  renderMovies();
});

$('#vipClubBtn').addEventListener('click', () => {
  haptic(10);
  playUiSound('click');
  openModal('vipModal');
});

$('#heroBookBtn').addEventListener('click', () => {
  haptic(15);
  playUiSound('click');
  openBooking(HERO_FEATURED[state.heroIndex]);
});

$('#heroTrailerBtn').addEventListener('click', () => {
  haptic(10);
  playUiSound('click');
  openTrailer(HERO_FEATURED[state.heroIndex]);
});

$('#newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = $('#newsletterEmail');
  if (emailInput.value.trim()) {
    haptic(20);
    playUiSound('success');
    toast(`VIP Invitation pass registered for ${emailInput.value}!`, 'success');
    emailInput.value = '';
  }
});

function init() {
  setHero(0);
  startHeroTimer();
  updateFavCount();
  renderMovies();
  renderSnacksPreview();
  renderCinemas();
  renderComingSoon();
  renderTickets();
  updateActiveNav();
}

init();