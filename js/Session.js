var Session = new Object();

Session.setItem = function(key, value)
{
	Session[key] = value;
}

Session.getItem = function(key)
{
	return Session[key];
}