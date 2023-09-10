//js for study time website
var x=0,y=0,temp=0;;
var compare1=0,compare2=0;	
var comment= ["Awesome!","Good Job!","Super!","Nice!","Fantastic!","WellDone!"];

function getNumbers() {
	temp = Math.floor((Math.random() * 5) + 0);
  	x = Math.floor((Math.random() * 20) + 1);
    document.getElementById('num1').innerHTML = x;
    y = Math.floor((Math.random() * 10) + 1);
   document.getElementById('num2').innerHTML = y;
    
}
function getCompareNumbers() {
	compare1 = Math.floor((Math.random() * 20) + 1);
	compare2 = Math.floor((Math.random() * 20) + 1);
  	document.getElementById('xb').innerHTML = compare1;
  	if (compare1==compare2){
  	document.getElementById('yb').innerHTML = compare2+1;
  	}
  	else{
   	document.getElementById('yb').innerHTML = compare2;
  	}
  	temp = Math.floor((Math.random() * 5) + 0);
}

function sum(){
	z=x+y;
	document.getElementById('sum').innerHTML = z;
	var a=document.getElementById('answer').value;
	if (a==z) {
		document.getElementById('sum').innerHTML = comment[temp];
	}
	else{
		document.getElementById('sum').innerHTML = 'No,Answer is'+ z;
	}
}
function sub()
{
	p=x-y;
	document.getElementById('substraction').innerHTML = p;
	var a2=document.getElementById('answer').value;
	if (a2==p) {
		document.getElementById('substraction').innerHTML = comment[temp];
	}
	else
	{
		document.getElementById('substraction').innerHTML = 'No,Answer is'+ p;
	}
}

 function myFunctionX(){
    if(compare1>compare2){
		document.getElementById('answer').innerHTML = comment[temp];
	}
	else
	{
		document.getElementById('answer').innerHTML = 'Oops,its smaller.';
	}
}
		
function myFunctionY(){
   	if(compare2>compare1){
		document.getElementById('answer').innerHTML = comment[temp];
	}
	else{
	document.getElementById('answer').innerHTML = 'Oops,its smaller.';
	}
}
function myEven()
{
if ((x%2)==0)
	document.getElementById('answer').innerHTML = comment[temp];
else
	document.getElementById('answer').innerHTML = 'Oops,Its a odd number.';
}

function myOdd()
{
if ((x%2)!=0)
	document.getElementById('answer').innerHTML = comment[temp];
else
	document.getElementById('answer').innerHTML = 'Oops,Its a even number.';
}


function multiply(){
	z=x*y;
	document.getElementById('multiplication').innerHTML = z;
	var a=document.getElementById('answer').value;
	if (a==z) {
		document.getElementById('multiplication').innerHTML = comment[temp];
	}
	else{
		document.getElementById('multiplication').innerHTML = 'No,Answer is'+ z;
	}
}
	


