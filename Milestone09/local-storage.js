let db = {};
const addToDb = item =>{
    const storedData = localStorage.getItem('db');
    if(storedData){
        db = JSON.parse(storedData);
    }
    if(item in db){
        db[item] = db[item] + 1;
    }
    else{
        db[item] = 1;
    }
    localStorage.setItem('db', JSON.stringify(db));
}
const removeData = item =>{
    const storedData = localStorage.getItem('db');
    if(storedData){
       const readData = JSON.parse(storedData);
        delete readData[item];
        localStorage.setItem('db', JSON.stringify(readData));
    }
}