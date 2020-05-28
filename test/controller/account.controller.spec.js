//var sinon = require('sinon');
var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();
var accountController =  require('../../controllers/accountController');
//const account = require('../../models/account');

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
        context('test without arguments', function(){
            it('getAccountByUsername() should throw an error', function(){
                expect(function() {
                    accountController.getAccountByUsername()
                }).to.throw(TypeError, 'No user has been found using this username')
            })

            
        })
    
  });
});
