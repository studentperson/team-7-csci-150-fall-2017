//Define module
var cache = new Object();

//Looks in the cache for the public key associated with the given email
//Returns:  The key if it is cached
//			Undefined otherwise
cache.find = function(uname)
{
	return(localStorage.getItem(uname + "_pubkey"));
}

//Caches the given public key for the given email
//Adds a reference to that email in the cache list
//Returns: void
cache.write = function(uname, key)
{
	localStorage.setItem(uname + "_pubkey", key);
	
	var list = localStorage.getItem("cacheList");
	
	if(!list) {
		list = uname;
	} else {
		list = list + ',' + uname;
	}
	
	localStorage.setItem("cacheList", list);
}

//Clears all data in the cache
//Returns: void
cache.clear = function()
{
	var list = localStorage.getItem("cacheList");
	var name = new String();
	
	for(var i = 0; i < list.length; i++)
	{
		if(list.charAt(i) == ',') {
			localStorage.removeItem(name);
			name = new String();
		}
		else
			name += list.charAt(i);
	}
	
	localStorage.removeItem("cacheList");
}

//Generates an array of all cached emails
//Returns: An array of objects containing emails and keys
//Object format: {email: '', key: ''}
cache.listAll = function()
{
	var list = localStorage.getItem("cacheList");
	var result = new Array();
	var name = new String();
	for(var i = 0; i < list.length; i++)
	{
		if(list.charAt(i) == ',' | i == list.length - 1) {
			if(list.charAt(i) != ',')
				name += list.charAt(i);
			var obj = new Object();
			obj.email = name;
			obj.key = localStorage.getItem(name + '_pubkey');
			result.push(obj);
			name = new String();
		}
		else
			name += list.charAt(i);
	}
	
	return(result);
}