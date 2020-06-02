var expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../../app');
const request = require('supertest');
const Account = require('../../models/account');

// This section of simulate a test when your application IS RUNNING, we are testing by DECLARING ROUTES, and see if it returns the correct data
describe('integration test', function() {
    
    describe('createAccount', function(){
        context('check if we can add an account', function(){
            it('post an account', async function(){
                let newAccount = {username:'testing',password:'testing',name:'WebInfo',gender:'N',licenseId:'30005',CardHolderName:'testing',CardNumber:'123456789101112',expiryDate:'07/20',CVV:'123'}; 
                //let newAccounts = [...Account, newAccount];
                const res = await supertest(app)
                    .post('/account/sign-up')
                    .send(newAccount);
                expect(res.statusCode).to.equal(200);                    
                const account = await Account.findOne({"username":'testing'});

                expect(account.username).to.deep.equal(newAccount.username);
                expect(account.name).to.deep.equal(newAccount.name);
                expect(account.gender).to.deep.equal(newAccount.gender);
                expect(account.licenseId).to.deep.equal(newAccount.licenseId);
                expect(account.CardHolderName).to.deep.equal(newAccount.CardHolderName);
                expect(account.CardNumber).to.deep.equal(newAccount.CardNumber);
                expect(account.expiryDate).to.deep.equal(newAccount.expiryDate);
                expect(account.CVV).to.deep.equal(newAccount.CVV);
            })
        })
    })

    describe('getAccountByUsername', function(){
        context('check if we can get account by username', function(){
            it('getAccountByUsername', function(done){
                supertest(app)
                .get('/account/testing')
                .end(async function(req, res) {                

                    // if you don't understand or unsure where does res.body or res.statusCode come form, read more regarding HTTP response
                    // or even better read the whole Hypertext Transfer Protocol (HTTP) request-respond protocol
                    expect(res.statusCode).to.equal(200);
                    //const account = await Account.findOne({"username":'testing'});
                    //console.log(res.text);
                    expect(res.text).to.contains('<tr><th>Username:</th><td>testing      </td></tr>');
                   
                    done();
                })
            })
        })
    });

    describe('updateAccounts', function(){
        context('check if we can update an account', function(){
            it('update an account', async function(){
                let updateAccount = {name:'testing2',gender:'N',licenseId:'10006',CardHolderName:'testing2',CardNumber:'121110987654321',expiryDate:'09/22',CVV:'321'}; 
                const res = await supertest(app)
                    .post('/account/testing/update')
                    .send(updateAccount)
                    .end(async function(req, res) {                
                        expect(res.statusCode).to.equal(200);
                        expect(res.type).to.equal('text/html');
                        const account2 = await Account.findOne({"username":'testing'});
                        expect(account2.name).to.deep.equal(updateAccount.name);
                        expect(account2.gender).to.deep.equal(updateAccount.gender);
                        expect(account2.licenseId).to.deep.equal(updateAccount.licenseId);
                        expect(account2.CardHolderName).to.deep.equal(updateAccount.CardHolderName);
                        expect(account2.CardNumber).to.deep.equal(updateAccount.CardNumber);
                        expect(account2.expiryDate).to.deep.equal(updateAccount.expiryDate);
                        expect(account2.CVV).to.deep.equal(updateAccount.CVV);
                        done();
                    })
                

            })
        })
    })

})