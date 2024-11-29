import React from "react";
import { useParams, Link } from "react-router-dom";

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();

  const post = posts.find((post) => post.id.toString() === id);
  // console.log(post);
  return (
    <main className="postPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postData"> {post.datetime}</p>
            <p className="postBoy">{post.body}</p>
            <button className="post" onClick={()=>handleDelete(post.id)}>Delete post</button>
          </>
        )}
        {!post && (
          <>
            <h2>Post not found</h2>
            <p>Well... Thet`s dissapoint...</p>
            <Link to="/">Visit on our page</Link>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
