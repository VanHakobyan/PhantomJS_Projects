<p align="center"><img src="https://cdn-images-1.medium.com/max/1000/1*QLY10XCc90xn1Sm0geGrOw.png"></p>


## Example 1 - Find the Page Speed

#### In this example, we will use PhantomJS to find the page speed for any given page URL.

```JS var page = require('webpage').create(), 
   system = require('system'), 
   t, address;  

if (system.args.length === 1) { 
   console.log('Usage: loadspeed.js <some URL>'); 
   phantom.exit(1); 
} else { 
   t = Date.now(); 
   address = system.args[1]; 
   
   page.open(address, function (status) { 
      if (status !== 'success') { 
         console.log('FAIL to load the address'); 
      } else { 
         t = Date.now() - t; 
         
         console.log('Page title is ' + page.evaluate(function () { 
            return document.title; 
         })); 
         console.log('Loading time ' + t + ' msec'); 
      } 
      phantom.exit(); 
   }); 
}
```


