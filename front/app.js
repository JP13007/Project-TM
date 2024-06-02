// 1. Create the main AngularJS module
angular.module('taskApp', [])  

.component('appHeader', {
    templateUrl: 'components/header/header.template.html',
    controller: 'HeaderController' 
})
.component('appSidebar', {
    templateUrl: 'components/sidebar/sidebar.template.html',
    controller: 'SidebarController'
})
.component('appTaskList', {
    templateUrl: 'components/task-list/task-list.template.html',
    controller: 'TaskListController'
})


// 2. TaskController  (Your Existing Code)
.controller('TaskController', function($scope) {
    $scope.tasks = [
        { name: "Finish project proposal", description: "Outline key points and deliverables" },
        { name: "Schedule team meeting", description: "Set a date and time" } 
    ]; 
}); 
