const seoSharingTagsLocators = require('./seo-sharing-tags.locators.js');

getMetaTag = async metaTagName => {
    const metaTagLocator = seoSharingTagsLocators.metaTagByName(metaTagName);
    const metaTag = await element(by.css(metaTagLocator));
    return metaTag;
};

module.exports = { getMetaTag };
