function getInput(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValue = inputField.value;
    const value = parseFloat(inputValue);
    inputField.value = "";
    return value;
}
function showTotal(fieldId, amount){
    document.getElementById(fieldId);
}
document.getElementById('deposit-btn').addEventListener('click', function(){
    getInput('deposit-input');
})