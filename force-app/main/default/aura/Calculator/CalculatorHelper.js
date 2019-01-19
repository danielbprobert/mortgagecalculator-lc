({
    // helper method for calculating the monthly repayment
    getmonthlyrepayment : function(component) {
        // log to console to confirm helper being fired
        console.log('getmonthlyrepayment fired');
        // get the current term
        var termvalue = component.get("v.term");
        // get the current apr
        var aprvalue = component.get("v.apr");
        // get the current amount
        var amountvalue = component.get("v.amount");

        // log values to console
        console.log('calculate before convert term > ' + termvalue);
        console.log('calculate before convert apr > ' + aprvalue);

        // convert apr value ready for calculation
        aprvalue /= 1200;
        // convert term value ready for calculation
        termvalue *= 12;

        // log values to console
        console.log('calculate after convert term > ' + termvalue);
        console.log('calculate after convert apr > ' + aprvalue);
        console.log('calculate amount > ' + amountvalue);

        // calculate repayment value
        var repayment = amountvalue*(aprvalue * Math.pow((1 + aprvalue), termvalue))/(Math.pow((1 + aprvalue), termvalue) - 1);
        // log repayment value to console
        console.log('repayment value > ' + repayment);

        // calculate the repayment value - interest
        var repaymentexcludinginterest = amountvalue/termvalue;
        console.log('repayment no interest value > ' + repaymentexcludinginterest);

        // calculate just the interest value
        var repaymentinterestvalue = repayment - repaymentexcludinginterest;
        console.log('repayment interest amount > ' + repaymentinterestvalue);
        
        // set the repayment values back on screen
        component.set("v.monthlyrepaymentvalue", repayment);
        component.set("v.repaymentexcludedinterest", repaymentexcludinginterest);
        component.set("v.repaymentinterest", repaymentinterestvalue);
    }
})
