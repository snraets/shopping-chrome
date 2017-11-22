const Chromy = require('chromy')

// not headless 
// let chromy = new Chromy({visible:true}) 
let chromy = new Chromy({visible:true})
chromy.chain()
     .goto('http://example.com/')
     .evaluate(() => {
       return document.querySelectorAll('*').length
     })
     .result((r) => console.log(r))
     .end()
     .then(() => chromy.close())