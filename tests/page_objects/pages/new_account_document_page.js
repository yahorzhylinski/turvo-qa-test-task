var BasePage = require('./base_page');

function NewAccountDocumentPage() {

  BasePage.call(this, "pages.new_account_document.id");

  this.goViaBtn = function() {
    BasePage.prototype.goViaBtn.call(this, "pages.account_documents.link");
  }

}

module.exports = NewAccountDocumentPage;