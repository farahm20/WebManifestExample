/**
 * this provides a minimal service worker file.
 */

self.addEventListener('install', function(event){
    console.log('Service worker: install');
    //attempts to load cached filea
});

self.addEventListener('fetch', function(event){
    console.log('Service worker: fetch');
    //look for cached files and handle AJAX failures due offline
});
