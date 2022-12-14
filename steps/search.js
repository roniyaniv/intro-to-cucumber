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
