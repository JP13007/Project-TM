angular.module('taskApp').controller('HeaderController', function($scope) {
    $scope.user = { name: "Joel Peter", designation: "UI/UX Designer" };
    $scope.tasks = [
        { name: "Finish project proposal", description: "Outline key points and deliverables" },
        { name: "Schedule team meeting", description: "Set a date and time" } 
    ]; 

    $scope.taskCount = $scope.tasks.length; // Calculate the number of tasks
});
