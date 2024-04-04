// function getElementWidth(content, padding, border) {
//     return Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
// }

// const content = getElementWidth("50px", "8px", "4px");
// const padding = getElementWidth("60px", "12px", "8.5px");
// const border = getElementWidth("200px", "0px", "0px");

// console.log(content);
// console.log(padding);
// console.log(border);

function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    return `"Shipping to ${country} will cost ${totalPrice} credits"`
}


console.log(getShippingMessage ("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage ("Sweden", 100, 20));