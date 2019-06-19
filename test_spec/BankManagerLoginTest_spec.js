
var base = require('../pages/BasePage.js').default;
var OR = require('../json/OR.json');
describe("BankManager Login Test",function(){


    var home_page = require('../pages/HomePage.js');
   it("Login as Bank Manager",function(){

       base.navigateToURL(OR.testsiteurl);
       var customer = home_page.loginAsBankManager();
       customer.gotoAddCustomer().addCustomerInfo(OR.locators.addcustomerdetailspage.fName,OR.locators.addcustomerdetailspage.lName,OR.locators.addcustomerdetailspage.pCode);
       var title = base.getPageTitle();
       expect(title).toBe("Protractor practice website - Banking App");
       browser.sleep(3000);

   }) ;


});
