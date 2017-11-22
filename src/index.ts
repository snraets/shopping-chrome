import * as Rx from 'rxjs';

import * as sites from './data/sites';

import {standardPicture, bannanaRepublicGap, costcoPicture, officeDepot} from './lib/standard';

console.log('Starting...');

Rx.Observable.from(sites.data)

    .concatMap( site => {

        if (site.Vendor === 'Costco') {
            return Rx.Observable.fromPromise(costcoPicture(site));
        } else if ( site.Vendor === 'Banana Republic' || site.Vendor === 'Gap') {
            return Rx.Observable.fromPromise(bannanaRepublicGap(site));
        } else if ( site.Vendor === 'Kmart') {
            return Rx.Observable.fromPromise(bannanaRepublicGap(site));
        } else if ( site.Vendor === 'Office Depot/OfficeMax') {
            return Rx.Observable.fromPromise(officeDepot(site));
        } else {
            return Rx.Observable.fromPromise(standardPicture(site));
        }
    })

    .subscribe({
        // next: data => console.log(),
        error: err => console.log(err),
        complete: () => console.log('Finished.')
    });
