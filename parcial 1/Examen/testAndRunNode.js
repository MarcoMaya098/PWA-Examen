const url = 'https://jsonplaceholder.typicode.com/todos';


//GET LIST AND RUN IN NODE.JS
function getPendingsIds() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                console.log({ id: todo.id });
            });
        })
}

function getPendingsIdsAndTitles() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                console.log({ id: todo.id, title: todo.title });
            });
        })
}

function getUnresolvedPendings() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                if (!todo.completed) {
                    console.log({ id: todo.id, title: todo.title });
                }
            });
        })
}

function getResolvedPendings() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                if (todo.completed) {
                    console.log({ id: todo.id, title: todo.title });
                }
            });
        })
}

function getPendingsWithUserId() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                console.log({ id: todo.id, userId: todo.userId });
            });
        })
}

function getResolvedPendingsWithUserId() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                if (todo.completed) {
                    console.log({ id: todo.id, userId: todo.userId });
                }
            });
        })
}

function getUnresolvedPendingsWithUserId() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                if (!todo.completed) {
                    console.log({ id: todo.id, userId: todo.userId });
                }
            });
        })
}


getPendingsIds();
getPendingsIdsAndTitles();
getUnresolvedPendings();
getResolvedPendings();
getPendingsWithUserId();
getResolvedPendingsWithUserId();
getUnresolvedPendingsWithUserId();