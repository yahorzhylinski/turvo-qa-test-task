var DataConfig = require('./data_config');
var BasePage = require('./pages/base_page');
var AccountDocumentsPage = require('./pages/account_documents_page');
var NewAccountDocumentPage = require('./pages/new_account_document_page');

function extend(base, sub) {
  var origProto = sub.prototype;
  sub.prototype = Object.create(base.prototype);
  for (var key in origProto)  {
     sub.prototype[key] = origProto[key];
  }
  // Remember the constructor property was set wrong, let's fix it
  sub.prototype.constructor = sub;
  // In ECMAScript5+ (all modern browsers), you can make the constructor property
  // non-enumerable if you define it like this instead
  Object.defineProperty(sub.prototype, 'constructor', { 
    enumerable: false, 
    value: sub
  });
}

extend(BasePage, AccountDocumentsPage);

module.exports = {
  data_config: DataConfig,
  account_documents_page: AccountDocumentsPage,
  new_account_document_page: NewAccountDocumentPage
}
