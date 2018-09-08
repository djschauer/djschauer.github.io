var expect = require("chai").expect;
var disemvowel = require("../disemvowel");

describe("Disemvowel", function() {
    it("Should turn numbers into strings", function() {
        expect(disemvowel(16)).to.be.a("string");
    });
    it("Should take in strings and return them without vowels", function (){
        expect(disemvowel("beautiful")).to.equal("btfl");
    });
});
