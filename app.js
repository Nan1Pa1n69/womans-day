const quotes = [
  // ── Historical Writers & Feminists ──
  {
    text: "Nieko į grabą neįsidėsi. Gyvenk pilnai, duok dosniai.",
    author: "Žemaitė (Julija Beniuševičiūtė-Žymantienė)",
    role: "Rašytoja, feministė ir tautinio atgimimo pradininkė",
    emoji: "✊",
    vibe: "inner strength",
    vibeClass: "v1"
  },
  {
    text: "Kai žmonės turi tiek daug ką pasakyti, jokia viena kalba to sutalpinti negali.",
    author: "Sofija Kymantaitė-Čiurlionienė",
    role: "Rašytoja, pedagogė ir kultūros veikėja",
    emoji: "🎨",
    vibe: "creative fire",
    vibeClass: "v2"
  },
  {
    text: "Žmonės vieniši kaip medžiai. Medžiai liečiasi lapais ir šakomis, bet kamienai visada stovi atskirai.",
    author: "Jurga Ivanauskaitė",
    role: "Rašytoja, dailininkė ir Tibeto aktyvistė",
    emoji: "🌳",
    vibe: "deep soul",
    vibeClass: "v4"
  },
  {
    text: "Mano gyvenimas — tai viesulas, paleistas ir nesuvaldomas — jis šuoliuoja tarsi sakalas virš laukų platybių!",
    author: "Salomėja Nėris (Salomėja Bačinskaitė)",
    role: "Mylimiausia Lietuvos poetė",
    emoji: "🌪️",
    vibe: "unleashed",
    vibeClass: "v2"
  },
  // ── Independence & Freedom Fighters ──
  {
    text: "Mane vedė Tėvynės meilė. Nuo vaikystės gyvenau su mintimi, kad vieną dieną eisiu kovoti už jos laisvę.",
    author: "Emilija Pliaterytė",
    role: "\"Lietuvos Žana d'Ark\" — 1831 m. sukilimo didvyrė",
    emoji: "⚔️",
    vibe: "fearless",
    vibeClass: "v1"
  },
  {
    text: "Jūs esate vyriausieji redaktoriai! Jūs darote nusikaltimus — mes tik juos užrašome. Mes esame tik sekretorės.",
    author: "Nijolė Sadūnaitė",
    role: "Disidentė vienuolė ir žmogaus teisių gynėja",
    emoji: "✝️",
    vibe: "truth teller",
    vibeClass: "v1"
  },
  {
    text: "Laimingiausi mano gyvenimo metai buvo praleisti kalėjime. Ten jauti Dievo artumą. Kad Bažnyčia gyventų, reikia kankinių.",
    author: "Nijolė Sadūnaitė",
    role: "Sovietinė politinė kalinė ir Katalikų Bažnyčios kronikos platintoja",
    emoji: "🕊️",
    vibe: "unbreakable spirit",
    vibeClass: "v4"
  },
  {
    text: "Mirtis, badas, šiltinė, utėlės, skorbutas ir šaltis buvo įsisukę į mūsų barakus — bet jie negalėjo pasiekti mūsų dvasios.",
    author: "Dalia Grinkevičiūtė",
    role: "Rašytoja, gydytoja ir Sibiro tremtinė",
    emoji: "❄️",
    vibe: "unbreakable",
    vibeClass: "v1"
  },
  // ── Activists & Suffragists ──
  {
    text: "Balsavimo teisė turi priklausyti visiems — nepaisant lyties, religijos ar tautybės. Tai ne privilegija, tai teisė.",
    author: "Felicija Bortkevičienė (née Povickaitė)",
    role: "Leidėja, knygnešė, sufražistė ir pirmoji lietuvė masonė",
    emoji: "📚",
    vibe: "knowledge rebel",
    vibeClass: "v4"
  },
  {
    text: "Sąmoningas žmogus mato, kokie maži mes esame šiame pasaulyje — tik atomas jo didybėje — tačiau tas suvokimas yra mūsų didžiausia galia.",
    author: "Gabrielė Petkevičaitė-Bitė",
    role: "Rašytoja, pedagogė ir moterų teisių pradininkė",
    emoji: "🐝",
    vibe: "bee power",
    vibeClass: "v2"
  },
  {
    text: "Visi mano darbai buvo padaryti iš meilės kultūrai ir todėl, kad negalėjau šaltai stebėti nekaltųjų kančios.",
    author: "Ona Šimaitė",
    role: "Bibliotekininkė, Pasaulio tautų teisuolė — gelbėjo žydus iš Vilniaus geto",
    emoji: "📖",
    vibe: "quiet courage",
    vibeClass: "v4"
  },
  {
    text: "Kiekvieną savo gyvenimo dieną turi atsiduoti kitų labui — darbais, ne kalbomis.",
    author: "Ona Šimaitė",
    role: "Vilniaus universiteto bibliotekininkė ir Holokausto gelbėtoja",
    emoji: "🤝",
    vibe: "actions speak",
    vibeClass: "v3"
  },
  // ── Politicians ──
  {
    text: "Nebijok būti savimi, turėti savo svajonę, savo viziją ir eiti jos link. Mes galime tiek daug pasiekti, jei esame nuoširdžiai atsidavę.",
    author: "Dalia Grybauskaitė",
    role: "Pirmoji Lietuvos prezidentė moteris (2009–2019)",
    emoji: "🇱🇹",
    vibe: "iron lady",
    vibeClass: "v1"
  },
  {
    text: "Konkretūs sėkmingų moterų pavyzdžiai yra geriausia priemonė įkvėpti kitas siekti aukštumų.",
    author: "Dalia Grybauskaitė",
    role: "Lietuvos „Geležinė ledi" ir Karolio Didžiojo premijos laureatė",
    emoji: "⚡",
    vibe: "lead by example",
    vibeClass: "v3"
  },
  {
    text: "Gyvename paradokse. Mūsų visuomenės yra tolygios, bet mūsų parlamentai — ne. Laikas tai pakeisti.",
    author: "Ingrida Šimonytė",
    role: "Lietuvos ministrė pirmininkė (2020–2024)",
    emoji: "⚖️",
    vibe: "equality now",
    vibeClass: "v2"
  },
  {
    text: "Kai maža tauta stoja už savo laisvę, ji parodo pasauliui, kad drąsa neturi dydžio.",
    author: "Kazimira Prunskienė",
    role: "Pirmoji nepriklausomos Lietuvos ministrė pirmininkė (1990–1991)",
    emoji: "🎶",
    vibe: "freedom voice",
    vibeClass: "v4"
  },
  // ── Scientists & Scholars ──
  {
    text: "Turime iš naujo sutelkti kolektyvinę atmintį. Vadinamojo „progreso" kelias gesina pačias gyvybės sąlygas Žemėje.",
    author: "Marija Gimbutienė (Marija Gimbutas)",
    role: "Archeologė — atrado „Senąją Europą" ir Deivės civilizaciją",
    emoji: "🏺",
    vibe: "ancient wisdom",
    vibeClass: "v2"
  },
  {
    text: "Kai atvykau į atogrąžų mišką, niekas nemokėjo ištarti mano vardo. Bet orangutanams buvo vis tiek — ir man taip pat.",
    author: "Birutė Galdikas (Galdikaitė)",
    role: "Lietuvių kilmės primatologė — viena iš Leakey „Trimates"",
    emoji: "🦧",
    vibe: "science queen",
    vibeClass: "v3"
  },
  // ── Athletes ──
  {
    text: "Psichologija vaidina didžiausią vaidmenį. Per pertrauką tiek daug išmokau — kai grįžau, galėjau viską vertinti visiškai kitaip.",
    author: "Rūta Meilutytė",
    role: "Olimpinė čempionė ir 3× pasaulio čempionė plaukikė",
    emoji: "🥇",
    vibe: "champion mindset",
    vibeClass: "v3"
  },
  // ── Artists & Cultural Figures ──
  {
    text: "Kai atvykau į Vokietiją, neturėjau jokios scenos patirties, jokio repertuaro. Viską išmokau nuo nulio — ir augu su kiekvienu vaidmeniu iki šiol.",
    author: "Violeta Urmana (Urmanavičiūtė)",
    role: "Pasaulinio garso operos solistė ir UNESCO taikos menininkė",
    emoji: "🎭",
    vibe: "never stop growing",
    vibeClass: "v2"
  },
  // ── Poets ──
  {
    text: "Dar prieš man gimstant, alyvos jau žydėjo. Ir kai mirsiu, jos žydės kaip pirma.",
    author: "Salomėja Nėris",
    role: "Mylimiausia Lietuvos poetė",
    emoji: "🌸",
    vibe: "eternal bloom",
    vibeClass: "v4"
  }
];

const cardColors = ["c1", "c2", "c3", "c4", "c5", "c6"];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Render Cards ──
function renderWall() {
  const wall = document.getElementById("wall");
  wall.innerHTML = "";

  const shuffled = shuffle(quotes);

  shuffled.forEach((q, i) => {
    const card = document.createElement("div");
    const color = cardColors[i % cardColors.length];
    card.className = `card ${color}`;
    card.style.animationDelay = `${i * 0.06}s`;

    card.innerHTML = `
      <span class="emoji-tag">${q.emoji}</span>
      <blockquote>"${q.text}"</blockquote>
      <p class="author">${q.author}</p>
      <p class="role">${q.role}</p>
      <span class="vibe ${q.vibeClass}">#${q.vibe}</span>
    `;

    // spotlight follow on hover
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", ((e.clientX - rect.left) / rect.width * 100) + "%");
      card.style.setProperty("--my", ((e.clientY - rect.top) / rect.height * 100) + "%");
    });

    card.addEventListener("click", () => {
      document.querySelectorAll(".card.active").forEach(c => c.classList.remove("active"));
      card.classList.toggle("active");
      burstHeartsAt(event.clientX, event.clientY);
    });

    wall.appendChild(card);
  });
}

renderWall();

document.getElementById("shuffle").addEventListener("click", () => {
  renderWall();
  burstConfetti();
});

// ══════════════════════════════════
// ── FLOATING HEARTS BACKGROUND ──
// ══════════════════════════════════
const heartsCanvas = document.getElementById("hearts");
const hCtx = heartsCanvas.getContext("2d");
let hearts = [];

function resizeHearts() {
  heartsCanvas.width = window.innerWidth;
  heartsCanvas.height = window.innerHeight;
}

function drawHeart(ctx, x, y, size, color, alpha, rotation) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.beginPath();
  const s = size;
  ctx.moveTo(0, -s * 0.3);
  ctx.bezierCurveTo(-s, -s * 1.2, -s * 1.6, s * 0.2, 0, s);
  ctx.bezierCurveTo(s * 1.6, s * 0.2, s, -s * 1.2, 0, -s * 0.3);
  ctx.fill();
  ctx.restore();
}

function createHeart() {
  const colors = [
    "rgba(255, 107, 157, 0.6)",
    "rgba(192, 132, 252, 0.5)",
    "rgba(249, 168, 212, 0.5)",
    "rgba(251, 191, 36, 0.3)",
    "rgba(244, 114, 182, 0.5)",
    "rgba(168, 85, 247, 0.4)"
  ];
  return {
    x: Math.random() * heartsCanvas.width,
    y: heartsCanvas.height + 20,
    size: Math.random() * 12 + 5,
    speedY: Math.random() * 0.6 + 0.2,
    speedX: (Math.random() - 0.5) * 0.3,
    wobbleAmp: Math.random() * 30 + 10,
    wobbleSpeed: Math.random() * 0.02 + 0.005,
    wobbleOffset: Math.random() * Math.PI * 2,
    rotation: (Math.random() - 0.5) * 0.5,
    rotSpeed: (Math.random() - 0.5) * 0.005,
    color: colors[Math.floor(Math.random() * colors.length)],
    alpha: Math.random() * 0.4 + 0.15,
    time: 0
  };
}

function animateHearts() {
  hCtx.clearRect(0, 0, heartsCanvas.width, heartsCanvas.height);

  // spawn new hearts
  if (hearts.length < 35 && Math.random() < 0.08) {
    hearts.push(createHeart());
  }

  hearts.forEach(h => {
    h.time += 1;
    h.y -= h.speedY;
    h.x += h.speedX + Math.sin(h.time * h.wobbleSpeed + h.wobbleOffset) * 0.5;
    h.rotation += h.rotSpeed;

    drawHeart(hCtx, h.x, h.y, h.size, h.color, h.alpha, h.rotation);
  });

  hearts = hearts.filter(h => h.y > -40);
  requestAnimationFrame(animateHearts);
}

// ══════════════════════════
// ── CONFETTI ON SHUFFLE ──
// ══════════════════════════
const confettiCanvas = document.getElementById("confetti");
const cCtx = confettiCanvas.getContext("2d");
let particles = [];

function resizeConfetti() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}

function burstConfetti() {
  const colors = ["#ff6b9d", "#c084fc", "#fbbf24", "#34d399", "#60a5fa", "#f472b6", "#fb923c"];
  const shapes = ["rect", "circle", "heart"];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: confettiCanvas.width / 2 + (Math.random() - 0.5) * 300,
      y: confettiCanvas.height * 0.3,
      vx: (Math.random() - 0.5) * 16,
      vy: Math.random() * -14 - 4,
      size: Math.random() * 8 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      life: 1
    });
  }
}

// mini hearts burst on card click
function burstHeartsAt(x, y) {
  const colors = ["#ff6b9d", "#f472b6", "#c084fc", "#f9a8d4"];
  for (let i = 0; i < 12; i++) {
    particles.push({
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 8,
      vy: Math.random() * -8 - 2,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: "heart",
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8,
      life: 1
    });
  }
}

function drawConfettiPiece(p) {
  cCtx.save();
  cCtx.translate(p.x, p.y);
  cCtx.rotate((p.rotation * Math.PI) / 180);
  cCtx.globalAlpha = Math.max(0, p.life);
  cCtx.fillStyle = p.color;

  if (p.shape === "heart") {
    const s = p.size * 0.5;
    cCtx.beginPath();
    cCtx.moveTo(0, -s * 0.3);
    cCtx.bezierCurveTo(-s, -s * 1.2, -s * 1.6, s * 0.2, 0, s);
    cCtx.bezierCurveTo(s * 1.6, s * 0.2, s, -s * 1.2, 0, -s * 0.3);
    cCtx.fill();
  } else if (p.shape === "circle") {
    cCtx.beginPath();
    cCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
    cCtx.fill();
  } else {
    cCtx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
  }

  cCtx.restore();
}

function animateConfetti() {
  cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  particles.forEach(p => {
    p.x += p.vx;
    p.vx *= 0.99;
    p.vy += 0.15;
    p.y += p.vy;
    p.rotation += p.rotSpeed;
    p.life -= 0.007;
    drawConfettiPiece(p);
  });

  particles = particles.filter(p => p.life > 0);
  requestAnimationFrame(animateConfetti);
}

// ═══════════════════════════
// ── SPARKLE CURSOR TRAIL ──
// ═══════════════════════════
let sparkleTimer = 0;
document.addEventListener("mousemove", (e) => {
  sparkleTimer++;
  if (sparkleTimer % 3 !== 0) return;

  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.textContent = ["✦", "✧", "♥", "⋆", "✶"][Math.floor(Math.random() * 5)];
  sparkle.style.left = (e.clientX + (Math.random() - 0.5) * 20) + "px";
  sparkle.style.top = (e.clientY + (Math.random() - 0.5) * 20) + "px";
  sparkle.style.color = ["#ff6b9d", "#c084fc", "#fbbf24", "#f472b6"][Math.floor(Math.random() * 4)];
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 800);
});

// ══════════════
// ── INIT ──
// ══════════════
function resizeAll() {
  resizeHearts();
  resizeConfetti();
}

window.addEventListener("resize", resizeAll);
resizeAll();
animateHearts();
animateConfetti();

// welcome burst
setTimeout(burstConfetti, 500);
