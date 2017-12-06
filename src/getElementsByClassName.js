// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
/*var getElementsByClassName = function(className) {
  // your code here
  	  var elements = [];
    //  var nodes = document.body.childNodes;

	function checkEachNode(node, className) {

      	if(node.classList && node.classList.contains(className)) {
      		elements.push(node);
      	}

     /* ///	if(node.childNodes.length !== 0) {
      		for(var i = 0; i < node.childNodes.length; i++) {
      			checkEachNode(node.childNodes[i],className);
      		}
      	}		///*/

  /*      if(node.hasChildNodes()){
          node.childNodes.forEach(function(child){
            checkEachNode(child,className);
          })          
        }
        
     }

     checkEachNode(document.body,className);

     return elements;
}; */



var getElementsByClassName = function(className, node) {
  // your code here
      var elements = [];
    //  var nodes = document.body.childNodes;

    var node = node || document.body;

    if(node.classList && node.classList.contains(className)) {
      elements.push(node);
    }

     

    if(node.hasChildNodes()){
      for (var i = 0; i < node.childNodes.length; i++) {
        elements = elements.concat(getElementsByClassName(className, node.childNodes[i]));
       }
    }

        
    return elements;
};


