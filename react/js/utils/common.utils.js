module.exports = {
	getCurrentId:function(array){
	    var arLength = array.length;
	    if(arLength===0){
	        return 1;
	    }else{
	        return arLength+1;
	    }
	}
}
