function printLine(line) {
    var br = "<br>"; 

    return line + br;
}

function generate() {
    var student = document.getElementById("student").value;
    var niceComment = document.getElementById("niceComment").value;
    var mathClass = document.getElementById("mathClass").value;
    var missingAssignments = document.getElementById("missingAssignments").value;
 
    document.getElementById("output").innerHTML = printLine(mathClass + " Check In with " + student);
    document.getElementById("output").innerHTML += printLine("");
    document.getElementById("output").innerHTML += printLine("");
    document.getElementById("output").innerHTML += printLine("");
    document.getElementById("output").innerHTML += printLine("Hi");
    document.getElementById("output").innerHTML += printLine("");
    document.getElementById("output").innerHTML += printLine("I wanted to give you an update for " + student + " in " + mathClass + " with four weeks left in the trimester. " + niceComment);
    document.getElementById("output").innerHTML += printLine("");
    document.getElementById("output").innerHTML += printLine("We are currently four weeks away from the end of the trimester. " + student + " is currently missing the following assignments: " + missingAssignments);
    document.getElementById("output").innerHTML += printLine("");
    document.getElementById("output").innerHTML += printLine("My grading policy allows " + student + " to earn full points back on assignments for making corrections and half points back on quizzes.");
    document.getElementById("output").innerHTML += printLine("");
    document.getElementById("output").innerHTML += printLine("I have enjoyed having " + student + " in my class this trimester. Please feel free to contact me if you have any questions or concerns. My number is (319) 214-0073, and my email is m_anton@union.k12.ia.us.");
    document.getElementById("output").innerHTML += printLine("");
    document.getElementById("output").innerHTML += printLine("Thank you,");
    document.getElementById("output").innerHTML += printLine("Mary Anton");
}
