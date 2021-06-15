var firebaseConfig = {
    apiKey: "keyhere",
    authDomain: "mycrud-5369e.firebaseapp.com",
    projectId: "mycrud-5369e",
    storageBucket: "mycrud-5369e.appspot.com",
    messagingSenderId: "727341125909",
    appId: "1:727341125909:web:06bd30ee2423fb72a2191c"
};
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   // Accepting the values from the HTML fields

   var nameV , rollV ,secV ,genV;

   function ready(){

      nameV = document.getElementById('namebox').value;
      rollV = document.getElementById('rollbox').value;
      secV = document.getElementById('secbox').value;
      genV = document.getElementById('genbox').value;
   }

  // Insert process

  document.getElementById('insert').onclick = function(){
  ready();
  firebase.database().ref('student/' +rollV).set({
   NameOfStudent: nameV,
   RollNumber :rollV,
   Section:secV,
   Gender:genV
   });
  }

  //Select process
  document.getElementById('select').onclick = function(){
  ready();
  firebase.database().ref('student/' +rollV).on('value' ,function(snapshot){
       document.getElementById('namebox').value = snapshot.val().NameOfStudent;
       document.getElementById('secbox').value =  snapshot.val().Section;
       document.getElementById('genbox').value = snapshot.val().Gender;
    });
  }
  
  //Update Process
  document.getElementById('update').onclick = function(){
  ready();
  firebase.database().ref('student/' +rollV).update({
   NameOfStudent: nameV,
   Section:secV,
   Gender:genV
   });
  }

  //delete Process
  document.getElementById('delete').onclick = function(){
  ready();
  firebase.database().ref('student/' +rollV).remove();
  }


 

