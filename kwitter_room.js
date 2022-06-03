
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAveq2qmCENwoyZ8AYl9gq87rdBZar3PFE",
    authDomain: "kwitter-app-4ca01.firebaseapp.com",
    databaseURL: "https://kwitter-app-4ca01-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-4ca01",
    storageBucket: "kwitter-app-4ca01.appspot.com",
    messagingSenderId: "665924913692",
    appId: "1:665924913692:web:4c9a8798d3913f056dedd9"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   function addroom()
   {
         room_name = document.getElementById("room_name").value;

         firebase.database().ref("/").child(room_name).update({
               purpose : "adding room name"
         });

         localStorage.setItem("room_name", room_name);

         window.location="kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "Kwitter_page.html";    
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "index.html";
}