function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    if(expr.includes(' ')){
	  arr = expr.split(' ');
	} else {
	  arr = expr.split('');
	}
	
	for(let i = 0; i < arr.length; i++){
	  if(arr[i] == ' ' || arr[i] == ''){
	    arr.splice(i, 1);
	  }
	} 
	let result = arr[0];
	for(let i = 1; i < arr.length; i = i+2){
	  console.log(result)
	  if(arr[i] == '+'){
	    result += arr[i + 1];
	  }
	  if(arr[i] == '-'){
	    result -= arr[i + 1];
	  }
	  if(arr[i] == '*'){
	    result *= arr[i + 1];
	  }
	  if(arr[i] == '/'){
	    result /= arr[i + 1];
		console.log(result)
	  }
	}
	return +result.toFixed(4);
}



module.exports = {
    expressionCalculator
}
