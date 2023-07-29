const decrease = document.querySelector(".counter-descrease");
const increase = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");


let counterValue =parseInt(counterNumber.textContent);
// console.log(counterValue);
increase.addEventListener("click",function(){
    counterValue+=1;
    // console.log(counterValue);
    counterNumber.textContent = counterValue;
});

decrease.addEventListener("click",function(){
    counterValue--;
    if(counterValue < 0){
        counterValue =0;
    }
    else{
        counterNumber.textContent = counterValue;
    }
});