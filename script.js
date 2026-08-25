const animeData = {

  gang: {
    id: "gang",
    title: "Gang",
    description:
      "طالب غامض يبدأ رحلة جديدة ويكتشف قوة تغير حياته بالكامل.",
    genre: ["أكشن", "شونين", "غموض"],
    image: "images/gang.jpg",

    episodes: [
      {
        number: 1,
        title: "البداية",
        description: "بداية رحلة Gang.",
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
  },

  shadow: {
    id: "shadow",
    title: "Shadow System",
    description:
      "شاب يكتشف نظامًا غامضًا يمنحه قدرات غير عادية.",
    genre: ["أكشن", "فانتازيا", "غموض"],
    image: "images/shadow-system.jpg",

    episodes: [
      {
        number: 1,
        title: "النظام",
        description: "ظهور النظام الغامض.",
        video: ""
      },
      {
        number: 2,
        title: "المهمة الأولى",
        description: "يبدأ الاختبار الحقيقي.",
        video: ""
      }
    ]
  },

  hunter: {
    id: "hunter",
    title: "Last Hunter",
    description:
      "صياد شاب يدخل عالمًا مليئًا بالأسرار والمخلوقات الغامضة.",
    genre: ["أكشن", "مغامرة", "فانتازيا"],
    image: "images/last-hunter.jpg",

    episodes: [
      {
        number: 1,
        title: "الصياد الأخير",
        description: "بداية الرحلة.",
        video: ""
      },
      {
        number: 2,
        title: "البوابة",
        description: "ظهور بوابة غامضة.",
        video: ""
      }
    ]
  },

  crimson: {
    id: "crimson",
    title: "Crimson Academy",
    description:
      "أكاديمية غامضة يخفي طلابها أسرارًا لا يعرفها أحد.",
    genre: ["أكشن", "مدرسي", "غموض"],
    image: "images/crimson-academy.jpg",

    episodes: [
      {
        number: 1,
        title: "الوصول",
        description: "أول يوم في الأكاديمية.",
        video: ""
      },
      {
        number: 2,
        title: "السر",
        description: "اكتشاف أول سر.",
        video: ""
      }
    ]
  }

};


let currentAnime = null;

let favoriteList =
  JSON.parse(localStorage.getItem("favoriteAnime") || "[]");


/* =========================
   تشغيل الموقع
========================= */

document.addEventListener("DOMContentLoaded", () => {

  renderAnimeCards();

  updateFavoriteButton();

  const searchInput =
    document.getElementById("searchInput");

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      searchAnime
    );

  }

});


/* =========================
   إنشاء بطاقات الأنمي
========================= */

function renderAnimeCards() {

  const grid =
    document.getElementById("animeGrid");

  const newGrid =
    document.getElementById("newGrid");

  if (!grid || !newGrid) return;


  const animeList =
    Object.values(animeData);


  const cards =
    animeList.map(anime => `

      <article
        class="anime-card"
        onclick="openAnime('${anime.id}')"
      >

        <div class="anime-cover">

          <img
            src="${anime.image}"
            alt="${anime.title}"
            onerror="this.style.display='none'; this.parentElement.classList.add('image-error');"
          >

          <span>${anime.title}</span>

        </div>

        <div class="anime-info">

          <h3>${anime.title}</h3>

          <p>
            ${anime.genre.join(" • ")}
          </p>

        </div>

      </article>

    `).join("");


  grid.innerHTML = cards;

  newGrid.innerHTML = cards;

}


/* =========================
   فتح صفحة الأنمي
========================= */

function openAnime(id) {

  const anime =
    animeData[id];

  if (!anime) return;

  currentAnime = id;


  document.querySelectorAll(
    "main > section:not(.anime-page):not(.player-page):not(.my-list-page)"
  ).forEach(section => {

    section.classList.add("hidden");

  });


  document
    .getElementById("animePage")
    .classList.remove("hidden");


  document
    .getElementById("playerPage")
    .classList.add("hidden");


  document
    .getElementById("myListPage")
    .classList.add("hidden");


  document.getElementById(
    "animeTitle"
  ).textContent = anime.title;


  document.getElementById(
    "animeDescription"
  ).textContent = anime.description;


  const cover =
    document.querySelector(".detail-cover");

  if (cover) {

    cover.innerHTML = `

      <img
        src="${anime.image}"
        alt="${anime.title}"
        onerror="this.style.display='none'; this.parentElement.classList.add('image-error');"
      >

      <div class="fallback-cover">
        ${anime.title}
      </div>

    `;

  }


  renderGenres(anime);

  renderEpisodes(anime);

  updateFavoriteButton();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================
   التصنيفات
========================= */

function renderGenres(anime) {

  const tags =
    document.querySelector(".tags");

  if (!tags) return;

  tags.innerHTML =
    anime.genre.map(
      genre => `<span>${genre}</span>`
    ).join("");

}


/* =========================
   الحلقات
========================= */

function renderEpisodes(anime = animeData.gang) {

  const list =
    document.getElementById("episodeList");

  if (!list) return;


  list.innerHTML =
    anime.episodes.map(episode => `

      <div
        class="episode"
        onclick="playEpisode('${anime.id}', ${episode.number})"
      >

        <div class="episode-number">
          ${episode.number}
        </div>

        <div class="episode-info">

          <strong>
            الحلقة ${episode.number}
            — ${episode.title}
          </strong>

          <small>
            ${episode.description}
          </small>

        </div>

        <span>▶</span>

      </div>

    `).join("");

}


/* =========================
   تشغيل الحلقة
========================= */

function playEpisode(animeId, episodeNumber) {

  const anime =
    animeData[animeId];

  if (!anime) return;


  const episode =
    anime.episodes.find(
      item => item.number === episodeNumber
    );

  if (!episode) return;


  const playerPage =
    document.getElementById("playerPage");

  const animePage =
    document.getElementById("animePage");

  const video =
    document.getElementById("videoPlayer");


  animePage.classList.add("hidden");

  playerPage.classList.remove("hidden");


  document.getElementById(
    "playerTitle"
  ).textContent =
    `${anime.title} - الحلقة ${episode.number}`;


  if (episode.video) {

    video.src = episode.video;

    video.load();

  } else {

    video.removeAttribute("src");

    video.load();

    showMessage(
      "هذه الحلقة لم تتم إضافة فيديو لها بعد."
    );

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================
   العودة من الأنمي
========================= */

function closeAnime() {

  document
    .getElementById("animePage")
    .classList.add("hidden");


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


/* =========================
   العودة من المشغل
========================= */

function closePlayer() {

  const video =
    document.getElementById("videoPlayer");


  video.pause();

  video.removeAttribute("src");

  video.load();


  document
    .getElementById("playerPage")
    .classList.add("hidden");


  if (currentAnime) {

    document
      .getElementById("animePage")
      .classList.remove("hidden");

  } else {

    goHome();

  }

}


/* =========================
   المفضلة
========================= */

function toggleFavorite() {

  if (!currentAnime) return;


  if (favoriteList.includes(currentAnime)) {

    favoriteList =
      favoriteList.filter(
        id => id !== currentAnime
      );

    showMessage(
      "تمت إزالة الأنمي من قائمتك"
    );

  } else {

    favoriteList.push(currentAnime);

    showMessage(
      "تمت إضافة الأنمي إلى قائمتك ❤️"
    );

  }


  localStorage.setItem(
    "favoriteAnime",
    JSON.stringify(favoriteList)
  );


  updateFavoriteButton();

}


/* =========================
   زر المفضلة
========================= */

function updateFavoriteButton() {

  const button =
    document.getElementById("favoriteBtn");

  if (!button || !currentAnime) return;


  const isFavorite =
    favoriteList.includes(currentAnime);


  button.textContent =
    isFavorite
      ? "♥ في قائمتي"
      : "♡ أضف إلى قائمتي";

}


/* =========================
   قائمتي
========================= */

function showMyList() {

  document.querySelectorAll(
    "main > section:not(.anime-page):not(.player-page):not(.my-list-page)"
  ).forEach(section => {

    section.classList.add("hidden");

  });


  document
    .getElementById("animePage")
    .classList.add("hidden");


  document
    .getElementById("playerPage")
    .classList.add("hidden");


  document
    .getElementById("myListPage")
    .classList.remove("hidden");


  const content =
    document.getElementById("myListContent");


  if (favoriteList.length === 0) {

    content.innerHTML = `
      <p style="color:#aaa;padding:20px">
        قائمتك فارغة حاليًا.
      </p>
    `;

    return;

  }


  content.innerHTML =
    favoriteList.map(id => {

      const anime =
        animeData[id];

      if (!anime) return "";

      return `

        <article
          class="anime-card"
          onclick="openAnime('${anime.id}')"
        >

          <div class="anime-cover">

            <img
              src="${anime.image}"
              alt="${anime.title}"
              onerror="this.style.display='none'; this.parentElement.classList.add('image-error');"
            >

            <span>${anime.title}</span>

          </div>

          <div class="anime-info">

            <h3>${anime.title}</h3>

            <p>${anime.genre.join(" • ")}</p>

          </div>

        </article>

      `;

    }).join("");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function closeMyList() {

  document
    .getElementById("myListPage")
    .classList.add("hidden");


  document.querySelectorAll(
    "main > section:not(.anime-page):not(.player-page):not(.my-list-page)"
  ).forEach(section => {

    section.classList.remove("hidden");

  });

}


/* =========================
   الرئيسية
========================= */

function goHome() {

  document
    .getElementById("animePage")
    .classList.add("hidden");


  document
    .getElementById("playerPage")
    .classList.add("hidden");


  document
    .getElementById("myListPage")
    .classList.add("hidden");


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


/* =========================
   البحث
========================= */

function focusSearch() {

  goHome();

  const input =
    document.getElementById("searchInput");

  if (input) {

    input.focus();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

}


function searchAnime(event) {

  const query =
    event.target.value
      .trim()
      .toLowerCase();


  const cards =
    document.querySelectorAll(".anime-card");


  cards.forEach(card => {

    const text =
      card.textContent.toLowerCase();


    card.style.display =
      !query || text.includes(query)
        ? ""
        : "none";

  });

}


/* =========================
   التمرير
========================= */

function scrollToSection(id) {

  goHome();

  const section =
    document.getElementById(id);

  if (section) {

    section.scrollIntoView({
      behavior: "smooth"
    });

  }

}


/* =========================
   الرسائل
========================= */

function showMessage(text) {

  const message =
    document.getElementById("message");

  if (!message) return;


  message.textContent = text;

  message.classList.add("show");


  clearTimeout(
    window.messageTimer
  );


  window.messageTimer =
    setTimeout(() => {

      message.classList.remove("show");

    }, 2200);

}
