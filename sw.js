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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-7f8c5ec84416df43e0cc.js"
  },
  {
    "url": "app.94ac0de468593f35b7f6.css"
  },
  {
    "url": "app-7b9d9c1887e3da059760.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-6ef6651c0c89f3a9729b.js"
  },
  {
    "url": "index.html",
    "revision": "844ecced2df4dd62e096797afb53dbe4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ab020fc68c6e61339a94bb675ccc582d"
  },
  {
    "url": "0.300532fd7b13d3c894f1.css"
  },
  {
    "url": "0-ebf65f7d3b845687496a.js"
  },
  {
    "url": "component---src-pages-index-js-57414b8afb742b20eb7b.js"
  },
  {
    "url": "1-a019d46228d5cd857900.js"
  },
  {
    "url": "static/d/376/path---index-6a9-EuSZ6LL1suj5nBSOaket5XxQQA4.json",
    "revision": "936f602882814519e657cd2b76f8d871"
  },
  {
    "url": "component---src-pages-404-js-345d29417cd1d2ee1c80.js"
  },
  {
    "url": "static/d/24/path---404-html-516-62a-XLZAbZFEBa6HWMqs2dJyN49c8E.json",
    "revision": "ed2191f73f72f96a9667ddb5a9c38ddf"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a73785d730d0362e13373308f34988c4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});