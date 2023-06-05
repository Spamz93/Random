function computerStore(input) {
    let customerType = input[input.length - 1]
    let lastPartIndex = input.length - 2
    let allPartsPrice = 0;

    for (let index = 0; index <= lastPartIndex; index++){
        let currentPartPrice = Number(input[index])

        if (currentPartPrice < 0){
            console.log('Invalid price!');
        } else {
            allPartsPrice += currentPartPrice
        }

    }

    let priceAfterTaxes = allPartsPrice * 1.20

    if (customerType === 'special'){
        
    }
    

    
}
computerStore (([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ]))