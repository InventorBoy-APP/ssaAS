var firebaseConfig = {
    apiKey: "AIzaSyC2gmUiyxBa6VYfXzE-jAlkVv1iklEYW8Y",
    authDomain: "kwitter-kids-cc126.firebaseapp.com",
    projectId: "kwitter-kids-cc126",
    storageBucket: "kwitter-kids-cc126.appspot.com",
    messagingSenderId: "748797070273",
    appId: "1:748797070273:web:90bac7114e3919d8d0fd40"
  };
  
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   });});}
getData();