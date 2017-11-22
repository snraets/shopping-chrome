import * as Chromy from 'chromy';
import * as fs from 'fs';

import { directory } from './createArchive';

//--disable-gpu

const defaultChromeOptions = {
    visible: process.argv[2] ? true : false,
    chromeFlags: [
        '--window-size=1800,2000',
        '--disable-search-geolocation-disclosure'
    ]
};

const standardPicture = (site) => {

    let chromy = new Chromy(defaultChromeOptions);

    try {
        return chromy.chain()
            .goto(site.url)
            .scrollTo(0, 0)
            .screenshot({fromSurface: true})
            .result( png => fs.writeFileSync(`${directory()}/${site.Code}.png`, png))
            .end()
            .then(() => chromy.close());
    } catch (error) {
        return Promise.resolve();
    }
};

const bannanaRepublicGap = site => {

    let chromy = new Chromy(defaultChromeOptions);

    return chromy.chain()
        .goto(site.url)
        .wait(500)
        // .click('body > div.optly-modal > div.optly-modal-content > span')
        .wait(200)
        .scrollTo(0, 0)
        .screenshot({fromSurface: true})
        .result( png => fs.writeFileSync(`${directory()}/${site.Code}.png`, png))
        .end()
        .then(() => chromy.close());

};

const costcoPicture = (site) => {

    let chromy = new Chromy(defaultChromeOptions);

    try {
        return chromy.chain()
            .goto('https://www.costco.com/LogonForm')
            .insert('#logonId', 'Djwinfield@verizon.net')
            .insert('#logonPassword', '3911clar')
            .click('[value="Sign In"]')
            .wait(2000)
            .goto(site.url)
            .scrollTo(0, 0)
            .screenshot({fromSurface: true})
            .result( png => fs.writeFileSync(`${directory()}/${site.Code}.png`, png))
            .end()
            .then(() => chromy.close());
    } catch (err) {
        return Promise.resolve();
    }
};

const kmart = site => {

    let chromy = new Chromy(defaultChromeOptions);
    
        try {
            return chromy.chain()
                .goto(site.url)
                .wait(1000)
                .scrollTo(0, 0)
                .screenshot({fromSurface: true})
                .result( png => fs.writeFileSync(`${directory()}/${site.Code}.png`, png))
                .end()
                .then(() => chromy.close());
        } catch (error) {
            return Promise.resolve();
        }
};

const officeDepot = site => {

    let chromy = new Chromy(defaultChromeOptions);

    return chromy.chain()
        .goto(site.url)
        .wait(1500)
        .click('#bx-close-inside-530404')
        .wait(1000)
        .scrollTo(0, 0)
        .screenshot({fromSurface: true})
        .result( png => fs.writeFileSync(`${directory()}/${site.Code}.png`, png))
        .end()
        .then(() => chromy.close());

};

export {standardPicture, bannanaRepublicGap, costcoPicture, kmart, officeDepot};
