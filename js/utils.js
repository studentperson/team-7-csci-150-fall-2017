//Utility functions

function getParentOfClass(node, mclass)
{
	var pNode = node;
	while(pNode && pNode.getAttribute("class") != mclass)
	{
		pNode = pNode.parentNode;
	}
	
	return(pNode);
}

//Returns the first element of class [mclass] which is also a child of node
function getChildOfClass(node, mclass)
{
	var matches = document.getElementsByClassName(mclass); //All elements of this class
	
	for(i = 0; i < matches.length; i++)
	{
		if(node.contains(matches[i]))
			return(matches.item(i));
	}
	
	return(null);
}

//Returns the view for the popup window
function getPopup()
{
	return(chrome.extension.getViews({type:'popup'})[0]);
}

