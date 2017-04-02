(function() {
    angular
        .module("BlogApp", [])
        .controller("BlogController", BlogController);

    function BlogController($scope) {
        $scope.createPost = function (post) {
            console.log("post.title: ", post.title);
            console.log("post.body: ", post.body);            
        }
    }
})();