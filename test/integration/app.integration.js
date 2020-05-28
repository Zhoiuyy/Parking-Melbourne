var expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../../app');
const Account = require('../../models/account');

// This section of simulate a test when your application IS RUNNING, we are testing by DECLARING ROUTES, and see if it returns the correct data
describe('integration test', function() {
    describe('getAccountByUsername', function(){
        context('check if we can get account by username', function(){
            it('getAccountByUsername', function(done){
                supertest(app)
                .get('/account/zhangxiyan')
                .send({})
                .end(function(err, res) {
                    // if you don't understand or unsure where does res.body or res.statusCode come form, read more regarding HTTP response
                    // or even better read the whole Hypertext Transfer Protocol (HTTP) request-respond protocol
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.deep.equal(Account);
                    res.body.forEach(element=>{
                        expect(element).to.have.property('usename');
                        expect(element).to.have.keys(['username', 'name', 'licenseId']);
                    })
                    done();
                })
            })
        })
    });

    describe('createAccount', function(){
        context('check if we can add an account', function(){
            it('post an account', async function(){
                let newAccount = {username:'30005',password:'30005',name:'WebInfo',gender:'N',licenseId:'30005',CardHolderName:'WebInfo',CardNumber:'123456789',expiryDate:'07/20',CVV:'123'}; 
                //let newAccounts = [...Account, newAccount];
                const res = await supertest(app)
                    .post('/account/sign-up')
                    .send(newAccount);

                expect(res.statusCode).to.equal(200);
                expect(res.type).to.equal('application/json');
               // expect(res.body).to.deep.equal(newAccounts);
            })
        })
    })
})