var webdriver = require('selenium-webdriver');
var assert = require('chai').assert
var chromeCapabilities = webdriver.Capabilities.chrome();
    var chromeOptions = {
        'args': ['--headless',  "window-size=1024,768", "--no-sandbox"],
        'binary': '/usr/bin/google-chrome-stable',
        //'binary' : 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    };
   chromeCapabilities.set('chromeOptions', chromeOptions);
   driver = {};

exports.Actionwords = {
  loginToTheSystemAsPc386: async function () {
    driver = await new webdriver.Builder().withCapabilities(chromeCapabilities).build();
    await driver.get('https://www.google.com/')
    
      assert.equal(await driver.getTitle(), "Google")
     
  },
  goToTheLookupsPage: function () {
  
  },
  clickTheQuickStudentLookupLink: function () {
  
  
  },
  closeDriver: function() {
    driver.quit();
  }
};