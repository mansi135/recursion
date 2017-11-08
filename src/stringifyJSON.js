// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof(obj) === 'string') {
  	console.log(1);
  	return '"' + obj + '"'
  }

  else if (typeof(obj) === 'number' || typeof(obj) === 'boolean') {
  	 console.log(2);
  	return  String(obj) ;
  }

  else if (typeof(obj) === 'undefined' || typeof(obj) === 'symbol' || typeof(obj) === 'function' || typeof(obj) === 'null') {
  	console.log(3);
  	return 'null';
  }

  else if(Array.isArray(obj)) {
  	for(var i=0; i<obj.length; i++) {
  		console.log(4);
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
  		console.log(5);
    /*  obj[key] = stringifyJSON(obj[key]);
      keynew = '"' + key + '"';
      obj[keynew] = obj[key];
      delete obj[key]; */
      result += '"' + key + '"' + ':' + stringifyJSON(obj[key]);
      if (len !== Object.keys(obj).length){
      	result += ',';
      }
      len++;

    }
    result += '}';
    if (obj === null) {
    	return String(obj);
    }
    /*if(key === undefined)
    	return '{' + '}';*/
    return result;
  }

};
