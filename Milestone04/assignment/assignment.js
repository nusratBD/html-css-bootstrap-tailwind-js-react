// Problem01: ana to vori
function anaToVori(ana){
    if(ana<=0){
        return 'Please Enter a valid value';
    }
    else{
        const vori = 0.0625*ana;
        return vori;
    }
}
// Problem02: pandaCost calculation
function pandaCost(singara, somucha, jilapi){
const priceSingaraPerPiece = 7;
const priceSomuchaPerPiece = 10;
const priceJilapiPerPiece = 15;
if(singara>=1 && somucha>=1 && jilapi>=1){
const totalSingaraPrice = singara*priceSingaraPerPiece;
const totalSomuchaPrice = somucha*priceSomuchaPerPiece;
const totalJilapiPrice = jilapi*priceJilapiPerPiece;
const total = totalSingaraPrice + totalSomuchaPrice + totalJilapiPrice;
return total;
}
else{
    return "Please enter the positive quantity.";
}
}
// Problem 03: picnicBudget
function picnicBudget(members){
    const firstHundredCost = 5000;
    const secondHundredCost = 4000;
    const moreHundredCost = 3000;
    if(members<1){
        return 'Members can not be zero and negative value.';
    }
    else{
        if(members<=100){
        const totalCost = members*firstHundredCost;
        return totalCost;
        }
        else if(members<=200){
        const totalFirstHundredCost = 100*firstHundredCost;
        const totalSecondHundredCost = (members-100)*secondHundredCost;
        const totalCost = totalFirstHundredCost + totalSecondHundredCost;
        return totalCost;
        }
        else{
        const totalFirstHundredCost = 100*firstHundredCost;
        const totalSecondHundredCost = 100*secondHundredCost;
        const totalMoreHundredCost = (members-200)*moreHundredCost;
        const totalCost = totalFirstHundredCost + totalSecondHundredCost + totalMoreHundredCost;
        return totalCost;
        }
}
    }
// Problem 04: oddFriend
function oddFriend(friendsName){
    let evenNameNumber = 0;
    for(let i=0; i<friendsName.length; i++){
        if(typeof friendsName[i]==='string'){
            if(friendsName[i].length%2==1){
                return friendsName[i];
                break;
            }
            else if(friendsName[i].length%2==0){
                evenNameNumber++;
                if(evenNameNumber==friendsName.length){
                    return 'There is no odd Name.'
                }
            }
        }
        else{
            return 'Name must be a string value.'
        }
        }
    }
