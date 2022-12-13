import { Given, When, Then } from "@wdio/cucumber-framework";

Given("I am on the google homepage", () => {
  browser.url("/?hl=en") // we need the english home page
})

When("I search for {string}", async (word) => {
  console.log(await $('form input').getComputedLabel())
  await $('form input').setValue(word)
  await $('aria/Google Search').click()
})

Then("I get results with {string}", async (word) =>{
  
  const elems = await $$('#rso h3.LC20lb.MBeuO.DKV0Md')
  for (const elem of elems){
    let text = await elem.getText()
    console.log(text)
    if (text == ''){
      continue
    }else{
      expect(text.toLowerCase()).toHaveTextContaining('cucumber')
    }
  }
  
})