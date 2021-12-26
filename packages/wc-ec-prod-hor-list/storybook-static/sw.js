/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "iframe.html",
    "revision": "0b49eef00e10c9d1d10fc0896d2a711e"
  },
  {
    "url": "index.html",
    "revision": "a26cd4fb2ec9e032248d2bc0ef7c314f"
  },
  {
    "url": "index.stories-96f2c324.js",
    "revision": "714e144226c401d03e6a6b9794eaabfb"
  },
  {
    "url": "inline-entry.0-8c982caf.js",
    "revision": "2e92dc4aca8e9ceb44543d4e70f14ec4"
  },
  {
    "url": "legacy/index.stories-351a990a.js",
    "revision": "70a3ad46d0d4099a3085ad080800aa3a"
  },
  {
    "url": "legacy/inline-entry.0-6c8f253f.js",
    "revision": "8756172108549896460e577ec295bf43"
  },
  {
    "url": "legacy/preview-6104fb47.js",
    "revision": "4638406a1f97175b3106f4738fc56cb4"
  },
  {
    "url": "polyfills/core-js.32405a1a59519d0ca918cb9c6e134164.js",
    "revision": "169d8688dcb50bc3c902336886976c46"
  },
  {
    "url": "polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",
    "revision": "cff507bc95ad1d6bf1a415cc9c8852b0"
  },
  {
    "url": "polyfills/dynamic-import.b745cfc9384367cc18b42bbef2bbdcd9.js",
    "revision": "ed55766050be285197b8f511eacedb62"
  },
  {
    "url": "polyfills/fetch.191258a74d74243758f52065f3d0962a.js",
    "revision": "fcdc4efda1fe1b52f814e36273ff745d"
  },
  {
    "url": "polyfills/regenerator-runtime.92d44da139046113cb3739b173605787.js",
    "revision": "3aa324bcf8f59cd0eebf46796948aafa"
  },
  {
    "url": "polyfills/systemjs.6dfbfd8f2c3e558918ed74d133a6757a.js",
    "revision": "683aabfb9b006607885b83e45e9a1768"
  },
  {
    "url": "polyfills/webcomponents.dae9f79d9d6992b6582e204c3dd953d3.js",
    "revision": "fe4a22f36087db029cd3f476a1935410"
  },
  {
    "url": "preview-5cc1d034.js",
    "revision": "5297445a5fad098b1bf38676520c5857"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
