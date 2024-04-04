
function getElementWidth(content, padding, border) {
    return Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
}

const content = getElementWidth("50px", "8px", "4px");
const padding = getElementWidth("60px", "12px", "8.5px");
const border = getElementWidth("200px", "0px", "0px");

console.log(content);
console.log(padding);
console.log(border);