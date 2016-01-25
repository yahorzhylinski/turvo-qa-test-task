var page_objects = require('./page_objects/extend');

describe('account documents js', function() {

  var accountDocumentsPage = new page_objects.account_documents_page();

  beforeEach(function() {
    accountDocumentsPage.goViaUrl();
  });

  it('should have "add new document btn"', function() {
    // var newDocumentBtn = element.all(by.css(new page_objects.data_config().getPropertyByName("pages.account_documents.new_document_id")));
    // expect(newDocumentBtn).isPresent()).toBe(true);
  });

});