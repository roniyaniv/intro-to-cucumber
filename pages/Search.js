class Search {
  get resultsList () { return $$('.product-item-link') }
  get messageNotice () { return $('.message.notice > div') }
  get searchField () { return $('#search') }

  async searchFor(term){
    await this.searchField.setValue(term)
    await browser.keys('Enter')
  }

}


export default new Search()