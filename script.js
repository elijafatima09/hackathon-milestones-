//get references to the form and display area
var Resumeform = document.getElementById('resume-form');
var ResumeDisplayElement = document.getElementById('resume-display');
//handle form submission
Resumeform.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reloadS
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generate the resume content dynamically
    var resumeHTML = "\n<h2><b>Editable Resume</b><h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contentediatble=\"true\">".concat(name, "</span></p>\n<p><b>email:</b><span contentediatble=\"true\">").concat(email, "</span></p>\n<p><b>phone:</b><span contentediatble=\"true\">").concat(phone, "</span></p>\n\n\n<h3>Education</h3>\n<p contentediatble=\"true\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p contentediatble=\"true\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p contentediatble=\"true\">").concat(skills, "</p>\n");
    //display the generated resume 
    if (ResumeDisplayElement) {
        ResumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
