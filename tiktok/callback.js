const callback = new URL('http://localhost:4007/integrations/social/tiktok');
callback.search = window.location.search;
callback.hash = window.location.hash;
window.location.replace(callback.href);
