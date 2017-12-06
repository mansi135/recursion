// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //typeof(obj) can also be written as obj.constructor
  if (typeof(obj) === 'string') {
  	return '"' + obj + '"'
  }

  else if (typeof(obj) === 'number' || typeof(obj) === 'boolean') {
  	return  String(obj) ;
  }

  else if (typeof(obj) === 'undefined' || typeof(obj) === 'symbol' || typeof(obj) === 'function' || typeof(obj) === 'null') {
  	return 'null';
  }

  else if(Array.isArray(obj)) {
  	for(var i=0; i<obj.length; i++) {
  		obj[i] = stringifyJSON(obj[i]);
 	  }    
 	
 	  obj = '[' + obj + ']';
    return obj;
  }
  
  //This exercise made me realize that String() (or toString()) method behaves differently on object and arrays
  //Also typeof(obj) can be null but typeof(null) is object
  else if(typeof(obj) === 'object'){
  	var result = '{' ;
  	var len = 1;
  	for(var key in obj) { 	
      	if( key !== 'undefined' && key !== 'functions' && key !== 'symbol') {
	         result += '"' + key + '"' + ':' + stringifyJSON(obj[key]);
	         if (len !== Object.keys(obj).length){
	      	    result += ',';
      	   }
      	}
        len++;
    }
    
    result += '}';
    
    if (obj === null) {
    	return String(obj);
    }
    
    return result;
  }

};
