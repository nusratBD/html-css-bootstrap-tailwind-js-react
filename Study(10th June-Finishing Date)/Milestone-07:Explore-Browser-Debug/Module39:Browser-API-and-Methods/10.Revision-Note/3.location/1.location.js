// location: https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
const loc = document.location;
console.log(loc.href);      // https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container
console.log(loc.protocol);  // https:
console.log(loc.host);      // developer.mozilla.org:8080
console.log(loc.hostname);  // developer.mozilla.org
console.log(loc.port);      // 8080
console.log(loc.pathname);  // /en-US/search
console.log(loc.search);    // ?q=URL
console.log(loc.hash);      // #search-results-close-container
console.log(loc.origin);    // https://developer.mozilla.org:8080

location.assign('http://another.site') // load another page