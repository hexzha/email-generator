function generate() {
    var student = document.getElementById("student").value;
    var niceComment = document.getElementById("niceComment").value;
    var mathClass = document.getElementById("mathClass").value;
    var missingAssignments = document.getElementById("missingAssignments").value;

    document.getElementById("output").innerHTML = mathClass + " Check In with " + student + "<br>";
    document.getElementById("output").innerHTML += "<br>";
    document.getElementById("output").innerHTML += "<br>";
    document.getElementById("output").innerHTML += "<br>";
    document.getElementById("output").innerHTML += "Hi<br>";
    document.getElementById("output").innerHTML += "<br>";
    document.getElementById("output").innerHTML += "I wanted to give you an update for " + student + " in " + mathClass + " with four weeks left in the trimester. " + niceComment + "<br>";
    document.getElementById("output").innerHTML += "<br>";
    document.getElementById("output").innerHTML += "We are currently four weeks away from the end of the trimester. " + student + " is currently missing the following assignments: " + missingAssignments + "<br>";
    document.getElementById("output").innerHTML += "<br>";
    document.getElementById("output").innerHTML += "My grading policy allows " + student + " to earn full points back on assignments for making corrections and half points back on quizzes.<br>";
    document.getElementById("output").innerHTML += "<br>";
    document.getElementById("output").innerHTML += "I have enjoyed having " + student + " in my class this trimester. Please feel free to contact me if you have any questions or concerns. My number is (319) 214-0073, and my email is m_anton@union.k12.ia.us.<br>";
    document.getElementById("output").innerHTML += "<br>";
    document.getElementById("output").innerHTML += "Thank you,<br>";
    document.getElementById("output").innerHTML += "Mary Anton";
}
