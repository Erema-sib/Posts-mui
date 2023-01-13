import { Link, Typography } from "@mui/material";
import "./index.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Mui.com
      </Link>
    </Typography>
  );
}

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div class="border"></div>
        <Typography variant="h6" align="center">
          Сделано по заказу
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Здесь могла бы быть ваша реклама
        </Typography>
        <div className="date" color="Secondary">
          {new Date().toLocaleString("Ru", { 
            year: "numeric",
            month: "long",
            day: "2-digit"}
            )}
        </div>
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
