!function(){
    "use strict";
    const e=Object.values(chrome.declarativeNetRequest.ResourceType);
    const b="facebookexternalhit/1.1 +http://www.facebook.com/externalhit_uatext.php";

    var t=[
        {
            id:1,
            priority:1,
            action:{
                type:chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
                requestHeaders:[
                    {
                    operation:chrome.declarativeNetRequest.HeaderOperation.SET,
                    header:"User-Agent",value:b}
                ]
            },
                condition:{
                    "urlFilter": "https://*.haaretz.co.il/*",
                    resourceTypes:e
                }
        },
        {
            id:2,
            priority:1,
            action:{
                type:chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
                requestHeaders:[
                    {
                    operation:chrome.declarativeNetRequest.HeaderOperation.SET,
                    header:"User-Agent",value:b}
                ]
            },
                condition:{
                    "urlFilter": "https://*.themarker.com/*",
                    resourceTypes:e
                }
         }
        ];
        chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds:t.map((e=>e.id)),addRules:t})}();