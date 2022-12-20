import { Given, When, Then } from "@wdio/cucumber-framework"
import { navToPage, searchDressTypeBy } from "../actions/actions.js"


Then("I get results with {string}", async (word) =>{
  
  const elems = await $$('#rso h3.LC20lb.MBeuO.DKV0Md')
  for (const elem of elems){
    let text = await elem.getText()
    console.log(text)
    if (text == ''){
      continue
    }else{
      expect(text.toLowerCase()).toHaveTextContaining(word)
    }
  }
  
})


Given('the browser is at the {string} page', async (page) => {
  await navToPage(page)
})

When('the user searches for {string}', async (s) => {
  await searchDressTypeBy(s)
})

Then(/(no )?products are listed/, async captured => { // using regex to pass capture groups to the function
  if (captured === 'no '){ // space included for exact match to captured string from step definition
    console.log('no products are listed')
    await expect($('.message.notice > div')).toHaveTextContaining('Your search returned no results.')
    
  }else{
    console.log('products ARE listed')
    await expect($('.search.results')).toBeDisplayed()
    await expect($('.message.notice > div')).not.toExist()
    let resultsList = await $$('.products.wrapper.grid.products-grid > ol > li')
    console.log('# of results: ' + resultsList.length)
    expect(resultsList.length).toBeGreaterThan(0)
  }
})
