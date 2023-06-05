function magicMatrices(matrix) {
    

    for (let row = 0; row < matrix.length - 1; row++){
        let matrixRowSum = matrix[row].reduce((a, b) => a + b, 0)
        let matrixColSum = matrix[row + 1].reduce((a, b) => a + b, 0)
        let rowSum = 0;
        let colSum = 0;

        for (let col = 0; col < matrix.length; col++){
            rowSum += matrix[row][col]
            colSum += matrix[row + 1][col]
            
        }
        
        if (matrixRowSum !== matrixColSum || rowSum !== colSum){
            return false;
            
        }

    } 
    return true;
      
}
magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
    )