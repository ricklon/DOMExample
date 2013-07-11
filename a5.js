$(document).ready(function() {
    
    assignListeners();
    
    
    });

function assignListeners() {
    //w3c events
    $("#q1").click( function() {
        console.debug("q1: " + createElem("ol"));
    });
    $("#q2").click( function() {
        console.debug("q2: createElemList(\"li\",3)" + createElemList("li", 3));
    });
   $("#q3").click( function() {
        console.debug("q3: createTextNode(\"This is a textnode.\")" + createTextNode("This is a textnode"));
    });
    $("#q4").click( function() {
        console.debug("q4: appendTextNode(createElem(\"li\"),\"This is a textnode.\")" + appendTextNode(createElem("li"), "This is a textnode"));
    });
    $("#q5").click( function() {
        console.debug("q5: addAttrNode(createElem(\"li\"),\"class\", \"highlight\")" + addAttrNode(createElem("li"), "class", "highlight"));
    });
    $("#q6").click( function() {
        console.debug("q6: appendAttr(createElem(\"li\"),\"class\", \"backlight\")" + appendAttr(createElem("li"), "class", "highlight"));
    });
    $("#q7").click( function() {
        console.debug("q7: appendTextNodeList(createElemList(\"li\", 5),createTextNode(\"This is a textnode.\"))" + appendTextNodeList(createElemList("li", 5), createTextNode("This is a textnode")));
    });
}

//Question 1
//# Create a Node, "li" and "ol" for example
function createElem(elem) {
    console.debug("start createElem: elem: " + elem);
    var newelem = $("<" + elem + ">")[0] ;
    console.debug("createElem: end: returns: " + newelem.nodeName);
    return newelem;
}

//Question 2
//# Create an array of Nodes
function createElemList(elem, nn) {
    var list = [];
    for (var ii = 0; ii < nn; ii++) {
        //list.push(document.createElement(elem));
       list.push(createElem(elem));
        console.log("Item: " + ii);
    }
    console.log("List: " + list);
    return list;
}

//Question 3
//# Create a Text Node
function createTextNode(text) {
    var textnode;
    //$().text("my text");
    textnode = document.createTextNode(text);
    return textnode;
}

//Question 4
//# Append a Text Node to a Node
function appendTextNode(elem, text) {
    //elem.appendChild(document.createTextNode(text));
    //elem.appendChild(text);
    $(elem).text(text);
    console.log("elem: " + elem.nodeName + " : " + elem.textContent);
}

//Question 5
//# Add an attibute to to a Node
function addAttrNode(elem, attr, text) {
   // var attribute = document.createAttribute(attr, text);
    //elem.setAttribute(attribute);
    //elem.setAttribute(attr, text);
    $(elem).attr(attr, text);
    console.log("Element and attr value: " + elem);
}

//Question 6
//# Change the style assigned to an element.
function appendAttr(elem, attr, value) {
    addAttrNode(elem, attr, value);
   // $(elem).attr(attr, text);
    console.debug("elem: " + elem.nodeName + ", attribute name: " + elem.attributes.getNamedItem(attr).nodeName + ", attribute value: " + elem.attributes.getNamedItem(attr).value + ", innerHTML: " + elem.innerHTML);

}

//Question 7
//# Provide a list of elements and append the same text node to each one. 
function appendTextNodeList(list, textnode) {
    for (var ii = 0; ii < list.length; ii++) {
       appendTextNode(list[ii], textnode.nodeValue);           
       //$(elem).text(text);
        console.log(list[ii]);
    }
    return list;
}


//DOM Event listener, and Iteration examples
function assignListener(id, e) {
    document.getElementById(id).addEventListener(e, function() {
        console.log(e + ": " + this.nodeName);
    }, true);

}

function assignListener(list, e) {
    for (var i = 0; i < list.length; i++) {
        list[i].addEventListener(e, function() {
            console.log(e + ": " + this.nodeName);
        }, true);
    }
}


/* add listener to element with class equals: TODO: remeber to add value */

function assignListenerToClass(elem, attr) {
    assignListener(getElementsWithAttr(elem, attr), 'click');
}

/* add listener to element with class equals: TODO: remeber to add value */

function getElementsWithAttr(elem, attr) {
    var list = document.getElementsByTagName(elem);
    var outlist = [];
    var t;
    for (var i = 0; i < list.length; i++) {
        console.log("all list[" + i + "] = " + list[i].attributes.getNamedItem(attr));
        if ((t = list[i].attributes.getNamedItem(attr)) !== undefined) {
            outlist.push(t.ownerElement);
            console.log("defined list[" + i + "] = " + list[i].attributes.getNamedItem(attr));
        }
    }
    console.log("Found with attr: " + attr + "val :" + outlist);
    return outlist;
}

