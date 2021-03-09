// vars
const btnStart = document.querySelector('.btnStart');
const btnCalc = document.querySelector('.btnCalculate');
const btnCalcing = document.querySelector('.btnCalculating');
const btnStartAfter = document.querySelector('#close-me');

const divInsert = document.querySelector('.insert');
const divCalculating = document.querySelector('.calculating');
const divCalculated = document.querySelector('.calculated');
const divStart = document.querySelector('.divStart');

const amount = document.querySelector('#loanAmount');
const interest = document.querySelector('#loanRate');
const years = document.querySelector('#loanTime');

const monthlyPayment = document.querySelector("#monthlyDone");
const totalPayment = document.querySelector("#monthlyDone");
const totalInterest = document.querySelector("#monthlyDone");

//listeners

btnStart.addEventListener('click', function(e){
    if (btnStart.firstChild.id == 'close-me') {
        console.log('if');
        location.reload(true);
    } else{
        openDiv(divInsert);
        divInsert.scrollIntoView();
        divStart.style.display = "none";
    };
});

btnCalc.addEventListener('click',function(e){
    openDiv(divInsert);
    openDiv(divCalculating);
    

    

});

btnCalcing.addEventListener('click', function(e){
    openDiv(divCalculating);
    openDiv(divCalculated);
    divStart.style.display = "block";
    btnStart.innerHTML = `<div id='close-me'>Start over</div>`;
});

//functions

function openDiv(e){
    const x = e;
    if(x.style.display === "block"){
        x.style.display = "none";
    } else{
        x.style.display = "block";
    };
}
