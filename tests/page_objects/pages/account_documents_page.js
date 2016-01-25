var BasePage = require('./base_page');

function AccountDocumentsPage() {

  BasePage.call(this, "pages.account_documents.id");

  this.goViaUrl = function() {
    BasePage.prototype.goViaUrl.call(this, "pages.account_documents.link");
  }

}

module.exports = AccountDocumentsPage;