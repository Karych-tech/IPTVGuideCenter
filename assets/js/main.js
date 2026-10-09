(function () {
  "use strict";
  if (typeof ARTICLES === "undefined") return;
  var base = document.body.getAttribute("data-base") || "";
  var all = ARTICLES.slice().sort(function (a, b) { return b.date.localeCompare(a.date); });
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
  function catSlug(n) { var c = CATEGORIES.filter(function (x) { return x.name === n; })[0]; return c ? c.slug : ""; }
  function card(a) {
    var d = a.updated || a.date;
    return '<article class="card"><a class="card-img" href="' + base + a.url + '" tabindex="-1" aria-hidden="true"><img src="' + base + a.image + '" alt="' + esc(a.alt || a.title) + '" width="600" height="315" loading="lazy"></a>' +
      '<div class="card-body"><a class="tag" href="' + base + 'categories/' + catSlug(a.category) + '">' + esc(a.category) + '</a>' +
      '<h3><a href="' + base + a.url + '">' + esc(a.title) + '</a></h3><p>' + esc(a.excerpt) + '</p>' +
      '<div class="meta"><time datetime="' + d + '">Updated ' + d + '</time><a class="btn-link" href="' + base + a.url + '">Read article<span class="sr"> : ' + esc(a.title) + '</span></a></div></div></article>';
  }
  function fill(el, list) { el.innerHTML = list.map(card).join(""); }

  // Data-driven lists: latest, featured, popular, category
  document.querySelectorAll("[data-list]").forEach(function (el) {
    var t = el.getAttribute("data-list"), v = el.getAttribute("data-value"), n = parseInt(el.getAttribute("data-limit"), 10) || 999, l = all;
    if (t === "featured") l = all.filter(function (a) { return a.featured; });
    if (t === "popular") l = all.filter(function (a) { return a.popular; });
    if (t === "category") l = all.filter(function (a) { return a.category === v; });
    fill(el, l.slice(0, n));
  });

  // Related articles: explicit "rel" slugs first, then same category, then newest
  document.querySelectorAll("[data-related]").forEach(function (el) {
    var slug = el.getAttribute("data-slug"), cur = all.filter(function (a) { return a.slug === slug; })[0];
    if (!cur) return;
    var out = [];
    function add(a) { if (a.slug !== slug && out.indexOf(a) < 0 && out.length < 3) out.push(a); }
    (cur.rel || []).forEach(function (s) { all.forEach(function (a) { if (a.slug === s) add(a); }); });
    all.forEach(function (a) { if (a.category === cur.category) add(a); });
    all.forEach(add);
    fill(el, out);
    var fb = el.parentNode.querySelector(".rel-fallback"); if (fb) fb.style.display = "none";
  });
  document.querySelectorAll(".rel-fallback").forEach(function (u) { if (!u.nextElementSibling || !u.nextElementSibling.children.length) u.style.display = "block"; });

  // Search
  var form = document.querySelector("[data-search-form]");
  if (form) {
    var input = form.querySelector("input"), box = document.querySelector("[data-search-results]"), status = document.getElementById("search-status");
    function run() {
      var q = input.value.trim().toLowerCase();
      if (!q) { if (box.getAttribute("data-all")) { fill(box, all); status.textContent = all.length + " articles"; } else { box.innerHTML = ""; status.textContent = ""; } return; }
      var words = q.split(/\s+/);
      var res = all.map(function (a) {
        var t = a.title.toLowerCase(), c = a.category.toLowerCase(), e = a.excerpt.toLowerCase(), s = 0;
        for (var i = 0; i < words.length; i++) {
          var w = words[i], m = 0;
          if (t.indexOf(w) > -1) m += 3; if (c.indexOf(w) > -1) m += 2; if (e.indexOf(w) > -1) m += 1;
          if (!m) return null; s += m;
        }
        return { a: a, s: s };
      }).filter(Boolean).sort(function (x, y) { return y.s - x.s; }).map(function (r) { return r.a; });
      if (res.length) { fill(box, res); status.textContent = res.length + (res.length === 1 ? " article found" : " articles found") + ' for "' + input.value.trim() + '"'; }
      else { box.innerHTML = '<div class="empty"><strong>No results found.</strong><p>Try a different keyword such as "firestick", "buffering" or "playlist", or browse the <a href="' + base + 'articles">full article list</a>.</p></div>'; status.textContent = "No articles found"; }
    }
    form.addEventListener("submit", function (e) { e.preventDefault(); run(); });
    input.addEventListener("input", run);
    var p = new URLSearchParams(location.search).get("q");
    if (p) { input.value = p; run(); }
    if (location.hash === "#search") input.focus();
  }

  // Mobile menu
  var btn = document.querySelector(".menu-btn"), nav = document.getElementById("site-nav");
  if (btn && nav) {
    function setOpen(o) { nav.classList.toggle("open", o); btn.setAttribute("aria-expanded", o); btn.setAttribute("aria-label", o ? "Close menu" : "Open menu"); }
    btn.addEventListener("click", function () { setOpen(btn.getAttribute("aria-expanded") !== "true"); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setOpen(false); btn.focus(); } });
    nav.addEventListener("click", function (e) { if (e.target.tagName === "A") setOpen(false); });
  }
})();
