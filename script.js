const totalBudget = document.getElementById("budget");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const btn = document.querySelector(".btn");
const addSub = document.getElementById("addSub");
var incomeLeft = document.querySelector(".left");


let budget = parseInt(0);


btn.addEventListener('click', function() {
    var price = document.getElementById('price');
    var desc = document.getElementById('desc');

    var text = addSub.options[addSub.selectedIndex].text;


    if(text == "+"){
        
        income.textContent = parseInt(income.textContent) + parseInt(price.value);
        budget += parseInt(price.value);
        totalBudget.textContent = budget;

        addDetails(desc.value, price.value);

    } else {

        expense.textContent = parseInt(expense.textContent) + parseInt(price.value);
        budget -= parseInt(price.value);
        totalBudget.textContent = budget;

        addExpenseDetails(desc.value, price.value);
    }

})



window.num = 1


function addDetails(desc, price, buton) {
    
    var text = document.createElement("span");
    text.setAttribute('id', 'span_'+window.num)
    

    text.innerHTML = `<span>${desc} <span id="price_${window.num}">${price}</span> <i class="far fa-times-circle" id="id_${window.num}"></i></span>`

    document.querySelector('.left').appendChild(text);

    var cancel = document.querySelector('#id_' + window.num)
    cancel.addEventListener('click', function(){
        priceId = cancel.getAttribute('id').replace('id', 'price')
        singlePrice = document.querySelector('#'+priceId);
        budget -= parseInt(singlePrice.innerHTML);
        totalBudget.textContent = budget;
        income.textContent -=  parseInt(singlePrice.innerHTML);
        text.remove()
    
    });

    window.num++

}



function addExpenseDetails(desc, price){
    var textExpense = document.createElement("span");
    textExpense.setAttribute('id', 'span_right_'+window.num);

    textExpense.innerHTML = `<span>${desc} <span id="price_${window.num}">${price}</span> <i class="far fa-times-circle" id="right_${window.num}"></i></span>`
    
    document.querySelector('.right').appendChild(textExpense);

    var cancel = document.querySelector('#right_' + window.num)
    cancel.addEventListener('click', function(){
        
        priceId = cancel.getAttribute('id').replace('right', 'price')
        singlePrice = document.querySelector('#'+priceId);
        budget += parseInt(singlePrice.innerHTML);
        totalBudget.textContent = budget;
        expense.textContent = parseInt(expense.textContent) - parseInt(singlePrice.innerHTML)
        textExpense.remove()
    });

    window.num++
}