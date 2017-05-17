app.controller('blogPostController', ['$scope', '$timeout', '$routeParams', 'postFactory', function(scope, timeout, routeParams, postFact){
    scope.newBlogPost = function(){
      postFact.newPost(scope.blogPost);
    };
    var allPosts = function(){
        postFact.allPosts(function(data){
        scope.allPosts = data.data;
      });
    };
      if(routeParams.id){
	    	postFact.getOne(routeParams.id, function(data){
			  scope.blogInstance = data.data;
		});
	}
  
   allPosts(); 
}]);
 


