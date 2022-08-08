//Normal Function
function normal(data){
    console.log(arguments);
}
const result = normal(1, 2, 3, 4,5);//output: [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

//Arrow Function
const arrow = (data) => console.log(arguments);
const result2 = arrow(1, 2, 3, 4,5);//No data binding