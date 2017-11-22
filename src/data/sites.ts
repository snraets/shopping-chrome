const sites = [
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
