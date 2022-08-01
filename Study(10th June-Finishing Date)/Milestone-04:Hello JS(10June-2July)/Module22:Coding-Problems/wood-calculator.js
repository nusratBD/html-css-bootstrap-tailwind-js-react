/* 
woodPerChair = 3cf;
woodPerTable = 10cf;
woodPerBed = 50cf;
*/

let chairQuantity = 3;
let tableQuantity = 1;
let BedQuantity = 2;

function woodCalculator(chairQuantity, tableQuantity,BedQuantity){
    let woodPerChair = 3;
    let woodPerTable = 10;
    let woodPerBed = 50;

    let totalChairWood = chairQuantity * woodPerChair;
    let totalTableWood = tableQuantity * woodPerTable;
    let totalBedWood = BedQuantity * woodPerBed;

    let totalWood = totalChairWood + totalTableWood + totalBedWood;

    return totalWood;
}

let result = woodCalculator(chairQuantity, tableQuantity, BedQuantity);
console.log(result);