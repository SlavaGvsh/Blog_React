import React from "react";

const NewPost = ({ postTitle, setPostTitle, postBody, setPostBody,handleSubmit }) => {
  return (
    <main className="newPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit} >
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
      
        <label htmlFor="postbody">Body:</label>
        <textarea
          name="postbody"
          id="postbody"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
