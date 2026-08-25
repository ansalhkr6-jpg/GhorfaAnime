const animeData = {
  gang: {
    id: "gang",
    title: "Gang",
    description:
      "طالب غامض يبدأ رحلة جديدة ويكتشف أن حياته لن تبقى كما كانت.",
    genre: ["أكشن", "شونين", "غموض"],

    episodes: [
      {
        number: 1,
        title: "البداية",
        description: "بداية قصة Gang.",
        video: ""
      },
      {
        number: 2,
        title: "القوة الجديدة",
        description: "يبدأ Gang في اكتشاف قدراته.",
        video: ""
      },
      {
        number: 3,
        title: "الاختبار",
        description: "مواجهة جديدة تنتظر Gang.",
        video: ""
      }
    ]
  }
};

let currentAnime = null;
let favorite = localStorage.getItem("gangFavorite") === "true";

document.addEventListener("DOMContentLoaded", () => {
  renderAnimeCards();
  renderEpisodes();
  updateFavoriteButton();

  const search = document.getElementById("searchInput");

  if (search) {
    search.addEventListener("input", searchAnime);
  }
});

function renderAnimeCards() {

  const cards = `
    <article class="anime-card" onclick="openAnime('gang')">
      <div class="anime-cover">
        <span>GANG</span>
      </div>

      <div class="anime-info">
        <h3>Gang</h3>
        <p>أكشن • شونين • غموض</p>
      </div>
    </article>
  `;

  const grid = document.getElementById("animeGrid");
  const newGrid = document.getElementById("newGrid");

  if (grid) grid.innerHTML = cards;
  if (newGrid) newGrid.innerHTML = cards;
}

function openAnime(id) {

  const anime = animeData[id];

  if (!anime) return;

  currentAnime = id;

  document.querySelectorAll(
    "main > section:not(.anime-page):not(.player-page):not(.my-list-page)"
  ).forEach(section => {
    section.classList.add("hidden");
  });

  document.getElementById("animePage").classList.remove("hidden");
  document.getElementById("playerPage").classList.add("hidden");
  document.getElementById("myListPage").classList.add("hidden");

  document.getElementById("animeTitle").textContent = anime.title;
  document.getElementById("animeDescription").textContent = anime.description;

  renderEpisodes();
  updateFavoriteButton();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function closeAnime() {

  document.getElementById("animePage").classList.add("hidden");

  document.querySelectorAll(
    "main > section:not(.anime-page):not(.player-page):not(.my-list-page)"
  ).forEach(section => {
    section.classList.remove("hidden");
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function renderEpisodes() {

  const list = document.getElementById("episodeList");

  if (!list) return;

  const anime = animeData.gang;

  list.innerHTML = anime.episodes.map(episode => `
    <div class="episode" onclick="playEpisode(${episode.number})">

      <div class="episode-number">
        ${episode.number}
      </div>

      <div class="episode-info">
        <strong>الحلقة ${episode.number} — ${episode.title}</strong>
        <small>${episode.description}</small>
      </div>

      <span>▶</span>

    </div>
  `).join("");
}

function playEpisode(number) {

  const anime = animeData.gang;

  const episode = anime.episodes.find(
    item => item.number === number
  );

  if (!episode) return;

  const playerPage = document.getElementById("playerPage");
  const video = document.getElementById("videoPlayer");

  document.getElementById("animePage").classList.add("hidden");
  document.getElementById("playerPage").classList.remove("hidden");

  document.getElementById("playerTitle").textContent =
    `${anime.title} - الحلقة ${episode.number}`;

  if (episode.video) {

    video.src = episode.video;
    video.load();

  } else {

    video.removeAttribute("src");
    video.load();

    showMessage("أضف رابط فيديو قانوني للحلقة أولًا");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function closePlayer() {

  const video = document.getElementById("videoPlayer");

  video.pause();
  video.removeAttribute("src");
  video.load();

  document.getElementById("playerPage").classList.add("hidden");

  if (currentAnime) {
    document.getElementById("animePage").classList.remove("hidden");
  } else {
    goHome();
  }
}

function toggleFavorite() {

  favorite = !favorite;

  localStorage.setItem(
    "gangFavorite",
    favorite
  );

  updateFavoriteButton();

  showMessage(
    favorite
      ? "تمت إضافة Gang إلى قائمتك ❤️"
      : "تمت إزالة Gang من قائمتك"
  );
}

function updateFavoriteButton() {

  const button = document.getElementById("favoriteBtn");

  if (!button) return;

  button.textContent = favorite
    ? "♥ في قائمتي"
    : "♡ أضف إلى قائمتي";
}

function showMyList() {

  document.querySelectorAll(
    "main > section:not(.anime-page):not(.player-page):not(.my-list-page)"
  ).forEach(section => {
    section.classList.add("hidden");
  });

  document.getElementById("animePage").classList.add("hidden");
  document.getElementById("playerPage").classList.add("hidden");
  document.getElementById("myListPage").classList.remove("hidden");

  const content = document.getElementById("myListContent");

  if (favorite) {

    content.innerHTML = `
      <article class="anime-card" onclick="openAnime('gang')">

        <div class="anime-cover">
          <span>GANG</span>
        </div>

        <div class="anime-info">
          <h3>Gang</h3>
          <p>في قائمتك ❤️</p>
        </div>

      </article>
    `;

  } else {

    content.innerHTML = `
      <p style="color:#a9a3b1;padding:20px 0;">
        قائمتك فارغة حاليًا.
      </p>
    `;
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function closeMyList() {

  document.getElementById("myListPage").classList.add("hidden");

  document.querySelectorAll(
    "main > section:not(.anime-page):not(.player-page):not(.my-list-page)"
  ).forEach(section => {
    section.classList.remove("hidden");
  });
}

function goHome() {

  document.getElementById("animePage").classList.add("hidden");
  document.getElementById("playerPage").classList.add("hidden");
  document.getElementById("myListPage").classList.add("hidden");

  document.querySelectorAll(
    "main > section:not(.anime-page):not(.player-page):not(.my-list-page)"
  ).forEach(section => {
    section.classList.remove("hidden");
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function focusSearch() {

  goHome();

  const input = document.getElementById("searchInput");

  if (input) {
    input.focus();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

function scrollToSection(id) {

  goHome();

  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}

function searchAnime(event) {

  const query = event.target.value
    .trim()
    .toLowerCase();

  const cards = document.querySelectorAll(".anime-card");

  cards.forEach(card => {

    const text = card.textContent.toLowerCase();

    card.style.display =
      !query || text.includes(query)
        ? ""
        : "none";
  });
}

function showMessage(text) {

  const message = document.getElementById("message");

  if (!message) return;

  message.textContent = text;
  message.classList.add("show");

  clearTimeout(window.messageTimer);

  window.messageTimer = setTimeout(() => {
    message.classList.remove("show");
  }, 2200);
}
