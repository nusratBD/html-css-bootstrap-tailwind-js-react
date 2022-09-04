/* 
01. To move backward through history: 
This acts exactly as if the user clicked on the Back button in their browser toolbar.
*/
window.history.back();

/* 02. you can move forward */
window.history.forward();

/* 03. To move back one page (the equivalent of calling back()): */
window.history.go(-1);

/* 04. To move forward a page, just like calling forward(): */
window.history.go(1);

/* Similarly, you can move forward 2 pages by passing 2, and so forth.

Another use for the go() method is to refresh the current page by either passing 0, or by invoking it without an argument: */

// The following statements
// both have the effect of
// refreshing the page
window.history.go(0);
window.history.go();

/* You can determine the number of pages in the history stack by looking at the value of the length property: */

let numberOfEntries = window.history.length