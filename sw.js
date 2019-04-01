// 1. Save the files to the user's device
// The "install" event is called when the ServiceWorker starts up.
// All ServiceWorker code must be inside events.
self.addEventListener('install', function (e) {
    console.log('install');

    // waitUntil tells the browser that the install event is not finished until we have
    // cached all of our files
    e.waitUntil(
        // Here we call our cache "myonsenuipwa", but you can name it anything unique
        caches.open('genevabibleAssets').then(cache => {
            // If the request for any of these resources fails, _none_ of the resources will be
            // added to the cache.
            return cache.addAll([
                '/',
                'index.html',
                'index.css',
                'index.js',
                'images/logo16.png',
                'images/logo32.png',
                'images/logo512.png',
                'images/logo192.png',
                'books_abbreviations.json',
                'books_short_names.json',
                'books_long_names.json',
                'manifest.json',
                'english.json',
                'sacred.json',
                'https://unpkg.com/onsenui/css/onsenui.css',
                'https://unpkg.com/onsenui/css/onsen-css-components.min.css',
                'https://unpkg.com/onsenui/js/onsenui.min.js',
                'https://unpkg.com/jquery/dist/jquery.min.js'
            ].concat(bible_data));
        })
    );
});

// 2. Intercept requests and return the cached version instead
self.addEventListener('fetch', function (e) {
    e.respondWith(
        // check if this file exists in the cache
        caches.match(e.request)
        // Return the cached file, or else try to get it from the server
        .then(response => response || fetch(e.request))
    );
});


var bible_data = [
    "data/1CH03.htm",
    "data/1CH04.htm",
    "data/1CH05.htm",
    "data/1CH06.htm",
    "data/1CH07.htm",
    "data/1CH08.htm",
    "data/1CH09.htm",
    "data/1CH10.htm",
    "data/1CH11.htm",
    "data/1CH12.htm",
    "data/1CH13.htm",
    "data/1CH14.htm",
    "data/1CH15.htm",
    "data/1CH16.htm",
    "data/1CH17.htm",
    "data/1CH18.htm",
    "data/1CH19.htm",
    "data/1CH20.htm",
    "data/1CH21.htm",
    "data/1CH22.htm",
    "data/1CH23.htm",
    "data/1CH24.htm",
    "data/1CH25.htm",
    "data/1CH26.htm",
    "data/1CH27.htm",
    "data/1CH28.htm",
    "data/1CH29.htm",
    "data/1CO.htm",
    "data/1CO01.htm",
    "data/1CO02.htm",
    "data/1CO03.htm",
    "data/1CO04.htm",
    "data/1CO05.htm",
    "data/1CO06.htm",
    "data/1CO07.htm",
    "data/1CO08.htm",
    "data/1CO09.htm",
    "data/1CO10.htm",
    "data/1CO11.htm",
    "data/1CO12.htm",
    "data/1CO13.htm",
    "data/1CO14.htm",
    "data/1CO15.htm",
    "data/1CO16.htm",
    "data/1JN.htm",
    "data/1JN01.htm",
    "data/1JN02.htm",
    "data/1JN03.htm",
    "data/1JN04.htm",
    "data/1JN05.htm",
    "data/1KI.htm",
    "data/1KI01.htm",
    "data/1KI02.htm",
    "data/1KI03.htm",
    "data/1KI04.htm",
    "data/1KI05.htm",
    "data/1KI06.htm",
    "data/1KI07.htm",
    "data/1KI08.htm",
    "data/1KI09.htm",
    "data/1KI10.htm",
    "data/1KI11.htm",
    "data/1KI12.htm",
    "data/1KI13.htm",
    "data/1KI14.htm",
    "data/1KI15.htm",
    "data/1KI16.htm",
    "data/1KI17.htm",
    "data/1KI18.htm",
    "data/1KI19.htm",
    "data/1KI20.htm",
    "data/1KI21.htm",
    "data/1KI22.htm",
    "data/1PE.htm",
    "data/1PE01.htm",
    "data/1PE02.htm",
    "data/1PE03.htm",
    "data/1PE04.htm",
    "data/1PE05.htm",
    "data/1SA.htm",
    "data/1SA01.htm",
    "data/1SA02.htm",
    "data/1SA03.htm",
    "data/1SA04.htm",
    "data/1SA05.htm",
    "data/1SA06.htm",
    "data/1SA07.htm",
    "data/1SA08.htm",
    "data/1SA09.htm",
    "data/1SA10.htm",
    "data/1SA11.htm",
    "data/1SA12.htm",
    "data/1SA13.htm",
    "data/1SA14.htm",
    "data/1SA15.htm",
    "data/1SA16.htm",
    "data/1SA17.htm",
    "data/1SA18.htm",
    "data/1SA19.htm",
    "data/1SA20.htm",
    "data/1SA21.htm",
    "data/1SA22.htm",
    "data/1SA23.htm",
    "data/1SA24.htm",
    "data/1SA25.htm",
    "data/1SA26.htm",
    "data/1SA27.htm",
    "data/1SA28.htm",
    "data/1SA29.htm",
    "data/1SA30.htm",
    "data/1SA31.htm",
    "data/1TH.htm",
    "data/1TH01.htm",
    "data/1TH02.htm",
    "data/1TH03.htm",
    "data/1TH04.htm",
    "data/1TH05.htm",
    "data/1TI.htm",
    "data/1TI01.htm",
    "data/1TI02.htm",
    "data/1TI03.htm",
    "data/1TI04.htm",
    "data/1TI05.htm",
    "data/1TI06.htm",
    "data/2CH.htm",
    "data/2CH01.htm",
    "data/2CH02.htm",
    "data/2CH03.htm",
    "data/2CH04.htm",
    "data/2CH05.htm",
    "data/2CH06.htm",
    "data/2CH07.htm",
    "data/2CH08.htm",
    "data/2CH09.htm",
    "data/2CH10.htm",
    "data/2CH11.htm",
    "data/2CH12.htm",
    "data/2CH13.htm",
    "data/2CH14.htm",
    "data/2CH15.htm",
    "data/2CH16.htm",
    "data/2CH17.htm",
    "data/2CH18.htm",
    "data/2CH19.htm",
    "data/2CH20.htm",
    "data/2CH21.htm",
    "data/2CH22.htm",
    "data/2CH23.htm",
    "data/2CH24.htm",
    "data/2CH25.htm",
    "data/2CH26.htm",
    "data/2CH27.htm",
    "data/2CH28.htm",
    "data/2CH29.htm",
    "data/2CH30.htm",
    "data/2CH31.htm",
    "data/2CH32.htm",
    "data/2CH33.htm",
    "data/2CH34.htm",
    "data/2CH35.htm",
    "data/2CH36.htm",
    "data/2CO.htm",
    "data/2CO01.htm",
    "data/2CO02.htm",
    "data/2CO03.htm",
    "data/2CO04.htm",
    "data/2CO05.htm",
    "data/2CO06.htm",
    "data/2CO07.htm",
    "data/2CO08.htm",
    "data/2CO09.htm",
    "data/2CO10.htm",
    "data/2CO11.htm",
    "data/2CO12.htm",
    "data/2CO13.htm",
    "data/2JN.htm",
    "data/2JN01.htm",
    "data/2KI.htm",
    "data/2KI01.htm",
    "data/2KI02.htm",
    "data/2KI03.htm",
    "data/2KI04.htm",
    "data/2KI05.htm",
    "data/2KI06.htm",
    "data/2KI07.htm",
    "data/2KI08.htm",
    "data/2KI09.htm",
    "data/2KI10.htm",
    "data/2KI11.htm",
    "data/2KI12.htm",
    "data/2KI13.htm",
    "data/2KI14.htm",
    "data/2KI15.htm",
    "data/2KI16.htm",
    "data/2KI17.htm",
    "data/2KI18.htm",
    "data/2KI19.htm",
    "data/2KI20.htm",
    "data/2KI21.htm",
    "data/2KI22.htm",
    "data/2KI23.htm",
    "data/2KI24.htm",
    "data/2KI25.htm",
    "data/2PE.htm",
    "data/2PE01.htm",
    "data/2PE02.htm",
    "data/2PE03.htm",
    "data/2SA.htm",
    "data/2SA01.htm",
    "data/2SA02.htm",
    "data/2SA03.htm",
    "data/2SA04.htm",
    "data/2SA05.htm",
    "data/2SA06.htm",
    "data/2SA07.htm",
    "data/2SA08.htm",
    "data/2SA09.htm",
    "data/2SA10.htm",
    "data/2SA11.htm",
    "data/2SA12.htm",
    "data/2SA13.htm",
    "data/2SA14.htm",
    "data/2SA15.htm",
    "data/2SA16.htm",
    "data/2SA17.htm",
    "data/2SA18.htm",
    "data/2SA19.htm",
    "data/2SA20.htm",
    "data/2SA21.htm",
    "data/2SA22.htm",
    "data/2SA23.htm",
    "data/2SA24.htm",
    "data/2TH.htm",
    "data/2TH01.htm",
    "data/2TH02.htm",
    "data/2TH03.htm",
    "data/2TI.htm",
    "data/2TI01.htm",
    "data/2TI02.htm",
    "data/2TI03.htm",
    "data/2TI04.htm",
    "data/3JN.htm",
    "data/3JN01.htm",
    "data/ACT.htm",
    "data/ACT01.htm",
    "data/ACT02.htm",
    "data/ACT03.htm",
    "data/ACT04.htm",
    "data/ACT05.htm",
    "data/ACT06.htm",
    "data/ACT07.htm",
    "data/ACT08.htm",
    "data/ACT09.htm",
    "data/ACT10.htm",
    "data/ACT11.htm",
    "data/ACT12.htm",
    "data/ACT13.htm",
    "data/ACT14.htm",
    "data/ACT15.htm",
    "data/ACT16.htm",
    "data/ACT17.htm",
    "data/ACT18.htm",
    "data/ACT19.htm",
    "data/ACT20.htm",
    "data/ACT21.htm",
    "data/ACT22.htm",
    "data/ACT23.htm",
    "data/ACT24.htm",
    "data/ACT25.htm",
    "data/ACT26.htm",
    "data/ACT27.htm",
    "data/ACT28.htm",
    "data/AMO.htm",
    "data/AMO01.htm",
    "data/AMO02.htm",
    "data/AMO03.htm",
    "data/AMO04.htm",
    "data/AMO05.htm",
    "data/AMO06.htm",
    "data/AMO07.htm",
    "data/AMO08.htm",
    "data/AMO09.htm",
    "data/COL.htm",
    "data/COL01.htm",
    "data/COL02.htm",
    "data/COL03.htm",
    "data/COL04.htm",
    "data/copr.htm",
    "data/copyright.htm",
    "data/ZEP02.htm",
    "data/DAN.htm",
    "data/DAN01.htm",
    "data/DAN02.htm",
    "data/DAN03.htm",
    "data/DAN04.htm",
    "data/DAN05.htm",
    "data/DAN06.htm",
    "data/DAN07.htm",
    "data/DAN08.htm",
    "data/DAN09.htm",
    "data/DAN10.htm",
    "data/DAN11.htm",
    "data/DAN12.htm",
    "data/1CH02.htm",
    "data/DEU.htm",
    "data/DEU01.htm",
    "data/DEU02.htm",
    "data/DEU03.htm",
    "data/DEU04.htm",
    "data/DEU05.htm",
    "data/DEU06.htm",
    "data/DEU07.htm",
    "data/DEU08.htm",
    "data/DEU09.htm",
    "data/DEU10.htm",
    "data/DEU11.htm",
    "data/DEU12.htm",
    "data/DEU13.htm",
    "data/DEU14.htm",
    "data/DEU15.htm",
    "data/DEU16.htm",
    "data/DEU17.htm",
    "data/DEU18.htm",
    "data/DEU19.htm",
    "data/DEU20.htm",
    "data/DEU21.htm",
    "data/DEU22.htm",
    "data/DEU23.htm",
    "data/DEU24.htm",
    "data/DEU25.htm",
    "data/DEU26.htm",
    "data/DEU27.htm",
    "data/DEU28.htm",
    "data/DEU29.htm",
    "data/DEU30.htm",
    "data/DEU31.htm",
    "data/DEU32.htm",
    "data/DEU33.htm",
    "data/DEU34.htm",
    "data/ZEP01.htm",
    "data/ECC.htm",
    "data/ECC01.htm",
    "data/ECC02.htm",
    "data/ECC03.htm",
    "data/ECC04.htm",
    "data/ECC05.htm",
    "data/ECC06.htm",
    "data/ECC07.htm",
    "data/ECC08.htm",
    "data/ECC09.htm",
    "data/ECC10.htm",
    "data/ECC11.htm",
    "data/ECC12.htm",
    "data/ZEP.htm",
    "data/EPH.htm",
    "data/EPH01.htm",
    "data/EPH02.htm",
    "data/EPH03.htm",
    "data/EPH04.htm",
    "data/EPH05.htm",
    "data/EPH06.htm",
    "data/EST.htm",
    "data/EST01.htm",
    "data/EST02.htm",
    "data/EST03.htm",
    "data/EST04.htm",
    "data/EST05.htm",
    "data/EST06.htm",
    "data/EST07.htm",
    "data/EST08.htm",
    "data/EST09.htm",
    "data/EST10.htm",
    "data/EXO.htm",
    "data/EXO01.htm",
    "data/EXO02.htm",
    "data/EXO03.htm",
    "data/EXO04.htm",
    "data/EXO05.htm",
    "data/EXO06.htm",
    "data/EXO07.htm",
    "data/EXO08.htm",
    "data/EXO09.htm",
    "data/EXO10.htm",
    "data/EXO11.htm",
    "data/EXO12.htm",
    "data/EXO13.htm",
    "data/EXO14.htm",
    "data/EXO15.htm",
    "data/EXO16.htm",
    "data/EXO17.htm",
    "data/EXO18.htm",
    "data/EXO19.htm",
    "data/EXO20.htm",
    "data/EXO21.htm",
    "data/EXO22.htm",
    "data/EXO23.htm",
    "data/EXO24.htm",
    "data/EXO25.htm",
    "data/EXO26.htm",
    "data/EXO27.htm",
    "data/EXO28.htm",
    "data/EXO29.htm",
    "data/EXO30.htm",
    "data/EXO31.htm",
    "data/EXO32.htm",
    "data/EXO33.htm",
    "data/EXO34.htm",
    "data/EXO35.htm",
    "data/EXO36.htm",
    "data/EXO37.htm",
    "data/EXO38.htm",
    "data/EXO39.htm",
    "data/EXO40.htm",
    "data/EZK.htm",
    "data/EZK01.htm",
    "data/EZK02.htm",
    "data/EZK03.htm",
    "data/EZK04.htm",
    "data/EZK05.htm",
    "data/EZK06.htm",
    "data/EZK07.htm",
    "data/EZK08.htm",
    "data/EZK09.htm",
    "data/EZK10.htm",
    "data/EZK11.htm",
    "data/EZK12.htm",
    "data/EZK13.htm",
    "data/EZK14.htm",
    "data/EZK15.htm",
    "data/EZK16.htm",
    "data/EZK17.htm",
    "data/EZK18.htm",
    "data/EZK19.htm",
    "data/EZK20.htm",
    "data/EZK21.htm",
    "data/EZK22.htm",
    "data/EZK23.htm",
    "data/EZK24.htm",
    "data/EZK25.htm",
    "data/EZK26.htm",
    "data/EZK27.htm",
    "data/EZK28.htm",
    "data/EZK29.htm",
    "data/EZK30.htm",
    "data/EZK31.htm",
    "data/EZK32.htm",
    "data/EZK33.htm",
    "data/EZK34.htm",
    "data/EZK35.htm",
    "data/EZK36.htm",
    "data/EZK37.htm",
    "data/EZK38.htm",
    "data/EZK39.htm",
    "data/EZK40.htm",
    "data/EZK41.htm",
    "data/EZK42.htm",
    "data/EZK43.htm",
    "data/EZK44.htm",
    "data/EZK45.htm",
    "data/EZK46.htm",
    "data/EZK47.htm",
    "data/EZK48.htm",
    "data/EZR.htm",
    "data/EZR01.htm",
    "data/EZR02.htm",
    "data/EZR03.htm",
    "data/EZR04.htm",
    "data/EZR05.htm",
    "data/EZR06.htm",
    "data/EZR07.htm",
    "data/EZR08.htm",
    "data/EZR09.htm",
    "data/EZR10.htm",
    "data/GAL.htm",
    "data/GAL01.htm",
    "data/GAL02.htm",
    "data/GAL03.htm",
    "data/GAL04.htm",
    "data/GAL05.htm",
    "data/GAL06.htm",
    "data/GEN.htm",
    "data/GEN01.htm",
    "data/GEN02.htm",
    "data/GEN03.htm",
    "data/GEN04.htm",
    "data/GEN05.htm",
    "data/GEN06.htm",
    "data/GEN07.htm",
    "data/GEN08.htm",
    "data/GEN09.htm",
    "data/GEN10.htm",
    "data/GEN11.htm",
    "data/GEN12.htm",
    "data/GEN13.htm",
    "data/GEN14.htm",
    "data/GEN15.htm",
    "data/GEN16.htm",
    "data/GEN17.htm",
    "data/GEN18.htm",
    "data/GEN19.htm",
    "data/GEN20.htm",
    "data/GEN21.htm",
    "data/GEN22.htm",
    "data/GEN23.htm",
    "data/GEN24.htm",
    "data/GEN25.htm",
    "data/GEN26.htm",
    "data/GEN27.htm",
    "data/GEN28.htm",
    "data/GEN29.htm",
    "data/GEN30.htm",
    "data/GEN31.htm",
    "data/GEN32.htm",
    "data/GEN33.htm",
    "data/GEN34.htm",
    "data/GEN35.htm",
    "data/GEN36.htm",
    "data/GEN37.htm",
    "data/GEN38.htm",
    "data/GEN39.htm",
    "data/GEN40.htm",
    "data/GEN41.htm",
    "data/GEN42.htm",
    "data/GEN43.htm",
    "data/GEN44.htm",
    "data/GEN45.htm",
    "data/GEN46.htm",
    "data/GEN47.htm",
    "data/GEN48.htm",
    "data/GEN49.htm",
    "data/GEN50.htm",
    "data/HAB.htm",
    "data/HAB01.htm",
    "data/HAB02.htm",
    "data/HAB03.htm",
    "data/HAG.htm",
    "data/HAG01.htm",
    "data/HAG02.htm",
    "data/HEB.htm",
    "data/HEB01.htm",
    "data/HEB02.htm",
    "data/HEB03.htm",
    "data/HEB04.htm",
    "data/HEB05.htm",
    "data/HEB06.htm",
    "data/HEB07.htm",
    "data/HEB08.htm",
    "data/HEB09.htm",
    "data/HEB10.htm",
    "data/HEB11.htm",
    "data/HEB12.htm",
    "data/HEB13.htm",
    "data/ZEC14.htm",
    "data/HOS.htm",
    "data/HOS01.htm",
    "data/HOS02.htm",
    "data/HOS03.htm",
    "data/HOS04.htm",
    "data/HOS05.htm",
    "data/HOS06.htm",
    "data/HOS07.htm",
    "data/HOS08.htm",
    "data/HOS09.htm",
    "data/HOS10.htm",
    "data/HOS11.htm",
    "data/HOS12.htm",
    "data/HOS13.htm",
    "data/HOS14.htm",
    "data/index.htm",
    "data/ISA.htm",
    "data/ISA01.htm",
    "data/ISA02.htm",
    "data/ISA03.htm",
    "data/ISA04.htm",
    "data/ISA05.htm",
    "data/ISA06.htm",
    "data/ISA07.htm",
    "data/ISA08.htm",
    "data/ISA09.htm",
    "data/ISA10.htm",
    "data/ISA11.htm",
    "data/ISA12.htm",
    "data/ISA13.htm",
    "data/ISA14.htm",
    "data/ISA15.htm",
    "data/ISA16.htm",
    "data/ISA17.htm",
    "data/ISA18.htm",
    "data/ISA19.htm",
    "data/ISA20.htm",
    "data/ISA21.htm",
    "data/ISA22.htm",
    "data/ISA23.htm",
    "data/ISA24.htm",
    "data/ISA25.htm",
    "data/ISA26.htm",
    "data/ISA27.htm",
    "data/ISA28.htm",
    "data/ISA29.htm",
    "data/ISA30.htm",
    "data/ISA31.htm",
    "data/ISA32.htm",
    "data/ISA33.htm",
    "data/ISA34.htm",
    "data/ISA35.htm",
    "data/ISA36.htm",
    "data/ISA37.htm",
    "data/ISA38.htm",
    "data/ISA39.htm",
    "data/ISA40.htm",
    "data/ISA41.htm",
    "data/ISA42.htm",
    "data/1CH01.htm",
    "data/ISA44.htm",
    "data/ISA45.htm",
    "data/ISA46.htm",
    "data/ISA47.htm",
    "data/ISA48.htm",
    "data/ISA49.htm",
    "data/ISA50.htm",
    "data/ISA51.htm",
    "data/ISA52.htm",
    "data/ISA53.htm",
    "data/ISA54.htm",
    "data/ISA55.htm",
    "data/ISA56.htm",
    "data/ISA57.htm",
    "data/ISA58.htm",
    "data/ISA59.htm",
    "data/ISA60.htm",
    "data/ISA61.htm",
    "data/ISA62.htm",
    "data/ISA63.htm",
    "data/ISA64.htm",
    "data/ISA65.htm",
    "data/ISA66.htm",
    "data/JAS.htm",
    "data/JAS01.htm",
    "data/JAS02.htm",
    "data/JAS03.htm",
    "data/JAS04.htm",
    "data/JAS05.htm",
    "data/JDG.htm",
    "data/JDG01.htm",
    "data/JDG02.htm",
    "data/JDG03.htm",
    "data/JDG04.htm",
    "data/JDG05.htm",
    "data/JDG06.htm",
    "data/JDG07.htm",
    "data/JDG08.htm",
    "data/JDG09.htm",
    "data/JDG10.htm",
    "data/JDG11.htm",
    "data/JDG12.htm",
    "data/JDG13.htm",
    "data/JDG14.htm",
    "data/JDG15.htm",
    "data/JDG16.htm",
    "data/JDG17.htm",
    "data/JDG18.htm",
    "data/JDG19.htm",
    "data/JDG20.htm",
    "data/JDG21.htm",
    "data/JER.htm",
    "data/JER01.htm",
    "data/JER02.htm",
    "data/JER03.htm",
    "data/JER04.htm",
    "data/JER05.htm",
    "data/JER06.htm",
    "data/JER07.htm",
    "data/JER08.htm",
    "data/JER09.htm",
    "data/JER10.htm",
    "data/JER11.htm",
    "data/JER12.htm",
    "data/JER13.htm",
    "data/JER14.htm",
    "data/JER15.htm",
    "data/JER16.htm",
    "data/JER17.htm",
    "data/JER18.htm",
    "data/JER19.htm",
    "data/JER20.htm",
    "data/JER21.htm",
    "data/JER22.htm",
    "data/JER23.htm",
    "data/JER24.htm",
    "data/JER25.htm",
    "data/JER26.htm",
    "data/JER27.htm",
    "data/JER28.htm",
    "data/JER29.htm",
    "data/JER30.htm",
    "data/JER31.htm",
    "data/JER32.htm",
    "data/JER33.htm",
    "data/JER34.htm",
    "data/JER35.htm",
    "data/JER36.htm",
    "data/JER37.htm",
    "data/JER38.htm",
    "data/JER39.htm",
    "data/JER40.htm",
    "data/JER41.htm",
    "data/JER42.htm",
    "data/JER43.htm",
    "data/JER44.htm",
    "data/JER45.htm",
    "data/JER46.htm",
    "data/JER47.htm",
    "data/JER48.htm",
    "data/JER49.htm",
    "data/JER50.htm",
    "data/JER51.htm",
    "data/JER52.htm",
    "data/JHN.htm",
    "data/JHN01.htm",
    "data/JHN02.htm",
    "data/JHN03.htm",
    "data/JHN04.htm",
    "data/JHN05.htm",
    "data/JHN06.htm",
    "data/JHN07.htm",
    "data/JHN08.htm",
    "data/JHN09.htm",
    "data/JHN10.htm",
    "data/JHN11.htm",
    "data/JHN12.htm",
    "data/JHN13.htm",
    "data/JHN14.htm",
    "data/JHN15.htm",
    "data/JHN16.htm",
    "data/JHN17.htm",
    "data/JHN18.htm",
    "data/JHN19.htm",
    "data/JHN20.htm",
    "data/JHN21.htm",
    "data/JOB.htm",
    "data/JOB01.htm",
    "data/JOB02.htm",
    "data/JOB03.htm",
    "data/JOB04.htm",
    "data/JOB05.htm",
    "data/JOB06.htm",
    "data/JOB07.htm",
    "data/JOB08.htm",
    "data/JOB09.htm",
    "data/JOB10.htm",
    "data/JOB11.htm",
    "data/JOB12.htm",
    "data/JOB13.htm",
    "data/JOB14.htm",
    "data/JOB15.htm",
    "data/JOB16.htm",
    "data/JOB17.htm",
    "data/JOB18.htm",
    "data/JOB19.htm",
    "data/JOB20.htm",
    "data/JOB21.htm",
    "data/JOB22.htm",
    "data/JOB23.htm",
    "data/JOB24.htm",
    "data/JOB25.htm",
    "data/JOB26.htm",
    "data/JOB27.htm",
    "data/JOB28.htm",
    "data/JOB29.htm",
    "data/JOB30.htm",
    "data/JOB31.htm",
    "data/JOB32.htm",
    "data/JOB33.htm",
    "data/JOB34.htm",
    "data/JOB35.htm",
    "data/JOB36.htm",
    "data/JOB37.htm",
    "data/JOB38.htm",
    "data/JOB39.htm",
    "data/JOB40.htm",
    "data/JOB41.htm",
    "data/JOB42.htm",
    "data/JOL.htm",
    "data/JOL01.htm",
    "data/JOL02.htm",
    "data/JOL03.htm",
    "data/JON.htm",
    "data/JON01.htm",
    "data/JON02.htm",
    "data/JON03.htm",
    "data/JON04.htm",
    "data/JOS.htm",
    "data/JOS01.htm",
    "data/JOS02.htm",
    "data/JOS03.htm",
    "data/JOS04.htm",
    "data/JOS05.htm",
    "data/JOS06.htm",
    "data/JOS07.htm",
    "data/JOS08.htm",
    "data/JOS09.htm",
    "data/JOS10.htm",
    "data/JOS11.htm",
    "data/JOS12.htm",
    "data/JOS13.htm",
    "data/JOS14.htm",
    "data/JOS15.htm",
    "data/JOS16.htm",
    "data/JOS17.htm",
    "data/JOS18.htm",
    "data/JOS19.htm",
    "data/JOS20.htm",
    "data/JOS21.htm",
    "data/JOS22.htm",
    "data/JOS23.htm",
    "data/JOS24.htm",
    "data/JUD.htm",
    "data/JUD01.htm",
    "data/1CH.htm",
    "data/LAM.htm",
    "data/LAM01.htm",
    "data/LAM02.htm",
    "data/LAM03.htm",
    "data/LAM04.htm",
    "data/LAM05.htm",
    "data/LEV.htm",
    "data/LEV01.htm",
    "data/LEV02.htm",
    "data/LEV03.htm",
    "data/LEV04.htm",
    "data/LEV05.htm",
    "data/LEV06.htm",
    "data/LEV07.htm",
    "data/LEV08.htm",
    "data/LEV09.htm",
    "data/LEV10.htm",
    "data/LEV11.htm",
    "data/LEV12.htm",
    "data/LEV13.htm",
    "data/LEV14.htm",
    "data/LEV15.htm",
    "data/LEV16.htm",
    "data/LEV17.htm",
    "data/LEV18.htm",
    "data/LEV19.htm",
    "data/LEV20.htm",
    "data/LEV21.htm",
    "data/LEV22.htm",
    "data/LEV23.htm",
    "data/LEV24.htm",
    "data/LEV25.htm",
    "data/LEV26.htm",
    "data/LEV27.htm",
    "data/LUK.htm",
    "data/LUK01.htm",
    "data/LUK02.htm",
    "data/LUK03.htm",
    "data/LUK04.htm",
    "data/LUK05.htm",
    "data/LUK06.htm",
    "data/LUK07.htm",
    "data/LUK08.htm",
    "data/LUK09.htm",
    "data/LUK10.htm",
    "data/LUK11.htm",
    "data/LUK12.htm",
    "data/LUK13.htm",
    "data/LUK14.htm",
    "data/LUK15.htm",
    "data/LUK16.htm",
    "data/LUK17.htm",
    "data/LUK18.htm",
    "data/LUK19.htm",
    "data/LUK20.htm",
    "data/LUK21.htm",
    "data/LUK22.htm",
    "data/LUK23.htm",
    "data/LUK24.htm",
    "data/MAL.htm",
    "data/MAL01.htm",
    "data/MAL02.htm",
    "data/MAL03.htm",
    "data/MAL04.htm",
    "data/MAT.htm",
    "data/MAT01.htm",
    "data/MAT02.htm",
    "data/MAT03.htm",
    "data/MAT04.htm",
    "data/MAT05.htm",
    "data/MAT06.htm",
    "data/MAT07.htm",
    "data/MAT08.htm",
    "data/MAT09.htm",
    "data/MAT10.htm",
    "data/MAT11.htm",
    "data/MAT12.htm",
    "data/MAT13.htm",
    "data/MAT14.htm",
    "data/MAT15.htm",
    "data/MAT16.htm",
    "data/MAT17.htm",
    "data/MAT18.htm",
    "data/MAT19.htm",
    "data/MAT20.htm",
    "data/MAT21.htm",
    "data/MAT22.htm",
    "data/MAT23.htm",
    "data/MAT24.htm",
    "data/MAT25.htm",
    "data/MAT26.htm",
    "data/MAT27.htm",
    "data/MAT28.htm",
    "data/MIC.htm",
    "data/MIC01.htm",
    "data/MIC02.htm",
    "data/MIC03.htm",
    "data/MIC04.htm",
    "data/MIC05.htm",
    "data/MIC06.htm",
    "data/MIC07.htm",
    "data/MRK.htm",
    "data/MRK01.htm",
    "data/MRK02.htm",
    "data/MRK03.htm",
    "data/MRK04.htm",
    "data/MRK05.htm",
    "data/MRK06.htm",
    "data/MRK07.htm",
    "data/MRK08.htm",
    "data/MRK09.htm",
    "data/MRK10.htm",
    "data/MRK11.htm",
    "data/MRK12.htm",
    "data/MRK13.htm",
    "data/MRK14.htm",
    "data/MRK15.htm",
    "data/MRK16.htm",
    "data/NAM.htm",
    "data/NAM01.htm",
    "data/NAM02.htm",
    "data/NAM03.htm",
    "data/NEH.htm",
    "data/NEH01.htm",
    "data/NEH02.htm",
    "data/NEH03.htm",
    "data/NEH04.htm",
    "data/NEH05.htm",
    "data/NEH06.htm",
    "data/NEH07.htm",
    "data/NEH08.htm",
    "data/NEH09.htm",
    "data/NEH10.htm",
    "data/NEH11.htm",
    "data/NEH12.htm",
    "data/NEH13.htm",
    "data/NUM.htm",
    "data/NUM01.htm",
    "data/NUM02.htm",
    "data/NUM03.htm",
    "data/NUM04.htm",
    "data/NUM05.htm",
    "data/NUM06.htm",
    "data/NUM07.htm",
    "data/NUM08.htm",
    "data/NUM09.htm",
    "data/NUM10.htm",
    "data/NUM11.htm",
    "data/NUM12.htm",
    "data/NUM13.htm",
    "data/NUM14.htm",
    "data/NUM15.htm",
    "data/NUM16.htm",
    "data/NUM17.htm",
    "data/NUM18.htm",
    "data/NUM19.htm",
    "data/NUM20.htm",
    "data/NUM21.htm",
    "data/NUM22.htm",
    "data/NUM23.htm",
    "data/NUM24.htm",
    "data/NUM25.htm",
    "data/NUM26.htm",
    "data/NUM27.htm",
    "data/NUM28.htm",
    "data/NUM29.htm",
    "data/NUM30.htm",
    "data/NUM31.htm",
    "data/NUM32.htm",
    "data/NUM33.htm",
    "data/NUM34.htm",
    "data/NUM35.htm",
    "data/NUM36.htm",
    "data/OBA.htm",
    "data/OBA01.htm",
    "data/PHM.htm",
    "data/PHM01.htm",
    "data/PHP.htm",
    "data/PHP01.htm",
    "data/PHP02.htm",
    "data/PHP03.htm",
    "data/PHP04.htm",
    "data/PRO.htm",
    "data/PRO01.htm",
    "data/PRO02.htm",
    "data/PRO03.htm",
    "data/PRO04.htm",
    "data/PRO05.htm",
    "data/PRO06.htm",
    "data/PRO07.htm",
    "data/PRO08.htm",
    "data/PRO09.htm",
    "data/PRO10.htm",
    "data/PRO11.htm",
    "data/PRO12.htm",
    "data/PRO13.htm",
    "data/PRO14.htm",
    "data/PRO15.htm",
    "data/PRO16.htm",
    "data/PRO17.htm",
    "data/PRO18.htm",
    "data/PRO19.htm",
    "data/PRO20.htm",
    "data/PRO21.htm",
    "data/PRO22.htm",
    "data/PRO23.htm",
    "data/PRO24.htm",
    "data/PRO25.htm",
    "data/PRO26.htm",
    "data/PRO27.htm",
    "data/PRO28.htm",
    "data/PRO29.htm",
    "data/PRO30.htm",
    "data/PRO31.htm",
    "data/PSA.htm",
    "data/PSA001.htm",
    "data/PSA002.htm",
    "data/PSA003.htm",
    "data/PSA004.htm",
    "data/PSA005.htm",
    "data/PSA006.htm",
    "data/PSA007.htm",
    "data/PSA008.htm",
    "data/PSA009.htm",
    "data/PSA010.htm",
    "data/PSA011.htm",
    "data/PSA012.htm",
    "data/PSA013.htm",
    "data/PSA014.htm",
    "data/PSA015.htm",
    "data/PSA016.htm",
    "data/PSA017.htm",
    "data/PSA018.htm",
    "data/PSA019.htm",
    "data/PSA020.htm",
    "data/PSA021.htm",
    "data/PSA022.htm",
    "data/PSA023.htm",
    "data/PSA024.htm",
    "data/PSA025.htm",
    "data/PSA026.htm",
    "data/PSA027.htm",
    "data/PSA028.htm",
    "data/PSA029.htm",
    "data/PSA030.htm",
    "data/PSA031.htm",
    "data/PSA032.htm",
    "data/PSA033.htm",
    "data/PSA034.htm",
    "data/PSA035.htm",
    "data/PSA036.htm",
    "data/PSA037.htm",
    "data/PSA038.htm",
    "data/PSA039.htm",
    "data/PSA040.htm",
    "data/PSA041.htm",
    "data/PSA042.htm",
    "data/PSA043.htm",
    "data/PSA044.htm",
    "data/PSA045.htm",
    "data/PSA046.htm",
    "data/PSA047.htm",
    "data/PSA048.htm",
    "data/PSA049.htm",
    "data/PSA050.htm",
    "data/PSA051.htm",
    "data/PSA052.htm",
    "data/PSA053.htm",
    "data/PSA054.htm",
    "data/PSA055.htm",
    "data/PSA056.htm",
    "data/PSA057.htm",
    "data/PSA058.htm",
    "data/PSA059.htm",
    "data/PSA060.htm",
    "data/PSA061.htm",
    "data/PSA062.htm",
    "data/PSA063.htm",
    "data/PSA064.htm",
    "data/PSA065.htm",
    "data/PSA066.htm",
    "data/PSA067.htm",
    "data/PSA068.htm",
    "data/PSA069.htm",
    "data/PSA070.htm",
    "data/PSA071.htm",
    "data/PSA072.htm",
    "data/PSA073.htm",
    "data/PSA074.htm",
    "data/PSA075.htm",
    "data/PSA076.htm",
    "data/PSA077.htm",
    "data/PSA078.htm",
    "data/PSA079.htm",
    "data/PSA080.htm",
    "data/PSA081.htm",
    "data/PSA082.htm",
    "data/PSA083.htm",
    "data/PSA084.htm",
    "data/PSA085.htm",
    "data/PSA086.htm",
    "data/PSA087.htm",
    "data/PSA088.htm",
    "data/PSA089.htm",
    "data/PSA090.htm",
    "data/PSA091.htm",
    "data/PSA092.htm",
    "data/PSA093.htm",
    "data/PSA094.htm",
    "data/PSA095.htm",
    "data/PSA096.htm",
    "data/PSA097.htm",
    "data/PSA098.htm",
    "data/PSA099.htm",
    "data/PSA100.htm",
    "data/PSA101.htm",
    "data/PSA102.htm",
    "data/PSA103.htm",
    "data/PSA104.htm",
    "data/PSA105.htm",
    "data/PSA106.htm",
    "data/PSA107.htm",
    "data/PSA108.htm",
    "data/PSA109.htm",
    "data/PSA110.htm",
    "data/PSA111.htm",
    "data/PSA112.htm",
    "data/PSA113.htm",
    "data/PSA114.htm",
    "data/PSA115.htm",
    "data/PSA116.htm",
    "data/PSA117.htm",
    "data/PSA118.htm",
    "data/PSA119.htm",
    "data/PSA120.htm",
    "data/PSA121.htm",
    "data/PSA122.htm",
    "data/PSA123.htm",
    "data/PSA124.htm",
    "data/PSA125.htm",
    "data/PSA126.htm",
    "data/PSA127.htm",
    "data/PSA128.htm",
    "data/PSA129.htm",
    "data/PSA130.htm",
    "data/PSA131.htm",
    "data/PSA132.htm",
    "data/PSA133.htm",
    "data/PSA134.htm",
    "data/PSA135.htm",
    "data/PSA136.htm",
    "data/PSA137.htm",
    "data/PSA138.htm",
    "data/PSA139.htm",
    "data/PSA140.htm",
    "data/PSA141.htm",
    "data/PSA142.htm",
    "data/PSA143.htm",
    "data/PSA144.htm",
    "data/PSA145.htm",
    "data/PSA146.htm",
    "data/PSA147.htm",
    "data/PSA148.htm",
    "data/PSA149.htm",
    "data/PSA150.htm",
    "data/REV.htm",
    "data/REV01.htm",
    "data/REV02.htm",
    "data/REV03.htm",
    "data/REV04.htm",
    "data/REV05.htm",
    "data/REV06.htm",
    "data/REV07.htm",
    "data/REV08.htm",
    "data/REV09.htm",
    "data/REV10.htm",
    "data/REV11.htm",
    "data/REV12.htm",
    "data/REV13.htm",
    "data/REV14.htm",
    "data/REV15.htm",
    "data/REV16.htm",
    "data/REV17.htm",
    "data/REV18.htm",
    "data/REV19.htm",
    "data/REV20.htm",
    "data/REV21.htm",
    "data/REV22.htm",
    "data/ROM.htm",
    "data/ROM01.htm",
    "data/ROM02.htm",
    "data/ROM03.htm",
    "data/ROM04.htm",
    "data/ROM05.htm",
    "data/ROM06.htm",
    "data/ROM07.htm",
    "data/ROM08.htm",
    "data/ROM09.htm",
    "data/ROM10.htm",
    "data/ROM11.htm",
    "data/ROM12.htm",
    "data/ROM13.htm",
    "data/ROM14.htm",
    "data/ROM15.htm",
    "data/ROM16.htm",
    "data/RUT.htm",
    "data/RUT01.htm",
    "data/RUT02.htm",
    "data/RUT03.htm",
    "data/RUT04.htm",
    "data/ISA43.htm",
    "data/SNG.htm",
    "data/SNG01.htm",
    "data/SNG02.htm",
    "data/SNG03.htm",
    "data/SNG04.htm",
    "data/SNG05.htm",
    "data/SNG06.htm",
    "data/SNG07.htm",
    "data/SNG08.htm",
    "data/TIT.htm",
    "data/TIT01.htm",
    "data/TIT02.htm",
    "data/TIT03.htm",
    "data/ZEC.htm",
    "data/ZEC01.htm",
    "data/ZEC02.htm",
    "data/ZEC03.htm",
    "data/ZEC04.htm",
    "data/ZEC05.htm",
    "data/ZEC06.htm",
    "data/ZEC07.htm",
    "data/ZEC08.htm",
    "data/ZEC09.htm",
    "data/ZEC10.htm",
    "data/ZEC11.htm",
    "data/ZEC12.htm",
    "data/ZEC13.htm",
    "data/ZEP03.htm"
];
