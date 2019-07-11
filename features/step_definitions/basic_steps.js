const { After, Given, Then, When } = require("cucumber");


Given('I visit the site', async function () {
  return await this.openHomePage()
});

Then('I should see {string}', async function (content) {
  return await this.pageHasTextContent(content)

});

When('I click {string} button', async function (string) {
  return await this.clickOnButton(string)
});

When('the computer chooses {string}', async function (choice) {
  return await this.computerChoice(choice)
  
});

When('I see {string}',async function (string) {
  return await this.computerSelection(string)
});

Then('I Click {string} button', async function (string) {
  return await this.clickOnButton(string)
 });


// After(async function () {
//   return await this.closeHomePage()
// });














