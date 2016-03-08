angular.module('myApp')
	.factory('inputService', function(){
		var theWord={} //we probably need this?
	return{ //we proabbly also need something like this 

	getInput: function (){  //and this
        return theWord
		
    },
    setInput : function(output){ //and this
        theWord.word=output.word

      
    },
    resetInput: function(){ //and maybe this
    	input = {};
    }
  };

});