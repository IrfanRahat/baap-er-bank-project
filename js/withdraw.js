// step 1
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-amount');

    // step-2 input field er vitorer element paite hole .value use hbe 
    const depositAmountString = withdrawField.value;
    // step-3 string to number kore nilam
    const withdrawAmount = parseFloat(depositAmountString);
    //step-10 if er age na dile withdraw input er number ta theke jaay
    withdrawField.value = '';
    if (isNaN(withdrawAmount)) {
        alert('provide a number');
        return
    }

    // step-4
    const totalDepositAmount = document.getElementById('withdraw-total');
    //step-5 for non input (element other than input and textarea ) use .innertext
    const depositTotalString = totalDepositAmount.innerText;
    //step-6 text theke number hisabe nite chaile string to number kore nite hobe
    const depositTotal = parseFloat(depositTotalString);
    // step-9. step-9 step 7 er age na dile please withdraw amount ta withdraw er grid e jog kore fele
    const totalBalanceField = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceField.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    if (withdrawAmount > totalBalance) {
        alert('goribxoda eto taka nai tor kache');
        return;
    }
    // step-7
    const depositFinal = depositTotal + withdrawAmount;
    // step-8 totaldepositamount er innertext hisabe depositfinal er output dekhabe
    totalDepositAmount.innerText = depositFinal;

    // finalbalance e totalbalance jog deposit input er variable taake jog korbo
    const finalBalance = totalBalance - withdrawAmount;
    totalBalanceField.innerText = finalBalance;

})