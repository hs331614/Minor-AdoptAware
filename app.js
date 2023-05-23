// Initialize Firebase
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the Firestore database service
  var db = firebase.firestore();

  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    var fullName = document.forms["myForm"]["fullName"].value;
    var email = document.forms["myForm"]["email"].value;
    var mobileNum = document.forms["myForm"]["mobileNum"].value;
    var petCategory = document.forms["myForm"]["choice"].value;
    var city = document.forms["myForm"]["City"].value;
    var state = document.forms["myForm"]["State"].value;
    var idType = document.forms["myForm"]["choice"].value;
    var idNumber = document.forms["myForm"]["IdNumber"].value;

    // Store the form data in Firebase
    db.collection("formData").add({
      fullName: fullName,
      email: email,
      mobileNum: mobileNum,
      petCategory: petCategory,
      city: city,
      state: state,
      idType: idType,
      idNumber: idNumber
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      // Reset the form after successful submission
      document.getElementById("myForm").reset();
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }