(() => {
  'use strict';
  const id = 'G-9LR9DDCTCJ';
  const key = 'raylore.website.analytics.v1';
  const dialog = document.getElementById('analytics-dialog');
  const zh = document.documentElement.lang.startsWith('zh');
  let allowed = false;
  try { allowed = localStorage.getItem(key) === 'granted'; } catch (_) {}
  const state = document.getElementById('analytics-state');
  function showState() { if (state) state.textContent = zh ? ('可选网站统计：' + (allowed ? '已开启' : '已关闭')) : ('Optional website analytics: ' + (allowed ? 'on' : 'off')); }
  function enable() {
    window['ga-disable-' + id] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});
    window.gtag('js', new Date());
    window.gtag('config', id, {allow_google_signals: false, allow_ad_personalization_signals: false, cookie_prefix: 'raylore', cookie_path: '/raylore-intro', cookie_expires: 60 * 60 * 24 * 60, page_location: location.origin + location.pathname, page_referrer: '', send_page_view: true});
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(script);
  }
  function clearAnalyticsCookies() {
    document.cookie.split(';').forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      if (!name.startsWith('raylore')) return;
      for (const domain of ['', location.hostname, '.' + location.hostname]) {
        for (const path of ['/raylore-intro', '/raylore-intro/', '/']) {
          document.cookie = name + '=; Max-Age=0; path=' + path + (domain ? '; domain=' + domain : '') + '; SameSite=Lax; Secure';
        }
      }
    });
  }
  document.querySelectorAll('[data-analytics-open]').forEach(button => button.addEventListener('click', () => dialog.showModal()));
  document.getElementById('analytics-allow').addEventListener('click', () => {
    const wasAllowed = allowed; allowed = true;
    try { localStorage.setItem(key, 'granted'); } catch (_) {}
    if (!wasAllowed) enable(); showState(); dialog.close();
  });
  document.getElementById('analytics-deny').addEventListener('click', () => {
    const wasAllowed = allowed; allowed = false;
    window['ga-disable-' + id] = true;
    try { localStorage.setItem(key, 'denied'); } catch (_) {}
    clearAnalyticsCookies(); showState(); dialog.close();
    if (wasAllowed) location.reload();
  });
  document.getElementById('analytics-close').addEventListener('click', () => dialog.close());
  showState(); if (allowed) enable();
})();
