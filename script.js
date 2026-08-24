const animeList = [
  {
    id: 1,
    title: "هجوم العمالقة",
    en: "Attack on Titan",
    genre: "أكشن",
    rating: 4.8,
    episodes: 89,
    image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg"
  },
  {
    id: 2,
    title: "جوجوتسو كايسن",
    en: "Jujutsu Kaisen",
    genre: "أكشن",
    rating: 4.7,
    episodes: 47,
    image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg"
  },
  {
    id: 3,
    title: "قاتل الشياطين",
    en: "Demon Slayer",
    genre: "أكشن",
    rating: 4.9,
    episodes: 63,
    image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
  },
  {
    id: 4,
    title: "بلو لوك",
    en: "Blue Lock",
    genre: "رياضة",
    rating: 4.6,
    episodes: 38,
    image: "https://cdn.myanimelist.net/images/anime/1258/126929.jpg"
  },
  {
    id: 5,
    title: "ناروتو",
    en: "Naruto",
    genre: "مغامرة",
    rating: 4.8,
    episodes: 220,
    image: "https://cdn.myanimelist.net/images/anime/13/17405.jpg"
  },
  {
    id: 6,
    title: "ون بيس",
    en: "One Piece",
    genre: "مغامرة",
    rating: 4.9,
    episodes: 1100,
    image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg"
  }
];

function getSaved() {
  return JSON.parse(
    localStorage.getItem("ghorfaAnimeList") || "[]"
  );
}

function saveList(list) {
  localStorage.setItem(
    "ghorfaAnimeList",
    JSON.stringify(list)
  );
}

function createCard(anime) {
  return `
    <article class="anime-card" onclick="details(${anime.id})">

      <div class="anime-image">

        <img
          src="${anime.image}"
          alt="${anime.title}"
          loading="lazy">

        <div class="anime-overlay">
          ▶
        </div>

      </div>

      <div class="anime-info">

        <h3>${anime.title}</h3>

        <div class="anime-meta">
          <span>⭐ ${anime.rating}</span>
          <span>${anime.episodes} حلقة</span>
        </div>

        <small>${anime.genre}</small>

      </div>

    </article>
  `;
}

function renderAnime(list = animeList) {

  const grid = document.getElementById("animeGrid");
  const newGrid = document.getElementById("newGrid");

  if (!grid || !newGrid) return;

  grid.innerHTML = list
    .slice(0, 3)
    .map(createCard)
    .join("");

  newGrid.innerHTML = list
    .slice(3)
    .map(createCard)
    .join("");
}

function details(id) {

  const anime = animeList.find(a => a.id === id);

  if (!anime) return;

  const saved = getSaved().includes(id);

  const message = document.getElementById("message");

  message.innerHTML = `
    <div class="anime-popup">

      <button
        class="popup-close"
        onclick="closePopup()">
        ✕
      </button>

      <img
        src="${anime.image}"
        alt="${anime.title}">

      <div>

        <h2>${anime.title}</h2>

        <p>${anime.en}</p>
        <p>⭐ التقييم: ${anime.rating}</p>
        <p>📺 الحلقات: ${anime.episodes}</p>
        <p>🎭 التصنيف: ${anime.genre}</p>

        <button onclick="watchNow()">
          ▶ شاهد الآن
        </button>

        <button onclick="toggleSaved(${id})">
          ${saved ? "💔 إزالة من قائمتي" : "❤️ أضف إلى قائمتي"}
        </button>

      </div>

    </div>
  `;

  message.classList.add("show");
}

function toggleSaved(id) {

  let list = getSaved();

  if (list.includes(id)) {
    list = list.filter(x => x !== id);
    showMessage("تمت إزالة الأنمي من قائمتك");
  } else {
    list.push(id);
    showMessage("تمت إضافة الأنمي إلى قائمتك ❤️");
  }

  saveList(list);
  closePopup();
}

function myList() {

  const ids = getSaved();

  const list = animeList.filter(
    anime => ids.includes(anime.id)
  );

  const message = document.getElementById("message");

  message.innerHTML = `
    <div class="anime-popup">

      <button
        class="popup-close"
        onclick="closePopup()">
        ✕
      </button>

      <div>

        <h2>❤️ قائمتي</h2>

        ${
          list.length
            ? `<div class="anime-grid">
                ${list.map(createCard).join("")}
               </div>`
            : `
              <p style="text-align:center;padding:30px">
                قائمتك فارغة حاليًا
              </p>
            `
        }

      </div>

    </div>
  `;

  message.classList.add("show");
}

function watchNow() {

  const anime = animeList[0];

  alert(
    "سيتم تشغيل الحلقة من نظام المشاهدة لاحقًا."
  );
}

function closePopup() {

  const message = document.getElementById("message");

  message.classList.remove("show");

  setTimeout(() => {
    message.innerHTML = "";
  }, 200);
}

function showMessage(text) {

  const toast = document.getElementById("toast");

  if (!toast) {

    const newToast = document.createElement("div");

    newToast.id = "toast";

    document.body.appendChild(newToast);
  }

  const box = document.getElementById("toast");

  box.textContent = text;

  box.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    box.classList.remove("show");
  }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {

  renderAnime();

  const search =
    document.getElementById("searchInput");

  search.addEventListener("input", () => {

    const value =
      search.value.trim().toLowerCase();

    if (!value) {
      renderAnime();
      return;
    }

    const results = animeList.filter(anime =>
      anime.title.toLowerCase().includes(value) ||
      anime.en.toLowerCase().includes(value) ||
      anime.genre.toLowerCase().includes(value)
    );

    renderAnime(results);
  });

});