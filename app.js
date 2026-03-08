const quotes = [
  // ── Historical Writers & Feminists ──
  {
    text: "Nieko į grabą neįsidėsi. — You cannot take anything into the grave. Live fully, give generously.",
    author: "Žemaitė (Julija Beniuševičiūtė-Žymantienė)",
    role: "Writer, Feminist & National Revival Pioneer",
    emoji: "✊",
    vibe: "inner strength",
    vibeClass: "v1"
  },
  {
    text: "When people have so much to express, no single language can contain it all.",
    author: "Sofija Kymantaitė-Čiurlionienė",
    role: "Writer, Educator & Cultural Activist",
    emoji: "🎨",
    vibe: "creative fire",
    vibeClass: "v2"
  },
  {
    text: "People are lonely like trees. Trees touch each other with leaves and branches, but the trunks always stand apart.",
    author: "Jurga Ivanauskaitė",
    role: "Writer, Painter & Tibet Activist",
    emoji: "🌳",
    vibe: "deep soul",
    vibeClass: "v4"
  },
  {
    text: "My life is a windstorm, unleashed and unbounded — it sweeps like a falcon over expanses of field!",
    author: "Salomėja Nėris (Salomėja Bačinskaitė)",
    role: "Beloved Lithuanian Poetess",
    emoji: "🌪️",
    vibe: "unleashed",
    vibeClass: "v2"
  },
  // ── Independence & Freedom Fighters ──
  {
    text: "The love of the Motherland led me. From childhood I lived with the idea that I would one day go to war for her freedom.",
    author: "Emilija Pliaterytė",
    role: "\"Lithuanian Joan of Arc\" — 1831 Uprising Heroine",
    emoji: "⚔️",
    vibe: "fearless",
    vibeClass: "v1"
  },
  {
    text: "You are the chief editors! You commit the crimes — we just write them down. We are merely the secretaries.",
    author: "Nijolė Sadūnaitė",
    role: "Dissident Nun & Human Rights Defender",
    emoji: "✝️",
    vibe: "truth teller",
    vibeClass: "v1"
  },
  {
    text: "The happiest years of my life were spent in prison. You feel God's presence there. For the Church to live, you need martyrs.",
    author: "Nijolė Sadūnaitė",
    role: "Soviet Political Prisoner & Chronicle of the Catholic Church Smuggler",
    emoji: "🕊️",
    vibe: "unbreakable spirit",
    vibeClass: "v4"
  },
  {
    text: "Death, famine, typhus, lice, scurvy, and cold had wormed their way into our barracks — but they could not reach our spirit.",
    author: "Dalia Grinkevičiūtė",
    role: "Writer, Physician & Siberian Exile Survivor",
    emoji: "❄️",
    vibe: "unbreakable",
    vibeClass: "v1"
  },
  // ── Activists & Suffragists ──
  {
    text: "Voting rights must belong to all — regardless of sex, religion, or nationality. This is not a privilege, it is a right.",
    author: "Felicija Bortkevičienė (née Povickaitė)",
    role: "Publisher, Book Smuggler, Suffragist & First Lithuanian Female Freemason",
    emoji: "📚",
    vibe: "knowledge rebel",
    vibeClass: "v4"
  },
  {
    text: "A conscious person sees how small we each are in this world — a mere atom of its grandeur — yet that awareness is our greatest power.",
    author: "Gabrielė Petkevičaitė-Bitė",
    role: "Writer, Educator & Women's Rights Pioneer",
    emoji: "🐝",
    vibe: "bee power",
    vibeClass: "v2"
  },
  {
    text: "All my deeds were committed out of love for culture and because I could not coldly observe the suffering of the innocent.",
    author: "Ona Šimaitė",
    role: "Librarian, Righteous Among the Nations — Rescued Jews from Vilna Ghetto",
    emoji: "📖",
    vibe: "quiet courage",
    vibeClass: "v4"
  },
  {
    text: "Every day of your life you must devote yourself to the good of others — by doing, not chatting.",
    author: "Ona Šimaitė",
    role: "Vilnius University Librarian & Holocaust Rescuer",
    emoji: "🤝",
    vibe: "actions speak",
    vibeClass: "v3"
  },
  // ── Politicians ──
  {
    text: "Do not be afraid to be yourself, to have your dream, your vision, and to go for it. We can achieve so much if we are sincerely committed.",
    author: "Dalia Grybauskaitė",
    role: "First Female President of Lithuania (2009–2019)",
    emoji: "🇱🇹",
    vibe: "iron lady",
    vibeClass: "v1"
  },
  {
    text: "Concrete examples of successful women are the best means of empowerment for others to seek the heights.",
    author: "Dalia Grybauskaitė",
    role: "Lithuania's \"Iron Lady\" & Charlemagne Prize Laureate",
    emoji: "⚡",
    vibe: "lead by example",
    vibeClass: "v3"
  },
  {
    text: "We're living a paradox. While our societies are equally balanced, our parliaments are not. It is time to change that.",
    author: "Ingrida Šimonytė",
    role: "Prime Minister of Lithuania (2020–2024)",
    emoji: "⚖️",
    vibe: "equality now",
    vibeClass: "v2"
  },
  {
    text: "When a small nation stands up for its freedom, it shows the world that courage has no size.",
    author: "Kazimira Prunskienė",
    role: "First Prime Minister of Independent Lithuania (1990–1991)",
    emoji: "🎶",
    vibe: "freedom voice",
    vibeClass: "v4"
  },
  // ── Scientists & Scholars ──
  {
    text: "We must refocus our collective memory. The path of so-called 'progress' is extinguishing the very conditions for life on Earth.",
    author: "Marija Gimbutienė (Marija Gimbutas)",
    role: "Archaeologist — Discovered \"Old Europe\" & the Goddess Civilisation",
    emoji: "🏺",
    vibe: "ancient wisdom",
    vibeClass: "v2"
  },
  {
    text: "When I came to the rainforest, nobody could pronounce my name. But the orangutans didn't care — and neither did I.",
    author: "Birutė Galdikas (Galdikaitė)",
    role: "Lithuanian-Canadian Primatologist — One of Leakey's \"Trimates\"",
    emoji: "🦧",
    vibe: "science queen",
    vibeClass: "v3"
  },
  // ── Athletes ──
  {
    text: "Psychology plays the biggest role. I learned so much during my break — when I came back, I could approach everything in a completely different way.",
    author: "Rūta Meilutytė",
    role: "Olympic Gold Medallist & 3× World Champion Swimmer",
    emoji: "🥇",
    vibe: "champion mindset",
    vibeClass: "v3"
  },
  // ── Artists & Cultural Figures ──
  {
    text: "When I came to Germany, I had zero stage experience, zero repertoire. I learned everything from scratch — and I grow with every role, to this day.",
    author: "Violeta Urmana (Urmanavičiūtė)",
    role: "World-Renowned Opera Singer & UNESCO Artist for Peace",
    emoji: "🎭",
    vibe: "never stop growing",
    vibeClass: "v2"
  },
  // ── Poets ──
  {
    text: "Before I was born, the lilac had blossomed. And after I die, it will bloom as before.",
    author: "Salomėja Nėris",
    role: "Lithuania's Most Beloved Poetess",
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

    card.addEventListener("click", () => {
      document.querySelectorAll(".card.active").forEach(c => c.classList.remove("active"));
      card.classList.toggle("active");
    });

    wall.appendChild(card);
  });
}

renderWall();

document.getElementById("shuffle").addEventListener("click", () => {
  renderWall();
  burstConfetti();
});

// ── Confetti on shuffle ──
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

function burstConfetti() {
  const colors = ["#ff6b9d", "#c084fc", "#fbbf24", "#34d399", "#60a5fa", "#f472b6"];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.3,
      vx: (Math.random() - 0.5) * 12,
      vy: Math.random() * -10 - 3,
      size: Math.random() * 8 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      life: 1
    });
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.x += p.vx;
    p.vy += 0.18;
    p.y += p.vy;
    p.rotation += p.rotSpeed;
    p.life -= 0.008;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    ctx.restore();
  });

  particles = particles.filter(p => p.life > 0);
  requestAnimationFrame(animateConfetti);
}

animateConfetti();

// initial little burst for fun
setTimeout(burstConfetti, 600);
