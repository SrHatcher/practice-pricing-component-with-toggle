const checkbox = document.querySelector('.pricing__checkbox_input')
const priceSpans = document.querySelectorAll('.option__price');
const annualPrices = [199.99, 249.99, 399.99]
const monthlyPrices = [19.99, 24.99, 39.99]

function togglePrices(){
    if(checkbox.checked == true){
        priceSpans.forEach((element, index)=>{
            element.innerHTML = `<span>$</span>${annualPrices[index]}`
        })
    }else{
        priceSpans.forEach((element, index)=>{
            element.innerHTML = `<span>$</span>${monthlyPrices[index]}`
        })
    }
}

checkbox.addEventListener('click', togglePrices)