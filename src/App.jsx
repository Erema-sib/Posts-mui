import { Container } from "@mui/material";
import React from "react";
import "./App.css";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import PostsList from "./Components/PostsList/posts-list";
import { postData } from "./Components/posts";




function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <PostsList posts={postData}/>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
