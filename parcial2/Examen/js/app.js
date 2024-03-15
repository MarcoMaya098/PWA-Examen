if (navigator.serviceWorker) {
    console.log("Si es compatible");
    navigator.serviceWorker.register('/sw.js');
}



// function publishIdToServiceWorker(id) {
//     navigator.serviceWorker.controller.postMessage({
//         type: 'publishId',
//         id: id
//     });
// }
