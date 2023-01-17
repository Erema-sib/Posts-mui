import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, KeyboardDoubleArrowRight } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import s from "./index.module.css";
import cn from "classnames";

dayjs.locale("Ru");

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(90deg)",
  marginLeft: "auto",
}));

const Post = ({ _id, image, likes, title, author = {}, text, created_at, onPostLike, currentUser }) => {
  const { email, avatar, name } = author;
  const [expanded, setExpanded] = useState(false);
 

  const isLike = likes.some((id) => id === currentUser._id);

  function handleLikeClick() {
    onPostLike({_id, likes})
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid container item xs={12} sm={6} md={4}>
      <Card className={s.card} sx={{backgroundColor:"#f0fdffd7" }}>

   
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt={`Изображение ${title}`}
        />
        
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" noWrap color="text.secondary">
            {text}
          </Typography>
        </CardContent>

        <CardHeader 
          avatar={
            <Avatar src={avatar && avatar} aria-label="recipe">
              {name?.slice(0, 1).toUpperCase()}
            </Avatar>
          }
          title={author.name}
          subheader={dayjs(created_at).format("DD MMMM YYYY")}
          sx={{margin: "auto"}}
        />
        
        <CardActions className={s.showMore} disableSpacing>
          <IconButton  className={cn("post_favorite",{"post_favorite_is-active" : isLike})} aria-label="add to favorites" onClick={handleLikeClick}
          >
            <Favorite/>
            <div className={s.count}>
            {likes.length > 0 ? <span>{likes.length}</span> : null}
            </div>
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-label="show more"
          >
            <KeyboardDoubleArrowRight color="action" fontSize="medium" />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{text}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default Post;
