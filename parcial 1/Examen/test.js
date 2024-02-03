const url = 'https://jsonplaceholder.typicode.com/todos';

// STYLE TABLE , BUTTON
function createTable(data) {
    const table = document.createElement('table');
    const header = table.createTHead();
    const row = header.insertRow();
    for (const key in data[0]) {
        const th = document.createElement('th');
        th.textContent = key;
        row.appendChild(th);
    }

    const tbody = table.createTBody();
    data.forEach(item => {
        const row = tbody.insertRow();
        for (const key in item) {
            const cell = row.insertCell();
            cell.textContent = item[key];
        }
    });

    return table;
}

function displayList(data) {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    const table = createTable(data);
    todoList.appendChild(table);
}

function changeButtonStyle(buttonId) {
    const buttons = document.querySelectorAll('button'); 
    buttons.forEach(button => {
        if (button.id === buttonId) {
            button.style.fontWeight = 'bold'; 
            button.style.backgroundColor = 'lightgray'; 
        } else {
            button.style.fontWeight = 'normal';
            button.style.backgroundColor = '';
        }
    });
}
 

// GET LIST
function getPendingsIds() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            const pendingIds = [];
            todos.forEach(todo => {
                pendingIds.push({ id: todo.id });
            });
            displayList(pendingIds);
            console.log(pendingIds);
            changeButtonStyle('btnIds'); 
        })

}

function getPendingsIdsAndTitles() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            const pendingIdsAndTitles = [];
            todos.forEach(todo => {
                pendingIdsAndTitles.push({ id: todo.id, title: todo.title });
            });
            displayList(pendingIdsAndTitles);
            console.log(pendingIdsAndTitles);
            changeButtonStyle('btnIdsTitles'); 
        })
}

function getUnresolvedPendings() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            const unresolvedPending = [];
            todos.forEach(todo => {
                if (!todo.completed) {
                    unresolvedPending.push({ id: todo.id, title: todo.title });
                }
            });
            displayList(unresolvedPending);
            console.log(unresolvedPending);
            changeButtonStyle('btnUnresolved'); 

        })
}

function getResolvedPendings() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            const resolvedPending = [];
            todos.forEach(todo => {
                if (todo.completed) {
                    resolvedPending.push({ id: todo.id, title: todo.title });
                }
            });
            displayList(resolvedPending);
            console.log(resolvedPending);
            changeButtonStyle('btnResolved'); 
        })
}

function getPendingsWithUserId() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            const pendingWithUserId = [];
            todos.forEach(todo => {
                pendingWithUserId.push({ id: todo.id, userId: todo.userId });
            });
            displayList(pendingWithUserId);
            console.log(pendingWithUserId);
            changeButtonStyle('btnIdsUserId'); 
        })
}

function getResolvedPendingsWithUserId() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            const resolvedPendingWithUserId = [];
            todos.forEach(todo => {
                if (todo.completed) {
                    resolvedPendingWithUserId.push({ id: todo.id, userId: todo.userId });
                }
            });
            displayList(resolvedPendingWithUserId);
            console.log(resolvedPendingWithUserId);
            changeButtonStyle('btnResolvedUserId'); 
        })
}

function getUnresolvedPendingsWithUserId() {
    fetch(url)
        .then(response => response.json())
        .then(todos => {
            const unresolvedPendingWithUserId = [];
            todos.forEach(todo => {
                if (!todo.completed) {
                    unresolvedPendingWithUserId.push({ id: todo.id, userId: todo.userId });
                }
            });
            displayList(unresolvedPendingWithUserId);
            console.log(unresolvedPendingWithUserId);
            changeButtonStyle('btnUnresolvedUserId'); 
        })
}








