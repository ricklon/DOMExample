function assignListeners() {
	//w3c events
	document.getElementById("q1").addEventListener("click", function() { console.debug("q1: "
	+ createElem("ol"));}, true);	
	document.getElementById("q2").addEventListener("click", function() { console.debug("q2: createElemList(\"li\",3)" 
	+ createElemList("li", 3));}, true);	
	document.getElementById("q3").addEventListener("click", function() { console.debug("q3: createTextNode(\"This is a textnode.\")" 
	+ createTextNode("This is a textnode"));}, true);	
	document.getElementById("q4").addEventListener("click", function() { console.debug("q4: appendTextNode(createElem(\"li\"),\"This is a textnode.\")" 
	+ appendTextNode(createElem("li"),"This is a textnode"));}, true);	
	document.getElementById("q5").addEventListener("click", function() { console.debug("q5: appendAttr(createElem(\"li\"),\"class\", \"highlight\")" 
	+ appendAttr(createElem("li"), "class", "highlight"));}, true);	
	document.getElementById("q6").addEventListener("click", function() { console.debug("q6: appendAttr(createElem(\"li\"),\"class\", \"backlight\")" 
	+ appendAttr(createElem("li"), "class", "highlight"));}, true);	
	document.getElementById("q7").addEventListener("click", function() { console.debug("q7: appendTextNode(createElemList(\"li\", 5),createTextNode(\"This is a textnode.\"))" 
	+ appendTextNode(createElemList("li", 5),createTextNode("This is a textnode")));}, true);	
}

//Question 1
//# Create a Node, "li" and "ol" for example
function createElem (elem) {
	console.debug("elem: " + elem);
	var newelem;
	//line here
	return newelem;	
}

//Question 2
//# Create an array of Nodes
function createElemList (elem, n) {
	var list = [];
	for (var i = 0; i < n; i++) {
			//line here
			console.log("Item: " + i);
		
	}	
	console.log("List: " + list);
	return list;
}

//Question 3
//# Create a Text Node
function createTextNode(text) {
		var textnode;
		//line here
		return textnode;	
}

//Question 4
//# Append a Text Node to a Node
function appendTextNode(elem, text) {
		//line here
		console.debug("elem: " + elem.nodeName + " : " + elem.innerHTML);
}

//Question 5
//# Add an attibute to to a Node
function addAttrNode(elem, attr, text) {
    //new line here
    console.log("Element and attr value: " + elem);
}

//Question 6
//# Change the style assigned to an element.
function appendAttr(elem, attr, value) {
	//line here
	console.debug("elem: " + elem.nodeName + ", attribute name: " + elem.attributes.getNamedItem(attr).nodeName + ", attribute value: " + elem.attributes.getNamedItem(attr).value  + ", innerHTML: " + elem.innerHTML);

}

//Question 7
//# Do a getElementsByTagName and append the same text node to each one. 
function appendTextNode(list, textnode) {
	for (var ii = 0; ii < list.length; ii++) {
		//line here	
        list[ii];
	}
	return list;
}


//DOM Event listener, and Iteration examples

function assignListener(id, e) {
	document.getElementById(id).addEventListener(e, function () { console.log(e + ": " +  this.nodeName);} , true);	
	
}

function assignListener(list, e) {
		for ( var i = 0; i < list.length ; i++) {
			list[i].addEventListener(e, function () { console.log(e + ": " +  this.nodeName);} , true);
	}
}


/* add listener to element with class equals: TODO: remeber to add value */
function assignListenerToClass(elem, attr) {
	assignListener(getElementsWithAttr(elem, attr),'click');	
}

/* add listener to element with class equals: TODO: remeber to add value */
function getElementsWithAttr(elem, attr) {
	var list = document.getElementsByTagName(elem);
	var outlist= [];
	var t;
	for (var  i =0 ; i < list.length ; i++) {
		console.log("all list[" + i +"] = " + list[i].attributes.getNamedItem(attr));
	     if ( (t = list[i].attributes.getNamedItem(attr))  !==  undefined ){
	    	outlist.push(t.ownerElement);
	    	console.log("defined list[" + i +"] = " + list[i].attributes.getNamedItem(attr));
	   }
	}	
	console.log("Found with attr: " + attr + "val :" + outlist);
	return outlist;
}

//