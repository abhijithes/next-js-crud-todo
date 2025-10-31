self.addEventListener("fetch", (event) => {
    if (event.request.url.includes("/api/")) {
        event.respondWith(
            caches.open("api-cache").then((cache) =>
                fetch(event.request)
                    .then((response) => {
                        cache.put(event.request, response.clone());
                        return response;
                    })
                    .catch(() => cache.match(event.request))
            )
        );
    }
});
