const getCookie = name =>{
    const cookie = document.cookie;
    const allCookie = cookie.split('; '); //cookie will be an array
    const findCookie = allCookie.find(c=>c.includes(name));//it will check does this specific data exists or not. If exit, it will store the data.
    if(findCookie){
        const cookieValue = findCookie.split('=');//it will give the array in name=value system
        return cookieValue[1];
    }
}