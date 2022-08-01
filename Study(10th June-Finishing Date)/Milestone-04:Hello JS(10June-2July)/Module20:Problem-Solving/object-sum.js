//Calculate the sum of salaries within an array of object

let employees = [
    {
        "id": 101,
        "name": "Nusrat Hurain",
        "age": 25,
        "salary": 50000000
    },
    {
        "id": 102,
        "name": "Mr.X",
        "age": 30,
        "salary": 50000000
    },
    {
        "id": 103,
        "name": "MD. Something",
        "age" : 28,
        "salary": 9000000
    },
    {
        "id": 104,
        "name": "Susoma",
        "age": 25,
        "salary" : 3000000
    }
];
let totalSalary = 0;
for(let i = 0; i<employees.length; i++){
totalSalary = totalSalary + employees[i].salary;
}
console.log(totalSalary);