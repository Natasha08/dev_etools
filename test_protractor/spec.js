// spec.js
describe('Fitness App', function() {

  describe('Login Form', function() {
    var email = element(by.model('email'));
    var password = element(by.model('password'));
    var btn = element(by.id('response'));
    //var history = element.all(by.repeater('result in memory'));
	// var title = element(by.binding('title'));
	
    beforeEach(function() {
      browser.get('http://localhost:3000');
    });

    it('should have a title', function() {

      expect(browser.getTitle()).toEqual('MyColoFitness');
    });

    it('should add one and two', function() {
      email.sendKeys('natasha08@me.com');
      password.sendKeys('moo');
      
      btn.click();

      expect(btn.click()).toHaveBeenCalled;
    });


});
});