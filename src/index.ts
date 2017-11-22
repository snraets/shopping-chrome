import * as Chromy from 'chromy';
import * as Rx from 'rxjs';

import sites from './data/sites';

import {standardPicture, bannanaRepublicGap, costcoPicture, kmart, officeDepot} from './lib/standard';

console.log('Starting...');

const defaultChromeOptions = {
    visible: process.argv[2] ? true : false,
    chromeFlags: [
        '--window-size=1800,2000',
        '--disable-search-geolocation-disclosure'
    ]
};

const chromy = new Chromy(defaultChromeOptions);

Rx.Observable.from(sites)

    .concatMap( site => {

        if (site.Vendor === 'Costco') {
            return Rx.Observable.fromPromise(costcoPicture(site, chromy));
        } else if ( site.Vendor === 'Banana Republic' || site.Vendor === 'Gap') {
            return Rx.Observable.fromPromise(bannanaRepublicGap(site, chromy));
        } else if ( site.Vendor === 'Kmart') {
            return Rx.Observable.fromPromise(kmart(site, chromy));
        } else if ( site.Vendor === 'Office Depot/OfficeMax') {
            return Rx.Observable.fromPromise(officeDepot(site, chromy));
        } else {
            return Rx.Observable.fromPromise(
                standardPicture(site, chromy)
            );
        }
    })

    .subscribe({
        // next: data => console.log(),
        error: err => console.log(err),
        complete: () => console.log('Finished.')
    });
