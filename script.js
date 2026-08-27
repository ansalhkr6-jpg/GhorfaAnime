```javascript
/* =====================================================
   غرفة الأنمي
   Anime Room
   ===================================================== */


/* =====================================================
   بيانات الأنميات
   ===================================================== */

const animeList = [

  {
    id: "gang",
    title: "Gang",
    description: "قصة Gang وبداية ظهور النظام.",
    image: "icon-512.png",
    category: "popular",

    episodes: [

      {
        number: 1,
        title: "البداية",

        servers: [

          {
            name: "YouTube",
            type: "youtube",

            /*
              هذا رابط اختبار من YouTube.
              يجب أن يكون الفيديو مسموحًا بتضمينه.
            */

            videoId: "_CLEPlpV85w"
          }

        ]
      }

    ]
  },


  {
    id: "shadow",
    title: "Shadow System",
    description: "نظام غامض يظهر في عالم مليء بالأسرار.",
    image: "icon-512.png",
    category: "popular",

    episodes: [

      {
        number: 1,
        title: "ظهور النظام",

        servers: [

          {
            name: "YouTube",
            type: "youtube",

            /*
              ضع هنا VIDEO ID لفيديو
              يسمح صاحبه بالتضمين.
            */

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

let myListData =
  JSON.parse(
    localStorage.getItem("ghorfaAnimeList") || "[]"
  );


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
   تشغيل الصفحة
   ===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderAnime();

    renderNewAnime();

    renderMyList();

  }
);


/* =====================================================
   إنشاء بطاقة الأنمي
   ===================================================== */

function createAnimeCard(anime) {

  const isInList =
    myListData.includes(anime.id);

  return `

    <article class="anime-card">

      <img
        class="anime-image"
        src="${anime.image}"
        alt="${anime.title}"
        loading="lazy"
      >

      <div class="anime-info">

        <h3>
          ${anime.title}
        </h3>

        <p>
          ${anime.description}
        </p>

        <button
          class="watch-btn"
          onclick="openAnime('${anime.id}')"
        >
          ▶ الحلقات
        </button>

        <button
          class="list-btn"
          onclick="toggleMyList('${anime.id}')"
        >
          ${isInList ? "♥ في قائمتي" : "♡ أضف لقائمتي"}
        </button>

      </div>

    </article>

  `;
}


/* =====================================================
   عرض الأنميات
   ===================================================== */

function renderAnime(list = animeList) {

  const popular =
    list.filter(
      anime =>
        anime.category === "popular"
    );

  animeGrid.innerHTML =
    popular.length
      ? popular.map(createAnimeCard).join("")
      : `<div class="empty">لا توجد نتائج</div>`;

}


function renderNewAnime(list = animeList) {

  const newest =
    list.filter(
      anime =>
        anime.category === "new"
    );

  newGrid.innerHTML =
    newest.length
      ? newest.map(createAnimeCard).join("")
      : `<div class="empty">لا توجد أنميات جديدة حاليًا</div>`;

}


/* =====================================================
   فتح قائمة الحلقات
   ===================================================== */

function openAnime(animeId) {

  const anime =
    animeList.find(
      item =>
        item.id === animeId
    );

  if (!anime) return;


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


  playerSection.classList.remove(
    "hidden"
  );


  /*
    إنشاء أزرار الحلقات
  */

  anime.episodes.forEach(
    episode => {

      const button =
        document.createElement("button");

      button.className =
        "server-btn";

      button.textContent =
        `الحلقة ${episode.number}`;

      button.onclick =
        () => {

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

  playerTitle.textContent =
    `الحلقة ${episode.number} — ${episode.title}`;


  serverContainer.innerHTML = "";


  /*
    إنشاء أزرار السيرفرات
  */

  episode.servers.forEach(
    (server, index) => {

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
        `▶ ${server.name}`;


      button.onclick =
        () => {

          document
            .querySelectorAll(
              ".server-btn"
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
    تشغيل السيرفر الأول
  */

  if (episode.servers.length > 0) {

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
    episode.number
  );

}


/* =====================================================
   تحميل السيرفر
   ===================================================== */

function loadServer(server) {

  if (
    !server ||
    !server.type
  ) {

    showMessage(
      "السيرفر غير متاح"
    );

    return;

  }


  /* YouTube Embed */

  if (
    server.type === "youtube"
  ) {

    if (!server.videoId) {

      videoPlayer.innerHTML = `
        <div class="player-placeholder">
          لا يوجد فيديو مرتبط بهذه الحلقة حاليًا
        </div>
      `;

      return;

    }


    /*
      مشغل YouTube الرسمي
    */

    videoPlayer.innerHTML = `

      <iframe

        src="https://www.youtube.com/embed/${encodeURIComponent(server.videoId)}"

        title="مشغل غرفة الأنمي"

        loading="lazy"

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


  /*
    يمكن إضافة أنواع رسمية أخرى مستقبلًا
    إذا كانت المنصة توفر Embed رسميًا.
  */

  videoPlayer.innerHTML = `
    <div class="player-placeholder">
      نوع السيرفر غير مدعوم حاليًا
    </div>
  `;

}


/* =====================================================
   البحث
   ===================================================== */

searchInput.addEventListener(
  "input",
  function () {

    const query =
      this.value
        .trim()
        .toLowerCase();


    if (!query) {

      renderAnime();

      renderNewAnime();

      return;

    }


    const results =
      animeList.filter(
        anime =>

          anime.title
            .toLowerCase()
            .includes(query)

          ||

          anime.description
            .toLowerCase()
            .includes(query)
      );


    renderAnime(results);

    renderNewAnime(results);

  }
);


/* =====================================================
   قائمتي
   ===================================================== */

function toggleMyList(animeId) {

  const index =
    myListData.indexOf(animeId);


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


  renderAnime();

  renderNewAnime();

  renderMyList();

}


function renderMyList() {

  const list =
    animeList.filter(
      anime =>
        myListData.includes(
          anime.id
        )
    );


  if (!list.length) {

    myListGrid.innerHTML = `
      <div class="empty">
        قائمتك فارغة حاليًا ♡
      </div>
    `;

    return;

  }


  myListGrid.innerHTML =
    list.map(
      createAnimeCard
    ).join("");

}


/* =====================================================
   عرض قائمتي
   ===================================================== */

function showMyList() {

  document
    .getElementById(
      "myListSection"
    )
    .style.display = "block";


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


  videoPlayer.innerHTML =
    `<div class="player-placeholder">
      اختر حلقة للمشاهدة
    </div>`;

}


/* =====================================================
   الرئيسية
   ===================================================== */

function goHome() {

  document
    .getElementById(
      "myListSection"
    )
    .style.display = "none";


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


function showSection(id) {

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
    () => {

      showEpisode(
        anime,
        episode
      );

    },
    200
  );

}


/* =====================================================
   رسائل
   ===================================================== */

function showMessage(text) {

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
      () => {

        message.style.display =
          "none";

      },
      2200
    );

}
```
