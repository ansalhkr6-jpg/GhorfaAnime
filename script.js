/* =========================================================
   غرفة الأنمي - GhorfaAnime
   النسخة الأساسية:
   - Gang
   - Shadow System
   - Public Domain
   - الحلقات
   - المشغل
   - البحث
   - قائمتي
========================================================= */


/* =========================================================
   بيانات الأنمي
========================================================= */

const animeData = {

  /* =========================
     Gang
  ========================= */

  gang: {
    id: "gang",
    title: "Gang",
    description:
      "طالب غامض يبدأ رحلة جديدة ويكتشف قوة تغير حياته بالكامل.",

    genre: [
      "أكشن",
      "شونين",
      "غموض"
    ],

    image: "images/gang.jpg",

    section: "popular",

    episodes: [

      {
        number: 1,
        title: "البداية",
        description:
          "بداية رحلة Gang.",

        /*
          ضع هنا رابط فيديو تملك حق بثه.
          مثال:
          video: "videos/gang-01.mp4"
        */

        video: ""
      },

      {
        number: 2,
        title: "القوة الجديدة",
        description:
          "يبدأ Gang في اكتشاف قدراته.",

        video: ""
      },

      {
        number: 3,
        title: "الاختبار",
        description:
          "مواجهة جديدة تنتظر Gang.",

        video: ""
      }

    ]
  },


  /* =========================
     Shadow System
  ========================= */

  shadow: {
    id: "shadow",

    title: "Shadow System",

    description:
      "شاب يكتشف نظامًا غامضًا يمنحه قدرات غير عادية.",

    genre: [
      "أكشن",
      "فانتازيا",
      "غموض"
    ],

    image: "images/shadow-system.jpg",

    section: "popular",

    episodes: [

      {
        number: 1,
        title: "النظام",

        description:
          "ظهور النظام الغامض.",

        video: ""
      },

      {
        number: 2,
        title: "المهمة الأولى",

        description:
          "يبدأ الاختبار الحقيقي.",

        video: ""
      }

    ]
  },


  /* =====================================================
     PUBLIC DOMAIN
     ===================================================== */

  ponsuke: {

    id: "ponsuke",

    title: "Spring Comes to Ponsuke",

    titleArabic: "ربيع بونسوكي",

    year: 1934,

    description:
      "رسوم متحركة يابانية قصيرة من عام 1934.",

    genre: [
      "Public Domain",
      "كلاسيكي",
      "رسوم متحركة"
    ],

    image:
      "images/ponsuke.jpg",

    section:
      "public-domain",

    source:
      "Wikimedia Commons / Japanese Animated Film Classics",

    license:
      "Public Domain",

    episodes: [

      {
        number: 1,

        title:
          "Spring Comes to Ponsuke",

        description:
          "الفيلم القصير الكامل.",

        /*
          اتركه فارغًا حتى تضع نسخة
          لديك حق استخدامها.
        */

        video: ""
      }

    ]
  }

};


/* =========================================================
   الحالة العامة
========================================================= */

let currentAnime = null;

let favoriteList =
  JSON.parse(
    localStorage.getItem("favoriteAnime") || "[]"
  );


/* =========================================================
   تشغيل الموقع
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderAnimeCards();

    updateFavoriteButton();

    setupSearch();

  }
);


/* =========================================================
   البحث
========================================================= */

function setupSearch() {

  const input =
    document.getElementById("searchInput");

  if (!input) return;

  input.addEventListener(
    "input",
    function () {

      searchAnime(
        this.value
      );

    }
  );

}


function searchAnime(query) {

  query =
    query
      .trim()
      .toLowerCase();


  const cards =
    document.querySelectorAll(
      ".anime-card"
    );


  cards.forEach(
    function (card) {

      const text =
        card.textContent
          .toLowerCase();


      if (
        query === "" ||
        text.includes(query)
      ) {

        card.style.display = "";

      } else {

        card.style.display =
          "none";

      }

    }
  );

}


/* =========================================================
   إنشاء بطاقات الأنمي
========================================================= */

function createAnimeCard(anime) {

  return `

    <article
      class="anime-card"
      onclick="openAnime('${anime.id}')"
    >

      <div class="anime-cover">

        <img
          src="${anime.image}"
          alt="${anime.title}"
          onerror="
            this.style.display='none';
            this.parentElement.classList.add('image-error');
          "
        >

        <span>
          ${anime.titleArabic || anime.title}
        </span>

      </div>

      <div class="anime-info">

        <h3>
          ${anime.titleArabic || anime.title}
        </h3>

        <p>
          ${anime.genre.join(" • ")}
        </p>

      </div>

    </article>

  `;

}


/* =========================================================
   عرض الأنميات
========================================================= */

function renderAnimeCards() {

  const popularGrid =
    document.getElementById(
      "animeGrid"
    );

  const newGrid =
    document.getElementById(
      "newGrid"
    );


  const animeList =
    Object.values(animeData);


  /*
    الأنميات العادية
  */

  const popularAnime =
    animeList.filter(
      anime =>
        anime.section === "popular"
    );


  /*
    Public Domain
  */

  const publicDomainAnime =
    animeList.filter(
      anime =>
        anime.section === "public-domain"
    );


  if (popularGrid) {

    popularGrid.innerHTML =
      popularAnime
        .map(createAnimeCard)
        .join("");

  }


  if (newGrid) {

    newGrid.innerHTML =
      publicDomainAnime
        .map(createAnimeCard)
        .join("");

  }


  /*
    إذا أضفت قسمًا خاصًا باسم
    publicDomainGrid في HTML
  */

  const publicGrid =
    document.getElementById(
      "publicDomainGrid"
    );


  if (publicGrid) {

    publicGrid.innerHTML =
      publicDomainAnime
        .map(createAnimeCard)
        .join("");

  }

}


/* =========================================================
   فتح صفحة الأنمي
========================================================= */

function openAnime(id) {

  const anime =
    animeData[id];


  if (!anime) return;


  currentAnime =
    id;


  /*
    إخفاء الأقسام الرئيسية
  */

  document.querySelectorAll(
    "main > section"
  ).forEach(
    function (section) {

      if (
        !section.classList.contains(
          "anime-page"
        ) &&
        !section.classList.contains(
          "player-page"
        ) &&
        !section.classList.contains(
          "my-list-page"
        )
      ) {

        section.classList.add(
          "hidden"
        );

      }

    }
  );


  /*
    صفحة الأنمي
  */

  const animePage =
    document.getElementById(
      "animePage"
    );


  if (animePage) {

    animePage.classList.remove(
      "hidden"
    );

  }


  const playerPage =
    document.getElementById(
      "playerPage"
    );


  if (playerPage) {

    playerPage.classList.add(
      "hidden"
    );

  }


  /*
    العنوان
  */

  const title =
    document.getElementById(
      "animeTitle"
    );


  if (title) {

    title.textContent =
      anime.titleArabic ||
      anime.title;

  }


  /*
    الوصف
  */

  const description =
    document.getElementById(
      "animeDescription"
    );


  if (description) {

    description.textContent =
      anime.description;

  }


  /*
    الصورة
  */

  const cover =
    document.querySelector(
      ".detail-cover"
    );


  if (cover) {

    cover.innerHTML = `

      <img
        src="${anime.image}"
        alt="${anime.title}"
        onerror="
          this.style.display='none';
          this.parentElement.classList.add('image-error');
        "
      >

      <div class="fallback-cover">
        ${anime.titleArabic || anime.title}
      </div>

    `;

  }


  /*
    التصنيفات
  */

  renderGenres(anime);


  /*
    الحلقات
  */

  renderEpisodes(anime);


  /*
    زر قائمتي
  */

  updateFavoriteButton();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   التصنيفات
========================================================= */

function renderGenres(anime) {

  const tags =
    document.querySelector(
      ".tags"
    );


  if (!tags) return;


  tags.innerHTML =
    anime.genre
      .map(
        genre =>
          `<span>${genre}</span>`
      )
      .join("");

}


/* =========================================================
   عرض الحلقات
========================================================= */

function renderEpisodes(anime) {

  const list =
    document.getElementById(
      "episodeList"
    );


  if (!list) return;


  if (
    !anime.episodes ||
    anime.episodes.length === 0
  ) {

    list.innerHTML = `

      <p class="empty-message">
        لا توجد حلقات متاحة حاليًا.
      </p>

    `;

    return;

  }


  list.innerHTML =
    anime.episodes
      .map(
        episode => `

          <div
            class="episode"
            onclick="
              playEpisode(
                '${anime.id}',
                ${episode.number}
              )
            "
          >

            <div class="episode-number">
              ${episode.number}
            </div>

            <div class="episode-info">

              <strong>
                الحلقة
                ${episode.number}
                — ${episode.title}
              </strong>

              <small>
                ${episode.description}
              </small>

            </div>

            <span>
              ▶
            </span>

          </div>

        `
      )
      .join("");

}


/* =========================================================
   تشغيل الحلقة
========================================================= */

function playEpisode(
  animeId,
  episodeNumber
) {

  const anime =
    animeData[animeId];


  if (!anime) return;


  const episode =
    anime.episodes.find(
      item =>
        item.number ===
        episodeNumber
    );


  if (!episode) return;


  currentAnime =
    animeId;


  const animePage =
    document.getElementById(
      "animePage"
    );


  const playerPage =
    document.getElementById(
      "playerPage"
    );


  const video =
    document.getElementById(
      "videoPlayer"
    );


  /*
    إخفاء صفحة التفاصيل
  */

  if (animePage) {

    animePage.classList.add(
      "hidden"
    );

  }


  /*
    إظهار المشغل
  */

  if (playerPage) {

    playerPage.classList.remove(
      "hidden"
    );

  }


  /*
    عنوان الحلقة
  */

  const playerTitle =
    document.getElementById(
      "playerTitle"
    );


  if (playerTitle) {

    playerTitle.textContent =
      `${anime.titleArabic || anime.title}
       - الحلقة ${episode.number}`;

  }


  /*
    الفيديو
  */

  if (
    episode.video &&
    episode.video.trim() !== ""
  ) {

    if (video) {

      video.src =
        episode.video;

      video.load();

      video.play().catch(
        function () {
          /*
            بعض المتصفحات تمنع
            التشغيل التلقائي.
          */
        }
      );

    }

  } else {

    if (video) {

      video.pause();

      video.removeAttribute(
        "src"
      );

      video.load();

    }


    showMessage(
      "الفيديو غير مضاف لهذه الحلقة بعد."
    );

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   إغلاق صفحة الأنمي
========================================================= */

function closeAnime() {

  const animePage =
    document.getElementById(
      "animePage"
    );


  if (animePage) {

    animePage.classList.add(
      "hidden"
    );

  }


  showHomeSections();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   إغلاق المشغل
========================================================= */

function closePlayer() {

  const video =
    document.getElementById(
      "videoPlayer"
    );


  if (video) {

    video.pause();

    video.removeAttribute(
      "src"
    );

    video.load();

  }


  const playerPage =
    document.getElementById(
      "playerPage"
    );


  if (playerPage) {

    playerPage.classList.add(
      "hidden"
    );

  }


  if (currentAnime) {

    const animePage =
      document.getElementById(
        "animePage"
      );


    if (animePage) {

      animePage.classList.remove(
        "hidden"
      );

    }

  } else {

    goHome();

  }

}


/* =========================================================
   إظهار الأقسام الرئيسية
========================================================= */

function showHomeSections() {

  document.querySelectorAll(
    "main > section"
  ).forEach(
    function (section) {

      if (
        !section.classList.contains(
          "anime-page"
        ) &&
        !section.classList.contains(
          "player-page"
        ) &&
        !section.classList.contains(
          "my-list-page"
        )
      ) {

        section.classList.remove(
          "hidden"
        );

      }

    }
  );

}


/* =========================================================
   الرئيسية
========================================================= */

function goHome() {

  const animePage =
    document.getElementById(
      "animePage"
    );


  const playerPage =
    document.getElementById(
      "playerPage"
    );


  const myListPage =
    document.getElementById(
      "myListPage"
    );


  if (animePage) {

    animePage.classList.add(
      "hidden"
    );

  }


  if (playerPage) {

    playerPage.classList.add(
      "hidden"
    );

  }


  if (myListPage) {

    myListPage.classList.add(
      "hidden"
    );

  }


  showHomeSections();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   البحث
========================================================= */

function focusSearch() {

  goHome();


  const input =
    document.getElementById(
      "searchInput"
    );


  if (input) {

    input.focus();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

}


/* =========================================================
   قائمتي
========================================================= */

function toggleFavorite() {

  if (!currentAnime) {

    showMessage(
      "افتح أنمي أولًا."
    );

    return;

  }


  if (
    favoriteList.includes(
      currentAnime
    )
  ) {

    favoriteList =
      favoriteList.filter(
        id =>
          id !== currentAnime
      );


    showMessage(
      "تمت إزالة الأنمي من قائمتك."
    );

  } else {

    favoriteList.push(
      currentAnime
    );


    showMessage(
      "تمت إضافة الأنمي إلى قائمتك ❤️"
    );

  }


  localStorage.setItem(
    "favoriteAnime",
    JSON.stringify(
      favoriteList
    )
  );


  updateFavoriteButton();

}


/* =========================================================
   تحديث زر قائمتي
========================================================= */

function updateFavoriteButton() {

  const button =
    document.getElementById(
      "favoriteBtn"
    );


  if (!button) return;


  if (!currentAnime) {

    button.textContent =
      "♡ أضف إلى قائمتي";

    return;

  }


  const isFavorite =
    favoriteList.includes(
      currentAnime
    );


  button.textContent =
    isFavorite
      ? "♥ في قائمتي"
      : "♡ أضف إلى قائمتي";

}


/* =========================================================
   عرض قائمتي
========================================================= */

function showMyList() {

  /*
    إخفاء الصفحات
  */

  document.querySelectorAll(
    "main > section"
  ).forEach(
    function (section) {

      section.classList.add(
        "hidden"
      );

    }
  );


  const myListPage =
    document.getElementById(
      "myListPage"
    );


  if (myListPage) {

    myListPage.classList.remove(
      "hidden"
    );

  }


  const content =
    document.getElementById(
      "myListContent"
    );


  if (!content) return;


  /*
    القائمة فارغة
  */

  if (
    favoriteList.length === 0
  ) {

    content.innerHTML = `

      <div class="empty-message">

        <div style="font-size:50px;">
          ♡
        </div>

        <p>
          قائمتك فارغة حاليًا.
        </p>

        <button
          onclick="goHome()"
        >
          اكتشف الأنميات
        </button>

      </div>

    `;

    return;

  }


  /*
    عرض المفضلة
  */

  content.innerHTML =
    favoriteList
      .map(
        function (id) {

          const anime =
            animeData[id];


          if (!anime) return "";


          return createAnimeCard(
            anime
          );

        }
      )
      .join("");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   إغلاق قائمتي
========================================================= */

function closeMyList() {

  const page =
    document.getElementById(
      "myListPage"
    );


  if (page) {

    page.classList.add(
      "hidden"
    );

  }


  showHomeSections();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   رسالة صغيرة للمستخدم
========================================================= */

function showMessage(text) {

  const message =
    document.getElementById(
      "message"
    );


  if (!message) {

    alert(text);

    return;

  }


  message.textContent =
    text;


  message.classList.add(
    "show"
  );


  clearTimeout(
    window.messageTimer
  );


  window.messageTimer =
    setTimeout(
      function () {

        message.classList.remove(
          "show"
        );

      },
      2200
    );

}


/* =========================================================
   زر شاهد الآن
========================================================= */

function watchNow() {

  openAnime("gang");

}


/* =========================================================
   أزرار الصفحة الرئيسية
========================================================= */

function showPopular() {

  goHome();

  const section =
    document.getElementById(
      "animeGrid"
    );


  if (section) {

    section.scrollIntoView({
      behavior: "smooth"
    });

  }

}


function showNewAnime() {

  goHome();

  const section =
    document.getElementById(
      "newGrid"
    );


  if (section) {

    section.scrollIntoView({
      behavior: "smooth"
    });

  }

}


function showPublicDomain() {

  goHome();

  const section =
    document.getElementById(
      "newGrid"
    );


  if (section) {

    section.scrollIntoView({
      behavior: "smooth"
    });

  }

}


/* =========================================================
   التصنيفات
========================================================= */

function showCategories() {

  showMessage(
    "التصنيفات ستكون متاحة قريبًا."
  );

}


/* =========================================================
   الحساب
========================================================= */

function showAccount() {

  showMessage(
    "قسم الحساب سيكون متاحًا قريبًا."
  );

}


/* =========================================================
   توافق أسماء الدوال القديمة
========================================================= */

function myList() {

  showMyList();

}
