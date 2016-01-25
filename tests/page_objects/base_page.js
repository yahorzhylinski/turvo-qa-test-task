function BasePage(idOnPage) {

  var self = this;
    
  // load if from yml file
  this.id = DataConfig.getPropertyByName(idOnPage);
  this.description = description;

  // check if this obj(s) exist(s)
  function checkIfPageCorrect() {
    expect(element.all(by.css(self.id)).count()).toEqual(2);
  }

  this.goViaUrl = function(link) {
    browser.get(DataConfig.getPropertyByName(link));
    checkIfPageCorrect();
  }

  this.goViaBtn = function(elementId) {
    element(by.css(elementId)).click();
    checkIfPageCorrect();
  }
}

module.exports = BasePage;
