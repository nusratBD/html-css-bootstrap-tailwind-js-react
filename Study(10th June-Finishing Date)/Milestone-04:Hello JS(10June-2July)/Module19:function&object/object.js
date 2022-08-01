//1. Object Declaration:
var myself = {
    name: "Nusrat Hurain",
    age: 25,
    education: "Illiterate",
    job: "Vagabond"
};

//2. Get Full Object:
console.log(myself);

//3. Get Specific Property:
console.log(myself.job);

//4. Set Object Property:
//System: 01
myself.job = "Software Engineer";
//System: 02
myself['education'] = "Graduate";
//System: 03
var newName = "name";
myself[newName] = "Nusrat Hurain Nuha";
console.log(myself);