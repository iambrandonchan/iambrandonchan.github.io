var blogApp = angular.module("blogApp", ['ui.router'])

.controller("blogController", function($scope) {
    $scope.name = "Brandon";
    $scope.week1 = false;
    $scope.week1Content = [{
        prompt: 'What are my expectations of the class?',
        response: "I've heard some high expectations for this class."
    }, {
        prompt: 'What did you do this past week?',
        response: "Not a whole lot. I fixed up my resume to reflect my internship this summer. I've been working on a command line tool,"
    }, {
        prompt: "What's in my way?",
        response: ''
    }, {
        prompt: 'What will I do next week?',
        response: ''
    }, {
        prompt: "What's my experience of the class?",
        response: ''
    }, {
        prompt: "What's my pick-of-the-week or tip-of-the-week?",
        response: ''
    }]

})

.config(function($stateProvider) {
    var week1State = {
        name: 'week1Blog',
        url: '/week1',
        template: '<h3>hello everyone! {{week1Content[0]}}</h3>'
    }

    // var week2State = {
    //     name: 'about',
    //     url: '/about',
    //     template: '<h3>Its the UI-Router hello world app!</h3>'
    // }

    $stateProvider.state(week1State);
    // $stateProvider.state(week2State);
})