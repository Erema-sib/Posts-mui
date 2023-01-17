import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import PostsList from "./Components/PostsList/posts-list";
import { postData } from "./Components/posts";
import api from "./Utilites/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    Promise.all([api.getPostsList(), api.getUserInfo()]) //для того,чтобы знать какой пользователь смотрит посты и отображения лайков
      .then(([postsData, userData]) => {
        setCurrentUser(userData);
        setPosts(postsData);
      });
  }, []);

  function handlePostLike(post) {
    const isLike = post.likes.some((id) => id === currentUser._id);
    api.changeLikePost(post._id, isLike).then((newCard) => {
      const newPosts = posts.map((i) => {
        return i._id === newCard._id ? newCard : i;
      });
      setPosts(newPosts);
    });
  }

  return (
    <>
      <Header userInfo={currentUser} />

      <main>
        <Container>
          <PostsList posts={posts} onPostLike={handlePostLike} currentUser={currentUser}/>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
