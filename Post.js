Parse.initialize("51hSsxiscDk1rC8kXUGhAwsnywCSWhQEhGoQLlk8","QUbBhr4GQ9mwWN9oslUyLKXJ4POIyXZwheZNhvkS");
Parse.serverURL = 'https://parseapi.back4app.com/';


var Post = Parse.Object.extend("Post");
var post = new Post();

post.set("body","bonjour");
post.set("tags",["mon nom est Ali","J aime javascript"]);
post.set("numComments", 0);

post.save(null,{
  
  success:function(obj){
    console.log("Enregistrement avec succes.."+ obj.id);
  },
  error:function(err){console.log(err);}
});
