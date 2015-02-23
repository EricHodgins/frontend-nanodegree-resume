
// Header
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", "Eric Hodgins");
var formattedRoll = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRoll);
$("#header").prepend(formattedName);

// BIO
var bio = {
	"name": "Eric Hodgins",
	"role": "Web Developer",
	"contacts": {
		"mobile": "519-939-6532",
		"email": "hodgins.e@gmail.com",
		"github": "https://github.com/EricHodgins",
		"twitter": "should really get a twitter account!",
		"location": "Orangeville"
	},
	"welcomeMessage": "Hello, I'm Eric",
	"skills": ["Python", "Objective-C", "JavaScript", "HTML", "CSS"],
	"pictureURL": "images/me3.jpg"
}


var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile );
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var profilePic = bio.pictureURL;
var formattedPic = HTMLbioPic.replace("%data%", profilePic);
$("#header").append(formattedPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMessage);

if (bio.skills.length !== 0){
	$("#header").append(HTMLskillsStart);
	var skills = bio.skills;
	for (var skill in skills) {
		var formattedSkills = HTMLskills.replace("%data%", skills[skill]);
		$("#skills").append(formattedSkills);	
	}
	
}

// WORK
var work = {
	"jobs": [
		{
			"position": "Technical Advisor",
			"employer": "DuPont",
			"dates": "May 2010 - Present",
			"city": "Mississaugua, ON",
			"description": "Provide customers nation-wide with technical and agronomic advice on DuPont's pesticide products."
		},
		{
			"position": "General Office Assistant",
			"employer": "Beard Winter LLP - Barristers and Solicitors",
			"dates": "Aug. 2009 - May 2010",
			"city": "Toronto, ON",
			"description": "Performed gneral office duties including: file maintenance, general accounting practices, office administration and remodelling supervision"
		}
	]
}

function displayWork () {
	var jobs = work.jobs;
	for (var job in jobs) {
		$("#workExperience").append(HTMLworkStart);
		var employer = work.jobs[job].employer;
		var formattedEmployer = HTMLworkEmployer.replace("%data%", employer);
		var title = work.jobs[job].position;
		var formattedTitle = HTMLworkTitle.replace("%data%", title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);

		var workDates = work.jobs[job].dates;
		var formattedWorkDates = HTMLworkDates.replace("%data%", workDates);
		$(".work-entry:last").append(formattedWorkDates);

		var workLocation = work.jobs[job].city;
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", workLocation);
		$(".work-entry:last").append(formattedWorkLocation);

		var workDescription = work.jobs[job].description;
		var formattedworkDesc = HTMLworkDescription.replace("%data%", workDescription);
		$(".work-entry:last").append(formattedworkDesc);

	}
}

displayWork();

// PROJECTS
var projects = {
	"projects": [
		{
			"title": "your-movies",
			"dates": "Feb 2015",
			"description": "A web app for users to make a list of movies they want to see.",
			"url": "http://your-movies.appspot.com",
			"images": ["images/2-your-movies.png", "images/1-your-movies.png"]
		}
	]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var projectTitle = projects.projects[project].title;
		var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projectTitle);
		$(".project-entry:last").append(formattedprojectTitle);

		var projectDates = projects.projects[project].dates;
		var formattedprojectDates = HTMLprojectDates.replace("%data%", projectDates);
		$(".project-entry:last").append(formattedprojectDates);

		var projectDesc = projects.projects[project].description;
		var formattedprojectDesc = HTMLprojectDescription.replace("%data%", projectDesc);
		$(".project-entry:last").append(formattedprojectDesc);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var projectImg = projects.projects[project].images[image];
				var formattedprojectImg = HTMLprojectImage.replace("%data%", projectImg);
				$(".project-entry:last").append(formattedprojectImg);
			}
		}
	}
}

projects.display();





var education = {
	"schools": [
		{
			"name": "University of Guelph",
			"city": "Guelph, ON, CAN",
			"degree": "Bachelor of Engineering",
			"major": "Environmental Engineering",
			"dates": 2009
		},
		{
			"name": "ICS Canada",
			"city": "Westmount, QC, CAN",
			"degree": "Electrician Certificate",
			"major": "Electrician Certificate",
			"dates": 2010
		}
	],
		"onlineCourses": [
			{
				"title": "JavaScript crash course",
				"school": "Udacity",
				"dates": 2015, 
				"url": "https://www.udacity.com/course/ud804"
			},
			{
				"title": "Front End Web Development Track",
				"school": "Treehouse",
				"dates": 2015,
				"url": "http://teamtreehouse.com/tracks/front-end-web-development"
			}
	]
}








// EDUCATION

// University
$("#education").append(HTMLschoolStart);

function enterSchools (schools) {
	for (var i = 0; i < schools.length; i++) {
		var schoolName = schools[i].name;
		var formattedschoolName = HTMLschoolName.replace("%data%", schoolName);
		var schoolDegree = schools[i].degree;
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", schoolDegree);
		$(".education-entry").append(formattedschoolName + formattedSchoolDegree);

		var schoolDates = schools[i].dates;
		var formattedschoolDates = HTMLschoolDates.replace("%data%", schoolDates);
		$(".education-entry").append(formattedschoolDates);

		var schoolLocation = schools[i].city;
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", schoolLocation);
		$(".education-entry").append(formattedSchoolLocation);

		var schoolMajor = schools[i].major;
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", schoolMajor);
		$(".education-entry").append(formattedschoolMajor);
	}
}

enterSchools(education.schools);


// online courses
function enterOnlineCourses (onlineCourses) {
	for (var i = 0; i < onlineCourses.length; i++) {
		var onlineTitle = onlineCourses[i].title;
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", onlineTitle);
		var onlineSchool = onlineCourses[i].school;
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", onlineSchool);
		$(".education-entry").append(formattedonlineTitle + formattedonlineSchool);

		var onlineDates = onlineCourses[i].dates;
		var formattedonlineDates = HTMLonlineDates.replace("%data%", onlineDates);
		$(".education-entry").append(formattedonlineDates);

		var onlineURL = onlineCourses[i].url;
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineURL);
		$(".education-entry").append(formattedOnlineURL);
	}
}


$(".education-entry").append(HTMLonlineClasses);
enterOnlineCourses(education.onlineCourses);



$("#main").append(internationalizeButton);


function inName(name) {
	name = "eric hodgins";
	console.log(name);
	name = name.toUpperCase();
	var splitName = name.split(" ");
	var first = splitName[0].slice(0, 1) + splitName[0].slice(1).toLowerCase();
	var second = splitName[1];
	var fullName = first + " " + second;
	console.log(fullName);
	return fullName;
}



// Map
$("#mapDiv").append(googleMap);



