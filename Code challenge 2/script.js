/*
var years = [1993, 1999, 2012, 1990, 2010];
var age = [];
for (var i = 0 ; years.length > i; i++ ) {
   age.push(2016 - years [i]);
   if (age[i] >= 18) {
   	console.log (age[i] + " old");
   } else {
   	console.log (age[i] + " young");
   }
}

function printFullAge (years) {
var age = [];
for (var i = 0 ; years.length > i; i++ ) {
   age.push(2016 - years [i]);
   if (age[i] >= 18) {
   	 	console.log (age[i] + " old");
 	return true;
   } else {
   		console.log (age[i] + " young");
   	return false;
   }
}
}
printFullAge(years);
console.log(printFullAge);

/////////////solution 

function printFullAge (years) {
var ages = [];
var fullAges = [];
for (var i = 0; i < years.length; i++){
	ages[i] = 2016 - years [i];
}

for (var i = 0; i < ages.length; i++){
	if (ages [i] >= 18) {
		console.log("person " + (i + 1) + " is " + ages [i] + " years old, and is of full age." );
		fullAges.push(true);
	} else {
		console.log("person " + (i + 1 )+ " is " + ages [i] + " years old, and is NOT of full age." );
		fullAges.push(false);
	}
}
return fullAges;
}

var years = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012,1915,1999]);
*/
