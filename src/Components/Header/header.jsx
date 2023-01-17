import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import "./index.css";
import logo from "./img.png";


function Header({ userInfo }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          component="div"
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            fontSize: "30px",
            textShadow: "1px 1px 1px black",
            fontFamily: "«Great Vibes», cursive",
            marginLeft: "20px"
          }}
        >
          
          Обитель трафика
          <img className="icon" src={logo} alt="logo" />
        </Typography>
        {/* <Button color="inherit">Войти</Button>  */}
        <Box sx={{ fontFamily: "«Great Vibes», cursive",
                   fontSize: "18px"}}>
          {userInfo.name && <span>{userInfo.name}</span>}
          </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
