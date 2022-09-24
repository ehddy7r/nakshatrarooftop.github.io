
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAOperH1BVG8auUUEnAXZXMC0BJsqtZWeA",
  authDomain: "sample-9cf07.firebaseapp.com",
  databaseURL: "https://sample-9cf07-default-rtdb.firebaseio.com",
  projectId: "sample-9cf07",
  storageBucket: "sample-9cf07.appspot.com",
  messagingSenderId: "842090377158"
};
firebase.initializeApp(config);


const dbRef = firebase.database().ref();

const usersRef = dbRef.child('reservationform');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('reservationform/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}

