/* =====================================================
   غرفة الأنمي
   GhorfaAnime
   Main JavaScript
===================================================== */


/* =====================================================
   بيانات الأنمي
===================================================== */

const animeData = {

    /* =================================================
       GANG
    ================================================= */

    gang: {

        id: "gang",

        title: "Gang",

        titleArabic: "Gang",

        year: 2026,

        description:
            "قصة Gang، شاب غامض يمتلك قوة ونظامًا خاصًا يغير حياته ويقوده إلى عالم مليء بالأسرار والتحديات.",

        genre: [
            "أكشن",
            "شونين",
            "خيال"
        ],

        image:
            "images/gang.jpg",

        section:
            "popular",

        license:
            "Original",

        episodes: [

            {
                number: 1,

                title:
                    "البداية",

                description:
                    "بداية قصة Gang وظهور النظام.",

                video:
                    "videos/gang-01.mp4"
            },

            {
                number: 2,

                title:
                    "النظام",

                description:
                    "Gang يبدأ باكتشاف قدرات النظام.",

                video:
                    "videos/gang-02.mp4"
            }

        ]

    },


    /* =================================================
       SHADOW SYSTEM
    ================================================= */

    shadowSystem: {

        id:
            "shadow-system",

        title:
            "Shadow System",

        titleArabic:
            "Shadow System",

        year:
            2026,

        description:
            "عالم غامض يظهر فيه نظام الظلال ويمنح صاحبه قدرات غير عادية.",

        genre: [

            "أكشن",

            "خيال",

            "غموض"

        ],

        image:
            "images/shadow-system.jpg",

        section:
            "popular",

        license:
            "Original",

        episodes: [

            {

                number: 1,

                title:
                    "ظهور النظام",

                description:
                    "ظهور Shadow System لأول مرة.",

                video:
                    "videos/shadow-01.mp4"

            }

        ]

    },


    /* =================================================
       SPRING COMES TO PONSUKE
       Public Domain
    ================================================= */

    ponsuke: {

        id:
            "ponsuke",

        title:
            "Spring Comes to Ponsuke",

        titleArabic:
            "ربيع بونسوكي",

        year:
            1934,

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

        license:
            "Public Domain",

        source:
            "Wikimedia Commons",

        episodes: [

            {

                number:
                    1,

                title:
                    "الفيلم الكامل",

                description:
                    "Spring Comes to Ponsuke",

                video:
                    "videos/ponsuke.webm"

            }

        ]

    },


    /* =================================================
       THE DONKEY
       Public Domain
    ================================================= */

    donkey: {

        id:
            "donkey",

        title:
            "The Donkey",

        titleArabic:
            "الحمار",

        year:
            1930,

        description:
            "رسوم متحركة يابانية قصيرة من عام 1930.",

        genre: [

            "Public Domain",

            "كلاسيكي",

            "رسوم متحركة"

        ],

        image:
            "images/donkey.jpg",

        section:
            "public-domain",

        license:
            "Public Domain",

        source:
            "Wikimedia Commons",

        episodes: [

            {

                number:
                    1,

                title:
                    "الفيلم الكامل",

                description:
                    "The Donkey",

                video:
                    "videos/donkey.ogv"

            }

        ]

    },


    /* =================================================
       AT THE CIRCUS
       Public Domain
    ================================================= */

    circus: {

        id:
            "circus",

        title:
            "At the Circus",

        titleArabic:
            "في السيرك",

        year:
            1931,

        description:
            "رسوم متحركة يابانية قصيرة من عام 1931.",

        genre: [

            "Public Domain",

            "كلاسيكي",

            "رسوم متحركة"

        ],

        image:
            "images/circus.jpg",

        section:
            "public-domain",

        license:
            "Public Domain",

        source:
            "Wikimedia Commons",

        episodes: [

            {

                number:
                    1,

                title:
                    "الفيلم الكامل",

                description:
                    "At the Circus",

                video:
                    "videos/circus.webm"

            }

        ]

    },


    /* =================================================
       RASCAL RACOON
       Public Domain
    ================================================= */

    rascalRacoon: {

        id:
            "rascal-racoon",

        title:
            "Rascal Racoon",

        titleArabic:
            "الثعلب المشاغب",

        year:
            1933,

        description:
            "رسوم متحركة يابانية قصيرة من عام 1933.",

        genre: [

            "Public Domain",

            "كلاسيكي",

            "رسوم متحركة"

        ],

        image:
            "images/rascal-racoon.jpg",

        section:
            "public-domain",

        license:
            "Public Domain",

        source:
            "Wikimedia Commons",

        episodes: [

            {

                number:
                    1,

                title:
                    "الفيلم الكامل",

                description:
                    "Rascal Racoon",

                video:
                    "videos/rascal-racoon.ogv"

            }

        ]

    }

};


/* =====================================================
   المتغيرات
===================================================== */

let currentAnime = null;

let currentEpisode = null;

let favorites =
    JSON.parse(
        localStorage.getItem(
            "ghorfaAnimeFavorites"
        )
    ) || [];


/* =====================================================
   عند تحميل الصفحة
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderPopular();

        renderPublicDomain();

        setupSearch();

        updateFavoriteButton();

    }
);


/* =====================================================
   الحصول على كل الأنميات
===================================================== */

function getAllAnime() {

    return Object.values(
        animeData
    );

}


/* =====================================================
   إنشاء بطاقة الأنمي
===================================================== */

function createAnimeCard(anime) {

    const card =
        document.createElement("article");

    card.className =
        "anime-card";


    card.onclick =
        function () {

            openAnime(
                anime.id
            );

        };


    const cover =
        document.createElement("div");

    cover.className =
        "anime-cover";


    const image =
        document.createElement("img");

    image.src =
        anime.image;

    image.alt =
        anime.titleArabic;


    image.onerror =
        function () {

            this.style.display =
                "none";

        };


    const title =
        document.createElement("span");

    title.textContent =
        anime.titleArabic;


    cover.appendChild(
        image
    );

    cover.appendChild(
        title
    );


    const info =
        document.createElement("div");

    info.className =
        "anime-info";


    const h3 =
        document.createElement("h3");

    h3.textContent =
        anime.titleArabic;


    const description =
        document.createElement("p");

    description.textContent =
        anime.description;


    info.appendChild(
        h3
    );

    info.appendChild(
        description
    );


    card.appendChild(
        cover
    );

    card.appendChild(
        info
    );


    return card;

}


/* =====================================================
   عرض الأكثر مشاهدة
===================================================== */

function renderPopular() {

    const grid =
        document.getElementById(
            "animeGrid"
        );


    if (!grid)
        return;


    grid.innerHTML =
        "";


    const popular =
        getAllAnime()
            .filter(
                anime =>
                    anime.section ===
                    "popular"
            );


    if (
        popular.length ===
        0
    ) {

        showEmpty(
            grid,
            "لا توجد أنميات حاليًا."
        );

        return;

    }


    popular.forEach(
        function (anime) {

            grid.appendChild(
                createAnimeCard(
                    anime
                )
            );

        }
    );

}


/* =====================================================
   عرض Public Domain
===================================================== */

function renderPublicDomain() {

    const grid =
        document.getElementById(
            "newGrid"
        );


    if (!grid)
        return;


    grid.innerHTML =
        "";


    const publicDomain =
        getAllAnime()
            .filter(
                anime =>
                    anime.section ===
                    "public-domain"
            );


    if (
        publicDomain.length ===
        0
    ) {

        showEmpty(
            grid,
            "لا توجد أعمال حاليًا."
        );

        return;

    }


    publicDomain.forEach(
        function (anime) {

            grid.appendChild(
                createAnimeCard(
                    anime
                )
            );

        }
    );

}


/* =====================================================
   فتح صفحة الأنمي
===================================================== */

function openAnime(id) {

    const anime =
        animeData[id];


    if (!anime)
        return;


    currentAnime =
        anime;


    hideAllPages();


    const page =
        document.getElementById(
            "animePage"
        );


    if (!page)
        return;


    page.classList.remove(
        "hidden"
    );


    const title =
        document.getElementById(
            "animeTitle"
        );


    if (title) {

        title.textContent =
            anime.titleArabic;

    }


    const description =
        document.getElementById(
            "animeDescription"
        );


    if (description) {

        description.textContent =
            anime.description;

    }


    renderTags(
        anime
    );


    renderDetailImage(
        anime
    );


    renderEpisodes(
        anime
    );


    updateFavoriteButton();


    window.scrollTo(
        0,
        0
    );

}


/* =====================================================
   صورة صفحة التفاصيل
===================================================== */

function renderDetailImage(anime) {

    const container =
        document.querySelector(
            ".detail-cover"
        );


    if (!container)
        return;


    container.innerHTML =
        "";


    const image =
        document.createElement(
            "img"
        );


    image.src =
        anime.image;

    image.alt =
        anime.titleArabic;


    image.onerror =
        function () {

            container.innerHTML =
                '<div class="fallback-cover">' +
                escapeHtml(
                    anime.titleArabic
                ) +
                "</div>";

        };


    container.appendChild(
        image
    );

}


/* =====================================================
   التصنيفات
===================================================== */

function renderTags(anime) {

    const tags =
        document.querySelector(
            ".tags"
        );


    if (!tags)
        return;


    tags.innerHTML =
        "";


    anime.genre.forEach(
        function (genre) {

            const tag =
                document.createElement(
                    "span"
                );

            tag.textContent =
                genre;

            tags.appendChild(
                tag
            );

        }
    );

}


/* =====================================================
   عرض الحلقات
===================================================== */

function renderEpisodes(anime) {

    const list =
        document.getElementById(
            "episodeList"
        );


    if (!list)
        return;


    list.innerHTML =
        "";


    anime.episodes.forEach(
        function (episode) {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "episode";


            item.onclick =
                function () {

                    playEpisode(
                        anime,
                        episode
                    );

                };


            const number =
                document.createElement(
                    "div"
                );


            number.className =
                "episode-number";


            number.textContent =
                episode.number;


            const info =
                document.createElement(
                    "div"
                );


            info.className =
                "episode-info";


            const strong =
                document.createElement(
                    "strong"
                );


            strong.textContent =
                episode.title;


            const small =
                document.createElement(
                    "small"
                );


            small.textContent =
                episode.description;


            info.appendChild(
                strong
            );

            info.appendChild(
                small
            );


            const play =
                document.createElement(
                    "span"
                );


            play.textContent =
                "▶";


            item.appendChild(
                number
            );

            item.appendChild(
                info
            );

            item.appendChild(
                play
            );


            list.appendChild(
                item
            );

        }
    );

}


/* =====================================================
   تشغيل الحلقة
===================================================== */

function playEpisode(
    anime,
    episode
) {

    currentAnime =
        anime;

    currentEpisode =
        episode;


    hideAllPages();


    const page =
        document.getElementById(
            "playerPage"
        );


    if (!page)
        return;


    page.classList.remove(
        "hidden"
    );


    const video =
        document.getElementById(
            "videoPlayer"
        );


    const title =
        document.getElementById(
            "playerTitle"
        );


    if (title) {

        title.textContent =
            anime.titleArabic +
            " - " +
            episode.title;

    }


    if (!video)
        return;


    video.pause();


    video.src =
        episode.video;


    video.load();


    video.onerror =
        function () {

            showMessage(
                "تعذر تحميل الفيديو. تأكد من وجود الملف والمسار."
            );

        };


    video.play()
        .catch(
            function () {

                /*
                 المتصفح قد يمنع التشغيل
                 التلقائي، وفي هذه الحالة
                 المستخدم يضغط زر التشغيل.
                */

            }
        );


    window.scrollTo(
        0,
        0
    );

}


/* =====================================================
   العودة من المشغل
===================================================== */

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


    if (currentAnime) {

        openAnime(
            currentAnime.id
        );

    }
    else {

        goHome();

    }

}


/* =====================================================
   إغلاق صفحة الأنمي
===================================================== */

function closeAnime() {

    currentAnime =
        null;

    goHome();

}


/* =====================================================
   الصفحة الرئيسية
===================================================== */

function goHome() {

    hideAllPages();


    const main =
        document.querySelector(
            "main"
        );


    if (main) {

        main.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   إخفاء الصفحات
===================================================== */

function hideAllPages() {

    const pages =
        document.querySelectorAll(
            ".page"
        );


    pages.forEach(
        function (page) {

            page.classList.add(
                "hidden"
            );

        }
    );

}


/* =====================================================
   البحث
===================================================== */

function setupSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input)
        return;


    input.addEventListener(
        "input",
        function () {

            searchAnime(
                this.value
            );

        }
    );

}


/* =====================================================
   تنفيذ البحث
===================================================== */

function searchAnime(query) {

    query =
        query
            .trim()
            .toLowerCase();


    const popularGrid =
        document.getElementById(
            "animeGrid"
        );


    const publicGrid =
        document.getElementById(
            "newGrid"
        );


    if (
        query.length ===
        0
    ) {

        renderPopular();

        renderPublicDomain();

        return;

    }


    const results =
        getAllAnime()
            .filter(
                function (anime) {

                    const text =
                        (

                            anime.title +
                            " " +
                            anime.titleArabic +
                            " " +
                            anime.description +
                            " " +
                            anime.genre.join(" ")

                        ).toLowerCase();


                    return text.includes(
                        query
                    );

                }
            );


    if (popularGrid) {

        popularGrid.innerHTML =
            "";

    }


    if (publicGrid) {

        publicGrid.innerHTML =
            "";

    }


    if (
        results.length ===
        0
    ) {

        if (popularGrid) {

            showEmpty(
                popularGrid,
                "لم نجد أنمي مطابقًا لبحثك."
            );

        }

        return;

    }


    results.forEach(
        function (anime) {

            if (
                anime.section ===
                "popular"
            ) {

                if (popularGrid) {

                    popularGrid.appendChild(
                        createAnimeCard(
                            anime
                        )
                    );

                }

            }
            else {

                if (publicGrid) {

                    publicGrid.appendChild(
                        createAnimeCard(
                            anime
                        )
                    );

                }

            }

        }
    );

}


/* =====================================================
   التركيز على البحث
===================================================== */

function focusSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );


    if (!input)
        return;


    input.focus();


    input.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =====================================================
   الأكثر مشاهدة
===================================================== */

function showPopular() {

    hideAllPages();


    const section =
        document.getElementById(
            "popularSection"
        );


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   Public Domain
===================================================== */

function showPublicDomain() {

    hideAllPages();


    const section =
        document.getElementById(
            "publicDomainSection"
        );


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =====================================================
   الأنميات الجديدة
===================================================== */

function showNewAnime() {

    showPublicDomain();

}


/* =====================================================
   التصنيفات
===================================================== */

function showCategories() {

    showMessage(
        "التصنيفات: أكشن • شونين • خيال • كلاسيكي"
    );

}


/* =====================================================
   شاهد الآن
===================================================== */

function watchNow() {

    if (
        animeData.gang &&
        animeData.gang.episodes.length
    ) {

        openAnime(
            "gang"
        );

        return;

    }


    showMessage(
        "لا توجد حلقات متاحة حاليًا."
    );

}


/* =====================================================
   قائمتي
===================================================== */

function myList() {

    hideAllPages();


    const page =
        document.getElementById(
            "myListPage"
        );


    if (!page)
        return;


    page.classList.remove(
        "hidden"
    );


    renderMyList();


    window.scrollTo(
        0,
        0
    );

}


/* =====================================================
   عرض قائمتي
===================================================== */

function renderMyList() {

    const container =
        document.getElementById(
            "myListContent"
        );


    if (!container)
        return;


    container.innerHTML =
        "";


    const items =
        favorites
            .map(
                id =>
                    animeData[id]
            )
            .filter(
                Boolean
            );


    if (
        items.length ===
        0
    ) {

        showEmpty(
            container,
            "قائمتك فارغة حاليًا."
        );

        return;

    }


    items.forEach(
        function (anime) {

            container.appendChild(
                createAnimeCard(
                    anime
                )
            );

        }
    );

}


/* =====================================================
   إغلاق قائمتي
===================================================== */

function closeMyList() {

    goHome();

}


/* =====================================================
   إضافة / إزالة المفضلة
===================================================== */

function toggleFavorite() {

    if (!currentAnime)
        return;


    const id =
        currentAnime.id;


    const index =
        favorites.indexOf(
            id
        );


    if (
        index ===
        -1
    ) {

        favorites.push(
            id
        );

        showMessage(
            "تمت إضافة الأنمي إلى قائمتك ❤️"
        );

    }
    else {

        favorites.splice(
            index,
            1
        );

        showMessage(
            "تمت إزالة الأنمي من قائمتك."
        );

    }


    localStorage.setItem(
        "ghorfaAnimeFavorites",
        JSON.stringify(
            favorites
        )
    );


    updateFavoriteButton();

}


/* =====================================================
   تحديث زر المفضلة
===================================================== */

function updateFavoriteButton() {

    const button =
        document.getElementById(
            "favoriteBtn"
        );


    if (!button)
        return;


    if (!currentAnime) {

        button.textContent =
            "♡ أضف إلى قائمتي";

        return;

    }


    const exists =
        favorites.includes(
            currentAnime.id
        );


    if (exists) {

        button.textContent =
            "♥ إزالة من قائمتي";

    }
    else {

        button.textContent =
            "♡ أضف إلى قائمتي";

    }

}


/* =====================================================
   الحساب
===================================================== */

function showAccount() {

    showMessage(
        "صفحة الحساب ستكون متاحة في الإصدار القادم."
    );

}


/* =====================================================
   الرسائل
===================================================== */

function showMessage(text) {

    const message =
        document.getElementById(
            "message"
        );


    if (!message)
        return;


    message.textContent =
        text;


    message.classList.add(
        "show"
    );


    clearTimeout(
        showMessage.timer
    );


    showMessage.timer =
        setTimeout(
            function () {

                message.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =====================================================
   رسالة فارغة
===================================================== */

function showEmpty(
    container,
    text
) {

    container.innerHTML =
        "";


    const element =
        document.createElement(
            "div"
        );


    element.className =
        "empty-message";


    element.textContent =
        text;


    container.appendChild(
        element
    );

}


/* =====================================================
   حماية النص
===================================================== */

function escapeHtml(text) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent =
        text;


    return div.innerHTML;

}


/* =====================================================
   التحكم في أزرار المتصفح
===================================================== */

window.addEventListener(
    "keydown",
    function (event) {

        /*
         ESC لإغلاق المشغل
        */

        if (
            event.key ===
            "Escape"
        ) {

            const player =
                document.getElementById(
                    "playerPage"
                );


            if (
                player &&
                !player.classList.contains(
                    "hidden"
                )
            ) {

                closePlayer();

            }

        }

    }
);


/* =====================================================
   حفظ آخر أنمي تمت مشاهدته
===================================================== */

function saveLastWatched(
    anime,
    episode
) {

    if (!anime || !episode)
        return;


    const data = {

        animeId:
            anime.id,

        episodeNumber:
            episode.number,

        timestamp:
            Date.now()

    };


    localStorage.setItem(
        "ghorfaAnimeLastWatched",
        JSON.stringify(
            data
        )
    );

}


/* =====================================================
   تحديث playEpisode لحفظ آخر مشاهدة
===================================================== */

const originalPlayEpisode =
    playEpisode;


/*
   نستخدم wrapper حتى لا نكرر
   وظيفة تشغيل الفيديو.
*/

playEpisode =
    function (
        anime,
        episode
    ) {

        saveLastWatched(
            anime,
            episode
        );


        originalPlayEpisode(
            anime,
            episode
        );

    };


/* =====================================================
   الحصول على آخر مشاهدة
===================================================== */

function getLastWatched() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "ghorfaAnimeLastWatched"
            )
        );

    }
    catch (
        error
    ) {

        return null;

    }

}


/* =====================================================
   Console
===================================================== */

console.log(
    "GhorfaAnime loaded successfully."
);

console.log(
    "Anime count:",
    getAllAnime().length
);
