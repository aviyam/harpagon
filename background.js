	
  chrome.webRequest.onBeforeSendHeaders.addListener(
        function(details) {
		  console.log('----harpagon---');
          for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'User-Agent') {
              details.requestHeaders[i].value = 'Mozila/5.0(Linux; Android 5.0; SM-g920A) AppleWebKit(KHTMK, like Gecko) Chrome Mobile Safari(compatible; AdsBot-Google-Mobile; +http://www.google.com/mobile/adsbot.html)';
			  
            }
          }
          return {requestHeaders: details.requestHeaders};
        },    // Request filter
    {
        // Modify the headers for these pages
		urls: ["http://*.haaretz.co.il/*","https://*.haaretz.co.il/*"]
//        types: ["main_frame"]
    },
    ["blocking", "requestHeaders"]
);
