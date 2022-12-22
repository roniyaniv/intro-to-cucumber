import { Given, Then, When } from "@wdio/cucumber-framework"
import { navToPage, checkPageTitle } from "../actions/actions"
import HeaderMenu from '../pages/HeaderMenu.js'

When('the user clicks on the {string} menu option in the menu', async function(menuOption) {
  await HeaderMenu.clickMenuOption(menuOption)
})

Then('the title of the page should include {string}', async function(pageTitle){
  await checkPageTitle(pageTitle)
})

Given('the browser is at the {string} page', async (page) => {
  await navToPage(page)
})
