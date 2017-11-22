// import * as Chromy from 'chromy';
import * as fs from 'fs';

import { directory } from './createArchive';

const standardPicture = async (site, chromy) => {

    let png;

    try {
        await chromy.goto(site.url);
        await chromy.scrollTo(0, 0);
        // png = await chromy.screenshotDocument({fromSurface: true})
        png = await chromy.screenshot({fromSurface: true});
        fs.writeFileSync(`${directory()}/${site.Code}.png`, png);

    } catch (error) {
        console.log(error);
        return Promise.resolve();
    }
};

const bannanaRepublicGap = async (site, chromy) => {

    let png;

    try {
        await chromy.goto(site.url);
        await chromy.wait(500);
        await chromy.scrollTo(0, 0);
        // png = await chromy.screenshotDocument({fromSurface: true})
        png = await chromy.screenshot({fromSurface: true});
        fs.writeFileSync(`${directory()}/${site.Code}.png`, png);
    } catch (error) {
        console.log(error);
        return Promise.resolve();
    }
};

const costcoPicture = async (site, chromy) => {

    let png;

    try {
        await chromy.goto('https://www.costco.com/LogonForm');
        await chromy.insert('#logonId', 'Djwinfield@verizon.net');
        await chromy.insert('#logonPassword', '3911clar');
        await chromy.click('[value="Sign In"]');

        await chromy.wait(2000);
        await chromy.goto(site.url);
        await chromy.wait(500);
        await chromy.scrollTo(0, 0);

        // png = await chromy.screenshotDocument({fromSurface: true});
        png = await chromy.screenshot({fromSurface: true});
        fs.writeFileSync(`${directory()}/${site.Code}.png`, png);

        await chromy.click('#myaccount-d');
        await chromy.wait(1000);
        await chromy.evaluate(() => { document.querySelector('[value="Sign Out"]').click(); });
        await chromy.wait(2000);

    } catch (error) {
        console.log(error);
        return Promise.resolve();
    }
};

const kmart = async (site, chromy) => {

    let png;

    try {
        await chromy.goto(site.url);
        await chromy.wait(500);
        await chromy.scrollTo(0, 0);
        await chromy.wait(3000);
        // png = await chromy.screenshotDocument({fromSurface: true})
        png = await chromy.screenshot({fromSurface: true});
        fs.writeFileSync(`${directory()}/${site.Code}.png`, png);
    } catch (error) {
        console.log(error);
        return Promise.resolve();
    }
};

const officeDepot = async(site, chromy) => {

    let png;

    try {
        await chromy.goto(site.url);
        await chromy.wait(1500);
        await chromy.scrollTo(0, 0);
        await chromy.wait(3000);
        await chromy.click('#bx-close-inside-530404');
        // png = await chromy.screenshotDocument({fromSurface: true})
        png = await chromy.screenshot({fromSurface: true});
        fs.writeFileSync(`${directory()}/${site.Code}.png`, png);
    } catch (error) {
        console.log(error);
        return Promise.resolve();
    }

};

export {standardPicture, bannanaRepublicGap, costcoPicture, kmart, officeDepot};
