function depositCalculator(depositedSum, depositPeriod, annualInterestPercent) {

    let annualInterestDecimal = annualInterestPercent / 100;
    let sum = depositedSum + depositPeriod * ((depositedSum * annualInterestDecimal) / 12)

    console.log(sum);
    
}

depositCalculator(2350, 6, 7)