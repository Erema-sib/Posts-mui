import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import { Container, Grid, Typography } from "@mui/material";
import ButtonClick from "../Button/button";
import Post from "../Post/post";
import s from "./index.module.css";
import AppPagination from "../AppPagination/app-pagination";




const PostsList = ({posts, onPostLike, currentUser}) => {

  

  return (
      <>
  {/* Анимация */}
      <ParticlesBg type="polygon"  bg={true}/> 
      
      <div>
          <Container maxWidth="sm">
            <Typography  variant="h5"  fontSize={"30px"} marginTop={"100px"} align="center" color="textPrimary" gutterBottom>
              Здесь интересно
            </Typography>
            <Typography   fontSize={"20px"} marginTop={"20px"} align="center" color="textSecondary" paragraph>
              Расслабься, выпей любимый напиток, прочти или напиши - всё что хочешь...
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                </Grid>
                <Grid item>
                  <ButtonClick/>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={s.gridPost} maxWidth="md">
        <Grid  container spacing={"40px"} >
        {posts.map(item => (        
            <Post key={item._id} {...item} onPostLike={onPostLike} currentUser={currentUser}/>
        ))}
          </Grid>
        </Container>
          <AppPagination/>
       
        
          
        
      </>
    );
  };


  export default PostsList;
   