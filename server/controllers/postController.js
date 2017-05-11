var mongoose = require('mongoose');
var blogPost = mongoose.model('blogPost');
var multiparty = require('multiparty'),
            fs = require('fs');

module.exports = (function(){
    return{
        newBlog : function(req, res){
			var postInstance = new blogPost(req.body);
			postInstance.save(function(err){
				if(err){
					console.log(err);
				}else{
                    res.json({success: true});
				}
			});
		},
        allPosts : function(req, res){
            blogPost.find(function(err, posts){
                if(err){
                    console.log(err);
                }else{
                    res.json(posts);
                }
            });
        },
        onePost : function(req, res){
            blogPost.findOne({_id : req.params.id}, function(err, post){
                if(err){
                }else{
                    res.json(post);
                }
            });
        }
    };

})();