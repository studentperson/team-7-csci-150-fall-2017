$(function(){

    chrome.storage.sync.get(['mbody'],function(selenctext){
        $('#mbody').text(selenctext.mbody);

        
        
    });
    var key = 1;
    function testFunction() {
        var messageBox = document.getElementById("mbody");
        
        var messageText = messageBox.value;
        
        var len = messageText.length;
        
        var charArray = new Array(len);
        
        for(var i = 0; i < len; i++)
        {
            var character = messageText.charCodeAt(i) - key;
            
            charArray[i] = character;
        }
        
        var newString = String.fromCharCode.apply(String, charArray);
        
        messageBox.value = newString;
        
    }
    
    function testFunction2() {
        var messageBox = document.getElementById("mbody");
        var messageBox = document.getElementById("mbody");
        
        var messageText = messageBox.value;
        
        var len = messageText.length;
        
        var charArray = new Array(len);
        
        for(var i = 0; i < len; i++)
        {
            var character = messageText.charCodeAt(i) + key;
            
            charArray[i] = character;
        }
        
        var newString = String.fromCharCode.apply(String, charArray);
        
        messageBox.value = newString;
    }
    
    document.getElementById('encrypt').onclick = testFunction;
    document.getElementById('decrypt').onclick = testFunction2;
    

});