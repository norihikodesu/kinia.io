/* Kinia common navigation — single source of truth */
(function(){
var css='\
nav.nav{--n-bg:rgba(251,246,239,0.92);--n-accent:#d97a5a;--n-accent2:#b85a3e;--n-sub:rgba(42,34,24,0.62);--n-mute:rgba(42,34,24,0.4);--n-ink:#2a2218;--n-line:rgba(42,34,24,0.08);--n-alt:#f4e8d8;\
position:sticky;top:0;z-index:100;background:var(--n-bg);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);\
border-bottom:1px solid var(--n-line);padding:14px 24px;display:flex;align-items:center;justify-content:space-between;\
font-family:"Zen Kaku Gothic New","Noto Sans JP",sans-serif}\
nav.nav .nav-brand{display:flex;align-items:center;gap:8px;text-decoration:none}\
nav.nav .nav-brand-name{font-family:"Shippori Mincho",serif;font-size:1.15rem;color:var(--n-accent);font-weight:600}\
nav.nav .nav-brand-ruby{font-family:"DM Mono",monospace;font-size:0.7rem;color:var(--n-sub)}\
nav.nav .hamburger{display:none;background:none;border:none;font-size:1.5rem;cursor:pointer;color:var(--n-ink);padding:10px;min-width:44px;min-height:44px}\
nav.nav .nav-links{display:flex;align-items:center;gap:20px;font-size:0.85rem}\
nav.nav .nav-links>a{color:var(--n-sub);text-decoration:none;transition:color .2s}\
nav.nav .nav-links>a:hover{color:var(--n-accent);text-decoration:none}\
nav.nav .nav-dropdown{position:relative}\
nav.nav .nav-dropdown-toggle{background:none;border:none;color:var(--n-sub);font-size:0.85rem;cursor:pointer;padding:0;font-family:inherit;transition:color .2s}\
nav.nav .nav-dropdown-toggle:hover{color:var(--n-accent)}\
nav.nav .nav-dropdown-menu{display:none;position:absolute;top:calc(100% + 10px);right:0;background:#fff;border:1px solid var(--n-line);border-radius:10px;padding:8px 0;min-width:240px;box-shadow:0 8px 32px rgba(42,34,24,0.12);z-index:200}\
nav.nav .nav-dropdown.open .nav-dropdown-menu{display:block}\
nav.nav .nav-dropdown-menu a{display:block;padding:10px 20px;color:var(--n-sub);font-size:0.9rem;transition:background .15s,color .15s;white-space:nowrap;text-decoration:none}\
nav.nav .nav-dropdown-menu a:hover{background:var(--n-alt);color:var(--n-ink)}\
nav.nav .nav-dd-primary{font-weight:600;color:var(--n-accent)!important}\
nav.nav .nav-dd-sub{display:block;padding:0 20px 6px;font-size:0.75rem;color:var(--n-mute);pointer-events:none}\
nav.nav .nav-dd-sep{border:none;border-top:1px solid var(--n-line);margin:4px 0}\
nav.nav .nav-cta{background:var(--n-accent);color:#fff!important;padding:8px 16px;border-radius:999px;font-weight:600;display:flex;align-items:center;gap:4px;text-decoration:none!important;transition:background .2s;font-size:0.85rem}\
nav.nav .nav-cta:hover{background:var(--n-accent2)!important}\
@media(max-width:768px){\
nav.nav .hamburger{display:block}\
nav.nav .nav-links{display:none;position:absolute;top:100%;left:0;right:0;background:rgba(251,246,239,0.98);border-bottom:1px solid var(--n-line);flex-direction:column;padding:16px 24px;gap:12px}\
nav.nav .nav-links.open{display:flex}\
}';

var html='\
<nav class="nav">\
<a href="/" class="nav-brand">\
<img src="/images/app_icon.png" alt="" width="28" height="28" style="border-radius:6px">\
<span class="nav-brand-name">Kinia</span>\
<span class="nav-brand-ruby">キニア</span>\
</a>\
<button class="hamburger" aria-label="メニュー">☰</button>\
<div class="nav-links">\
<a href="/#features">特徴</a>\
<a href="/#how">使い方</a>\
<div class="nav-dropdown">\
<button class="nav-dropdown-toggle">安心の設計 ▾</button>\
<div class="nav-dropdown-menu">\
<a href="/data-safety.html" class="nav-dd-primary">データの安全性</a>\
<span class="nav-dd-sub">暗号化やプライバシーの仕組み</span>\
<hr class="nav-dd-sep">\
<a href="/safety.html">安否確認機能</a>\
<span class="nav-dd-sub">災害時に家族の無事を確認</span>\
</div>\
</div>\
<a href="/faq.html">FAQ</a>\
<div class="nav-dropdown">\
<button class="nav-dropdown-toggle">ガイド ▾</button>\
<div class="nav-dropdown-menu">\
<a href="/setup.html" class="nav-dd-primary">はじめかたガイド</a>\
<a href="/guide-family-basic.html">3人家族セットアップ</a>\
<a href="/guide-join.html">招待された方へ</a>\
<hr class="nav-dd-sep">\
<a href="/senior.html">高齢のご家族がいる方へ</a>\
<a href="/school-child-watch.html" class="nav-dd-primary">小学生の見守り</a>\
<a href="/parents.html">お子さんを持つご家庭の方へ</a>\
<a href="/students.html">学生の方へ</a>\
<hr class="nav-dd-sep">\
<a href="/guide-sharing-all.html">画面の見方（すべて共有）</a>\
<a href="/guide-sharing-area.html">画面の見方（通知エリアのみ）</a>\
<hr class="nav-dd-sep">\
<a href="/compare.html">比較してみる</a>\
<a href="/for-kids.html">中高生の方へ</a>\
</div>\
</div>\
<a href="https://play.google.com/store/apps/details?id=io.kinia" class="nav-cta">\
ダウンロード\
<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-5-5 5 5-5 5" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>\
</a>\
</div>\
</nav>';

var s=document.createElement('style');
s.id='kinia-nav-css';
s.textContent=css;
document.head.appendChild(s);

var sc=document.currentScript;
sc.insertAdjacentHTML('afterend',html);

document.addEventListener('click',function(e){
    var dd=document.querySelectorAll('nav.nav .nav-dropdown.open');
    for(var i=0;i<dd.length;i++){if(!dd[i].contains(e.target))dd[i].classList.remove('open')}
});

var toggles=document.querySelectorAll('nav.nav .nav-dropdown-toggle');
for(var i=0;i<toggles.length;i++){
    toggles[i].addEventListener('click',function(){this.parentElement.classList.toggle('open')});
}

var hb=document.querySelector('nav.nav .hamburger');
if(hb) hb.addEventListener('click',function(){document.querySelector('nav.nav .nav-links').classList.toggle('open')});
})();
