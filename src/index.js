function eval() {
    // Do not use eval!!!
    return;
}

class Calc{
	constructor(data) {
		this.inputField = data,
	
		this.inputValue = [];
		this.totalResult = [];	
	}

	action(data){	
		this.data = this.inputField.value;
		
		let check = /[\+\*-\/]/.test(this.inputField.value);
		if(!isNaN(data || data == '+' || data == '-' || data == '/' || data == '*' || data.target.innerHTML == '=' || data == '.'){
		  this.inputValue.push(data);
		}
		
		this.op = document.querySelectorAll('.oper');
		
		if(check){
			for(let i = 0; i < this.op.length; i++){
				this.op[i].classList.add('resultoper');
			}
		}			
			
		if(data.matches('.numb') || data.matches('.oper')){
		  this.inputField += data;
		}
		if(data.matches('.result')){
			this.totalResult = this.inputField;
			this.inputField = this.result(this.data, this.inputValue, this.totalResult);
			this.inputValue = [this.inputField];
			this.totalResult = [];			
		}
		if(data.matches('.back')){
			this.inputField = this.back(this.data);
		}
		if(data.target.matches('.reset')){
			this.inputField = '';
			this.inputValue = [];
			this.totalResult = [];
		}
		
		if(data.target.matches('.sign')){
			this.inputField = this.sign(this.data);
		}
		
		if(data.matches('.oper') && data.target.matches('.resultoper')){

			let expression = this.inputField.slice(0, -1);
			if(expression.indexOf('*') + 1){
				this.inputField = this.multy(expression) + data;
			}
			if(expression.indexOf('+') + 1){
				this.inputField = this.summa(expression) + data;
			}
			if(expression.indexOf('/') + 1){
				this.inputField = this.devision(expression) + data;
			}
			if(expression.indexOf('-') + 1){
				this.inputField = this.minus(expression) + data;
			}
			 
		}

	};

	multy(expression){
		let arr = expression.split('*');
		let mux = 1;
		for(let i = 0; i < arr.length; i++){
			mux *= arr[i];
		}
		return mux;
	}
	
	summa(expression){
		let arr = expression.split('+');
		let sum = 0;
		for(let i = 0; i < arr.length; i++){
			sum += +arr[i];
		}
		return sum;
	}
	
	devision(expression){
		let arr = expression.split('/');
		let dev = arr[0] / arr[1];
		return dev;
	}
	
	minus(expression){
		let arr = expression.split('-');
		let min = arr[0] - arr[1];
		return min;
	}
	
	result(data, inputValue, totalResult){ 
		let inputField = document.querySelector('input');
		let res;
		
		for(let i = 0; i < this.op.length; i++){
			this.op[i].classList.remove('resultoper');
		}
	
		if(totalResult.indexOf('+') + 1){
			let totalValue = totalResult.split('+');
			res = parseFloat(totalValue[0], 10) + parseFloat(totalValue[1], 10);
			if((String(Math.abs(totalValue[0])).length) > (String(Math.abs(totalValue[1])).length)){
				let fix = ((totalValue[0].length-1) - totalValue[0].indexOf('.'))
				res = res.toFixed(fix);
			} else {
				let fix = ((totalValue[1].length-1) - totalValue[1].indexOf('.'))
				res = res.toFixed(fix);
			}
		}
		if(totalResult.indexOf('*') + 1){
			let totalValue = totalResult.split('*');
			res = parseFloat(totalValue[0], 10) * parseFloat(totalValue[1], 10);
			if((String(Math.abs(totalValue[0])).length) > (String(Math.abs(totalValue[1])).length)){
				let fix = ((totalValue[0].length-1) - totalValue[0].indexOf('.'))
				res = res.toFixed(fix);
			} else {
				let fix = ((totalValue[1].length-1) - totalValue[1].indexOf('.'))
				res = res.toFixed(fix);
			}
		}
		if(totalResult.indexOf('/') + 1){
			let totalValue = totalResult.split('/');
			res = parseFloat(totalValue[0], 10) / parseFloat(totalValue[1], 10);
			if((String(Math.abs(totalValue[0])).length) > (String(Math.abs(totalValue[1])).length)){
				let fix = ((totalValue[0].length-1) - totalValue[0].indexOf('.'))
				res = res.toFixed(fix);
			} else {
				let fix = ((totalValue[1].length-1) - totalValue[1].indexOf('.'))
				res = res.toFixed(fix);
			}
		}
		if(totalResult.indexOf('-',1) + 1){
			let totalValue = totalResult.split('-');
			res = parseFloat(totalValue[0], 10) - parseFloat(totalValue[1], 10);
			if((String(Math.abs(totalValue[0])).length) > (String(Math.abs(totalValue[1])).length)){
				let fix = ((totalValue[0].length-1) - totalValue[0].indexOf('.'))
				res = res.toFixed(fix);
			} else {
				let fix = ((totalValue[1].length-1) - totalValue[1].indexOf('.'))
				res = res.toFixed(fix);
			}
		}

		return res;
	};



}





module.exports = {
    expressionCalculator
}
