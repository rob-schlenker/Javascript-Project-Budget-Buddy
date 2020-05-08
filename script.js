let weeklyBudget = document.querySelector(".weekly-budget")
let budget = document.querySelector(".budget")
let availableBalance = document.querySelector(".balance-amount")
let enterExpense = document.querySelector(".enter-expense");
//location selectors for form 2
let entertainment = document.querySelector(".listEntertainment");
let bills = document.querySelector(".listBills");
let clothing = document.querySelector(".listClothing");
let food = document.querySelector(".listFood");
let spentAmount = document.querySelector(".spend-heading");


let entertainmentAmount = 0;
let foodAmount = 0;
let clothingAmount = 0;
let billsAmount = 0;
let totalSpend = (entertainmentAmount + foodAmount + clothingAmount + billsAmount);
let test = 20;
console.log(test)


//innertext updates
entertainment.innerText = `Entertainment:$${entertainmentAmount}`;
bills.innerText = `Bills:$${billsAmount}`;
clothing.innerText = `Clothing:$${clothingAmount}`;
food.innerText = `Food:$${foodAmount}`;
spentAmount.innerText = `Total Spent:$${totalSpend}`;
console.log(totalSpend)



let foodSelect = document.querySelector(".select-food");
let clothingSelect = document.querySelector(".select-clothing");
let billsSelect = document.querySelector(".select-bills");
let entSelect = document.querySelector(".select-ent");





//first form
budget.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(budget);
    let amount = Number(data.get("amount"));
    // console.log(amount)
    weeklyBudget.innerText = `Weekly Budget: $${amount.toFixed(2)}`;
    availableBalance.innerText = `$${amount.toFixed(2)}`;

    budget.style.display = "none";
    enterExpense.style.display = "flex";
})

let foodValue = foodSelect.getAttribute("value");
let clothingValue = clothingSelect.getAttribute("value");
let billsValue = billsSelect.getAttribute("value");
let entValue = entSelect.getAttribute("value");
console.log(foodValue)
console.log(clothingValue)
console.log(billsValue)
console.log(entValue)

//second form

enterExpense.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(enterExpense);
    let select = data.get("select1");
    let input = Number(data.get("text1"));
    console.log(select);
    console.log(input);
    enterExpense.reset();
    if (foodValue === select) {
        foodAmount += input;
        food.innerText = `Food: $${foodAmount.toFixed(2)}`;
    } else if (clothingValue === select) {
        clothingAmount += input;
        clothing.innerText = `Clothing: $${clothingAmount.toFixed(2)}`;
    } else if (entValue === select) {
        entertainmentAmount += input;
        entertainment.innerText = `Entertainment: $${entertainmentAmount.toFixed(2)}`;
    } else if (billsValue === select) {
        billsAmount += input;
        bills.innerText = `Bills: $${billsAmount.toFixed(2)}`
    } else {
        console.log("hello")
    }

});



//if entertainment is selected, .categories.innertext= ""


//         let amount = Number(event.target.getAttribute("data-amount"));
//         console.log(amount);
//         currentTotal += amount;