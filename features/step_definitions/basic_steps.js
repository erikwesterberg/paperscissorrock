const { After, Given, Then, When } = require("cucumber");


Given('I visit the site', async function () {
  return await this.openHomePage()
})

// After(async function () {
//   return await this.closeHomePage()
// })

Then('I should see {string}', async function (content) {
  return await this.pageHasTextContent(content)

})

When('I click on {string} button', async function (string) {
  return await this.clickOnButton(string)

});

When('I click {string} button', async function (string) {
  return await this.clickOnButton(string)
});









// When('the computer chooses paper', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// Then('I should see {string}', function (string) {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });


