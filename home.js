
var firebaseConfig = {
  apiKey: "AIzaSyBVcM5-ec2tthKwKZEatU1lrQK6RgHprVU",
  authDomain: "bitcord-1c994.firebaseapp.com",
  databaseURL: "https://bitcord-1c994-default-rtdb.firebaseio.com",
  projectId: "bitcord-1c994",
  storageBucket: "bitcord-1c994.appspot.com",
  messagingSenderId: "340636630873",
  appId: "1:340636630873:web:3ad44d44e2f733d461d648"
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
      window.location="Room.html";
    }


  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
      console.log("room_name="+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}
