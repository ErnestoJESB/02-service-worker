self.addEventListener('fetch', event => {
    // Verificamos si la solicitud es para una imagen
    if (event.request.destination === 'image') {
        event.respondWith(
            fetch(event.request).then(response => {
                // Si la respuesta es exitosa, devolvemos la imagen original
                if (response.ok) {
                    return response;
                }
                // Si no, devolvemos una imagen alternativa
                return fetch('C:/Users/Ernesto Soberano/Documents/10mo Cuatri/PWA/02-service-worker-fin/02-service-worker/img/main-patas-arriba.jpg');
            }).catch(() => {
                // En caso de error de red, también devolvemos la imagen alternativa
                return fetch('C:/Users/Ernesto Soberano/Documents/10mo Cuatri/PWA/02-service-worker-fin/02-service-worker/img/main-patas-arriba.jpg');
            })
        );
    }
});
