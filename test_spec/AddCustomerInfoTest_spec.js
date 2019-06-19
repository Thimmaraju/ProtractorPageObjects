/**
 * Created by Selenium on 11-03-2016.
 */
describe("Customer information Test",function(){


    var add_customer = require('../pages/AddCustomerDetails.js');
    it("Adding Customer Information",function(){


        add_customer.gotoAddCustomer();
        add_customer.addCustomerInfo("Raman","Arora","A1343df");

    });

    var add_customer = require('../pages/AddCustomerDetails.js');

    it("Open Account",function(){


        add_customer.gotoOpenAccount();
        add_customer.openAccount("Raman Arora","Rupee");

    }) ;


});
