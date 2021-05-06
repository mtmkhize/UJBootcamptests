
describe('test my greet function' , function(){
    it("it should return 'hello, Ofhani' when called with 'Ofhani' " , function(){
        assert.equal("Hello, Ofhani", greet("Ofhani"));

       
    });
    it("it should return 'hello, Sizwe' when called with 'Sizwe' " , function(){
        assert.equal("Hello, Sizwe", greet("Sizwe"));

       
    });
});