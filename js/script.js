function run(max, min) {
    const intNumberOfRows = document.getElementById('numberOfColumns').value;
    const intNumberOfColumns = document.getElementById('numberOfRows').value;
    if (intNumberOfRows == "" || intNumberOfColumns == "") {
        alert('Please fill required fields.');
    } else if (intNumberOfRows < 1 || intNumberOfColumns < 1)
        alert('All numbers must be 1 or greater');
    else {
        let arrRowNumbers = [];
        let arrColumnNumbers = [];
        let arrMatrix = [[]];
        let intArrayAverage = 0;
        let intSmallest = 10000;
        let intBiggest = 0;
        let arrayTemp = [];
        let counter= 0;
        let doOnce = true;
        let intBiggestIndexI, intBiggestIndexJ, intSmallestIndexI, intSmallestIndexJ;
        document.write('<style>table{margin-bottom:45px;}td{border:1px solid black;}</style><table><tr><td></td>');
        for (var i = 0; i < intNumberOfColumns; i++) {
            arrRowNumbers[i] = (Math.floor(Math.random() * (max - min)) + min);
            intArrayAverage = intArrayAverage + arrRowNumbers[i];
        }
        intArrayAverage = intArrayAverage / arrRowNumbers.length;

        for (var i = 0; i < intNumberOfRows; i++) 
        {
            arrColumnNumbers[i] = (Math.floor(Math.random() * (max - intArrayAverage) + intArrayAverage));
            document.write('<td>' + arrColumnNumbers[i] + '</td>');
        }
        for (var i=0;i<intNumberOfColumns;i++)
        {
            arrMatrix[i] = [];
            for(var j=0;j<intNumberOfRows; j++)
            {
                if(doOnce)
                {
                    document.write ('<tr><td>' + arrRowNumbers[counter]+ '</td>');
                    counter++;
                    doOnce = false;
                }
                arrMatrix[i][j] = arrRowNumbers[i] * arrColumnNumbers[j];
                document.write('<td>' + arrMatrix[i][j] + '</td>');
                if (arrMatrix[i][j] > intBiggest) 
                {
                    intBiggest = arrMatrix[i][j];
                    intBiggestIndexI = i;
                    intBiggestIndexJ = j;
                }
                else if (arrMatrix[i][j]<intSmallest)
                {
                intSmallest = arrMatrix[i][j];
                intSmallestIndexI = i;
                intSmallestIndexJ = j;
                }
            }
            document.write('</tr>');
            
            doOnce = true;
        }
       
            for  (var j = 0; j < intNumberOfRows; j++) 
            {
                arrayTemp [j] = arrMatrix [intBiggestIndexI][j] ;
                arrMatrix[intBiggestIndexI][j] = arrMatrix[intSmallestIndexI][j];
                arrMatrix[intSmallestIndexI][j] = arrayTemp[j];
                console.log(j + '. ' +arrayTemp[j]);
            }
        
        document.write('</table><table>');
        document.write('<td></td>');
        for (var i=0; i< arrColumnNumbers.length; i++)
        {
            document.write('<td>' + arrColumnNumbers[i] + '</td>');
        }
        for (var i = 0; i < intNumberOfColumns; i++) 
        {
            intCounter = 0;
            document.write('<tr>')
            document.write('<td>' + arrRowNumbers[i] + '</td>');
            for (var j = 0; j < intNumberOfRows; j++) 
            {
                document.write('<td>' + arrMatrix[i][j] + '</td>');
            }
            document.write('</tr>');
        }
        document.write ('</table><p>Biggest number was ' + intBiggest + ' , and the smallest was ' + intSmallest + '.</p>') ;
    }
}
