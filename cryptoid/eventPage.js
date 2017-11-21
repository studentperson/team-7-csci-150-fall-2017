var menuItem = {
    "id": "encrypt",
    "title": "Encrypt",
    "contexts": ["selection"]
};



chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(chooseText){
    if (chooseText.menuItemId == "encrypt" && chooseText.selectionText){
        var chosenText = chooseText.selectionText;
    
                chrome.storage.sync.set({'mbody': chosenText}, function(){
                    
       
            });
        }
});

chrome.storage.onChanged.addListener(function(changes){
    if(chrome.browserAction.setBadgeText({"text": changes.mbody.newValue.toString()})){
    
        var notif = {
            type: "basic",
            iconUrl: "cryptoid128.png",
            title: "Text copied",
            message: "Text you highlighted is ready for encryption"
            };
            chrome.notifications.create('Notif', notif);
    };
});

