//Chapter 11 array exercise
//to run this file locally see relative support files

//below is moddieified from the given exercises by this name
//Arrays

//Add support for arrays to Egg by adding the following three
// functions to the top scope: array(...) to construct an 
//array containing the argument values, length(array) to get
// an array’s length, and element(array, n) to fetch the nth
// element from an array.

// Modify these definitions...

topEnv["array"] = function(){
	return arguments;
};

topEnv["length"] = function(_array){
  return _array.length;
};

topEnv["element"] = function(_array,_value){
  return _array[_value];
};

run("do(define(sum, fun(array,",
    "     do(define(i, 0),",
    "        define(sum, 0),",
    "        while(<(i, length(array)),",
    "          do(define(sum, +(sum, element(array, i))),",
    "             define(i, +(i, 1)))),",
    "        sum))),",
    "   print(sum(array(1, 2, 3))))");
// → 6