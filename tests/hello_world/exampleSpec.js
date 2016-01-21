describe('angularjs home page', function() {

  it('should have footer', function() {
    browser.get('https://angularjs.org/');

    var footer = element.all(by.css('footer.footer'));

    expect(footer.count()).toEqual(1);
  });
});