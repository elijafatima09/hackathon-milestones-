//get references to the form and display area
const resumeform = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//handle form submission
resumeform.addEventListener('submit', (event: Event)=>{
event.preventDefault();//prevent page reloadS
const name = (document.getElementById('name')as HTMLInputElement).value
const email = (document.getElementById('email')as HTMLInputElement).value
const phone = (document.getElementById('phone')as HTMLInputElement).value
const education = (document.getElementById('education')as HTMLInputElement).value
const experience = (document.getElementById('experience')as HTMLInputElement).value
const skills= (document.getElementById('skills')as HTMLInputElement).value

//generate the resume content dynamically
const resumeHTML = `
<h2><b>Editable Resume</b><h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contentediatbale="true">${name}</span></p>
<p><b>email:</b><span contentediatbale="true">${email}</span></p>
<p><b>phone:</b><span contentediatable="true">${phone}</span></p>


<h3>Education</h3>
<p contentediatable="true">${education}</p>

<h3>Experience</h3>
<p contentediatable="true">${experience}</p>

<h3>Skills</h3>
<p contentediatable="true">${skills}</p>
`;


//display the generated resume 
if (ResumeDisplayElement){
    ResumeDisplayElement.innerHTML =resumeHTML;
}
else {
    console.error('The resume display element is missing');
}

});