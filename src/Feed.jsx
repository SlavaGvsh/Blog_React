import React from "react";
import Post from "./Post.jsx";

const Feed = ({ posts }) => {
  // console.log(posts);

  return (
    <>
      {posts.map((post) => (
        
        <Post key={post.id} post={post} />
      ))}
      
    </>
  );
};

export default Feed;
