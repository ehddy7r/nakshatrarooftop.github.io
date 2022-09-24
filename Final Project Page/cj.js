
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCy5OQQEoFtlhZlzdaxat_RgymsduhGIvU",
  authDomain: "contact-e9748.firebaseapp.com",
  databaseURL: "https://contact-e9748-default-rtdb.firebaseio.com/",
  projectId: "contact-e9748",
  storageBucket: "contact-e9748.appspot.com",
  messagingSenderId: "48152198213"
};
firebase.initializeApp(config);


const dbRef = firebase.database().ref();

const usersRef = dbRef.child('contactform');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.firstname;
	
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('contactform/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}

