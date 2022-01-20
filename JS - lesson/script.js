var database = [
	{
		username: "tinashe",
		password: "innocent"
	}
];

var newsFeed = [
	{
		username: "Kuda",
		timeline: "my gal all"
	},
	{
		username: "Danny",
		timeline: "Myboy son"
	}
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user,pass){
	if(user === database[0].username &&
	   pass === database[0].password){
	console.log(newsFeed);
	}else {
		alert("Sorry wrong details");
	}
}
signIn(userNamePrompt,passwordPrompt);