var { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--window-size=1200,800",
                "--headless"
            ]
        }
    },
    framework: 'jasmine',
    specs: ['article-seo-sharing-tags/seo-sharing-tags.specs.js'],
    onPrepare: () => {
        global.EC = protractor.ExpectedConditions;
        global.WAIT_DURATION = 20000;
        global.ARTICLE_URL = 'https://www.cosmopolitan.com/style-beauty/fashion/g28749279/types-of-coats/';
        browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(new SpecReporter({
            suite: {
                displayNumber: true,
            }
        }));
    }
};