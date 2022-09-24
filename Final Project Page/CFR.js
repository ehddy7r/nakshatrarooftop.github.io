// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyCy5OQQEoFtlhZlzdaxat_RgymsduhGIvU",
  authDomain: "contact-e9748.firebaseapp.com",
  databaseURL: "https://contact-e9748-default-rtdb.firebaseio.com/",
  projectId: "contact-e9748",
  storageBucket: "contact-e9748.appspot.com",
  messagingSenderId: "48152198213"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('contactform');

// Listen for form submit
document.getElementById('contactform').addEventListener('submit', submitForm);

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
  document.getElementById('contactform').reset();
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