const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

const HOME_PAGE = 'http://localhost:3000'

class RockPaperScissors {
  constructor() { }

  // Open the home page using puppeteer
  async openHomePage() {
    this.browser = await puppeteer.launch({ headless: false, slowmo: 100 })
    this.page = await this.browser.newPage()
    await this.page.goto(HOME_PAGE)
  }
  // Close the home page
  async closeHomePage() {
    await this.browser.close()
  }
}

setWorldConstructor(RockPaperScissors)