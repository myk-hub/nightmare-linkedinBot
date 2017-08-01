const Nightmare = require('nightmare');

const login = 'pharadreams@tuta.io';
const pass  = 'ComeForItAgain'
// let numbOfLeads = '1';
let profession  = 'CEO';
let URL   = 'https://www.linkedin.com/search/results/people/?keywords=' +
                   profession + '&origin=GLOBAL_SEARCH_HEADER';

(async () => {
 let lincodeIn;
 try {
   lincodeIn = Nightmare({ show: true });
   await lincodeIn
     .goto('https://www.linkedin.com/')
     .type('#login-email', login)
     .type('#login-password', pass)
     .click('#login-submit')
     .wait(3000)
     .goto(URL)
     .wait(5000)

     let siteData = await lincodeIn.evaluate( () => {
       return true
     });
 } catch (error) {
   console.error(error);
   throw error;
 } finally {
    await lincodeIn.end();
 }
})();
