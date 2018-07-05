describe('test', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  });

  after(function() {
    this.actionwords.closeDriver();
  })

  describe('Happy', function () {
    async function happy (student) {
      // Happy access to the quick student lookup tab
      await this.actionwords.loginToTheSystemAsPc386();
      await this.actionwords.goToTheLookupsPage();
      await this.actionwords.clickTheQuickStudentLookupLink();
    }

    it('Kent ID (uid:77d377f0-23ea-4127-a4db-4bfbac516cf7)', async function () {
      await happy.apply(this, [18000804]);
    });
  });
});
