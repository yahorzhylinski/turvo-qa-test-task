var page_objects = require('./page_objects/extend');

describe('account documents js', function() {

  var accountDocumentsPage = new page_objects.account_documents_page();

  beforeEach(function() {
    accountDocumentsPage.goViaUrl();
  });

  it('should have "add new document btn"', function() {
    var newAccountDocumentPage = new page_objects.new_account_document_page();
  });

});