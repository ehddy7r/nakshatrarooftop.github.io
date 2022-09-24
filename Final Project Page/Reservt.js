// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyAOperH1BVG8auUUEnAXZXMC0BJsqtZWeA",
  authDomain: "sample-9cf07.firebaseapp.com",
  databaseURL: "https://sample-9cf07-default-rtdb.firebaseio.com",
  projectId: "sample-9cf07",
  storageBucket: "sample-9cf07.appspot.com",
  messagingSenderId: "842090377158"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('reservationform');

// Listen for form submit
document.getElementById('reservationform').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var date = getInputVal('date');
  var hour = getInputVal('hour');
  var email = getInputVal('email')
  var number = getInputVal('number');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, date, hour,  email, number, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('reservationform').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, date, hour, email, number, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name:name,
    date:date,
	hour:hour,
    email:email,
	number:number,
    phone:phone,
    message:message
  });
}