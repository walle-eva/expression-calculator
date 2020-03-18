function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let result = 0;
	let arrExpr = expr.split('');
	
	for(let i = 0; i < arrExpr.length; i++){
	  if(/[\+\*-\/]/.test(arrExpr[i])){
	    if(arrExpr[i] == '*'){
		  result = +arrExpr[i - 1] * +arrExpr[i + 1];
		}
		if(arrExpr[i] == '/'){
		  result = +arrExpr[i - 1] / +arrExpr[i + 1];
		}
		if(arrExpr[i] == '+'){
		  result = +arrExpr[i - 1] + +arrExpr[i + 1];
		}
		if(arrExpr[i] == '-'){
		  result = +arrExpr[i - 1] - +arrExpr[i + 1];
		}
	  }
	}
	return result;
}



module.exports = {
    expressionCalculator
}
