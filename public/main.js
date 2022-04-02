//also test fetch later
function testAjax () {
    let node = {};
    node.name = "Bobbdy";
    node.surname = "Dilan";

    let path = "../index.php";

    let xhr = new XMLHttpRequest();
	xhr.open('POST', path, true);  
	
	//HOW MANY HEADERS I CAN SET AND WHAT ELSE i CAN SET?	
    //xhr.setRequestHeader("Content-type", "text/html");
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(node));
	//xhr.send(node);
	//xhr.send('This was the body!');
	//xhr.send();
	
	xhr.onreadystatechange = function () {
	    if (xhr.readyState === 4) {
            if (xhr.status === 200) {
				console.log("ajax sent and accepted successfully");
				console.log(xhr.response);
				console.log(xhr.responseText);
				
				//console.log(xhr.response.name);
			} else {
				console.log("bad status ajax");
				console.log(xhr.getAllResponseHeaders());
			} 
        }			
	}
}

//////////////////////////////////////////////////////////////////////////////
let rootNode = {};

function saveTree() {
   console.log('tree has been saved');
}

function addNodeChild () {
	console.log("child node added");
	
	
	//target element write new node as chidlren
	
	//createNode();
	
	//isroot = false
	//parent = 
}

function deleteNode () {
	console.log("node has beendeleted");
	
}

function updateChildren() {
	
}

//should we use class?
function createNode () {
    let node = {};
    
    node.name = "Just a name";
	node.description = "Just description";
	node.parent;
	node.children = [];
	node.isroot;
	//place in hierarchy
	
	
	//send ajax and get id backwarb -> set child 
	//if no parent defined then root
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let responseText = xhr.responseText;	
				console.log(xhr.response);
				//console.log(JSON.parse(xhr.response));
			} else {
				console.log("not sent");	
			}
		}
	};
	
	xhr.open("POST", "../index.php");
	xhr.setRequestHeader('X-Requested-With', 'insertNode'); 
	//xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
	//xhr.setRequestHeader('X-Requested-With', 'XMLHTTPRequest'); 
	//xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xhr.send(JSON.stringify(node));
	
	/*
	//div container?
	let ele = document.createElement("div");
	ele.setAttribute("class", "node");
	
	
	let eleDelete = document.createElement("div");
	//eleDelete.onclick = "deleteNode();";
	eleDelete.addEventListener("click", deleteNode);
	eleDelete.setAttribute("class", "nodeDelete");
	ele.appendChild(eleDelete);
	
	let eleName = document.createElement("div");
	eleName.setAttribute("class", "nodeName");
	let eleNameH4 = document.createElement("h4");
	eleNameH4.innerHTML = node.name;
	eleName.appendChild(eleNameH4);
	ele.appendChild(eleName);
	
	let eleDescription = document.createElement("div");
	eleDescription.setAttribute("class", "nodeDescription");
    eleDescriptionP = document.createElement("p");
	eleDescriptionP.innerHTML = node.description;
	eleDescription.appendChild(eleDescriptionP);

	ele.appendChild(eleDescription);
	
	let eleAdd = document.createElement("div");
	//eleAdd.onclick = "addNodeChild();";
	eleAdd.addEventListener("click", addNodeChild);
	eleAdd.setAttribute("class", "nodeAdd");
	ele.appendChild(eleAdd);
	
	//draggable
	//dataset?	
	document.body.appendChild(ele);
	//console.log("node created");
	*/
}

//get existing tree
function loadTree () {	
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
		    if (xhr.status === 200) {
				let responseText = xhr.responseText;
				//console.log(response);
				checkTree(JSON.parse(atob(xhr.response))); 
            } else {
                console.log('Something is wrong with loading tree');
            }				
		}
	};
	
	xhr.open('POST',  "../index.php");
	xhr.setRequestHeader('X-Requested-With', 'XMLHTTPRequest');
	xhr.send();
}

function checkTree (parsedTree) {

	if (parsedTree.length == 0) {
		createNode(); 
	} else {
		//while () 
		{
		
		    //count of children left
			let roots = parsedTree.filter(x => x.isroot == 1);
			console.log("roots are");
			console.log(roots);
		    /*
			for (let i = 0; i <= parsedTree.length - 1; i++) {
				//if several root objects
				//set all or partial tree
				
				let node = {};
				node.name = "Just a name";
				node.description = "Just description";
				node.parent;
				node.children = [];
				node.isroot;
				//place in hierarchy
				
				
				
				createNode(); //position?
			}	
			*/
		}
	
	    console.log("tree loaded");
	}
}

