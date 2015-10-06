function car(plateno,model,color){
	this.plateno = plateno;
	this.model = model;
	this.color = color;
	this.speed = 0;

	this.startCar = startCar;
	this.stopCar = stopCar;
	this.accelerate = accelerate;
	this.decelerate = decelerate;
	this.repaint = repaint;
}


function startCar(){
	this.speed = 10;
}
function stopCar(){
	this.speed = 0;
}
function accelerate(n){
	this.speed = this.speed + n;
}
function decelerate(n){
	this.speed = this.speed - n;
}
function repaint(newColor){
	this.color = newColor;
}
