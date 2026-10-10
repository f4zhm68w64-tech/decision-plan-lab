const C="decision-plan-lab-v1-0-0";
const A=["./","./index.html","./manifest.webmanifest","./icon.svg"];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate",e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k.startsWith("decision-plan-lab-")&&k!==C).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("message",e=>{
  if(e.data && e.data.type==="SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;

  if(e.request.mode==="navigate"){
    e.respondWith(
      fetch(e.request,{cache:"no-store"})
        .then(r=>{
          const copy=r.clone();
          caches.open(C).then(c=>c.put("./index.html",copy));
          return r;
        })
        .catch(()=>caches.match("./index.html"))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached=>
      cached || fetch(e.request).then(r=>{
        const copy=r.clone();
        caches.open(C).then(c=>c.put(e.request,copy));
        return r;
      })
    )
  );
});