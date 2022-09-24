
// Initialize Firebase
var config = {
  apiKey: "AIzaSyD43q9wpoSWf8KP3BBsj5kNSiVWd5MDRDU",
  authDomain: "feedback-96d59.firebaseapp.com",
  databaseURL: "https://feedback-96d59-default-rtdb.firebaseio.com/",
  projectId: "feedback-96d59",
  storageBucket: "feedback-96d59.appspot.com",
  messagingSenderId: "202644172996"
};

firebase.initializeApp(config);


const dbRef = firebase.database().ref();

const usersRef = dbRef.child('feedbackform');
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

	const userRef = dbRef.child('feedbackform/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}

