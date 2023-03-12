	
  chrome.webRequest.onBeforeSendHeaders.addListener(
        function(details) {
		 
          for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'User-Agent') {
              details.requestHeaders[i].value = 'facebookexternalhit/1.1 +http://www.facebook.com/externalhit_uatext.php';
			  
            }
          }
          return {requestHeaders: details.requestHeaders};
        },    // Request filter
    {
        // Modify the headers for these pages
    urls: [ "http://*.haaretz.co.il/*",
            "https://*.haaretz.co.il/*",
            "http://*.themarker.com/*",
            "https://*.themarker.com/*"]

    },
    ["blocking", "requestHeaders"]
);
