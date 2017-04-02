(function() {
    angular
        .module("BlogApp", [])
        .controller("BlogController", BlogController);

    function BlogController($scope, $http) {
        $scope.createPost = function (post) {
            console.log("post.title: ", post.title);
            console.log("post.body: ", post.body);   
            $http.post("/api/blogpost", post);
        }
    }
})();