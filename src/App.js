import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import Home from "./Home.jsx";
import Layout from "./Layout";
import About from "./About.jsx";
import Missing from "./Missing.jsx";
import PostPage from "./PostPage.jsx";
import NewPost from "./NewPost.jsx";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 07, 2022 12:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 06, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 03, 2022 13:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 02, 2022 14:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
  ]);
  // const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("");
  const [searchResalt, setSearchResalt] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy HH:mm", {
      locale: enUS,
    });

    const newPost = {
      id,
      title: postTitle,
      body: postBody,
      datetime,
    };

    const allPost = [...posts, newPost];
    setPosts(allPost);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };

  useEffect(() => {
    const filterPost = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResalt(filterPost.reverse());
  }, [posts, search]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout posts={posts} search={search} setSearch={setSearch} />}
      >
        <Route index element={<Home posts={searchResalt} />} />
        <Route path="post">
          <Route
            path=":id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
          <Route
            index
            element={
              <NewPost
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                handleSubmit={handleSubmit}
              />
            }
          />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
