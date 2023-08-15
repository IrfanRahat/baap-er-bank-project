document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-amount');
    // input field er vitorer element paite hole .value use hbe
    
    const depositAmountString = depositField.value;
//  string to number kore nilam
    const depositAmount = parseFloat(depositAmountString);
    withdrawField.value = '';
    if (isNaN(withdrawAmount)) {
        alert('provide a number');
        return
    }
    

    const totalDepositAmount= document.getElementById('deposit-total');
    // for non input (element other than input and textarea ) use .innertext
   
    const depositTotalString= totalDepositAmount.innerText;
// text theke number hisabe nite chaile string to number kore nite hobe
    const depositTotal = parseFloat(depositTotalString);

    const depositFinal = depositTotal + depositAmount;
// totaldepositamount er innertext hisabe depositfinal er output dekhabe
    totalDepositAmount.innerText = depositFinal;

    const totalBalanceField=document.getElementById('total-balance');
    const totalBalanceString = totalBalanceField.innerText; 
    const totalBalance = parseFloat(totalBalanceString);
    // finalbalance e totalbalance jog deposit input er variable taake jog korbo
    const finalBalance = totalBalance + depositAmount;
    totalBalanceField.innerText = finalBalance;


    // const depositFinal = depositAmount + depositTotal;

    
})