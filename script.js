let result;
let amount = prompt("Enter amount and currency code", "123 AZN or 23 USD");
let CurrencyCode = amount.slice(-3);
let index = amount.length - 3;
let money = parseFloat(amount.slice(0, index)); 

switch (CurrencyCode.toUpperCase()) {
    case "USD":
        result = money * 1.70;
        console.log(result + " AZN");
        break;
    case "AZN":
        result = money * 0.59;
        console.log(result + " USD");
        break;
    default:
        console.log("not found");
}

