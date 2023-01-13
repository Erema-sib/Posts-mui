import React from "react";
import ParticlesBg from "particles-bg";
import { Container, Grid, Typography } from "@mui/material";
import ButtonClick from "../Button/button";
import Post from "../Post/post";
import Pagination from '@mui/material/Pagination';
import s from "./index.module.css";


const PostsList = ({posts}) => {

     return (
      <>
  {/* Анимация */}
      <ParticlesBg type="polygon"  bg={true}/> 
      
      <div>
          <Container maxWidth="sm">
            <Typography  variant="h5"  fontSize={"30px"} marginTop={"70px"} align="center" color="textPrimary" gutterBottom>
              Здесь интересно
            </Typography>
            <Typography   fontSize={"20px"} align="center" color="textSecondary" paragraph>
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
            <Post key={item._id} {...item}/>
        ))}
          </Grid>
        </Container>
        <Pagination className={s.pagintn} count={10} />
          
        
      </>
    );
  };


  export default PostsList;
   