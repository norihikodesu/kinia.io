/* Shared navigation for the Kinia public website. */
(function(){'use strict';
var sc=document.currentScript;
sc.insertAdjacentHTML('afterend',`<nav id="kinia-nav" aria-label="共通ナビゲーション"><div class="kn-inner"><a href="/" class="kn-brand" aria-label="Kinia（キニア）トップページ"><img src="/images/app_icon.png" alt="" width="35" height="35"><span>Kinia</span><small>キニア</small></a><div class="kn-links" id="kinia-nav-links"><a href="/#moments">できること</a><a href="/setup.html">始め方</a><a href="/faq.html">よくある質問</a><a href="/data-safety.html">データの扱い</a><a href="/#contact">お問い合わせ</a></div><div class="kn-actions"><a class="kn-cta" href="https://play.google.com/store/apps/details?id=io.kinia" aria-label="Google PlayでKiniaを入手"><span class="kn-cta-full">Google Playで入手 ↗</span><span class="kn-cta-short" aria-hidden="true">Playで入手 ↗</span></a><button class="kn-toggle" type="button" aria-label="メニューを開く" aria-controls="kinia-nav-links" aria-expanded="false">☰</button></div></div></nav>`);
var n=document.getElementById('kinia-nav'),b=n.querySelector('.kn-toggle'),l=n.querySelector('.kn-links');
function close(){l.classList.remove('is-open');b.setAttribute('aria-expanded','false');b.setAttribute('aria-label','メニューを開く');}
b.addEventListener('click',function(){var on=l.classList.toggle('is-open');b.setAttribute('aria-expanded',String(on));b.setAttribute('aria-label',on?'メニューを閉じる':'メニューを開く');});
l.addEventListener('click',function(e){if(e.target.closest('a'))close();});
document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
document.addEventListener('click',function(e){if(!n.contains(e.target))close();});
function size(){document.documentElement.style.setProperty('--kinia-nav-height',n.offsetHeight+'px');if(innerWidth>800)close();}size();addEventListener('resize',size);if(typeof ResizeObserver!=='undefined')new ResizeObserver(size).observe(n);
document.addEventListener('click',function(e){var a=e.target.closest('a[href]');if(!a||typeof gtag!=='function')return;var h=a.href||'';if(h.indexOf('play.google.com')!==-1)gtag('event','store_click',{store:'google_play',page_path:location.pathname});else if(h.indexOf('note.com')!==-1)gtag('event','note_click',{page_path:location.pathname});else if(h.indexOf('forms.gle')!==-1)gtag('event','contact_click',{page_path:location.pathname});});
})();
