
import Key from 'webdriverio'

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

export async function searchDressTypeBy(s){
  await $('#search').setValue(s)
  await browser.keys('Enter')
}
