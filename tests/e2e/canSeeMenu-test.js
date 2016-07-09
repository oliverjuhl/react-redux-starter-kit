module.exports = {
  'user can see menu': function (browser) {
    const main = browser.page.main();

    main.navigate();
    main.expect.element('@menu').to.be.visible;

    browser.end();
  }
};