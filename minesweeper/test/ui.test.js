const puppeteer = require('puppeteer');
const handler = require('serve-handler');
const http = require('http');
const path = require('path');

describe('UI', () => {
    let server;
    let page;
    let browser;

    beforeAll((done) => {
        server = http.createServer((request, response) => {
            const pubFolder = path.resolve(__dirname, '../dist');
            return handler(request, response, {
                public: pubFolder,
            });
        });

        server.listen(8080,  () => {
            console.log('Running at http://localhost:8080');
            done();
        });
    });

    beforeAll(async () => {
        browser = await puppeteer.launch({headless: true});
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
    });

    afterAll(async () => {
        await browser.close();
        server.close();
    });

    it('should have div with sweeper data hook', async () => {
        await page.waitForSelector('[data-hook="sweeper"]');
        const div = await page.$('[data-hook="sweeper"]');
        expect(div).toBeTruthy();
    });
});