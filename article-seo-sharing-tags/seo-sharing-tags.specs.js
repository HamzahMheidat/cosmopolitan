const seoSharingTagsPageObjects = require('./seo-sharing-tags.pageObject.js');
const tagLocators = require('./seo-sharing-tags.locators.js');

const seoMetaTags = [
    { name: 'description', content: 'The time is almost near to break out all your coats and jackets. If you\'re in desperate need of new styles and want a primer on all the types, we\'ve rounded \'em all up for you.' },
    { name: 'keywords', content: 'shopclick' }
];
const shareMetaTags = [
    { name: 'og:title', content: 'Fall‘s Almost Here—Do You Know What Type of Coat You‘re Wearing? ' },
    { name: 'og:image', content: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-coats-1566328324.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*' },
    { name: 'og:url', content: 'https://www.cosmopolitan.com/style-beauty/fashion/g28749279/types-of-coats/' }
];

describe('Verify The Visibility Of SEO Tags Cosmopolitan Website', () => {
    beforeAll(() => {
        browser.get(ARTICLE_URL);
    });

    it(`should verify that title tag exists in the page header`, async() => {
        const titleTag = await element(by.css(tagLocators.title));
        expect(titleTag.isPresent()).toBe(true);
    });

    it(`should verify that title tag has a contain same as expected`, async() => {
        const title = '27 Types of Coats and Jackets - What Are the Types of Coats?';
        const titleTag = await element(by.css(tagLocators.title));
        expect(titleTag.getAttribute('innerText')).toEqual(title);
    });

    seoMetaTags.forEach(async seoTag => {
        it(`should verify that SEO meta tag (${seoTag.name}) exist in the page header`, async() => {
            const seoMetaTag = await seoSharingTagsPageObjects.getMetaTag(seoTag.name);
            expect(seoMetaTag.isPresent()).toBe(true);
        });

        it(`should verify that SEO meta tag (${seoTag.name}) content`, async() => {
            const seoMetaTag = await seoSharingTagsPageObjects.getMetaTag(seoTag.name);
            const seoMetaTagContent = await seoMetaTag.getAttribute('content');
            expect(seoMetaTagContent).toEqual(seoTag.content);
        });
    });
});

describe('Verify The Presences And Values of Shared Meta Tags In The Header Of Cosmopolitan Website', () => {
    beforeAll(() => {
        browser.get(ARTICLE_URL);
    });

    shareMetaTags.forEach(async shareTag => {
        it(`should verify that share meta tag (${shareTag.name}) exist in the page header`, async() => {
            const shareMetaTag = await seoSharingTagsPageObjects.getMetaTag(shareTag.name);
            expect(shareMetaTag.isPresent()).toBe(true);
        });

        it(`should verify share meta tag (${shareTag.name}) content`, async() => {
            const shareMetaTag = await seoSharingTagsPageObjects.getMetaTag(shareTag.name);
            const shareMetaTagContent = await shareMetaTag.getAttribute('content');
            expect(shareMetaTagContent).toEqual(shareTag.content);
        });
    });
});