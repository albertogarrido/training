console.log("hola mundo");

// var friends = {
// 	bill:{
// 		firstName:"Bill",
// 		lastName:"Smith",
// 		number:"66564774"
// 	},
// 	steve:{
// 		firstName:"Steve",
// 		lastName:"Jones",
// 		number:"2341234234"
// 	}
// }

// function list(name){
// 	for(var person in friends){
// 		console.log(person);
// 	}
// }

// function searchFriend(name){
// 	for(var person in friends){
// 		if(person.firstName == name){
// 			console.log("person found");
// 			return person;
// 		}
// 	}
// }

// var friend = searchFriend("Bill");

// console.log(friend.firstName + " " + friend.lastName + " " + friend.number);



function person(firstname,lastname,age,eyecolor) {
	this.firstname=firstname;
	this.lastname=lastname;
	this.age=age;
	this.eyecolor=eyecolor;

	this.changeName=changeName;
	function changeName(name) {
		this.lastname=name;
	}
	this.toString=toString;
	function toString(){
		console.log(this.firstname + " " + this.lastname + " " + this.age + " " + this.eyecolor);
	}
}

var myFather=new person("John","Doe",50,"blue");
var myMother=new person("Sally","Rally",48,"green");

myFather.toString();
myMother.toString();
