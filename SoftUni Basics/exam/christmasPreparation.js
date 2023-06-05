function christmasPreparation(input) {
    let wrapPaperCount = Number(input[0]);
    let clothCount = Number(input[1]);
    let glueLiters = Number(input[2]);
    let discount = Number (input[3]);
    let wrapPaperPrice = 5.8
    let clothPrice = 7.2
    let gluePerL = 1.2

    let totalWrap = wrapPaperCount * wrapPaperPrice
    let totalCloth = clothCount * clothPrice
    let totalGlue = glueLiters * gluePerL

    let total = totalWrap + totalCloth + totalGlue
    let final = total - ((total * discount) / 100)

    console.log(final.toFixed(3));


}
christmasPreparation 
(["4",
"2",
"5",
"13"])

