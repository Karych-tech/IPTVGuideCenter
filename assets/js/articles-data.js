/* Central content data. To add an article: add an entry here and create articles/<slug>.html. */
const CATEGORIES = [
  {
    "slug": "iptv-basics",
    "name": "IPTV Basics",
    "blurb": "Start here if IPTV is new to you. These guides explain the technology, the jargon and the requirements."
  },
  {
    "slug": "setup-guides",
    "name": "Setup Guides",
    "blurb": "Device-by-device walkthroughs for getting an IPTV player installed and working."
  },
  {
    "slug": "iptv-players",
    "name": "IPTV Players",
    "blurb": "Guides to the apps that load playlists and turn them into a usable TV guide."
  },
  {
    "slug": "troubleshooting",
    "name": "Troubleshooting",
    "blurb": "Practical fixes for buffering, freezing and other playback issues."
  }
];
const ARTICLES = [
  {
    "title": "What Is IPTV and How Does It Work?",
    "slug": "what-is-iptv",
    "date": "2026-09-15",
    "updated": "2026-10-03",
    "image": "assets/images/articles/what-is-iptv/hero.webp",
    "alt": "Smart TV showing a live channel guide delivered over an internet connection",
    "excerpt": "A plain-English explanation of IPTV: how television is delivered over the internet, what you need and what to watch out for.",
    "url": "articles/what-is-iptv",
    "featured": true,
    "popular": true,
    "rel": [
      "m3u-playlist",
      "iptv-internet-speed",
      "iptv-smarters",
      "iptv-firestick"
    ],
    "category": "IPTV Basics"
  },
  {
    "title": "How to Set Up IPTV on Firestick: Complete Guide",
    "slug": "iptv-firestick",
    "date": "2026-09-15",
    "updated": "2026-10-03",
    "image": "assets/images/articles/iptv-firestick/hero.webp",
    "alt": "Amazon Firestick plugged into the HDMI port of a television",
    "excerpt": "Prepare your Amazon Firestick, install an IPTV player and add your playlist in a few clear steps.",
    "url": "articles/iptv-firestick",
    "featured": true,
    "popular": true,
    "rel": [
      "what-is-iptv",
      "iptv-smarters",
      "iptv-buffering",
      "iptv-internet-speed"
    ],
    "category": "Setup Guides"
  },
  {
    "title": "How to Install IPTV on Samsung Smart TV",
    "slug": "iptv-samsung-tv",
    "date": "2026-09-15",
    "updated": "2026-10-03",
    "image": "assets/images/articles/iptv-samsung-tv/hero.webp",
    "alt": "Samsung Smart TV showing its home screen with the app row",
    "excerpt": "Find a compatible player in the Samsung app store, add your playlist and know what to do if no app is available.",
    "url": "articles/iptv-samsung-tv",
    "featured": false,
    "popular": false,
    "rel": [
      "iptv-lg-tv",
      "iptv-firestick",
      "m3u-playlist",
      "iptv-internet-speed"
    ],
    "category": "Setup Guides"
  },
  {
    "title": "How to Install IPTV on LG Smart TV",
    "slug": "iptv-lg-tv",
    "date": "2026-09-15",
    "updated": "2026-10-03",
    "image": "assets/images/articles/iptv-lg-tv/hero.webp",
    "alt": "LG Smart TV displaying the webOS home bar",
    "excerpt": "Use the LG Content Store to install an IPTV player on webOS and load your playlist.",
    "url": "articles/iptv-lg-tv",
    "featured": false,
    "popular": false,
    "rel": [
      "iptv-samsung-tv",
      "iptv-smarters",
      "m3u-playlist",
      "iptv-buffering"
    ],
    "category": "Setup Guides"
  },
  {
    "title": "How to Set Up IPTV on Android TV",
    "slug": "iptv-android-tv",
    "date": "2026-09-15",
    "updated": "2026-10-03",
    "image": "assets/images/articles/iptv-android-tv/hero.webp",
    "alt": "Android TV home screen with a remote control in the foreground",
    "excerpt": "Install a player from Google Play on Android TV or Google TV, add a playlist and tune the basic settings.",
    "url": "articles/iptv-android-tv",
    "featured": false,
    "popular": false,
    "rel": [
      "iptv-tivimate",
      "iptv-smarters",
      "iptv-internet-speed",
      "what-is-iptv"
    ],
    "category": "Setup Guides"
  },
  {
    "title": "How to Use IPTV Smarters: Beginner's Guide",
    "slug": "iptv-smarters",
    "date": "2026-09-15",
    "updated": "2026-10-03",
    "image": "assets/images/articles/iptv-smarters/hero.webp",
    "alt": "IPTV Smarters home screen with Live TV, Movies and Series tiles",
    "excerpt": "Understand the login methods, main screens and key settings of IPTV Smarters in a simple walkthrough.",
    "url": "articles/iptv-smarters",
    "featured": false,
    "popular": true,
    "rel": [
      "m3u-playlist",
      "iptv-firestick",
      "iptv-tivimate",
      "iptv-buffering"
    ],
    "category": "IPTV Players"
  },
  {
    "title": "How to Set Up IPTV on TiviMate",
    "slug": "iptv-tivimate",
    "date": "2026-09-15",
    "updated": "2026-10-03",
    "image": "assets/images/articles/iptv-tivimate/hero.webp",
    "alt": "TiviMate channel list and programme guide on a television",
    "excerpt": "Install TiviMate on Android-based devices, add a playlist and organise your channels and guide.",
    "url": "articles/iptv-tivimate",
    "featured": false,
    "popular": false,
    "rel": [
      "iptv-android-tv",
      "m3u-playlist",
      "iptv-smarters",
      "iptv-buffering"
    ],
    "category": "IPTV Players"
  },
  {
    "title": "How to Fix IPTV Buffering: 10 Solutions",
    "slug": "iptv-buffering",
    "date": "2026-09-15",
    "updated": "2026-10-03",
    "image": "assets/images/articles/iptv-buffering/hero.webp",
    "alt": "TV screen showing a loading spinner while a channel buffers",
    "excerpt": "Ten practical checks, from your network to the player app, that fix most IPTV freezing and buffering.",
    "url": "articles/iptv-buffering",
    "featured": true,
    "popular": true,
    "rel": [
      "iptv-internet-speed",
      "m3u-playlist",
      "iptv-firestick",
      "iptv-smarters"
    ],
    "category": "Troubleshooting"
  },
  {
    "title": "What Internet Speed Do You Need for IPTV?",
    "slug": "iptv-internet-speed",
    "date": "2026-09-15",
    "updated": "2026-10-03",
    "image": "assets/images/articles/iptv-internet-speed/hero.webp",
    "alt": "Internet speed test gauge showing download speed on a laptop",
    "excerpt": "Realistic bandwidth guidelines for SD, HD and 4K IPTV, plus how Wi-Fi and multiple devices change the picture.",
    "url": "articles/iptv-internet-speed",
    "featured": false,
    "popular": true,
    "rel": [
      "iptv-buffering",
      "what-is-iptv",
      "iptv-firestick",
      "iptv-android-tv"
    ],
    "category": "IPTV Basics"
  },
  {
    "title": "What Is an M3U Playlist? Complete Beginner's Guide",
    "slug": "m3u-playlist",
    "date": "2026-09-15",
    "updated": "2026-10-03",
    "image": "assets/images/articles/m3u-playlist/hero.webp",
    "alt": "M3U playlist file opened in a text editor",
    "excerpt": "What an M3U file or link contains, how players read it and how to keep your playlist private.",
    "url": "articles/m3u-playlist",
    "featured": false,
    "popular": true,
    "rel": [
      "what-is-iptv",
      "iptv-smarters",
      "iptv-tivimate",
      "iptv-buffering"
    ],
    "category": "IPTV Basics"
  }
];
