var webApp = angular.module("webApp", [])

.controller("webController", function($scope) {
    $scope.name;
    $scope.displayClasses = false;
    $scope.displaySkills = false;
    $scope.displayDefault = true;
    $scope.displayContact = false;
    $scope.displayProjects = false;
    $scope.displayHobbies = false;
    $scope.displayWorkExperience = false;
    $scope.interests = ['Piano', 'Soccer', 'Robots', 'Robots playing soccer', 'Hiking', 'And of course programming'];
    $scope.contactInfo = {
        myLinkedIn: 'https://www.linkedin.com/in/brandon-chan-9b2b12148/',
        myGitHub: 'https://github.com/iambrandonchan',
        myFacebook: 'https://www.facebook.com/profile.php?id=100009425588379',
        myInstagram: 'https://www.instagram.com/iambrandonchan/'
    }
    $scope.softwareSkillSet = [{
        skill: 'JavaScript',
        level: 'Proficient'
    }, {
        skill: 'Git',
        level: 'Proficient'
    }, {
        skill: 'Unix and Linux',
        level: 'intermediate'
    }, {
        skill: 'C',
        level: 'intermediate'
    }, {
        skill: 'Java',
        level: 'intermediate'
    }, {
        skill: 'Lisp, Python',
        level: 'Exposure'
    }, ];
    $scope.businessSkillSet = [{
        skill: 'JIRA'
    }, {
        skill: 'Confluence'
    }, {
        skill: 'Microsoft Excel'
    }, {
        skill: 'Microsoft Outlook'
    }, {
        skill: 'Microsoft Word'
    }, {
        skill: 'Microsoft PowerPoint'
    }]
    $scope.academics = {
        GPA: 3.65,
        majorGPA: 3.79,
        classes: [{
            abbrev: 'CS 312',
            name: 'Introduction to Programming'
        }, {
            abbrev: 'CS 314',
            name: 'Data Structures'
        }, {
            abbrev: 'CS 311',
            name: 'Discrete Math for Computer Science'
        }, {
            abbrev: 'CS 429',
            name: 'Computer Organization and Architecture'
        }, {
            abbrev: 'CS 439',
            name: 'Principles of Computer Systems'
        }, {
            abbrev: 'CS 371P',
            name: 'Object-Oriented Programming'
        }]
    };
    $scope.workExperience = [{
        company: 'IGT',
        occupation: 'Software Engineer Intern',
        date: 'May 2017-August 2017',
        description: {
            descrip1: 'Automated tasks and processes for development of IGT’s new web application through JavaScript',
            descrip2: 'Developed a Command Line Interface that bundles commands and file system methods to automate repetitive tasks; The Command Line Interface is designed with NodeJS, and was used to manage Git version control',
            descrip3: 'Participated in internship program; soft skills management training, a group business project, an individual project, and final presentation to senior management'

        }
    }, {
        company: 'Sanger Learning Center',
        occupation: 'Calculus Tutor',
        date: 'September 2015-April 2017',
        description: {
            descrip1: 'Tutor differential, integral, and multivariable calculus',
            descrip2: 'Instruct and mentor students at an individual and group level',
            descrip3: 'Answer questions, provide and thoroughly explain examples'

        }
    }, {
        company: 'Phone Animal',
        occupation: 'Internal Sales Assistant',
        date: 'May 2015-July 2015',
        description: {
            descrip1: 'Cold called over 50 property owners per day in specific zip codes in order to find potential property sellers',
            descrip2: 'Generated 2-3 leads per day each including seller’s drive, time frame, contact information, and a time for follow-up',
            descrip3: 'Observed Real Estate Agents meeting with clients'

        }
    }];
    $scope.showClasses = function() {
        $scope.displayClasses = true;
        $scope.displaySkills = false;
        $scope.displayDefault = false;
        $scope.displayProjects = false;
        $scope.displayContact = false;
        $scope.displayHobbies = false;
        $scope.displayWorkExperience = false;
    }
    $scope.showSkills = function() {
        $scope.displaySkills = true;
        $scope.displayClasses = false;
        $scope.displayDefault = false;
        $scope.displayProjects = false;
        $scope.displayContact = false;
        $scope.displayHobbies = false;
        $scope.displayWorkExperience = false;
    }
    $scope.showProjects = function() {
        $scope.displaySkills = false;
        $scope.displayClasses = false;
        $scope.displayDefault = false;
        $scope.displayProjects = true;
        $scope.displayContact = false;
        $scope.displayHobbies = false;
        $scope.displayWorkExperience = false;
    }
    $scope.showContact = function() {
        $scope.displaySkills = false;
        $scope.displayClasses = false;
        $scope.displayDefault = false;
        $scope.displayProjects = false;
        $scope.displayContact = true;
        $scope.displayHobbies = false;
        $scope.displayWorkExperience = false;
    }
    $scope.showWorkExperience = function() {
        $scope.displaySkills = false;
        $scope.displayClasses = false;
        $scope.displayDefault = false;
        $scope.displayProjects = false;
        $scope.displayContact = false;
        $scope.displayHobbies = false;
        $scope.displayWorkExperience = true;
    }
    $scope.showHobbies = function() {
        $scope.displaySkills = false;
        $scope.displayClasses = false;
        $scope.displayDefault = false;
        $scope.displayProjects = false;
        $scope.displayContact = false;
        $scope.displayHobbies = true;
        $scope.displayWorkExperience = false;
    }
})