// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyD43q9wpoSWf8KP3BBsj5kNSiVWd5MDRDU",
  authDomain: "feedback-96d59.firebaseapp.com",
  databaseURL: "https://feedback-96d59-default-rtdb.firebaseio.com/",
  projectId: "feedback-96d59",
  storageBucket: "feedback-96d59.appspot.com",
  messagingSenderId: "202644172996"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('feedbackform');

// Listen for form submit
document.getElementById('feedbackform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var firstname = getInputVal('firstname');
  var lastname = getInputVal('lastname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(firstname, lastname, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('feedbackform').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(firstname, lastname, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname: firstname,
    lastname:lastname,
    email:email,
    phone:phone,
    message:message
  });
}