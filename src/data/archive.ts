const sites = [
  {
    "Code": "BR-1",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1059983&vid=1&pid=582070002"
  },
  {
    "Code": "BR-2",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1078218&vid=1&pid=671080002"
  },
  {
    "Code": "BR-3",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1079265&vid=1&pid=785252002"
  },
  {
    "Code": "BR-4",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=35286&vid=1&pid=586444002"
  },
  {
    "Code": "BR-5",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1030676&vid=1&pid=679494002"
  },
  {
    "Code": "BR-6",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1061783&vid=1&pid=670296012"
  },
  {
    "Code": "BR-7",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1052541&vid=1&pid=590737002"
  },
  {
    "Code": "BR-8",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=26497&vid=2&pid=480451002"
  },
  {
    "Code": "BR-9",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1061551&vid=1&pid=481993022"
  },
  {
    "Code": "BR-10",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=21800&vid=1&pid=590104002"
  },
  {
    "Code": "BR-11",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1032768&vid=1&pid=673500002"
  },
  {
    "Code": "BR-12",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=91449&vid=1&pid=488387002"
  },
  {
    "Code": "BR-13",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1051345&vid=1&pid=583617002"
  },
  {
    "Code": "BR-14",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1077652&vid=1&pid=587192002"
  },
  {
    "Code": "BR-15",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1014858&vid=1&pid=382568002"
  },
  {
    "Code": "BR-16",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1050644&vid=1&pid=584856002"
  },
  {
    "Code": "BR-17",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1074167&vid=1&pid=722214012"
  },
  {
    "Code": "BR-18",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1032803&vid=1&pid=377407012"
  },
  {
    "Code": "BR-19",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=42108&vid=1&pid=486481002"
  },
  {
    "Code": "BR-20",
    "Vendor": "Banana Republic",
    "url": "http://bananarepublic.gap.com/browse/product.do?cid=1026841&vid=1&pid=585315002"
  },
  {
    "Code": "BBB-1",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/calphalon-reg-nonstick-10-piece-bakeware-set/1041447307?categoryId=12044"
  },
  {
    "Code": "BBB-2",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/latitude-40-n-trade-freehold-22-inch-2-wheel-expandable-rollaboard-in-black/1045792991?categoryId=12325"
  },
  {
    "Code": "BBB-3",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/finding-dory-twin-full-reversible-comforter/1047020559?poc=227097"
  },
  {
    "Code": "BBB-4",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/kate-spade-new-york-parker-place-5-piece-place-setting/1041196182?poc=208423"
  },
  {
    "Code": "BBB-5",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/ninja-reg-kitchen-system-with-auto-iq-boost-trade/1047152717?categoryId=10517"
  },
  {
    "Code": "BBB-6",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/breville-reg-smart-oven-reg-air-convection-oven/1060538871?categoryId=10517"
  },
  {
    "Code": "BBB-7",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/zwilling-j-a-henckels-four-star-ii-7-piece-cutlery-set/1014250654?poc=108923"
  },
  {
    "Code": "BBB-8",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/shark-reg-rotator-reg-nv682-powered-lift-away-speed-trade-vacuum-in-blue/1044753276?categoryId=12244"
  },
  {
    "Code": "BBB-9",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/calphalon-reg-tri-ply-stainless-steel-13-piece-cookware-set/1017467808?categoryId=12063"
  },
  {
    "Code": "BBB-10",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/the-pillow-bar-reg-breakfast-in-bed-trade-down-alternative-sweet-dreams-medium-side-sleeper-pillow/1044518431?categoryId=13114"
  },
  {
    "Code": "BBB-11",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/real-simple-reg-rolling-kitchen-island-in-white/1041084984?categoryId=13497"
  },
  {
    "Code": "BBB-12",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/withings-body-composition-wi-fi-scale/1047044210?categoryId=13569"
  },
  {
    "Code": "BBB-13",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/travelers-club-reg-polo-racquet-club-3-piece-expandable-spinner-set/3276614?categoryId=12324"
  },
  {
    "Code": "BBB-14",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/nuu-splash-extreme-wireless-waterproof-speaker/3258543?categoryId=12332"
  },
  {
    "Code": "BBB-15",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/tempur-pedic-reg-travel-set/1013496137?categoryId=12736"
  },
  {
    "Code": "BBB-16",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/simplehuman-reg-brushed-stainless-steel-fingerprint-proof-rectangular-46-liter-recycler-trash-can/3250543?categoryId=14368"
  },
  {
    "Code": "BBB-17",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/polder-reg-5-step-ultra-light-step-ladder-in-aluminum/1018310104?categoryId=12235"
  },
  {
    "Code": "BBB-18",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/mirror-image-trade-minimalist-rectangular-3x-vanity-mirror-with-chrome-finish/1018592614?categoryId=14125"
  },
  {
    "Code": "BBB-19",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/oxo-good-grips-reg-15-piece-kitchen-tool-set/1013876150?categoryId=10617"
  },
  {
    "Code": "BBB-20",
    "Vendor": "Bed Bath & Beyond",
    "url": "https://www.bedbathandbeyond.com/store/product/oxo-good-grips-reg-3-piece-stainless-steel-mixing-bowl-set/1014567372?categoryId=12103"
  },
  {
    "Code": "BEST-1",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/lg-24-2-cu-ft-french-door-refrigerator-with-thru-the-door-ice-and-water-stainless-steel/7902019.p?skuId=7902019"
  },
  {
    "Code": "BEST-2",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/samsung-40-class-40-diag--led-2160p-smart-4k-ultra-hd-tv-black/5069100.p?skuId=5069100"
  },
  {
    "Code": "BEST-3",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/samsung-25-5-cu-ft-french-door-refrigerator-black-stainless-stee/5580242.p?skuId=5580242"
  },
  {
    "Code": "BEST-4",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/bosch-500-series-24-tall-tub-built-in-dishwasher-with-stainless-steel-tub-stainless-steel/8864107.p?skuId=8864107"
  },
  {
    "Code": "BEST-5",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/frigidaire-18-built-in-dishwasher-with-stainless-steel-tub-stainless-steel/5618256.p?skuId=5618256"
  },
  {
    "Code": "BEST-6",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/maytag-5-8-cu-ft-self-cleaning-freestanding-gas-range-black/8661797.p?skuId=8661797"
  },
  {
    "Code": "BEST-7",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/ge-4-4-cu-ft-self-cleaning-slide-in-electric-range-white/9536167.p?skuId=9536167"
  },
  {
    "Code": "BEST-8",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/lg-4-5-cu-ft-14-cycle-front-loading-washer-black-stainless-steel/5545500.p?skuId=5545500"
  },
  {
    "Code": "BEST-9",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/whirlpool-cabrio-4-3-cu-ft-12-cycle-high-efficiency-top-loading-washer-white/8579341.p?skuId=8579341"
  },
  {
    "Code": "BEST-10",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/amana-3-4-cu-ft-6-cycle-electric-dryer-white/5299500.p?skuId=5299500"
  },
  {
    "Code": "BEST-11",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/ge-7-2-cu-ft-4-cycle-high-efficiency-gas-dryer-white-with-silver-backsplash/4684600.p?skuId=4684600"
  },
  {
    "Code": "BEST-12",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/lg-55-class-54-6-diag--oled-2160p-smart-4k-ultra-hd-tv-with-high-dynamic-range-silver/5252800.p?skuId=5252800"
  },
  {
    "Code": "BEST-13",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/samsung-65-class-64-5-diag-curved-led-2160p-smart-4k-ultra-hd-tv-with-high-dynamic-range-silver/5294100.p?skuId=5294100"
  },
  {
    "Code": "BEST-14",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/yamaha-650w-5-1-channel-3d-home-theater-system-black/6866026.p?skuId=6866026"
  },
  {
    "Code": "BEST-15",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/garmin-vivosmart-hr-activity-tracker-heart-rate-black/4509506.p?skuId=4509506"
  },
  {
    "Code": "BEST-16",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/night-owl-8-channel-4-camera-indoor-outdoor-high-definition-dvr-security-system-black/4904046.p?skuId=4904046"
  },
  {
    "Code": "BEST-17",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/bowers-wilkins-p5-on-ear-wireless-headphones-black/4253800.p?skuId=4253800"
  },
  {
    "Code": "BEST-18",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/sony-ubp-x800-streaming-4k-ultra-hd-3d-hi-res-audio-wi-fi-built-in-blu-ray-player-black/5748620.p?skuId=5748620"
  },
  {
    "Code": "BEST-19",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/vizio-55-class-54-5-diag--led-2160p-with-chromecast-built-in-4k-ultra-hd-home-theater-display-with-hdr-black/5608900.p?skuId=5608900"
  },
  {
    "Code": "BEST-20",
    "Vendor": "Best Buy",
    "url": "http://www.bestbuy.com/site/lg-65-class-64-5-diag--oled-2160p-smart-4k-ultra-hd-tv-with-high-dynamic-range-metallic-gray/5252701.p?skuId=5252701"
  },
  {
    "Code": "BLOOM-1",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/michael-michael-kors-maritime-large-metallic-beach-tote?ID=1881056&CategoryID=1002795&brandIndex=1#fn=ppp%3D%26spp%3D9%26sp%3D1%26rid%3D116|BOOST SAVED SET%26spc%3D176%26rsid%3Dundefined%26pn%3D1|2|9|176"
  },
  {
    "Code": "BLOOM-2",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/waterford-elegance-champagne-classic-flute-pair?ID=1007955&CategoryID=1000232#fn=ppp%3D%26spp%3D37%26sp%3D1%26rid%3D124|BOOST SAVED SET|BOOST"
  },
  {
    "Code": "BLOOM-3",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/lauren-ralph-lauren-geo-print-shift-dress?ID=2463495&CategoryID=1006738#fn=ppp%3D%26spp%3D32%26sp%3D1%26rid%3D112|BOOST SAVED SET%26spc%3D1886%26rsid%3Dundefined%26pn%3D1|21|32|1886"
  },
  {
    "Code": "BLOOM-4",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/michael-michael-kors-holly-metallic-sandals?ID=2516425&CategoryID=4841#fn=ppp%3D%26spp%3D51%26sp%3D1%26rid%3D116|BOOST SAVED SET%26spc%3D857%26rsid%3Dundefined%26pn%3D1|10|51|857"
  },
  {
    "Code": "BLOOM-5",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/7-for-all-mankind-the-ankle-skinny-jeans-in-mauve?ID=2458906&CategoryID=1004906#fn=ppp%3D%26spp%3D10%26sp%3D1%26rid%3D116|BOOST SAVED SET%26spc%3D800%26rsid%3Dundefined%26pn%3D1|9|10|800"
  },
  {
    "Code": "BLOOM-6",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/burberry-leather-check-strap-watch-42mm?ID=1539978&CategoryID=20532#fn=ppp%3D%26spp%3D17%26sp%3D1%26rid%3D83|BOOST SAVED SET|BOOST ATTRIBUTE%26spc%3D1678%26rsid%3Dundefined%26pn%3D1|19|17|1678"
  },
  {
    "Code": "BLOOM-7",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/boss-hugo-boss-weave-peak-lapel-slim-fit-sport-coat?ID=1861416&CategoryID=1000074#fn=ppp%3D%26spp%3D8%26sp%3D1%26rid%3D89|BOOST SAVED SET%26spc%3D255%26rsid%3Dundefined%26pn%3D1|3|8|255"
  },
  {
    "Code": "BLOOM-8",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/polo-ralph-lauren-varick-slim-fit-jeans?ID=1120603&CategoryID=1006776#fn=ppp%3D%26spp%3D7%26sp%3D1%26rid%3D120|BOOST SAVED SET%26spc%3D127%26rsid%3Dundefined%26pn%3D1|2|7|127"
  },
  {
    "Code": "BLOOM-9",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/j.a.-henckels-international-classic-16-piece-knife-block-set?ID=878692&CategoryID=1006807#fn=ppp%3D%26spp%3D3%26sp%3D1%26rid%3D81%26spc%3D34%26rsid%3Dundefined%26pn%3D1|1|3|34"
  },
  {
    "Code": "BLOOM-10",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/paraboot-anderson-brogue-wingtip-shoes?ID=1762978&CategoryID=1006795#fn=ppp%3D%26spp%3D37%26sp%3D1%26rid%3D120|BOOST SAVED SET%26spc%3D299%26rsid%3Dundefined%26pn%3D1|4|37|299"
  },
  {
    "Code": "BLOOM-11",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/joie-merci-patterned-shorts-100-exclusive?ID=2424765&CategoryID=19950&LinkType=#fn=ppp%3D%26spp%3DNULL%26sp%3DNULL%26rid%3DNULL%26rsid%3Dundefined%26pn%3D1|3|63|211"
  },
  {
    "Code": "BLOOM-12",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/lauren-ralph-lauren-statement-bib-necklace-16?ID=1890088&CategoryID=3629#fn=SPECIAL_OFFERS%3DSales & Offers%26ppp%3D%26spp%3D12%26sp%3D1%26rid%3D82|BOOST SAVED SET%26spc%3D173%26rsid%3Dundefined%26pn%3D1|2|12|173"
  },
  {
    "Code": "BLOOM-13",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/uri-minkoff-derrick-messenger-bag?ID=1770789&CategoryID=1000059#fn=ppp%3D%26spp%3D5%26sp%3D1%26rid%3D97|BOOST SAVED SET%26spc%3D351%26rsid%3Dundefined%26pn%3D1|4|5|351"
  },
  {
    "Code": "BLOOM-14",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/all-clad-d5-stainless-brushed-steel-4-quart-soup-pot-with-lid?ID=898515&CategoryID=1006896&LinkType=#fn=SPECIAL_OFFERS%3DSales & Offers%26ppp%3D%26spp%3D6%26sp%3D1%26rid%3D94|BOOST SAVED SET|BOOST ATTRIBUTE%26spc%3D81%26rsid%3Dundefined%26pn%3D1|3|6|81"
  },
  {
    "Code": "BLOOM-15",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/ugg-all-natural-year-round-down-pillow-king?ID=1785077&CategoryID=1005713#fn=ppp%3D%26spp%3D52%26sp%3D1%26rid%3D78|BOOST SAVED SET%26spc%3D53%26rsid%3Dundefined%26pn%3D1|1|52|53"
  },
  {
    "Code": "BLOOM-16",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/kitchenaid-artisan-design-stand-mixer-ksm155b?ID=1674860&CategoryID=1000239#fn=ppp%3D%26spp%3D10%26sp%3D1%26rid%3D82|BOOST SAVED SET|BOOST ATTRIBUTE%26spc%3D384%26rsid%3Dundefined%26pn%3D1|5|10|384"
  },
  {
    "Code": "BLOOM-17",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/villeroy-boch-anmut-platinum-no.-1-5-piece-place-setting?ID=467966&CategoryID=1000231"
  },
  {
    "Code": "BLOOM-18",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/tumi-alpha-2-front-lid-international-carry-on?ID=2434553&CategoryID=1000257#fn=ppp%3D%26spp%3D2%26sp%3D1%26rid%3D111|BOOST SAVED SET|BOOST ATTRIBUTE%26spc%3D513%26rsid%3Dundefined%26pn%3D1|6|2|513"
  },
  {
    "Code": "BLOOM-19",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/breville-the-juice-fountain-cold?ID=1684334&CategoryID=1000239#fn=ppp%3D%26spp%3D24%26sp%3D1%26rid%3D82|BOOST SAVED SET|BOOST ATTRIBUTE%26spc%3D384%26rsid%3Dundefined%26pn%3D1|5|24|384"
  },
  {
    "Code": "BLOOM-20",
    "Vendor": "Bloomingdale's",
    "url": "http://www1.bloomingdales.com/shop/product/twin-pro-s-9-pc-block-set-by-ja-henckels?ID=59621&CategoryID=1000238#fn=ppp%3D%26spp%3D8%26sp%3D1%26rid%3D82|BOOST SAVED SET%26spc%3D321%26rsid%3Dundefined%26pn%3D1|4|8|321"
  },
  {
    "Code": "COSTCO-1",
    "Vendor": "Costco",
    "url": "https://www.costco.com/Samsung-55%22-Class-(54.6%22-Diag)-4K-SUHD-Curved-LED-LCD-TV-UN55KS850DFXZA.product.100289273.html"
  },
  {
    "Code": "COSTCO-2",
    "Vendor": "Costco",
    "url": "https://www.costco.com/LG-65%22-Class-(64.5%22-Diag.)-4K-Ultra-HD-Smart-LED-LCD-TV-65UH615A.product.100287072.html"
  },
  {
    "Code": "COSTCO-3",
    "Vendor": "Costco",
    "url": "https://www.costco.com/Samsung-Galaxy-Tab-S2-Wi-Fi-Tablet---Octa-Core---Android-Marshmallow---Black---Includes-Book-Cover-.product.100300001.html"
  },
  {
    "Code": "COSTCO-4",
    "Vendor": "Costco",
    "url": "https://www.costco.com/LG-26CuFt-Side-by-Side-Ultra-Large-Capacity-with-Door-in-Door-Refrigerator-in-Stainless-Steel.product.100148275.html"
  },
  {
    "Code": "COSTCO-5",
    "Vendor": "Costco",
    "url": "https://www.costco.com/Whirlpool-Steam-Clean-4.5CuFt-Front-Load-Washer-with-Load-%2526-Go%E2%84%A2-Bulk-Dispenser-in-Diamond-Steel-%7c-WFW92HEFU.product.100286909.html"
  },
  {
    "Code": "COSTCO-6",
    "Vendor": "Costco",
    "url": "https://www.costco.com/LG-Twin-Wash-5.2CuFt-Mega-Capacity-Washer-with-TurboWash-Technology-9.0CuFt-Mega-Capacity-GAS-SteamDryer-with-1.0CuFt-SideKick-Pedestal-Washer-in-Graphite-Steel---WM8100HVA%2c-DLGX8101V%2c-WD200CV%2c-WDP5V.product.100304116.html"
  },
  {
    "Code": "COSTCO-7",
    "Vendor": "Costco",
    "url": "https://www.costco.com/Samsung-7.5CuFt-GAS-Steam-Dryer-with-Stainless-Steel-Drum-in-White.product.100309133.html"
  },
  {
    "Code": "COSTCO-8",
    "Vendor": "Costco",
    "url": "https://www.costco.com/Brother-MFC-J6925DW-All-in-One-Color-Inkjet-Printer.product.100220846.html"
  },
  {
    "Code": "COSTCO-9",
    "Vendor": "Costco",
    "url": "https://www.costco.com/Rug-Doctor-Deep-Carpet-Cleaner.product.100158555.html"
  },
  {
    "Code": "COSTCO-10",
    "Vendor": "Costco",
    "url": "https://www.costco.com/Ninja-Coffee-Bar-Glass-Carafe-System-.product.100313041.html"
  },
  {
    "Code": "COSTCO-11",
    "Vendor": "Costco",
    "url": "https://www.costco.com/Blendtec-Total-Blender-with-WildSide%2b-Jar-%2526-Twister-Jar.product.100052400.html"
  },
  {
    "Code": "COSTCO-12",
    "Vendor": "Costco",
    "url": "https://www.costco.com/.product.100279775.html"
  },
  {
    "Code": "COSTCO-13",
    "Vendor": "Costco",
    "url": "https://www.costco.com/.product.100284077.html"
  },
  {
    "Code": "COSTCO-14",
    "Vendor": "Costco",
    "url": "https://www.costco.com/ProForm-16.0-MME-Elliptical---Assembly-Required.product.100309242.html"
  },
  {
    "Code": "COSTCO-15",
    "Vendor": "Costco",
    "url": "https://www.costco.com/Alpen-20-60x80-Waterproof-Spotting-Scope.product.100110991.html"
  },
  {
    "Code": "COSTCO-16",
    "Vendor": "Costco",
    "url": "https://www.costco.com/Callaway-Cart-Bag---Navy.product.100233779.html"
  },
  {
    "Code": "COSTCO-17",
    "Vendor": "Costco",
    "url": "https://www.costco.com/Bestway-Tiki-Breeze-Floating-Island.product.100279210.html"
  },
  {
    "Code": "COSTCO-18",
    "Vendor": "Costco",
    "url": "https://www.costco.com/HoMedics-Shiatsu-Air-Elite-Foot-Massager-with-Heat.product.100277979.html"
  },
  {
    "Code": "COSTCO-19",
    "Vendor": "Costco",
    "url": "https://www.costco.com/Urban-Islands-304-Stainless-Steel-4-burner-BBQ-Cart-by-Bull-Outdoor-Products.product.100057697.html"
  },
  {
    "Code": "COSTCO-20",
    "Vendor": "Costco",
    "url": "https://www.costco.com/Blueair-505-HEPASilent-Air-Purifier-with-Wifi.product.100315458.html"
  },
  {
    "Code": "GAP-1",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=1076528&vid=1&pid=464719002"
  },
  {
    "Code": "GAP-2",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=1079323&vid=1&pid=528571002"
  },
  {
    "Code": "GAP-3",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=1076532&vid=1&pid=788088002"
  },
  {
    "Code": "GAP-4",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=1008444&vid=1&pid=528166002"
  },
  {
    "Code": "GAP-5",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=80811&vid=1&pid=526102012"
  },
  {
    "Code": "GAP-6",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?pid=526130002&rrec=true&mlink=5050,12413545,gapproduct1_rr_4&clink=12413545"
  },
  {
    "Code": "GAP-7",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=1077829&vid=1&pid=180087142"
  },
  {
    "Code": "GAP-8",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=1026956&vid=1&pid=636233012"
  },
  {
    "Code": "GAP-9",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=1008444&vid=1&pid=527171002"
  },
  {
    "Code": "GAP-10",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=34740&vid=1&pid=520703002"
  },
  {
    "Code": "GAP-11",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=1024849&vid=1&pid=637531002"
  },
  {
    "Code": "GAP-12",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=48873&vid=1&pid=647158002"
  },
  {
    "Code": "GAP-13",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=1032848&vid=1&pid=713805002"
  },
  {
    "Code": "GAP-14",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=1056055&vid=1&pid=321062012"
  },
  {
    "Code": "GAP-15",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=1069354&vid=1&pid=461875012"
  },
  {
    "Code": "GAP-16",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=1071905&vid=1&pid=642645002"
  },
  {
    "Code": "GAP-17",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=1064351&vid=1&pid=523293002"
  },
  {
    "Code": "GAP-18",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=5135&vid=1&pid=600175022"
  },
  {
    "Code": "GAP-19",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=1072543&vid=1&pid=523039052"
  },
  {
    "Code": "GAP-20",
    "Vendor": "Gap",
    "url": "http://www.gap.com/browse/product.do?cid=5700&vid=1&pid=528031002"
  },
  {
    "Code": "HHG-1",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/bose-soundtouch-10-wireless-music-system/item/SOUNDTOUCH10",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-2",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/whirlpool-4-5-cu-ft-front-load-steam-washer-with-load-go-bulk-dispenser/item/WFW92HEFW#",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-3",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/lg-65-4k-hdr-super-ultra-hd-webos-3-0-smart-tv/item/65UH7700",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-4",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/sony-55-4k-hdr-ultra-hd-smart-tv/item/XBR55X850D",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-5",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/samsung-4k-ultra-hd-3d-blu-ray-player/item/UBDK8500",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-6",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/ge-22-2-cu-ft-stainless-steel-counter-depth-french-door-refrigerator/item/PYE22KSKSS",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-7",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/frigidaire-23-cu-ft-stainless-steel-counter-depth-side-by-side-refrigerator/item/FGHC2331PF",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-8",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/danby-4-3-cu-ft-beverage-center/item/DBC039A1BDB",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-9",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/whirlpool-30-gas-range/item/WFG505M0BB",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-10",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/lg-30-black-stainless-steel-electric-range/item/LRE3061BD",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-11",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/kitchenaid-24-stainless-steel-dishwasher/item/KDTE104ESS",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-12",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/bosch-24-stainless-steel-dishwasher/item/SHX68T55UC",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-13",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/lg-5-2-cu-ft-black-stainless-steel-top-load-steam-washer/item/WT7600HKA",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-14",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/ge-6-1-cu-ft-electric-dryer/item/GTX65EBSJWS",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-15",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/samsung-7-5-cu-ft-black-stainless-steel-steam-gas-dryer/item/DV45K6500GV",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-16",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/samsung-gear-s2-smartwatch/item/R7200ZKAXAR",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-17",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/bose-quietcomfort-35-silver-wireless-headphones/item/7599440020",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-18",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/ring-venetian-bronze-video-doorbell/item/88RG002FC000",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-19",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/ninja-mega-kitchen-system-/item/BL770",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "HHG-20",
    "Vendor": "hhgregg",
    "url": "http://www.hhgregg.com/shark-rocket-vacuum/item/HV301",
    "cookies": [
      {
        "name": "ZipCode",
        "value": "20006",
        "path": "/",
        "secure": false
      }
    ],
    "endWait": 2000
  },
  {
    "Code": "JCP-1",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/nutribullet-pro-900-series-bullet-blender/prod.jump?ppId=pp5005920430&catId=cat100240104&deptId=dept20026090025&urlState=/g/small-kitchen-appliances/N-1b2ke21D1nohrc"
  },
  {
    "Code": "JCP-2",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/corelle-boutique-swept-wide-rim-16-pc-dinnerware-set/prod.jump?ppId=pp5006360225&catId=cat100240018&deptId=dept20000011&urlState=/g/dinnerware-sets/N-bwo3vD1nohoy"
  },
  {
    "Code": "JCP-3",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/ge-profile-series-222-cu-ft-counter-depth-french-door-refrigerator/prod.jump?ppId=ppr5007110575&catId=cat1006250002&deptId=dept20026090025&urlState=/g/ge-refrigerators/N-1b2ke21Dgn3fgyZ1z12ywx"
  },
  {
    "Code": "JCP-4",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/lg-energy-star-full-integrated-steamdishwasher-with-easyrack-plus-and-height-adjustable-3rd-rack/prod.jump?ppId=pp5006332813&catId=cat1006250003&deptId=dept20026090025&urlState=/g/lg-dishwashers/N-1b2ke21Dgn3fgzZ1z12ut7Z1z12tfqZ1z12t31"
  },
  {
    "Code": "JCP-5",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/samsung-42-cu-ft-high-efficiency-front-load-washer/prod.jump?ppId=pp5006350469&catId=cat1006250013&deptId=dept20026090025&urlState=/g/samsung-washers/N-1b2ke21Dgn3fh9Zx2"
  },
  {
    "Code": "JCP-6",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/ge-75-cu-ft-capacity-front-load-dryer-with-steam/prod.jump?ppId=pp5006301035&catId=cat1006250014&deptId=dept20026090025&urlState=/g/ge-electric-dryers-dryers/N-1b2ke21Dgn3fhaZ1z12ywxZ1z12x64"
  },
  {
    "Code": "JCP-7",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/cuisinart-elite-collection-12-cup-die-cast-food-processor/prod.jump?ppId=pp5006540997&catId=cat100240104&deptId=dept20026090025&urlState=/g/processors-slicers-small-kitchen-appliances/N-1b2ke21D1nohrcZ1z0ph7x"
  },
  {
    "Code": "JCP-8",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/shark-navigator-lift-away-bagless-upright-vacuum-nv351/prod.jump?ppId=1d70971&catId=cat100250081&deptId=dept20000011&urlState=/g/vacuums-floor-cleaning/N-bwo3vD1nopgh"
  },
  {
    "Code": "JCP-9",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/samsonite-swerv-28-expandable-hardside-spinner-upright-luggage/prod.jump?ppId=pp5005941433&catId=cat100210003&deptId=dept20000011&urlState=/g/hardside-luggage/N-bwo3vD1nnuj7Z1z13yzv"
  },
  {
    "Code": "JCP-10",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/bulova-womens-two-tone-bracelet-watch-98r234/prod.jump?ppId=ppr5007203109&catId=cat1002300028&deptId=dept20000020&urlState=/g/bulova-womens-watches/N-bwo44DgkqrngZ4e"
  },
  {
    "Code": "JCP-11",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/swiss-eagle-polar-king-mens-two-tone-strap-chronograph-watch-se-9053-33/prod.jump?ppId=pp5005730296&catId=cat1002300029&deptId=dept20000020&urlState=/g/mens-watches/N-bwo44Dgkqrnh&sort=PHL&page=7"
  },
  {
    "Code": "JCP-12",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/sleep-innovations-memory-foam-body-pillow/prod.jump?ppId=pp5002010386&catId=cat100250070&deptId=dept20000012&urlState=/g/body-pillows-pillows/N-bwo3wD1nopg6Z1z13jp5"
  },
  {
    "Code": "JCP-13",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/perlina-istanbul-leather-crossbody-bag/prod.jump?ppId=ppr5007126178&catId=cat100640196&deptId=dept20000019&urlState=/g/crossbody-bags/N-bwo43D1nx2h0&sort=PHL"
  },
  {
    "Code": "JCP-14",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/cuisinart-17-pc-stainless-steel-dishwasher-safe-cookware-set/prod.jump?ppId=ppr5007163116&catId=cat100240017&deptId=dept20000011&urlState=/g/cookware/N-bwo3vD1nohox"
  },
  {
    "Code": "JCP-15",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/ginsu-chikara-series-19-pc-stainless-steel-forged-knife-set/prod.jump?ppId=pp5005770142&catId=cat100240108&deptId=dept20000011"
  },
  {
    "Code": "JCP-16",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/cuisinart-10-cup-grind-brew-thermal-coffee-maker/prod.jump?ppId=pp5002100714&catId=cat100240105&deptId=dept20000011&urlState=/g/coffee-tea-makers/N-bwo3vD1nohrd"
  },
  {
    "Code": "JCP-17",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/oneida-amsterdam-45-pc-flatware-set/prod.jump?ppId=169ceb9&catId=cat100240100&deptId=dept20000011&urlState=/g/flatware/N-bwo3vD1nohr8"
  },
  {
    "Code": "JCP-18",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/levis-505-regular-fit-jeans/prod.jump?ppId=pp5003860485&rrec=true&rrplacementtype=category1_rr"
  },
  {
    "Code": "JCP-19",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/new-balance-490-womens-running-shoes/prod.jump?ppId=pp5007720102&catId=cat100250192&deptId=dept20000018&urlState=/g/new-balance-womens-athletic-shoes/N-bwo42D1nopjkZ6l"
  },
  {
    "Code": "JCP-20",
    "Vendor": "JCPenny",
    "url": "http://www.jcpenney.com/le-suit-long-sleeve-2-button-striped-pant-suit/prod.jump?ppId=ppr5007216585&catId=cat100260321&deptId=dept20000013&urlState=/g/womens-suits-work-dresses/N-bwo3xD1noxcx"
  },
  {
    "Code": "KMART-1",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/samsung-43inch-class-1080p-led-hdtv-un43j5000/p-05772614000P?unitNo=3798&sellerId=SEARS&prdNo=3&blockNo=3&blockType=G3"
  },
  {
    "Code": "KMART-2",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/t-fal-18-piece-non-stick-cookware-set/p-011W005768436001P?plpSellerId=Kmart&prdNo=3&blockNo=3&blockType=G3"
  },
  {
    "Code": "KMART-3",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/kenmore-25.2-cu-ft-side-by-side-refrigerator/p-04641153000P?unitNo=3798&sellerId=SEARS&prdNo=1&blockNo=1&blockType=G1"
  },
  {
    "Code": "KMART-4",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/shark-professional-steam-pocket-mop/p-02032057000P?unitNo=3798&sellerId=SEARS&prdNo=1&blockNo=1&blockType=G1"
  },
  {
    "Code": "KMART-5",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/delta-children-layla-crib-n-changer/p-024W001459227001P?unitNo=3798&sellerId=SEARS&prdNo=1&blockNo=1&blockType=G1"
  },
  {
    "Code": "KMART-6",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/evenflo-triumph-lx-charleston-convertible-car-seat-5/p-024W007533260001P?unitNo=3798&sellerId=SEARS&prdNo=5&blockNo=5&blockType=G5"
  },
  {
    "Code": "KMART-7",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/black-decker-stainless-steel-toaster-oven/p-011W008148833001P?unitNo=3798&sellerId=SEARS&prdNo=4&blockNo=4&blockType=G4"
  },
  {
    "Code": "KMART-8",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/nakamichi-wireless-subwoofer/p-05738373000P?unitNo=3798&sellerId=SEARS&prdNo=1&blockNo=1&blockType=G1"
  },
  {
    "Code": "KMART-9",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/men-s-analog-watch/p-026W005852915001P?unitNo=3798&sellerId=SEARS&prdNo=16&blockNo=16&blockType=G16"
  },
  {
    "Code": "KMART-10",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/star-wars-rogue-1-imperial-force-twin-comforter/p-048W003212282001P?unitNo=3798&sellerId=SEARS&prdNo=27&blockNo=27&blockType=G27"
  },
  {
    "Code": "KMART-11",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/kenmore-4-burner-red-gas-grill-with-storage/p-028W008686032001P?unitNo=3798&sellerId=SEARS&prdNo=2&blockNo=2&blockType=G2"
  },
  {
    "Code": "KMART-12",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/northwest-territory-eagle-river-tent-18'-x-10'/p-00662508000P?unitNo=3798&sellerId=SEARS&prdNo=1&blockNo=1&blockType=G1"
  },
  {
    "Code": "KMART-13",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/total-gym-gazelle-edge-exercise-system/p-00623865000P?unitNo=3798&sellerId=SEARS&prdNo=1&blockNo=1&blockType=G1"
  },
  {
    "Code": "KMART-14",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/propel-trampolines-12-ft-trampoline-with-enclosure/p-05242890000P?unitNo=3798&sellerId=SEARS&prdNo=4&blockNo=4&blockType=G4"
  },
  {
    "Code": "KMART-15",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/barbie-pop-up-camper/p-004W008016548001P?unitNo=3798&sellerId=SEARS&prdNo=1&blockNo=1&blockType=G1"
  },
  {
    "Code": "KMART-16",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/little-tikes-jump-n-slide-bouncer/p-05225178000P?unitNo=3798&sellerId=SEARS&prdNo=1&blockNo=1&blockType=G1"
  },
  {
    "Code": "KMART-17",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/essential-home-sydney-dining-set/p-021W008959265001P?unitNo=3798&sellerId=SEARS&prdNo=1&blockNo=1&blockType=G1"
  },
  {
    "Code": "KMART-18",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/samsung-58inch-class-1080p-smart-led-full-hdtv/p-05771594000P?unitNo=3798&sellerId=SEARS&prdNo=9&blockNo=9&blockType=G9"
  },
  {
    "Code": "KMART-19",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/summer-infants-sure-sight-digital-color-video-monitor/p-024W006986987001P?unitNo=3798&sellerId=SEARS&prdNo=2&blockNo=2&blockType=G2"
  },
  {
    "Code": "KMART-20",
    "Vendor": "Kmart",
    "url": "http://www.kmart.com/sportspower-woodland-jump-8216-n-swing-with-picnic-table/p-004W004039585001P?unitNo=3798&sellerId=SEARS&prdNo=1&blockNo=1&blockType=G1"
  },
  {
    "Code": "KOHLS-1",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-1354728/hanes-classics-6-pk-comfortsoft-tees-men.jsp"
  },
  {
    "Code": "KOHLS-2",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-2451427/sonoma-outdoors-coronado-swivel-sling-patio-chair-2-piece-set.jsp?color=Brown&prdPV=16"
  },
  {
    "Code": "KOHLS-3",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-2754531/itouch-womens-smart-watch-itc3160g590-121.jsp?prdPV=7"
  },
  {
    "Code": "KOHLS-4",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-1506178/calphalon-contemporary-11-pc-hard-anodized-nonstick-cookware-set.jsp?prdPV=14"
  },
  {
    "Code": "KOHLS-5",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-1183121/ja-henckels-international-statement-12-pc-cutlery-set.jsp?prdPV=13"
  },
  {
    "Code": "KOHLS-6",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-2552104/hoover-windtunnel-3-pet-high-performance-bagless-upright-vacuum.jsp?prdPV=6"
  },
  {
    "Code": "KOHLS-7",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-2248166/vitamix-professional-series-200-deluxe-blender.jsp?prdPV=2"
  },
  {
    "Code": "KOHLS-8",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-2480246/asics-gel-sonic-womens-running-shoes.jsp?prdPV=16"
  },
  {
    "Code": "KOHLS-9",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-2237613/kassatex-turkish-aegean-cotton-6-pc-luxury-towel-set.jsp?color=Marble%20Tan&prdPV=5"
  },
  {
    "Code": "KOHLS-10",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-1435917/sonoma-life-style-madison-storage-bench-ottoman.jsp?storeIds=465&prdPV=1"
  },
  {
    "Code": "KOHLS-11",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-2487075/womens-chaps-colorblock-lace-sheath-dress.jsp?storeIds=465&prdPV=9"
  },
  {
    "Code": "KOHLS-12",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-2560286/womens-levis-721-modern-fit-high-rise-skinny-jeans.jsp?color=Soft%20Black&prdPV=25"
  },
  {
    "Code": "KOHLS-13",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-2480979/mens-marc-anthony-slim-fit-stretch-suit-jacket.jsp?color=Gray%20Shark&prdPV=5"
  },
  {
    "Code": "KOHLS-14",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-2142453/1-carat-tw-black-diamond-10k-white-gold-stud-earrings.jsp?prdPV=2"
  },
  {
    "Code": "KOHLS-15",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-1310504/seiko-solar-two-tone-stainless-steel-chronograph-watch-ssc142-men.jsp?storeIds=465&prdPV=2"
  },
  {
    "Code": "KOHLS-16",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-2720813/dana-buchman-faux-bamboo-shoulder-bag.jsp?storeIds=465&prdPV=13"
  },
  {
    "Code": "KOHLS-17",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-1086927/eddie-bauer-rick-hiking-boots-men.jsp?prdPV=4"
  },
  {
    "Code": "KOHLS-18",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-1832578/britax-affinity-stroller-with-color-pack.jsp?color=Silver%20Sky%20Blue&prdPV=10"
  },
  {
    "Code": "KOHLS-19",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-2624846/mens-under-armour-maverick-tapered-pants.jsp?storeIds=465&prdPV=6"
  },
  {
    "Code": "KOHLS-20",
    "Vendor": "Kohl's",
    "url": "https://www.kohls.com/product/prd-1112618/victory-land-5-tier-bookshelf.jsp?storeIds=465&prdPV=2"
  },
  {
    "Code": "LOWES-1",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/Greenworks-1-800-PSI-1-1-GPM-Cold-Water-Electric-Pressure-Washer/999978366",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-2",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/GE-Smooth-Surface-5-Element-Slide-In-Convection-Electric-Range-Stainless-Steel-Common-30-in-Actual-31-25-in/50100196",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-3",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/Whirlpool-Freestanding-5-1-cu-ft-Gas-Range-Stainless-Steel-Common-30-in-Actual-29-88-in/50245907",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-4",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/Samsung-28-15-cu-ft-4-Door-French-Door-Refrigerator-with-Single-Ice-Maker-Black-ENERGY-STAR/50266769",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-5",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/LG-10-1-cu-ft-Bottom-Freezer-Refrigerator-Smooth-White/1000063089",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-6",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/Bosch-800-Series-44-Decibel-Built-in-Dishwasher-Stainless-Steel-Common-24-in-Actual-23-625-in/4776487",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-7",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/Fisher-Paykel-53-Decibel-2-Drawer-Dishwasher-ENERGY-STAR-Common-24-in-Actual-23-59-in/3621460",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-8",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/Samsung-4-2-cu-ft-High-Efficiency-Stackable-Front-Load-Washer-with-Steam-Cycle-Merlot-ENERGY-STAR/50151504",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-9",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/GE-5-1-cu-ft-High-Efficiency-Top-Load-Washer-White-ENERGY-STAR/50405066",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-10",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/Whirlpool-7-4-cu-ft-Stackable-Electric-Dryer-with-Steam-Cycle-White-ENERGY-STAR/1000035213",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-11",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/LG-7-4-cu-ft-Stackable-Gas-Dryer-with-Steam-Cycle-Graphite-Steel-ENERGY-STAR/1000082753",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-12",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/Cuisinart-5-5-Quart-12-Speed-Brushed-Chrome-Countertop-Stand-Mixer/50147700",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-13",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/BISSELL-ProHeat-2X-Revolution-1-Speed-1-Gallon-Upright-Carpet-Cleaner/50438014",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-14",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/Delta-Trask-Touch2O-Spotshield-Stainless-1-Handle-Pull-Down-Touch-Kitchen-Faucet/999930332",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-15",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/Moen-Waterhill-10-in-2-5-GPM-9-5-Lpm-Brushed-Nickel-1-Spray-Rain-Showerhead/3598498",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-16",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/Char-Broil-Advantage-Black-Stainless-6-Burner-48-000-BTU-Liquid-Propane-Gas-Grill-with-Side-Burner/50287131",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-17",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/Honeywell-T5-Thermostat-with-Built-in-Wifi/1000142915?int_cmp=SmartHomeSecurity:C3:Electrical:Merch:Smart_Home_Honeywell_Lyric",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-18",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/Netatmo-Welcome-Digital-Wi-Fi-Indoor-Security-Camera-Night-Vision/1000062761?int_cmp=SmartHomeSecurity:C3:Electrical:Merch:Smart_Home_Netatmo",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-19",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/DEWALT-12-in-15-Amp-Dual-Bevel-Sliding-Compound-Miter-Saw/1000145735",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "LOWES-20",
    "Vendor": "Lowe's",
    "url": "https://www.lowes.com/pd/Kobalt-227-Piece-Standard-Sae-and-Metric-Mechanic-s-Tool-Set-Hard/50200795",
    "initialUrl": "https://www.lowes.com/"
  },
  {
    "Code": "MACYS-1",
    "Vendor": "Macy's",
    "url": "http://www1.macys.com/shop/product/michael-kors-access-unisex-digital-bradshaw-rose-gold-tone-stainless-steel-bracelet-smart-watch-45mm-mkt5004?ID=2964969&CategoryID=57385#fn=sp%3D1%26spc%3D3104%26slotId%3D12"
  },
  {
    "Code": "MACYS-2",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/calphalon-contemporary-nonstick-12-flat-bottom-wok?ID=4232282&CategoryID=7552#fn=sp%3D1%26spc%3D585%26ruleId%3D78|BA%26slotId%3D3"
  },
  {
    "Code": "MACYS-3",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/j.a.-henckels-international-modernist-13-pc.-knife-block-set-only-at-macys?ID=3008496&CategoryID=31760#fn=sp%3D1%26spc%3D295%26ruleId%3D78|BS|BA%26slotId%3D1"
  },
  {
    "Code": "MACYS-4",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/all-clad-stainless-steel-10-pc.-cookware-set?ID=568160&CategoryID=7557#fn=sp%3D1%26spc%3D92%26ruleId%3D78|BS|BA%26slotId%3D2"
  },
  {
    "Code": "MACYS-5",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/kitchenaid-kfp0922cu-9-cup-food-processor-with-exactslice-system?ID=634429&CategoryID=46711#fn=sp%3D1%26spc%3D23%26ruleId%3D78|BS|BA%26slotId%3D6"
  },
  {
    "Code": "MACYS-6",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/tag-daytona-5-pc.-luggage-set-only-at-macys?ID=4300311&CategoryID=17799#fn=sp%3D1%26spc%3D27%26ruleId%3D78|BS|BA%26slotId%3D7"
  },
  {
    "Code": "MACYS-7",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/marquis-by-waterford-brady-4-pc.-goblet-set?ID=2958369&CategoryID=65938"
  },
  {
    "Code": "MACYS-8",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/whim-by-martha-stewart-collection-full-moon-3-pc.-reversible-full-queen-comforter-set-only-at-macys?ID=3772697&CategoryID=26795"
  },
  {
    "Code": "MACYS-9",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/dyson-ball-multi-floor-upright-vacuum?ID=1948065&CategoryID=23481#fn=FLOOR_CARE_TYPE%3DUpright Vacuum%26sp%3D1%26spc%3D30%26ruleId%3D78|BS|BA%26slotId%3D1"
  },
  {
    "Code": "MACYS-10",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/keurig-2.0-k575-plus-brewing-system?ID=2602862&CategoryID=24732#fn=COFFEE_TYPE%3DCoffee Maker%26sp%3D1%26spc%3D40%26ruleId%3D78|BS|BA%26slotId%3D2"
  },
  {
    "Code": "MACYS-11",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/michael-michael-kors-lauryn-large-shoulder-tote?ID=4589983&CategoryID=69603#fn=sp%3D1%26spc%3D1704%26ruleId%3D78|BS|BA%26slotId%3D15"
  },
  {
    "Code": "MACYS-12",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/calvin-klein-womens-cirilla-pumps?ID=2540989&CategoryID=26481#fn=sp%3D1%26spc%3D428%26ruleId%3D78|BS|BA%26slotId%3D15"
  },
  {
    "Code": "MACYS-13",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/ecco-mens-helsinki-cap-toe-oxfords?ID=433212&CategoryID=70405&LinkType=&selectedSize=#fn=PRICE%3D100.0|250.0;;250.0|500.0%26sp%3D1%26spc%3D241%26ruleId%3D78|BS|BA%26slotId%3D5"
  },
  {
    "Code": "MACYS-14",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/michael-michael-kors-petite-zipper-pocket-veruschka-wash-skinny-jeans?ID=2632104&CategoryID=55603&LinkType=&selectedSize=#fn=PRICE%3D60.0|80.0;;80.0|100.0;;100.0|-1%26sp%3D1%26spc%3D34%26ruleId%3D80|BS|BA%26slotId%3D15"
  },
  {
    "Code": "MACYS-15",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/polo-ralph-lauren-slim-fit-blazer?ID=2999922&CategoryID=55429&LinkType=&selectedSize=#fn=PRICE%3D250.0|500.0%26sp%3D1%26spc%3D10%26ruleId%3D65|BS|BA%26slotId%3D1"
  },
  {
    "Code": "MACYS-16",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/lauren-ralph-lauren-solid-black-pure-wool-vested-slim-fit-suit?ID=1629590&CategoryID=17788&selectedSize=#fn=SUIT_STYLE%3DSuit%26sp%3D1%26spc%3D224%26ruleId%3D78|BS|BA%26slotId%3D4"
  },
  {
    "Code": "MACYS-17",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/levis-mens-501-original-fit-jeans?ID=603963&CategoryID=11221#fn=sp%3D1%26spc%3D703%26ruleId%3D78|BS|BA%26slotId%3D7"
  },
  {
    "Code": "MACYS-18",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/charter-club-latex-foam-pillow-200-thread-count-100-cotton-cover-only-at-macys?ID=460666&CategoryID=28901&selectedSize=#fn=SIZE%3DPILLOW_SIZE%3ASpecialty%26sp%3D1%26spc%3D12%26ruleId%3D78|BS|BA%26slotId%3D2"
  },
  {
    "Code": "MACYS-19",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/delran-5-piece-dining-room-furniture-set-only-at-macys?ID=1253980&CategoryID=69962#fn=sp%3D1%26spc%3D221%26ruleId%3D88|BS|BA%26slotId%3D15"
  },
  {
    "Code": "MACYS-20",
    "Vendor": "Macy's",
    "url": "https://www.macys.com/shop/product/titus-mini-wine-bar-quick-ship?ID=1537576&CategoryID=28973#fn=BARWARE_TYPE%3DWine Racks &amp; Storage%26sp%3D1%26spc%3D5%26ruleId%3D78|BS|BA%26slotId%3D2"
  },
  {
    "Code": "NM-1",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/Tod-s-Leather-Penny-Loafer-Brown/prod174690115_cat50070779__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.service%253FitemId%253Dcat50070779%2526pageSize%253D30%2526No%253D0%2526Ns%253DPCS_SORT%2526refinements%253D73700046&eItemId=prod174690115&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-2",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/Eileen-Fisher-Fisher-Project-Silk-Cashmere-Blend-Infinity-Scarf-Jewelry-Accessories/prod197673048_cat46520738__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat46520738%2526pageSize%253D30%2526No%253D0%2526refinements%253D&eItemId=prod197673048&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-3",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/12-Piece-Coastal-Chic-Dinnerware-Service/prod191420041/p.prod?eVar4=You%20May%20Also%20Like&RST=ClickCP",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-4",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/Eileen-Fisher-Washable-Velvet-Long-Sleeve-Duster-Dress-Dresses/prod191760331_cat43810733__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat43810733%2526pageSize%253D29%2526No%253D0%2526refinements%253D&eItemId=prod191760331&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-5",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/AG-The-Silt-Roll-Up-Cropped-Cigarette-Jeans-4-Years-Workroom-Sale/prod196400015_cat54950761__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat54950761%2526pageSize%253D30%2526No%253D0%2526refinements%253D&eItemId=prod196400015&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-6",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/7-For-All-Mankind-Paxtyn-Skinny-Jeans-with-Released-Hem-Blue-Jeans/prod197910267_cat48720745__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat48720745%2526pageSize%253D29%2526No%253D0%2526refinements%253D&eItemId=prod197910267&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-7",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/Boss-Hugo-Boss-Nobis-Oversized-Melange-Slim-Fit-Sport-Coat-Black-Gray-Sportcoats/prod191600119_cat48730756__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat48730756%2526pageSize%253D30%2526No%253D0%2526refinements%253D&eItemId=prod191600119&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-8",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/Tory-Burch-Gigi-Leather-Two-Band-Slide-Sandal-Shoes/prod198130065_cat11670734__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat11670734%2526pageSize%253D30%2526No%253D0%2526refinements%253D&eItemId=prod198130065&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-9",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/Wolverine-Luke-Leather-Oxford-Shoe-Black/prod199330047_cat000550__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.service%253FitemId%253Dcat000550%2526pageSize%253D29%2526No%253D0%2526Ns%253DPCS_SORT%2526refinements%253D73700045&eItemId=prod199330047&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-10",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/Tory-Burch-Beaded-Tassel-Necklace-Necklaces/prod197870069_cat4870734__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat4870734%2526pageSize%253D30%2526No%253D0%2526refinements%253D&eItemId=prod197870069&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-11",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/Rebecca-Minkoff-Large-Moto-Drawstring-Crossbody-Bag/prod196750166_cat56520752__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.service%253FitemId%253Dcat56520752%2526pageSize%253D30%2526Nao%253D0%2526Ns%253DPCS_SORT%2526refinements%253D73700046&eItemId=prod196750166&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-12",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/AG-Gradate-Sud-Jeans/prod171420304_cat56750744__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.service%253FitemId%253Dcat56750744%2526pageSize%253D30%2526No%253D30%2526Ns%253DPCS_SORT%2526refinements%253D&eItemId=prod171420304&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-13",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/MICHAEL-Michael-Kors-Mercer-Large-Striped-Logo-Print-Convertible-Tote-Bag-MMK-Sale/prod196550047_cat63690763__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat63690763%2526pageSize%253D30%2526No%253D0%2526refinements%253D&eItemId=prod196550047&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-14",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/Tory-Burch-28mm-Reva-Leather-Strap-Watch-Watches/prod177140326_cat000264__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat000264%2526pageSize%253D30%2526No%253D0%2526refinements%253D&eItemId=prod177140326&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-15",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/kate-spade-new-york-melinda-patent-feather-pump-powder-New-Markdowns/prod199080438_cat58760731__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat58760731%2526pageSize%253D30%2526No%253D0%2526refinements%253D&eItemId=prod199080438&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-16",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/Tolani-Courtney-Silk-Long-Tunic-New-Markdowns/prod197790286_cat58760731__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat58760731%2526pageSize%253D30%2526No%253D0%2526refinements%253D&eItemId=prod197790286&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-17",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/MICHAEL-Michael-Kors-Long-Sleeve-Off-the-Shoulder-Jumpsuit-Blue-New-Markdowns/prod198820150_cat58760731__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat58760731%2526pageSize%253D30%2526No%253D0%2526refinements%253D&eItemId=prod198820150&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-18",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/Halston-Heritage-Slim-Leg-Tapered-Ankle-Pants-Chalk/prod198481434_cat58760731__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.service%253FitemId%253Dcat58760731%2526pageSize%253D30%2526No%253D30%2526refinements%253D&eItemId=prod198481434&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-19",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/Misook-Lilly-Textured-Jacket-Sale/prod197420431_cat54950761__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.jsp%253FitemId%253Dcat54950761%2526pageSize%253D30%2526No%253D0%2526refinements%253D&eItemId=prod197420431&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NM-20",
    "Vendor": "Neiman Marcus",
    "url": "http://www.neimanmarcus.com/Vince-Mix-Stitch-Short-Sleeve-Polo-Shirt-Heathered-White/prod188870137_cat54990737__/p.prod?icid=&searchType=EndecaDrivenCat&rte=%252Fcategory.service%253FitemId%253Dcat54990737%2526pageSize%253D30%2526No%253D0%2526Ns%253DPCS_SORT%2526refinements%253D4294884796&eItemId=prod188870137&cmCat=product",
    "endWait": 1000,
    "initialUrl": "http://www.neimanmarcus.com/"
  },
  {
    "Code": "NORD-1",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/le-creuset-classic-whistling-tea-kettle/4213580?origin=PredictiveSearchProducts"
  },
  {
    "Code": "NORD-2",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/paige-transcend-verdugo-ankle-jeans-mae/3885668?origin=category-personalizedsort&fashioncolor=MAE"
  },
  {
    "Code": "NORD-3",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/frye-logan-messenger-bag/3318941?origin=category-personalizedsort&fashioncolor=ANTIQUE%20COGNAC"
  },
  {
    "Code": "NORD-4",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/halogen-birds-eye-suit-jacket-regular-petite/4346583?origin=category-personalizedsort&fashioncolor=CHARCOAL%20PATTERN"
  },
  {
    "Code": "NORD-5",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/7-for-all-mankind-slimmy-slim-fit-jeans-carolina-tide/4524177?origin=category-personalizedsort&fashioncolor=CAROLINA%20TIDE"
  },
  {
    "Code": "NORD-6",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/john-w-nordstrom-classic-fit-cashmere-sport-coat/3960272?origin=category-personalizedsort&fashioncolor=NAVY"
  },
  {
    "Code": "NORD-7",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/vince-camuto-evel-leather-sandal-women-nordstrom-exclusive/3882046?origin=category-personalizedsort&fashioncolor=MIDNIGHT"
  },
  {
    "Code": "NORD-8",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/cole-haan-warren-welt-wingtip-men/4322880?origin=category-personalizedsort&fashioncolor=BLACK%20MILL%20LEATHER"
  },
  {
    "Code": "NORD-9",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/kate-spade-new-york-cobble-hill-deva-leather-crossbody-bag/4416823?origin=category-personalizedsort&fashioncolor=BLACK"
  },
  {
    "Code": "NORD-10",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/trask-logan-bison-leather-belt/4120225?origin=category-personalizedsort&fashioncolor=MAHOGANY"
  },
  {
    "Code": "NORD-11",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/tory-burch-classic-bracelet-watch-37mm/4537341?origin=category-personalizedsort&fashioncolor=SILVER%2F%20ROSE%20GOLD"
  },
  {
    "Code": "NORD-12",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/ray-ban-pilot-57mm-sunglasses/4490207?origin=category-personalizedsort&fashioncolor=MATTE%20GREY%20%2F%20SILVER%20MIRROR"
  },
  {
    "Code": "NORD-13",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/waterford-lismore-lead-crystal-double-old-fashioned-glasses-set-of-2/4246650?origin=category-personalizedsort&fashioncolor=CLEAR"
  },
  {
    "Code": "NORD-14",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/pendleton-chimayo-throw-blanket/4239008?origin=category-personalizedsort&fashioncolor=GARNET"
  },
  {
    "Code": "NORD-15",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/le-creuset-gold-knob-collection-5-1-2-quart-round-french-dutch-oven/4508154?origin=category-personalizedsort&fashioncolor=CHERRY%2FCERISE%20GOLD"
  },
  {
    "Code": "NORD-16",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/mauviel-mheritage-m150s-5-piece-copper-stainless-steel-cookware-set/4371311?origin=category-personalizedsort&fashioncolor=METALLIC%20RUST%2FCOPPER"
  },
  {
    "Code": "NORD-17",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/all-clad-large-stainless-steel-roasting-pan-turkey-forks/4361885?origin=category-personalizedsort&fashioncolor=STAINLESS%20STEEL"
  },
  {
    "Code": "NORD-18",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/baby-jogger-summit-x3-single-jogging-stroller/4334768?origin=category-personalizedsort&fashioncolor=BLACK"
  },
  {
    "Code": "NORD-19",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/babyletto-garden-crib-sheet-crib-skirt-play-blanket-changing-pad-cover-stroller-blanket-wall-decals/4080919?origin=category-personalizedsort&fashioncolor=BLUE"
  },
  {
    "Code": "NORD-20",
    "Vendor": "Nordstroms",
    "url": "http://shop.nordstrom.com/s/jalexander-adjustable-floor-lamp/4463729?origin=category-personalizedsort&fashioncolor=BLACK"
  },
  {
    "Code": "OD-1",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/896462/HP-LaserJet-Pro-M477FNW-Wireless-Color/",
    "startWait": 2500
  },
  {
    "Code": "OD-2",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/450092/WorkPro-26-12-D-Vertical-Letter/",
    "startWait": 2500
  },
  {
    "Code": "OD-3",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/155369/HP-901XL901-BlackTricolor-Original-Ink-Cartridges/?isInkTonerSearch=true&searchTerm=HP%20901XL/901%20Black/Tricolor%20Original%20Ink%20Cartridges%20CZ722FN%20Pack%20Of%202&fromInkTonerV2=true",
    "startWait": 2500
  },
  {
    "Code": "OD-4",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/458198/Xerox-WorkCentre-6027-Wireless-Color-Laser/",
    "startWait": 2500
  },
  {
    "Code": "OD-5",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/339221/Samsung-S22F350-215-Widescreen-LED-Monitor/",
    "startWait": 2500
  },
  {
    "Code": "OD-6",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/510830/WorkPro-Quantum-9000-Series-Ergonomic-Mesh/",
    "startWait": 2500
  },
  {
    "Code": "OD-7",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/475994/Realspace-Broadstreet-Contoured-U-Shaped-Desk/",
    "startWait": 2500
  },
  {
    "Code": "OD-8",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/414724/Dell-Inspiron-11-3000-Series-2/",
    "startWait": 2500
  },
  {
    "Code": "OD-9",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/837716/HP-ENVY-Laptop-156-Touchscreen-Intel/",
    "startWait": 2500
  },
  {
    "Code": "OD-10",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/303379/HP-W2072aW2082a-20-LED-Backlit-LCD/",
    "startWait": 2500
  },
  {
    "Code": "OD-11",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/432241/Ativa-10-Sheet-Micro-Cut-Shredder/",
    "startWait": 2500
  },
  {
    "Code": "OD-12",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/456699/Brother-MFC-L5850DW-Monochrome-Laser-All/",
    "startWait": 2500
  },
  {
    "Code": "OD-13",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/911919/Realspace-Chair-Mat-For-Low-Pile/",
    "startWait": 2500
  },
  {
    "Code": "OD-14",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/353095/Lorell-Sit-To-Stand-Desk-Riser/",
    "startWait": 2500
  },
  {
    "Code": "OD-15",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/887538/Ergotron-WorkFit-TL-Sit-Stand-Desktop/",
    "startWait": 2500
  },
  {
    "Code": "OD-16",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/493876/Realspace-MFTC-200-Multifunction-Ergonomic-Super/",
    "startWait": 2500
  },
  {
    "Code": "OD-17",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/616310/Lenovo-TAB-2-A10-70-Wi/",
    "startWait": 2500
  },
  {
    "Code": "OD-18",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/618123/Netgear-Arlo-Smart-Home-Wireless-Add/",
    "startWait": 2500
  },
  {
    "Code": "OD-19",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/869809/Aluratek-ADMPF315F-15-High-Resolution-Digital/",
    "startWait": 2500
  },
  {
    "Code": "OD-20",
    "Vendor": "Office Depot/OfficeMax",
    "url": "http://www.officedepot.com/a/products/229109/HP-All-in-One-24-g020/",
    "startWait": 2500
  },
  {
    "Code": "SEARS-1",
    "Vendor": "Sears",
    "url": "http://www.sears.com/nordictrack-t-6.7-c-nordictrack-treadmill/p-00625023000P?plpSellerId=Sears&prdNo=5&blockNo=5&blockType=G5",
    "startWait": 2500
  },
  {
    "Code": "SEARS-2",
    "Vendor": "Sears",
    "url": "http://www.sears.com/bosch-shxm78w55n-24inch-800-series-built-in-dishwasher/p-02215863000P?unitNo=0001024&sellerId=SEARS&prdNo=1&blockNo=1&blockType=G1",
    "startWait": 2500
  },
  {
    "Code": "SEARS-3",
    "Vendor": "Sears",
    "url": "http://www.sears.com/kenmore-72495-26.7-cu-ft-4-door-french/p-04672495000P?plpSellerId=Sears&prdNo=9&blockNo=9&blockType=G9",
    "startWait": 2500
  },
  {
    "Code": "SEARS-4",
    "Vendor": "Sears",
    "url": "http://www.sears.com/whirlpool-wrs342fiab-21.3-cu-ft-side-by/p-04606899000P?plpSellerId=Sears&prdNo=5&blockNo=5&blockType=G5",
    "startWait": 2500
  },
  {
    "Code": "SEARS-5",
    "Vendor": "Sears",
    "url": "http://www.sears.com/bosch-shpm78w52n-24inch-800-series-built-in-dishwasher/p-02215842000P?plpSellerId=Sears&prdNo=2&blockNo=2&blockType=G2",
    "startWait": 2500
  },
  {
    "Code": "SEARS-6",
    "Vendor": "Sears",
    "url": "http://www.sears.com/whirlpool-dishwasher-w-totalcoverage-spray-arm-black/p-02218528000P?plpSellerId=Sears&prdNo=30&blockNo=30&blockType=G30",
    "startWait": 2500
  },
  {
    "Code": "SEARS-7",
    "Vendor": "Sears",
    "url": "http://www.sears.com/kitchenaid-kseg950ess-6.4-cu-ft-4-element-electric/p-02228043000P?plpSellerId=Sears&prdNo=2&blockNo=2&blockType=G2",
    "startWait": 2500
  },
  {
    "Code": "SEARS-8",
    "Vendor": "Sears",
    "url": "http://www.sears.com/samsung-30inch-gas-range-w-griddle-stainless-steel/p-02261183000P?plpSellerId=Sears&prdNo=8&blockNo=8&blockType=G8",
    "startWait": 2500
  },
  {
    "Code": "SEARS-9",
    "Vendor": "Sears",
    "url": "http://www.sears.com/lg-wt7600hka-5.2-cu-ft-mega-capacity-top/p-02635995000P?plpSellerId=Sears&prdNo=3&blockNo=3&blockType=G3",
    "startWait": 2500
  },
  {
    "Code": "SEARS-10",
    "Vendor": "Sears",
    "url": "http://www.sears.com/electrolux-efls617siw-4.4-cu-ft-front-load-perfect/p-02648932000P?plpSellerId=Sears&prdNo=3&blockNo=3&blockType=G3",
    "startWait": 2500
  },
  {
    "Code": "SEARS-11",
    "Vendor": "Sears",
    "url": "http://www.sears.com/ge-appliances-7.8-cu-ft-electric-dryer-metallic/p-02664563000P?plpSellerId=Sears&prdNo=11&blockNo=11&blockType=G11",
    "startWait": 2500
  },
  {
    "Code": "SEARS-12",
    "Vendor": "Sears",
    "url": "http://www.sears.com/kenmore-7.1-cu-ft-gas-dryer-w-sensor/p-02691182000P?plpSellerId=Sears&prdNo=4&blockNo=4&blockType=G4",
    "startWait": 2500
  },
  {
    "Code": "SEARS-13",
    "Vendor": "Sears",
    "url": "http://www.sears.com/samsung-55inch-class-4k-ultra-hd-smart-suhd/p-05771394000P?sellerId=SEARS&prdNo=19&blockNo=19&blockType=G19",
    "startWait": 2500
  },
  {
    "Code": "SEARS-14",
    "Vendor": "Sears",
    "url": "http://www.sears.com/lg-65inch-class-1080p-smart-led-hdtv-w/p-05772851000P?sellerId=SEARS&prdNo=14&blockNo=14&blockType=G14",
    "startWait": 2500
  },
  {
    "Code": "SEARS-15",
    "Vendor": "Sears",
    "url": "http://www.sears.com/craftsman-41-inch-fully-featured-6-drawer-storage/p-00958659000P?unitNo=0001024&sellerId=SEARS&prdNo=9&blockNo=9&blockType=G9",
    "startWait": 2500
  },
  {
    "Code": "SEARS-16",
    "Vendor": "Sears",
    "url": "http://www.sears.com/craftsman-230-piece-mechanics-tool-set/p-00950230000P?plpSellerId=Sears&prdNo=2&blockNo=2&blockType=G2",
    "startWait": 2500
  },
  {
    "Code": "SEARS-17",
    "Vendor": "Sears",
    "url": "http://www.sears.com/prince-4-piece-table-tennis-table/p-00604775000P?unitNo=0001024&sellerId=SEARS&prdNo=1&blockNo=1&blockType=G1",
    "startWait": 2500
  },
  {
    "Code": "SEARS-18",
    "Vendor": "Sears",
    "url": "http://www.sears.com/delta-childrens-glenwood-3-in-1-espresso-convertible/p-04916465000P?unitNo=0001024&sellerId=SEARS&prdNo=1&blockNo=1&blockType=G1",
    "startWait": 2500
  },
  {
    "Code": "SEARS-19",
    "Vendor": "Sears",
    "url": "http://www.sears.com/5pc-high/p-00861831000P?sellerId=SEARS&prdNo=2&blockNo=2&blockType=G2",
    "startWait": 2500
  },
  {
    "Code": "SEARS-20",
    "Vendor": "Sears",
    "url": "http://www.sears.com/bulova-men-s-bulova-gold-tone-uhf-precistionist-watch/p-04490537000P?sellerId=SEARS&prdNo=2&blockNo=2&blockType=G2",
    "startWait": 2500
  },
  {
    "Code": "STAPLES-1",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Staples-16-Sheet-Professional-Series-Micro-Cut-Shredder/product_356071"
  },
  {
    "Code": "STAPLES-2",
    "Vendor": "Staples",
    "url": "http://www.staples.com/hp-950xl-951-color-ink-cartridges-c-m-y-combo-pack-c2p01fn/product_108230"
  },
  {
    "Code": "STAPLES-3",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Tempur-Pedic-TP9000-Polyester-Computer-and-Desk-Office-Chair-Black-TP9000-BLK/product_324021"
  },
  {
    "Code": "STAPLES-4",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Logitech-MK550-Wireless-Desktop-Wave-Keyboard-and-Laser-Mouse-Combo-920-002555-0264-/product_701218"
  },
  {
    "Code": "STAPLES-5",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Epson-Expression-ET-3600-EcoTank-All-in-One-Supertank-InkJet-Printer/product_2431838"
  },
  {
    "Code": "STAPLES-6",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Samsung-Galaxy-Tab-S2-9-7-Tablet-Black/product_1823428"
  },
  {
    "Code": "STAPLES-7",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Whalen-Nottingham-Double-Pedestal-Desk/product_2411700"
  },
  {
    "Code": "STAPLES-8",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Lenovo-Flex-4-14-8-GB-RAM-256-GB-SSD-Intel-Core-i5-6200U-Windows-10-Touchscreen-Notebook-80SA0004-/product_2273846"
  },
  {
    "Code": "STAPLES-9",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Samsung-True-LS24D300HL-ZA-23-6-LED-Monitor-Black/product_1612049"
  },
  {
    "Code": "STAPLES-10",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Acer-G276HL-Gbd-Display-27-Monitor/product_2537398"
  },
  {
    "Code": "STAPLES-11",
    "Vendor": "Staples",
    "url": "http://www.staples.com/HP-M477fnw-Color-LaserJet-Pro-Multi-Function-Laser-Printer/product_1889398"
  },
  {
    "Code": "STAPLES-12",
    "Vendor": "Staples",
    "url": "http://www.staples.com/NETGEAR-Arlo-Security-System-1-Wire-Free-HD-Camera-Indoor-Outdoor-Night-Vision-VMS3130-/product_2103623"
  },
  {
    "Code": "STAPLES-13",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Canon-Photo-Video-Eos-Rebel-8575b001/product_IM1RG7017"
  },
  {
    "Code": "STAPLES-14",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Staples-Baird-Bonded-Leather-Managers-Chair-Black/product_937975"
  },
  {
    "Code": "STAPLES-15",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Safco-Laminate-Tabletop-Standing-Height-Desk/product_2205153"
  },
  {
    "Code": "STAPLES-16",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Axis-Glass-Corner-Stand/product_1544948"
  },
  {
    "Code": "STAPLES-17",
    "Vendor": "Staples",
    "url": "http://www.staples.com/HP-OfficeJet-Pro-8710-All-in-One-Inkjet-Printer/product_2091478"
  },
  {
    "Code": "STAPLES-18",
    "Vendor": "Staples",
    "url": "http://www.staples.com/HP-Notebook-15-AY163NR-15-Intel-Core-i7-1TB-5400RPM-Serial-ATA-HDD-8GB-RAM-Windows-10-/product_2460649"
  },
  {
    "Code": "STAPLES-19",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Canon-ImageCLASS-MF249dw-MultiFunction-Laser-Printer/product_2420556"
  },
  {
    "Code": "STAPLES-20",
    "Vendor": "Staples",
    "url": "http://www.staples.com/Dell-Inspiron-i5559-7081SLV-15-6-i7-6500U-Processor-8-GB-RAM-1-TB-Hard-Drive-Windows-10-with-Touchscreen/product_2056916"
  },
  {
    "Code": "TARGET-1",
    "Vendor": "Target",
    "url": "http://www.target.com/p/george-foreman-ceramic-180-grill-silver/-/A-51137856"
  },
  {
    "Code": "TARGET-2",
    "Vendor": "Target",
    "url": "http://www.target.com/p/lego-city-airport-passenger-terminal-60104/-/A-50821062"
  },
  {
    "Code": "TARGET-3",
    "Vendor": "Target",
    "url": "http://www.target.com/p/shark-navigator-powered-lift-away-nv586/-/A-23969746"
  },
  {
    "Code": "TARGET-4",
    "Vendor": "Target",
    "url": "http://www.target.com/p/garmin-gps-drivesmart-50lmt/-/A-50974267"
  },
  {
    "Code": "TARGET-5",
    "Vendor": "Target",
    "url": "http://www.target.com/p/samsung-un55ku6500-55-curved-smart-uhd-4k-120-motion-rate-tv/-/A-50672694"
  },
  {
    "Code": "TARGET-6",
    "Vendor": "Target",
    "url": "http://www.target.com/p/gopro-hero5-black/-/A-51463228"
  },
  {
    "Code": "TARGET-7",
    "Vendor": "Target",
    "url": "http://www.target.com/p/sony-extra-bass-bluetooth-headset/-/A-50593316?lnk=rec|pdpipadh2|viewed_bought|pdpipadh2|50593316|0"
  },
  {
    "Code": "TARGET-8",
    "Vendor": "Target",
    "url": "http://www.target.com/p/dji-phantom-3-standard-with-2-7k-camera-and-axis-gimbal-white/-/A-50277815"
  },
  {
    "Code": "TARGET-9",
    "Vendor": "Target",
    "url": "http://www.target.com/p/blu-ray-disc-player-philips/-/A-51511651"
  },
  {
    "Code": "TARGET-10",
    "Vendor": "Target",
    "url": "http://www.target.com/p/graco-aire3-click-connect-travel-system/-/A-17273410"
  },
  {
    "Code": "TARGET-11",
    "Vendor": "Target",
    "url": "http://www.target.com/p/step2-storybook-cottage-playhouse/-/A-11136566"
  },
  {
    "Code": "TARGET-12",
    "Vendor": "Target",
    "url": "http://www.target.com/p/hexbugs-vex-iq-robotics-construction-kit/-/A-50086992"
  },
  {
    "Code": "TARGET-13",
    "Vendor": "Target",
    "url": "http://www.target.com/p/designlovefest-20-hardside-spinner-carry-on-luggage/-/A-51789995"
  },
  {
    "Code": "TARGET-14",
    "Vendor": "Target",
    "url": "http://www.target.com/p/pyrex-10-piece-ultimate-glass-lid-set-white/-/A-50581463"
  },
  {
    "Code": "TARGET-15",
    "Vendor": "Target",
    "url": "http://www.target.com/p/kitchenaid-10-piece-tri-ply-stainless-steel-cookware-set-kc2ts10/-/A-16197616"
  },
  {
    "Code": "TARGET-16",
    "Vendor": "Target",
    "url": "http://www.target.com/p/corelle-16pc-bella-faenza-dinnerware-set-white/-/A-15155342"
  },
  {
    "Code": "TARGET-17",
    "Vendor": "Target",
    "url": "http://www.target.com/p/cuisinart-elite-14-cup-food-processor-die-cast-fp-14dcn/-/A-18817637"
  },
  {
    "Code": "TARGET-18",
    "Vendor": "Target",
    "url": "http://www.target.com/p/delonghi-combination-drip-coffee-espresso-cappuccino-and-latte-machine/-/A-49176036"
  },
  {
    "Code": "TARGET-19",
    "Vendor": "Target",
    "url": "http://www.target.com/p/rogue-one-a-star-wars-story-quilt-full-queen-grey/-/A-51672925"
  },
  {
    "Code": "TARGET-20",
    "Vendor": "Target",
    "url": "http://www.target.com/p/lg-55-class-1080p-120hz-flat-panel-tv-black-55lf6000/-/A-17221644"
  },
  {
    "Code": "HD-1",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/DEWALT-20-Volt-Max-Lithium-Ion-1-2-in-Cordless-Drill-Driver-Kit-DCD771C2/204279858"
  },
  {
    "Code": "HD-2",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/KOHLER-Barossa-with-Response-Touchless-Technology-Single-Handle-Pull-Down-Sprayer-Kitchen-Faucet-in-Vibrant-Stainless-K-R78035-SD-VS/206970881"
  },
  {
    "Code": "HD-3",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/Whirlpool-24-5-cu-ft-Side-by-Side-Refrigerator-in-Monochromatic-Stainless-Steel-WRS325FDAM/204079506"
  },
  {
    "Code": "HD-4",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/LG-Electronics-19-8-cu-ft-French-Door-Refrigerator-in-Stainless-Steel-Counter-Depth-LFX21976ST/202362224"
  },
  {
    "Code": "HD-5",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/GE-Top-Control-Dishwasher-in-Black-with-Steam-Cleaning-GDT545PGJBB/206355413"
  },
  {
    "Code": "HD-6",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/Samsung-30-in-5-8-cu-ft-Slide-In-Gas-Range-with-Self-Cleaning-Convection-Oven-in-Stainless-Steel-NX58H9500WS/205336823"
  },
  {
    "Code": "HD-7",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/Maytag-30-in-6-4-cu-ft-Electric-Range-with-True-Convection-in-Fingerprint-Resistant-Stainless-Steel-MER8800FZ/300121186"
  },
  {
    "Code": "HD-8",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/LG-Electronics-5-2-cu-ft-High-Efficiency-Top-Load-Washer-with-Steam-and-Turbo-Wash-in-Black-Stainless-ENERGY-STAR-WT7600HKA/207024919"
  },
  {
    "Code": "HD-9",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/Whirlpool-4-5-cu-ft-High-Efficiency-Front-Load-Washer-in-White-ENERGY-STAR-WFW75HEFW/206970116"
  },
  {
    "Code": "HD-10",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/Samsung-7-4-cu-ft-Electric-Dryer-with-Steam-in-Black-Stainless-Steel-DV50K8600EV/206889051"
  },
  {
    "Code": "HD-11",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/Frigidaire-7-0-cu-ft-Gas-Dryer-in-Classic-White-FFQG5000QW/205333575"
  },
  {
    "Code": "HD-12",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/Porter-Cable-6-Gal-Portable-Air-Compressor-16-Gauge-Nailer-18-Gauge-Brad-Nailer-Crown-Stapler-Combo-Kit-PCFP12234/203471431"
  },
  {
    "Code": "HD-13",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/DEWALT-Mechanics-Tool-Set-200-Piece-DWMT75000/206510555"
  },
  {
    "Code": "HD-14",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/ecobee-Ecobee3-7-Day-Smarter-Wi-Fi-Programmable-Thermostat-with-Remote-Sensor-HomeKit-Enabled-EB-STATe3-02/206303211"
  },
  {
    "Code": "HD-15",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/RIDGID-14-gal-HEPA-Wet-Dry-Vac-RV2400HF/202507683"
  },
  {
    "Code": "HD-16",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/Delta-1-Spray-8-in-2-5-GPM-Square-Raincan-Shower-Head-in-Chrome-57740/203331868"
  },
  {
    "Code": "HD-17",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/KitchenAid-1-4-cu-ft-Built-In-Microwave-in-Stainless-Steel-KMBS104ESS/205993724"
  },
  {
    "Code": "HD-18",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/GE-Profile-1-7-cu-ft-Convection-Over-the-Range-Microwave-Oven-in-Slate-PVM9179EKES/207025693"
  },
  {
    "Code": "HD-19",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/Toro-Recycler-22-in-Personal-Pace-Variable-Speed-Electric-Start-Gas-Self-Propelled-Mower-with-Briggs-Stratton-Engine-20334/100659631"
  },
  {
    "Code": "HD-20",
    "Vendor": "The Home Depot",
    "url": "http://www.homedepot.com/p/Hoover-Air-Cordless-Series-3-0-20-Volt-Bagless-Upright-Vacuum-Cleaner-BH50121/204984650"
  },
  {
    "Code": "WALMART-1",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/Select-by-Calphalon-Hard-Anodized-12-Piece-Set/49239267"
  },
  {
    "Code": "WALMART-2",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/ProForm-505-CST-Folding-SpaceSaver-Treadmill-with-Power-Incline/15540243"
  },
  {
    "Code": "WALMART-3",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/Samsung-50-5200-Series-Full-HD-Smart-LED-TV-1080p-60MR-Model-UN50J5200/46285066"
  },
  {
    "Code": "WALMART-4",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/LG-55UH6090-55-4K-Ultra-HD-2160p-120Hz-LED-Smart-HDTV-4K-x-2K/50314338"
  },
  {
    "Code": "WALMART-5",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/Keurig-K200-Coffee-Maker-Turquiose/49574592"
  },
  {
    "Code": "WALMART-6",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/Oneida-Mooncrest-45-Piece-Flatware-Set/24305116"
  },
  {
    "Code": "WALMART-7",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/Black-Decker-20V-Lithium-Home-Project-Kit-with-128-Piece-Accessories/54461297"
  },
  {
    "Code": "WALMART-8",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/Storkcraft-Bowback-Glider-Rocker/6006620"
  },
  {
    "Code": "WALMART-9",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/VTech-Safe-Sound-VM342-2-Expandable-Digital-Video-Baby-Monitor-with-2-Cameras-Wide-Angle-Lens-and-Standard-Lens/55007428"
  },
  {
    "Code": "WALMART-10",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/Graco-FastAction-Jogger-Travel-System-with-SnugRide-Click-Connect-35-Elite-Car-Seat-Sunshine/48628985"
  },
  {
    "Code": "WALMART-11",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/BARBIE-DREAMHOUSE-CONVEYABLE/109617949"
  },
  {
    "Code": "WALMART-12",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/LEGO-Star-Wars-Krennic-s-Imperial-Shuttle/51720894"
  },
  {
    "Code": "WALMART-13",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/Aerobed-Double-High-Air-Bed-Combo/20511025"
  },
  {
    "Code": "WALMART-14",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/SentrySafe-Fire-Safe-with-Alarm/43176499"
  },
  {
    "Code": "WALMART-15",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/VIZIO-SmartCast-M70-D3-70-4K-Ultra-HD-2160p-240Hz-LED-Smart-HDTV-4K-x-2K/50314346"
  },
  {
    "Code": "WALMART-16",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/VIZIO-SB4051-C0-5.1-Sound-Bar-System/43825351"
  },
  {
    "Code": "WALMART-17",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/HP-Elite-x2-1012-G1-Tablet-PC-12-In-plane-Switching-IPS-Technology-BrightView-Intel-Core-M-6th-Gen-m5-6Y54-Dual-core-2-Core-1.10-GHz-L/112784649"
  },
  {
    "Code": "WALMART-18",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/Zoned-Dough-Memory-Foam-Pillow-by-Z-King-Low-Loft-Plush/47961505"
  },
  {
    "Code": "WALMART-19",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/Better-Homes-and-Gardens-Dalton-Park-5-Piece-Counter-Height-Dining-Set-Mocha/40719659"
  },
  {
    "Code": "WALMART-20",
    "Vendor": "Walmart",
    "url": "https://www.walmart.com/ip/Canon/52773411"
  }
];

export default sites;
