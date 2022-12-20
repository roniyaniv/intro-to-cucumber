import { Given, When, Then } from "@wdio/cucumber-framework"
import * as actions from "../actions/actions.js"
import Search from "../pages/Search.js"


Given('the browser is at the {string} page', async (page) => {
  await actions.navToPage(page)
})

When('the user searches for {string}', async (s) => {
  await Search.searchFor(s)
})

Then(/(no )?products are listed/, async notListed => { // using regex to pass capture groups to the function
  if (notListed){ // space included for exact match to captured string from step definition
    console.log('no products are listed')
    await expect(Search.resultsList).toBeElementsArrayOfSize(0)
  }else{
    console.log('products ARE listed')
    await expect(Search.resultsList).toBeElementsArrayOfSize({ gte: 1 })
  }
})

Then('a "no results" error message is shown', async function() {
  await expect(Search.messageNotice).toHaveTextContaining('Your search returned no results.')
})

Then('search results show products related to {string}', async function(searchTerm) {
  await actions.checkProducts(searchTerm)
})

