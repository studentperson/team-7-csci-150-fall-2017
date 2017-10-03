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

chrome.storage.onChanged.addListener(function(changes, storageName){
    chrome.browserAction.setBadgeText({"text": changes.total.newValue.toString()});
});

