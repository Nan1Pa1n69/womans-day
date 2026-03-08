const quotes = [
  {
    text: "I have learned over the years that when one's mind is made up, this diminishes fear.",
    author: "Rosa Parks",
    role: "Civil Rights Icon",
    emoji: "🌹",
    vibe: "fearless",
    vibeClass: "v1"
  },
  {
    text: "The question isn't who's going to let me; it's who is going to stop me.",
    author: "Ayn Rand",
    role: "Writer & Philosopher",
    emoji: "⚡",
    vibe: "unstoppable",
    vibeClass: "v2"
  },
  {
    text: "I raise up my voice — not so that I can shout, but so that those without a voice can be heard.",
    author: "Malala Yousafzai",
    role: "Youngest Nobel Laureate",
    emoji: "📣",
    vibe: "amplify others",
    vibeClass: "v4"
  },
  {
    text: "Well-behaved women seldom make history.",
    author: "Laurel Thatcher Ulrich",
    role: "Historian",
    emoji: "🔥",
    vibe: "rebel energy",
    vibeClass: "v1"
  },
  {
    text: "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
    author: "Charlotte Brontë",
    role: "Novelist",
    emoji: "🕊️",
    vibe: "free spirit",
    vibeClass: "v2"
  },
  {
    text: "There is no limit to what we, as women, can accomplish.",
    author: "Michelle Obama",
    role: "Former First Lady",
    emoji: "🚀",
    vibe: "no ceiling",
    vibeClass: "v3"
  },
  {
    text: "Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.",
    author: "Oprah Winfrey",
    role: "Media Mogul",
    emoji: "👑",
    vibe: "queen mindset",
    vibeClass: "v3"
  },
  {
    text: "You can waste your lives drawing lines. Or you can live your life crossing them.",
    author: "Shonda Rhimes",
    role: "TV Genius",
    emoji: "✨",
    vibe: "line crosser",
    vibeClass: "v2"
  },
  {
    text: "A woman with a voice is, by definition, a strong woman.",
    author: "Melinda Gates",
    role: "Philanthropist",
    emoji: "🎤",
    vibe: "speak up",
    vibeClass: "v4"
  },
  {
    text: "I have stood on a mountain of no's for one yes.",
    author: "B. Smith",
    role: "Entrepreneur & Icon",
    emoji: "🏔️",
    vibe: "persistence",
    vibeClass: "v1"
  },
  {
    text: "Life shrinks or expands in proportion to one's courage.",
    author: "Anaïs Nin",
    role: "Writer",
    emoji: "🦋",
    vibe: "expand yourself",
    vibeClass: "v2"
  },
  {
    text: "One child, one teacher, one book, one pen can change the world.",
    author: "Malala Yousafzai",
    role: "Education Activist",
    emoji: "📖",
    vibe: "change maker",
    vibeClass: "v4"
  },
  {
    text: "I am not free while any woman is unfree, even when her shackles are very different from my own.",
    author: "Audre Lorde",
    role: "Writer & Activist",
    emoji: "🤝",
    vibe: "solidarity",
    vibeClass: "v4"
  },
  {
    text: "The most common way people give up their power is by thinking they don't have any.",
    author: "Alice Walker",
    role: "Novelist & Poet",
    emoji: "💪",
    vibe: "own your power",
    vibeClass: "v1"
  },
  {
    text: "You don't make progress by standing on the sidelines whimpering and complaining. You make progress by implementing ideas.",
    author: "Shirley Chisholm",
    role: "First Black Congresswoman",
    emoji: "🏃‍♀️",
    vibe: "just do it",
    vibeClass: "v3"
  },
  {
    text: "I never dreamed about success. I worked for it.",
    author: "Estée Lauder",
    role: "Business Legend",
    emoji: "💼",
    vibe: "grindset",
    vibeClass: "v3"
  },
  {
    text: "Women belong in all places where decisions are being made.",
    author: "Ruth Bader Ginsburg",
    role: "Supreme Court Justice",
    emoji: "⚖️",
    vibe: "take your seat",
    vibeClass: "v1"
  },
  {
    text: "I'm tough, I'm ambitious, and I know exactly what I want. If that makes me a bitch, okay.",
    author: "Madonna",
    role: "Queen of Pop",
    emoji: "💅",
    vibe: "unapologetic",
    vibeClass: "v1"
  },
  {
    text: "Kiekviena moteris turi savyje jėgą, kurios net pati nežino. Every woman carries a strength she doesn't even know.",
    author: "Žemaitė",
    role: "Lithuanian Writer & Feminist Pioneer",
    emoji: "✊",
    vibe: "inner strength",
    vibeClass: "v1"
  },
  {
    text: "The sky doesn't ask permission — neither do I.",
    author: "Nijolė Sadūnaitė",
    role: "Soviet Dissident & Human Rights Activist",
    emoji: "✈️",
    vibe: "no limits",
    vibeClass: "v2"
  },
  {
    text: "Books are the wings of the nation. I carried them so Lithuania could fly.",
    author: "Felicija Bortkevičienė",
    role: "Book Smuggler, Publisher & Activist",
    emoji: "📚",
    vibe: "knowledge rebel",
    vibeClass: "v4"
  },
  {
    text: "If they won't give us freedom, we'll sing it into existence.",
    author: "Kazimiera Prunskienė",
    role: "First Female Prime Minister of Lithuania",
    emoji: "🎶",
    vibe: "sing for freedom",
    vibeClass: "v4"
  },
  {
    text: "Science doesn't care about your gender. Results speak.",
    author: "Birutė Galdikas",
    role: "Lithuanian-Canadian Primatologist",
    emoji: "🦧",
    vibe: "science queen",
    vibeClass: "v3"
  },
  {
    text: "I didn't come to participate. I came to win.",
    author: "Rūta Meilutytė",
    role: "Olympic Gold Swimmer 🇱🇹",
    emoji: "🥇",
    vibe: "champion mindset",
    vibeClass: "v3"
  },
  {
    text: "A nation's soul lives in its songs, and it was women who kept singing.",
    author: "Dalia Grinkevičiūtė",
    role: "Writer & Siberian Exile Survivor",
    emoji: "❄️",
    vibe: "unbreakable",
    vibeClass: "v1"
  },
  {
    text: "Lead not from above, but from within. That's how real change happens.",
    author: "Dalia Grybauskaitė",
    role: "First Female President of Lithuania",
    emoji: "🇱🇹",
    vibe: "lead from within",
    vibeClass: "v2"
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
