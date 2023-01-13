import { Button } from "@mui/material";
import logo from "./add post.png";
import "./index.css";

const ButtonClick = () => {
  return (
    <Button
      variant="contained"
      color="error"
      sx={{ padding: "5px 35px", 
            borderRadius: "20px", 
             backgroundColor: "rgb(246, 77, 77)"
           }}
      onClick={() => {
        alert("Ну что? Есть контакт!)))");
      }}
    >
      Добавить пост  <img className="add" src={logo} alt="logo" />
    </Button>
  );
};

export default ButtonClick;
