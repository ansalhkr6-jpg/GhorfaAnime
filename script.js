/* =====================================================
   غرفة الأنمي - script.js
   ===================================================== */


/* =====================================================
   بيانات الأنميات
   ===================================================== */

const animeList = [

  /* =========================
     Gang
  ========================= */

  {
    id: "gang",
    title: "Gang",
    description: "بداية قصة Gang وظهور النظام الغامض.",
    category: "أكشن",
    section: "popular",

    episodes: [

      {
        number: 1,
        title: "البداية",

        servers: [
          {
            name: "YouTube",
            type: "youtube",
            videoId: "_CLEPlpV85w"
          }
        ]
      },

      {
        number: 2,
        title: "ظهور النظام",

        servers: [
          {
            name: "YouTube",
            type: "youtube",
            videoId: ""
          }
        ]
      }

    ]
  },


  /* =========================
     Shadow System
  ========================= */

  {
    id: "shadow",
    title: "Shadow System",
    description: "نظام غامض يغير حياة البطل.",
    category: "غموض",
    section: "popular",

    episodes: [

      {
        number: 1,
        title: "ظهور النظام",

        servers: [
          {
            name: "YouTube",
            type: "youtube",
            videoId: ""
          }
        ]
      },

      {
        number: 2,
        title: "القوة الجديدة",

        servers: [
          {
            name: "YouTube",
            type: "youtube",
            videoId: ""
          }
        ]
      }

    ]
  },


  /* =========================
     Solo Leveling
  ========================= */

  {
    id: "solo-leveling",
    title: "Solo Leveling",
    description:
      "سون جينوو يبدأ رحلته من أضعف صياد إلى أقوى صياد.",
    category: "أكشن",
    section: "popular",

    episodes: [

      {
        number: 1,
        title: "أنا معتاد على هذا",

        servers: [
          {
            name: "المصدر الرسمي",
            type: "external",
            url:
              "https://www.crunchyroll.com/ar/series/GDKHZEJ0K/solo-leveling"
          }
        ]
      },

      {
        number: 2,
        title: "لو كانت لدي فرصة أخرى",

        servers: [
          {
            name: "المصدر الرسمي",
            type: "external",
            url:
              "https://www.crunchyroll.com/ar/series/GDKHZEJ0K/solo-leveling"
          }
        ]
      },

      {
        number: 3,
        title: "إنها تشبه اللعبة",

        servers: [
          {
            name: "المصدر الرسمي",
            type: "external",
            url:
              "https://www.crunchyroll.com/ar/series/GDKHZEJ0K/solo-leveling"
          }
        ]
      },

      {
        number: 4,
        title: "يجب أن أصبح أقوى",

        servers: [
          {
            name: "المصدر الرسمي",
            type: "external",
            url:
              "https://www.crunchyroll.com/ar/series/GDKHZEJ0K/solo-leveling"
          }
        ]
      },

      {
        number: 5,
        title: "صفقة جيدة جدًا",

        servers: [
          {
            name: "المصدر الرسمي",
            type: "external",
            url:
              "https://www.crunchyroll.com/ar/series/GDKHZEJ0K/solo-leveling"
          }
        ]
      },

      {
        number: 6,
        title: "الصيد الحقيقي يبدأ",

        servers: [
          {
            name: "المصدر الرسمي",
            type: "external",
            url:
              "https://www.crunchyroll.com/ar/series/GDKHZEJ0K/solo-leveling"
          }
        ]
      },

      {
        number: 7,
        title: "لنرَ إلى أي حد يمكنني الوصول",

        servers: [
          {
            name: "المصدر الرسمي",
            type: "external",
            url:
              "https://www.crunchyroll.com/ar/series/GDKHZEJ0K/solo-leveling"
          }
        ]
      },

      {
        number: 8,
        title: "هذا محبط",

        servers: [
          {
            name: "المصدر الرسمي",
            type: "external",
            url:
              "https://www.crunchyroll.com/ar/series/GDKHZEJ0K/solo-leveling"
          }
        ]
      },

      {
        number: 9,
        title: "كنت تخفي مهاراتك",

        servers: [
          {
            name: "المصدر الرسمي",
            type: "external",
            url:
              "https://www.crunchyroll.com/ar/series/GDKHZEJ0K/solo-leveling"
          }
        ]
      },

      {
        number: 10,
        title: "هل هذه نزهة؟",

        servers: [
          {
            name: "المصدر الرسمي",
            type: "external",
            url:
              "https://www.crunchyroll.com/ar/series/GDKHZEJ0K/solo-leveling"
          }
        ]
      },

      {
        number: 11,
        title: "فارس يحمي عرشًا فارغًا",

        servers: [
          {
            name: "المصدر الرسمي",
            type: "external",
            url:
              "https://www.crunchyroll.com/ar/series/GDKHZEJ0K/solo-leveling"
          }
        ]
      },

      {
        number: 12,
        title: "انهض",

        servers: [
          {
            name: "المصدر الرسمي",
            type: "external",
            url:
              "https://www.crunchyroll.com/ar/series/GDKHZEJ0K/solo-leveling"
          }
        ]
      }

    ]
  },


  /* =========================
     Anime Room Original
  ========================= */

  {
    id: "anime3",
    title: "Anime Room Original",
    description: "عمل تجريبي داخل غرفة الأنمي.",
    category: "فانتازيا",
    section: "new",

    episodes: [

      {
        number: 1,
        title: "البداية",

        servers: [
          {
            name: "YouTube",
            type: "youtube",
            videoId: ""
          }
        ]
      }

    ]
  },


  /* =========================
     Mystery World
  ========================= */

  {
    id: "anime4",
    title: "Mystery World",
    description: "عالم غامض مليء بالأسرار.",
    category: "غموض",
    section: "new",

    episodes: [

      {
        number: 1,
        title: "الباب الغامض",

        servers: [
          {
            name: "YouTube",
            type: "youtube",
            videoId: ""
          }
        ]
      }

    ]
  }

];


/* =====================================================
   قائمة المستخدم
   ===================================================== */

let myListData = [];

try {

  myListData =
    JSON.parse(
      localStorage.getItem("ghorfaAnimeList") || "[]"
    );

  if (!Array.isArray(myListData)) {
    myListData = [];
  }

} catch (error) {

  myListData = [];

}


/* =====================================================
   عناصر الصفحة
   ===================================================== */

const animeGrid =
  document.getElementById("animeGrid");

const newGrid =
  document.getElementById("newGrid");

const myListGrid =
  document.getElementById("myListGrid");

const searchInput =
  document.getElementById("searchInput");

const playerSection =
  document.getElementById("playerSection");

const videoPlayer =
  document.getElementById("videoPlayer");

const serverContainer =
  document.getElementById("serverContainer");

const playerAnime =
  document.getElementById("playerAnime");

const playerTitle =
  document.getElementById("playerTitle");


/* =====================================================
   بدء التطبيق
   ===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderAll();

  }
);


/* =====================================================
   عرض كل الأقسام
   ===================================================== */

function renderAll() {

  renderPopular(animeList);

  renderNew(animeList);

  renderMyList();

}


/* =====================================================
   إنشاء بطاقة الأنمي
   ===================================================== */

function createAnimeCard(anime) {

  const inList =
    myListData.includes(anime.id);


  return `

    <article class="anime-card">

      <div class="anime-cover">

        <div>

          <strong>
            ${escapeHTML(anime.title)}
          </strong>

          <small>
            ${escapeHTML(anime.category)}
          </small>

        </div>

      </div>


      <div class="anime-info">

        <h3>
          ${escapeHTML(anime.title)}
        </h3>

        <p>
          ${escapeHTML(anime.description)}
        </p>


        <button
          class="watch-btn"
          onclick="openAnime('${anime.id}')">

          ▶ الحلقات

        </button>


        <button
          class="list-btn"
          onclick="toggleMyList('${anime.id}')">

          ${
            inList
              ? "♥ في قائمتي"
              : "♡ أضف لقائمتي"
          }

        </button>

      </div>

    </article>

  `;
}


/* =====================================================
   الأكثر مشاهدة
   ===================================================== */

function renderPopular(list) {

  if (!animeGrid) {
    return;
  }


  const items =
    list.filter(
      anime =>
        anime.section === "popular"
    );


  animeGrid.innerHTML =
    items.length > 0

      ? items
          .map(createAnimeCard)
          .join("")

      : `
          <div class="empty">
            لا توجد نتائج
          </div>
        `;
}


/* =====================================================
   الأنميات الجديدة
   ===================================================== */

function renderNew(list) {

  if (!newGrid) {
    return;
  }


  const items =
    list.filter(
      anime =>
        anime.section === "new"
    );


  newGrid.innerHTML =
    items.length > 0

      ? items
          .map(createAnimeCard)
          .join("")

      : `
          <div class="empty">
            لا توجد نتائج
          </div>
        `;
}


/* =====================================================
   فتح الأنمي
   ===================================================== */

function openAnime(animeId) {

  const anime =
    animeList.find(
      item =>
        item.id === animeId
    );


  if (!anime) {

    showMessage(
      "الأنمي غير موجود"
    );

    return;
  }


  if (!playerSection) {
    return;
  }


  playerAnime.textContent =
    anime.title;

  playerTitle.textContent =
    "اختر الحلقة";


  videoPlayer.innerHTML = `
    <div class="player-placeholder">
      اختر الحلقة التي تريد مشاهدتها
    </div>
  `;


  serverContainer.innerHTML = "";


  anime.episodes.forEach(
    function (episode) {

      const button =
        document.createElement("button");


      button.className =
        "server-btn";


      button.textContent =
        "▶ الحلقة " +
        episode.number;


      button.onclick =
        function () {

          showEpisode(
            anime,
            episode
          );

        };


      serverContainer.appendChild(
        button
      );

    }
  );


  playerSection.classList.remove(
    "hidden"
  );


  playerSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


/* =====================================================
   عرض الحلقة
   ===================================================== */

function showEpisode(
  anime,
  episode
) {

  playerAnime.textContent =
    anime.title;

  playerTitle.textContent =
    "الحلقة " +
    episode.number +
    " — " +
    episode.title;


  serverContainer.innerHTML = "";


  if (
    !episode.servers ||
    episode.servers.length === 0
  ) {

    videoPlayer.innerHTML = `
      <div class="player-placeholder">
        لا يوجد سيرفر متاح لهذه الحلقة.
      </div>
    `;

    return;
  }


  episode.servers.forEach(
    function (server, index) {

      const button =
        document.createElement("button");


      button.className =
        "server-btn";


      if (index === 0) {

        button.classList.add(
          "active"
        );

      }


      button.textContent =
        "▶ " +
        server.name;


      button.onclick =
        function () {

          document
            .querySelectorAll(
              "#serverContainer .server-btn"
            )
            .forEach(
              function (btn) {

                btn.classList.remove(
                  "active"
                );

              }
            );


          button.classList.add(
            "active"
          );


          loadServer(
            server
          );

        };


      serverContainer.appendChild(
        button
      );

    }
  );


  loadServer(
    episode.servers[0]
  );


  /* حفظ آخر مشاهدة */

  localStorage.setItem(
    "lastAnime",
    anime.id
  );

  localStorage.setItem(
    "lastEpisode",
    String(episode.number)
  );

}


/* =====================================================
   تحميل السيرفر
   ===================================================== */

function loadServer(server) {

  if (!server) {

    showMessage(
      "السيرفر غير متاح"
    );

    return;
  }


  /* =========================
     YouTube
     ========================= */

  if (
    server.type === "youtube"
  ) {

    if (!server.videoId) {

      videoPlayer.innerHTML = `
        <div class="player-placeholder">
          لا يوجد فيديو مرتبط بهذه الحلقة.
        </div>
      `;

      return;
    }


    const youtubeUrl =
      "https://www.youtube.com/watch?v=" +
      encodeURIComponent(
        server.videoId
      );


    videoPlayer.innerHTML = `

      <div
        class="player-placeholder"
        style="
          display:flex;
          flex-direction:column;
          gap:15px;
          text-align:center;
          padding:20px;
        "
      >

        <div style="font-size:45px;">
          ▶️
        </div>

        <div>
          فيديو متاح على YouTube
        </div>

        <button
          onclick="window.open(
            '${youtubeUrl}',
            '_blank'
          )"

          style="
            background:#b747dc;
            color:white;
            border:0;
            border-radius:10px;
            padding:12px 22px;
            cursor:pointer;
            font-weight:bold;
          "
        >

          ▶ مشاهدة على YouTube

        </button>

      </div>

    `;

    return;
  }


  /* =========================
     مصدر رسمي خارجي
     ========================= */

  if (
    server.type === "external"
  ) {

    if (!server.url) {

      videoPlayer.innerHTML = `
        <div class="player-placeholder">
          الرابط غير متاح.
        </div>
      `;

      return;
    }


    videoPlayer.innerHTML = `

      <div
        class="player-placeholder"
        style="
          display:flex;
          flex-direction:column;
          gap:15px;
          text-align:center;
          padding:20px;
        "
      >

        <div style="font-size:45px;">
          ▶️
        </div>

        <div>
          الحلقة متاحة على المصدر الرسمي
        </div>

        <button
          onclick="window.open(
            '${server.url}',
            '_blank'
          )"

          style="
            background:#b747dc;
            color:white;
            border:0;
            border-radius:10px;
            padding:12px 22px;
            cursor:pointer;
            font-weight:bold;
          "
        >

          ▶ مشاهدة الحلقة رسميًا

        </button>

      </div>

    `;

    return;
  }


  /* =========================
     نوع غير معروف
     ========================= */

  videoPlayer.innerHTML = `

    <div class="player-placeholder">

      نوع السيرفر غير مدعوم.

    </div>

  `;

}


/* =====================================================
   البحث
   ===================================================== */

if (searchInput) {

  searchInput.addEventListener(
    "input",
    function () {

      const query =
        this.value
          .trim()
          .toLowerCase();


      if (!query) {

        renderPopular(
          animeList
        );

        renderNew(
          animeList
        );

        return;
      }


      const results =
        animeList.filter(
          function (anime) {

            const title =
              anime.title.toLowerCase();

            const description =
              anime.description.toLowerCase();

            const category =
              anime.category.toLowerCase();


            return (

              title.includes(query)

              ||

              description.includes(query)

              ||

              category.includes(query)

            );

          }
        );


      renderPopular(
        results
      );

      renderNew(
        results
      );

    }
  );

}


/* =====================================================
   التصنيفات
   ===================================================== */

function filterCategory(
  category
) {

  const results =
    animeList.filter(
      anime =>
        anime.category === category
    );


  renderPopular(
    results
  );

  renderNew(
    results
  );


  const popular =
    document.getElementById(
      "popular"
    );


  if (popular) {

    popular.scrollIntoView({
      behavior: "smooth"
    });

  }

}


/* =====================================================
   قائمتي
   ===================================================== */

function toggleMyList(
  animeId
) {

  const index =
    myListData.indexOf(
      animeId
    );


  if (index === -1) {

    myListData.push(
      animeId
    );

    showMessage(
      "تمت الإضافة إلى قائمتك ♥"
    );

  } else {

    myListData.splice(
      index,
      1
    );

    showMessage(
      "تمت الإزالة من قائمتك"
    );

  }


  localStorage.setItem(
    "ghorfaAnimeList",
    JSON.stringify(
      myListData
    )
  );


  renderAll();

}


/* =====================================================
   عرض قائمتي
   ===================================================== */

function renderMyList() {

  if (!myListGrid) {
    return;
  }


  const items =
    animeList.filter(
      anime =>
        myListData.includes(
          anime.id
        )
    );


  if (!items.length) {

    myListGrid.innerHTML = `
      <div class="empty">
        قائمتك فارغة حاليًا ♡
      </div>
    `;

    return;
  }


  myListGrid.innerHTML =
    items
      .map(createAnimeCard)
      .join("");

}


/* =====================================================
   إظهار قائمتي
   ===================================================== */

function showMyList() {

  const section =
    document.getElementById(
      "myListSection"
    );


  if (!section) {
    return;
  }


  section.style.display =
    "block";


  section.scrollIntoView({
    behavior: "smooth"
  });

}


/* =====================================================
   إغلاق المشغل
   ===================================================== */

function closePlayer() {

  if (!playerSection) {
    return;
  }


  playerSection.classList.add(
    "hidden"
  );


  videoPlayer.innerHTML = `
    <div class="player-placeholder">
      اختر حلقة للمشاهدة
    </div>
  `;


  serverContainer.innerHTML =
    "";

}


/* =====================================================
   الرئيسية
   ===================================================== */

function goHome() {

  const myListSection =
    document.getElementById(
      "myListSection"
    );


  if (myListSection) {

    myListSection.style.display =
      "none";

  }


  closePlayer();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =====================================================
   زر شاهد الآن
   ===================================================== */

function scrollToAnime() {

  const popular =
    document.getElementById(
      "popular"
    );


  if (popular) {

    popular.scrollIntoView({
      behavior: "smooth"
    });

  }

}


/* =====================================================
   الانتقال إلى قسم
   ===================================================== */

function showSection(id) {

  const section =
    document.getElementById(id);


  if (section) {

    section.scrollIntoView({
      behavior: "smooth"
    });

  }

}


/* =====================================================
   البحث
   ===================================================== */

function focusSearch() {

  if (!searchInput) {
    return;
  }


  searchInput.focus();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =====================================================
   أكمل المشاهدة
   ===================================================== */

function continueWatching() {

  const animeId =
    localStorage.getItem(
      "lastAnime"
    );


  const episodeNumber =
    Number(
      localStorage.getItem(
        "lastEpisode"
      )
    );


  if (!animeId) {

    showMessage(
      "لم تبدأ مشاهدة أي حلقة بعد"
    );

    return;
  }


  const anime =
    animeList.find(
      item =>
        item.id === animeId
    );


  if (!anime) {
    return;
  }


  const episode =
    anime.episodes.find(
      item =>
        item.number === episodeNumber
    );


  if (!episode) {
    return;
  }


  openAnime(
    anime.id
  );


  setTimeout(
    function () {

      showEpisode(
        anime,
        episode
      );

    },
    150
  );

}


/* =====================================================
   الرسائل
   ===================================================== */

function showMessage(
  text
) {

  const message =
    document.getElementById(
      "message"
    );


  if (!message) {
    return;
  }


  message.textContent =
    text;


  message.style.display =
    "block";


  clearTimeout(
    window.messageTimer
  );


  window.messageTimer =
    setTimeout(
      function () {

        message.style.display =
          "none";

      },
      2200
    );

}


/* =====================================================
   حماية النصوص
   ===================================================== */

function escapeHTML(
  text
) {

  return String(text)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}
