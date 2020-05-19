importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/29f49c09ee4e1a0f7f93.js",
    "revision": "1ffc4506a879a58ba21be69ae3113ee1"
  },
  {
    "url": "/_nuxt/38de2eba48db98c521f1.js",
    "revision": "31caba65e46ccb9e052335c8eb96b978"
  },
  {
    "url": "/_nuxt/42c382b234cd67a90ab2.js",
    "revision": "9c1b6461af87273e44dd5d2148d6f9a7"
  },
  {
    "url": "/_nuxt/478141a60eb481f167ef.js",
    "revision": "76f59fc1cfb2724c67dc9d216e490b62"
  },
  {
    "url": "/_nuxt/51666aa33d7ce9833e33.js",
    "revision": "084a1b7aa57f8468b6737d3f21dc51f6"
  },
  {
    "url": "/_nuxt/5f7f0f2f3a14893e86a3.js",
    "revision": "9fee993b2f3d693d1112b04905812b05"
  },
  {
    "url": "/_nuxt/62599ade34c3c1d1a4e7.js",
    "revision": "9b27ae12a749d8407b1a9f901d0f16dd"
  },
  {
    "url": "/_nuxt/6d03aa68bf26f2397137.js",
    "revision": "ac33904e10d7ba3d77abe54db499c142"
  },
  {
    "url": "/_nuxt/be66d3ea794495da9188.js",
    "revision": "c3ddfc1b91e4c749552f3d17199f35d5"
  },
  {
    "url": "/_nuxt/c57a69b9426044bab98d.js",
    "revision": "fc4935e1de39292c3217241f26de37e2"
  },
  {
    "url": "/_nuxt/c699f844971f10416c3f.js",
    "revision": "8740b98f3ba1fb852c3ce50a0deeb91d"
  },
  {
    "url": "/_nuxt/dd05b8887a319eead9c3.js",
    "revision": "1e4360550aa08467f16543e3f8c397ae"
  },
  {
    "url": "/_nuxt/df44a0a5df5cf3e807d1.js",
    "revision": "3cbe6633da02060bc607598ec35ac7d9"
  },
  {
    "url": "/_nuxt/eb74fe71755f33becf2a.js",
    "revision": "95260367c06dbf6ac36afde07e43a711"
  },
  {
    "url": "/_nuxt/eeb51af8e5708d64b217.js",
    "revision": "b6c03ff2673397605eeb0ff32c46335a"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
