self.addEventListener('fetch', event => {
    console.log('IMPORTANT', event.request.url);

    if (event.request.url.includes('/img')) {
        event.respondWith(
            fetch('http://127.0.0.1:8080/img/nfl.png')
                .then(response => {
                    return response;
                })
        );
    }

    if (event.request.url === 'https://jsonplaceholder.typicode.com/todos') {
        event.respondWith(
            fetch(event.request)
                .then(response => response.json())
                .then(data => {
                    const modifiedData = data.map(todo => {
                        todo.id = todo.id + ' #NFL# '; 
                        return todo;
                    });
                    const modifiedResponse = new Response(JSON.stringify(modifiedData), {
                        headers: {'Content-Type': 'application/json'}
                    });
                    return modifiedResponse;
                })
        );
    }
});
