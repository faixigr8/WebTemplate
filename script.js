

var nullValue = "Your Name";
var name = prompt("PLease Enter Your Full Name: ",nullValue);

if(name === null){
	document.getElementById("nameTxt").innerText = "Your Name";
}else if (name){
	document.getElementById("nameTxt").innerText = name;
}
else{
	document.getElementById("nameTxt").innerText = "Your Name";	
}
