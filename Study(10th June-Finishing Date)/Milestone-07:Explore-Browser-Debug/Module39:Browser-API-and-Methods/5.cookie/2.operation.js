//We are able to runt this code only in browser while visiting a website
document.cookie;//show cookie
document.cookie.split('; ');//It will provide an array of the cookies
document.cookie.split('; ').map(c=>console.log(c));//Show the data as a plain text.
document.cookie.split('; ').map(c=>console.log(c.split('=')));//show every key and value in an array.
//find value:
document.cookie.split('; ').find(c=>c.includes('country'));
//find value except key
document.cookie.split('; ').find(c=>c.includes('country')).split('=')[1]

/* 
Summary:
1. In every website we can set cookie, read cookie.
2. When we send data to server, we can send cookie(on header). Server can read cookie and set cookie.
*/
