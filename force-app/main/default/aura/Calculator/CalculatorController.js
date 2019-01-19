({

    // event that fires when the borrowing amount changes
    borrowingchange : function(component, event, helper) {
        // confirm in console that the change has happened
        console.log('borrow amount change');
        // get the current value following the change
        var currentvalue = event.getSource().get("v.value");
        // log the current value in the console
        console.log('current borrow amount > ' + currentvalue);
        // set the value on borrowing attribute
        component.set("v.amount", currentvalue);
        // fire help calculate method
        helper.getmonthlyrepayment(component);
    },

    // event that fires when the term slider changes
    termchange : function (component, event, helper) {
        // confirm in console that the change has happened
        console.log('term change');
        // get the current value following change
        var currentvalue = event.getSource().get("v.value");
        // log the current value in the console
        console.log('current term > ' + currentvalue);
        // set the value on the term attribute
        component.set("v.term", currentvalue);
        // fire help calculate method
        helper.getmonthlyrepayment(component);
    },

    // event that fires when the apr slider changes
    aprchange : function (component, event, helper) {
        // confirm in console that the change has happened
        console.log('apr change');
        // get the current value following change
        var currentvalue = event.getSource().get("v.value");
        // log the current value in the console
        console.log('current apr value > ' + currentvalue);
        // set th value on the apr attribute
        component.set("v.apr", currentvalue);
        // fire help calculate method
        helper.getmonthlyrepayment(component);
    }

})
