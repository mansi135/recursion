// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  	  var elements = [];
    //  var nodes = document.body.childNodes;

	function checkEachNode(node, className) {

      	if(node.classList && node.classList.contains(className)) {
      		elements.push(node);
      	}

      	if(node.childNodes.length !== 0) {
      		for(var i = 0; i < node.childNodes.length; i++) {
      			checkEachNode(node.childNodes[i],className);
      		}
      	}		
     }

     checkEachNode(document.body,className);

     return elements;
};


