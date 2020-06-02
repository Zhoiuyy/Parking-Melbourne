var sinon = require('sinon');
var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();

const mongoose = require("mongoose");
const Account = require('../../models/account');
const parkingHistory = require('../../models/parkingHistory');
//const Account = mongoose.model("account");
var accountController = require('../../controllers/accountController.js');
var parkingController = require('../../controllers/parkingController.js');


describe('accountController', function () {
    // Below, we are going to test HTTP functions, so we need to create fake request and respond object!

    const mockResponse = (fake) => {
        return {
            send: fake
        };
    }

    // this is just example how you can design the fake request, you can also add header property if your website needs one!
    // I'm not even going to use any of these stuff inside request
    const mockRequest = (session, body) => ({
        session,
        body,
    });

    // I just want to remind that using chai is easier to read
    describe('getAccountByUsername', function() {
        //Checking length with style~, isntead of assert.equal(res.json.length, 2)
        /*
        it("should have length of 2", function(){
            const fake = sinon.fake();
            const req = mockRequest({},{});
            const res = mockResponse(fake);
            authorController.getAllAuthors(req, res);
            const result = fake.lastArg;
            expect(result).to.have.lengthOf(2);
            result.should.have.lengthOf(2);
            assert.equal(result.length, 2);
        })
*/
        it("account should have username, name, and licenseId", function(){
            const fake = sinon.fake();
            const req = mockRequest({},{});
            const res = mockResponse(fake);
            
            console.log(req.params.username);
            accountController.getAccountByUsername(req,res);
            const result = fake.lastArg;
    
            console.log(result);
            expect(result).to.have.property('username');//check one with chai
            expect(result).to.have.keys(['username', 'name', 'licenseId']); //check everything with chai
            result.should.have.property('id'); // different way of checking using should
            // assert.equal(Object.keys(element), ['id', 'first_name', 'last_name']); Not going to work because it does strict equality, not deep comparison
            // but if you really insist...
            assert.deepEqual(Object.keys(result), ['username', 'name', 'licenseId']); //check with assert
        })
/*
        it('should return all authors', function(){
            const fake = sinon.fake();
            const req = mockRequest({},{});
            const res = mockResponse(fake);

            // Quick quiz! why didn't I write line 62 like line 61? HINT: I didn't forget and I am not lazy >:(
            // let result = authorController.getAllAuthors(req,res);
            authorController.getAllAuthors(req,res);
            const result = fake.lastArg;
            expect(result).to.deep.equal(authors); // Don't forget to use deep, you don't want to compare object id, you want to compare contents!
        });
        */
  });
});
