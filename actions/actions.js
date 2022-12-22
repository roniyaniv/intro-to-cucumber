import HeaderMenu from "../pages/HeaderMenu"
import Search from "../pages/Search"


export function navToPage(page){
  switch(page){
    case "Home":
      browser.url('/')
      break
    case 'Search':
      browser.url('/search')
      break
    default:
      console.log(`Invalid Page Specified - ${page}`)
  }
}

export async function checkProducts(searchTerm){

  const resultsListArray = await Search.resultsList
  console.log("Elements array length: " + resultsListArray.length)

  for (let i of resultsListArray){
    let productText = await i.getText()
    expect(productText.trim().toLowerCase()).toContain(searchTerm)
  }
}

export async function checkPageTitle(pageTitle){

  //console.log('pageTitleToCheck: ' + pageTitle)
  const pageTitleElem = (await browser.getTitle()).toString()
  // console.log('pageTitleElem: ' + pageTitleElem)
  expect(pageTitleElem).toContain(pageTitle)
}
