class HeaderMenu {
  get whatsNew () { return $('#ui-id-3')}
  get women () { return $('#ui-id-4')}
  get watches () { return $('#ui-id-27')}
  get gear () { return $('#ui-id-6')}

  async clickMenuOption(option){
    switch(option){
      case "What's New":
        await this.whatsNew.click()
        break
      case "Women":
        await this.women.click()
        break
      case "Watches":
        await (await this.gear).moveTo()
        await (await this.watches).moveTo()
        await this.watches.click()
        break
      default:
        console.log(`Invalid menu option specified - ${option}`)
    }
  }
}

export default new HeaderMenu()