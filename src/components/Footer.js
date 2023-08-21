import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon
          onClick={() =>
            window.open("https://instagram.com/abhayygaur", "_blank")
          }
        />
        <TwitterIcon
          onClick={() => window.open("https://twitter.com/imabhayy", "_blank")}
        />
        <LinkedInIcon
          onClick={() =>
            window.open("https://www.linkedin.com/in/theabhaygaur/", "_blank")
          }
        />
      </div>
      <p>&copy; 2023</p>
    </div>
  );
};

export default Footer;
