const initial= document.querySelector('#initial-price');
const quantity= document.querySelector('#stock-quantity');
const current= document.querySelector("#current-price");
const submit_ans= document.querySelector('#submit');
const output= document.querySelector("#output");

submit_ans.addEventListener("click", submitHandler)

function submitHandler(){
    var ip= Number(initial.value);
    var qty= Number(quantity.value);
    var curr= Number(current.value);
    calculateProfitAndLoss(ip,qty,curr);
}

function calculateProfitAndLoss(initial,quantity,current){
    if(initial>current){
        //loss
        const loss = (initial-current)*quantity;
        const loss_percent= (loss/initial)*100;
        showOutput(
            `Hey, the loss is ${loss} and the percent is ${loss_percent}%`
          );
    }
    else if(current>initial){
        //profit
        const profit = (current - initial) * quantity;
        const profitPercentage = (profit / initial) * 100;
        showOutput(
            `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
          );
    } else{
        //rest
        showOutput(`No pain no gain and no gain no pain`);
    }
}

function showOutput(message) {
    output.innerHTML = message;
}

