addEventListener('fetch', (event) => {
    event.respondWith(requestHandler(event.request));
});

async function requestHandler(request)
{
    const url = new URL(request.url);
    const path = url.pathname.split('/');

    /**
     * No short-code specified
     */
    if (!path[1]) {
        return Response.redirect(FALLBACK_URL, 302);
    }

    const code = path[1];
    const getUrl = await URLS_KV.get(code);

    /**
     * Invalid code
     */
    if (getUrl === null) {
        return Response.redirect(FALLBACK_URL, 302);
    }

    return Response.redirect(getUrl, 301);
}