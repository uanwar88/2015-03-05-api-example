window.onload = function(){
  
  document.getElementById("allStudents").onclick = all_students;
  function all_students() {
    var js_req = new XMLHttpRequest;
    js_req.addEventListener("load", function() {
      document.getElementById("results").innerHTML = js_req.response;
    });
    js_req.open("get","http://localhost:4567/students");
    js_req.send();
  }
  
  
  //changeName
  document.getElementById("changeName").onclick = change_name;
  function change_name() {
    var id = prompt("What is the student ID?");
    var new_name = prompt("What is the student's name?");
    var js_req = new XMLHttpRequest;
    js_req.addEventListener("load", function() {
      document.getElementById("results").innerHTML = "Successfully changed the name.";
    });
    js_req.open("get","http://localhost:4567/students/"+ id +"/new_name/"+new_name);
    js_req.send();
  }
  
  document.getElementById("retrieveStudent").onclick = retrieve_student;
  function retrieve_student() {
    var id = prompt("What is the student ID?");
    var js_req = new XMLHttpRequest;
    js_req.addEventListener("load", function() {
      document.getElementById("results").innerHTML = js_req.response;
    });
    js_req.open("get","http://localhost:4567/students/"+id);
    js_req.send();
  }
  
  document.getElementById("studentWise").onclick = student_wise;
  function student_wise() {
    var id = prompt("What is the student ID?");
    var js_req = new XMLHttpRequest;
    js_req.addEventListener("load", function() {
      document.getElementById("results").innerHTML = js_req.response;
    });
    js_req.open("get","http://localhost:4567/is_wise/id/" +id);
    js_req.send();
  }
  
  document.getElementById("studentDrink").onclick = student_drink;
  function student_drink() {
    var id = prompt("What is the student ID?");
    var js_req = new XMLHttpRequest;
    js_req.addEventListener("load", function() {
      document.getElementById("results").innerHTML = js_req.response;
    });
    js_req.open("get","http://localhost:4567/can_drink/id/" +id);
    js_req.send();
  }
  
  document.getElementById("drinkWise").onclick = drink_wise;
  function drink_wise() {
    var id = prompt("What is the student ID?");
    var js_req = new XMLHttpRequest;
    js_req.addEventListener("load", function() {
      document.getElementById("results").innerHTML = js_req.response;
    });
    js_req.open("get","http://localhost:4567/drink_wise/id/" +id);
    js_req.send();
  }
}


