var DataConfig = require('./../data_config');

function BasePage(idOnPage, isValidPageCallback) {
  // load if from yml file
  this.id = new DataConfig().getPropertyByName(idOnPage);
  this.isValidPageCallback = isValidPageCallback;
}

// check if this obj(s) exist(s)
BasePage.prototype.checkIfPageCorrect = function() {

  // if you want to override default checking  
  if(this.isValidPageCallback) {
    this.isValidPageCallback.call();
    return;
  }

  // be default it will check only pattern on page
  expect(element(by.css(this.id)).isPresent()).toBe(true);
}

BasePage.prototype.goViaUrl = function(link) {
  // console.log("\n\n\n\n\n" + link + "\n\n\n\n\n")
  browser.get(new DataConfig().getPropertyByName(link));
  this.checkIfPageCorrect();
}

BasePage.prototype.goViaBtn = function(elementId) {
  element(by.css(new DataConfig().getPropertyByName(elementId))).click();
  checkIfPageCorrect();
}

module.exports = BasePage;
