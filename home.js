
var firebaseConfig = {
  apiKey: "AIzaSyC4sRn3aMe31J6D0wj-dDa8cT82fR6i6PE",
  authDomain: "bitcord-64cc0.firebaseapp.com",
  databaseURL: "https://bitcord-64cc0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bitcord-64cc0",
  storageBucket: "bitcord-64cc0.appspot.com",
  messagingSenderId: "1058200301512",
  appId: "1:1058200301512:web:af232056f821f5e0d0dafd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addroom()
    {
      var room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose: "addinguser"
      });
      localStorage.setItem("room_name", room_name);
      window.location=" ";
    }


  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
