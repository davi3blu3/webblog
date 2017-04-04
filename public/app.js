(function() {
    angular
        .module("BlogApp", [])
        .controller("NewPostController", NewPostController)
        .controller("BlogController", BlogController);

    function NewPostController($scope, $http) {
        $scope.createPost = function (post) {  
            $http.post("/api/blogpost", post)
                .then(function() {
                    // Clear input fields
                    $scope.post.title = "";
                    $scope.post.body = "";
                });
        }
    }

    function BlogController($scope) {
        console.log('blog controller loaded');
    }
})();