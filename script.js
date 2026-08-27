```javascript
/* =====================================================
   غرفة الأنمي
   Anime Room
   ===================================================== */


/* =====================================================
   الأنميات
   ===================================================== */

const animeList = [

  {
    id: "gang",

    title: "Gang",

    description:
      "بداية قصة Gang وظهور النظام الغامض.",

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

            /*
              فيديو اختبار.
              يجب أن يكون الفيديو نفسه يسمح بالتضمين.
            */

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


  {
    id: "shadow",

    title: "Shadow System",

    description:
      "نظام غامض يغير حياة البطل.",

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


  {
    id: "anime3",

    title: "Anime Room Original",

    description:
      "عمل تجريبي داخل غرفة الأنمي.",

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


  {
    id: "anime4",

    title: "Mystery World",

    description:
      "عالم غامض مليء بالأسرار.",

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
      localStorage.getItem(
        "ghorfaAnimeList"
      ) || "[]"
    );

} catch {

  myListData = [];

}


/* =====================================================
   عناصر الصفحة
===================================================== */

const animeGrid =
  document.getElementById(
    "animeGrid"
  );

const newGrid =
  document.getElementById(
    "newGrid"
  );

const myListGrid =
  document.getElementById(
    "myListGrid"
  );

const searchInput =
  document.getElementById(
    "searchInput"
  );

const playerSection =
  document.getElementById(
    "playerSection"
  );

const videoPlayer =
  document.getElementById(
    "videoPlayer"
  );

const serverContainer =
  document.getElementById(
    "serverContainer"
  );

const playerAnime =
  document.getElementById(
    "playerAnime"
  );

const playerTitle =
  document.getElementById(
    "playerTitle"
  );


/* =====================================================
   تشغيل
===================================================== */

renderAll();


/* =====================================================
   عرض كل شيء
===================================================== */

function renderAll() {

  renderPopular(animeList);

  renderNew(animeList);

  renderMyList();

}


/* =====================================================
   بطاقة الأنمي
===================================================== */

function createAnimeCard(anime) {

  const inList =
    myListData.includes(
      anime.id
    );


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

          ${inList
            ? "♥ في قائمتي"
            : "♡ أضف لقائمتي"}

        </button>

      </div>

    </article>

  `;
}


/* =====================================================
   الأكثر مشاهدة
===================================================== */

function renderPopular(list) {

  const items =
    list.filter(
      anime =>
        anime.section === "popular"
    );


  animeGrid.innerHTML =
    items.length

      ? items
          .map(createAnimeCard)
          .join("")

      : `<div class="empty">
           لا توجد نتائج
         </div>`;
}


/* =====================================================
   الجديد
===================================================== */

function renderNew(list) {

  const items =
    list.filter(
      anime =>
        anime.section === "new"
    );


  newGrid.innerHTML =
    items.length

      ? items
          .map(createAnimeCard)
          .join("")

      : `<div class="empty">
           لا توجد نتائج
         </div>`;
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


  /*
    إنشاء أزرار الحلقات
  */

  anime.episodes.forEach(
    episode => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "server-btn";

      button.textContent =
        `▶ الحلقة ${episode.number}`;


      button.onclick =
        function() {

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
   تشغيل الحلقة
===================================================== */

function showEpisode(
  anime,
  episode
) {

  playerAnime.textContent =
    anime.title;

  playerTitle.textContent =
    `الحلقة ${episode.number} — ${episode.title}`;


  serverContainer.innerHTML = "";


  /*
    إنشاء السيرفرات
  */

  episode.servers.forEach(
    (server, index) => {

      const button =
        document.createElement(
          "button"
        );

      button.className =
        "server-btn";


      if (index === 0) {

        button.classList.add(
          "active"
        );

      }


      button.textContent =
        `▶ ${server.name}`;


      button.onclick =
        function() {

          document
            .querySelectorAll(
              "#serverContainer .server-btn"
            )
            .forEach(
              btn =>
                btn.classList.remove(
                  "active"
                )
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


  /*
    تشغيل أول سيرفر
  */

  if (
    episode.servers &&
    episode.servers.length
  ) {

    loadServer(
      episode.servers[0]
    );

  }


  /*
    حفظ آخر مشاهدة
  */

  localStorage.setItem(
    "lastAnime",
    anime.id
  );

  localStorage.setItem(
    "lastEpisode",
    String(
      episode.number
    )
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


  /* YouTube */

  if (
    server.type === "youtube"
  ) {

    if (!server.videoId) {

      videoPlayer.innerHTML = `

        <div class="player-placeholder">

          هذه الحلقة لم يتم ربطها بفيديو
          متاح للتضمين بعد.

        </div>

      `;

      return;
    }


    videoPlayer.innerHTML = `

      <iframe

        src="https://www.youtube.com/embed/${encodeURIComponent(
          server.videoId
        )}"

        title="غرفة الأنمي"

        allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share
        "

        referrerpolicy="strict-origin-when-cross-origin"

        allowfullscreen>

      </iframe>

    `;

    return;
  }


  videoPlayer.innerHTML = `

    <div class="player-placeholder">

      نوع السيرفر غير مدعوم

    </div>

  `;

}


/* =====================================================
   البحث
===================================================== */

searchInput.addEventListener(
  "input",
  function() {

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
        anime => {

          const title =
            anime.title
              .toLowerCase();

          const description =
            anime.description
              .toLowerCase();

          const category =
            anime.category
              .toLowerCase();


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


  document
    .getElementById(
      "popular"
    )
    .scrollIntoView({
      behavior: "smooth"
    });

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
   فتح قائمتي
===================================================== */

function showMyList() {

  document
    .getElementById(
      "myListSection"
    )
    .style.display =
      "block";


  document
    .getElementById(
      "myListSection"
    )
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =====================================================
   إغلاق المشغل
===================================================== */

function closePlayer() {

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

  document
    .getElementById(
      "myListSection"
    )
    .style.display =
      "none";


  closePlayer();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function scrollToAnime() {

  document
    .getElementById(
      "popular"
    )
    .scrollIntoView({
      behavior: "smooth"
    });

}


function showSection(
  id
) {

  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: "smooth"
    });

}


function focusSearch() {

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


  if (!anime) return;


  const episode =
    anime.episodes.find(
      item =>
        item.number === episodeNumber
    );


  if (!episode) return;


  openAnime(
    anime.id
  );


  setTimeout(
    function() {

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


  message.textContent =
    text;

  message.style.display =
    "block";


  clearTimeout(
    window.messageTimer
  );


  window.messageTimer =
    setTimeout(
      function() {

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
