(function() {
    angular
        .module("BlogApp", [])
        .controller("BlogController", BlogController);

    function BlogController($scope, $http) {
        $scope.createPost = function (post) {  
            $http.post("/api/blogpost", post)
                .then(function() {
                    // Clear input fields
                    $scope.post.title = "";
                    $scope.post.body = "";
                });

        }
    }
})();