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
import "./index.css";

dayjs.locale("Ru");

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(90deg)",
  marginLeft: "auto",
}));

const Post = ({ image, likes, title, author = {}, text, created_at }) => {
  const { email, avatar, name } = author;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid container item xs={12} sm={6} md={4}>
      <Card className="card">
        <CardHeader
          avatar={
            <Avatar src={avatar && avatar} aria-label="recipe">
              {name?.slice(0, 1).toUpperCase()}
            </Avatar>
          }
          title={author.name}
          subheader={dayjs(created_at).format("DD MMMM YYYY")}
        />
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

        <CardActions className="showMore" disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
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
