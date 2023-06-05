function number(list) {
    let arr = list.split(' ').map(Number)
    let average = arr.reduce((a, b) => a + b, 0) / arr.length

    let result = arr.filter(x => x > average);

    if (result.length === 0) {
        console.log("No");
    } else {
        let top5 = result.sort((a, b) => b - a).slice(0, Math.min(5, result.length));
        console.log(top5.join(" "));
    }



}

number('10 20 30 40 50')