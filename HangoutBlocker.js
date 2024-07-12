// ==UserScript==
// @name         屏蔽谷歌私有api
// @version      2024-07-12
// @description  屏蔽谷歌私有api
// @author       66hh
// @match        *.google.com
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

var sdm_org = chrome.runtime.sendMessage

chrome.runtime.sendMessage = function(id, msg, callback){
    if(id == "nkeimhogjdpnpccoofpliimaahmaaome") {
        setTimeout(function(){
            callback({
                "value": null,
                "error": {
                    "name": "ComponentExtensionError",
                    "message": "Error: This method is blocked"
                }
            })
        }, 100);
        return
    }
    sdm_org(id, msg, callback)
}
