// hw: look up what scoping is.
// this is the global scope. 
// all functions in the app have access to these variables
var numArray = [];
var num = 1;
var addButton = document.getElementById("add");

function setNumArray() {
    while (numArray.length < 10) {
        numArray.push(num);
        num++;
    }
}

function setNumHtml() {

    // this is the local scope.
    // only this function has access to this variable
    var ul = document.getElementById("num-list"); 

    // gets current list items in the unordered list
    var children = ul.children;

    // array we are going to push the li ids into
    var idCheck = [];
    
    for(let i = 0; i < children.length; i++) {

        // pushing the id into idCheck (will be a string eg: "1")
        idCheck.push(children[i].id);
    }

    numArray.forEach(num => {

        // only add if idCheck does NOT have this number
        // since idCheck values will be strings (see line 25) we use the toString() method (1 -> "1")
       if(!idCheck.includes(num.toString())) {
           var li = document.createElement("li");
           li.appendChild(document.createTextNode(num));
           li.setAttribute("id", num);
           ul.appendChild(li);
       } 
    });
}

function addNum() {
    var nextNum = numArray.length + 1;
    numArray.push(nextNum);
    setNumHtml();
}

setNumArray();
setNumHtml();
addButton.addEventListener("click", addNum);