import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.css";
import logo from "./cup.png";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, }}>
          Posts
          <img className="icon" src={logo} alt="logo"/>
        </Typography>
        <Button color="inherit">Вход</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
 



