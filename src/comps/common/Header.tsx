import {
  Theme as AugmentedTheme,
  createStyles,
  makeStyles
} from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

import { HeaderTrans } from "../../trans/";
import React from "react";
import thumbnailImage from "../../img/thumbnail.jpeg";
import { useLittera } from "react-littera";

const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    root: {
      width: "100%",
      height: "65vh",
      position: "relative",
      overflow: "hidden",
      top: "-64px"
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      height: "100%",
    },
    content: {
      width: "49vw",
      height: "100%",
      position: "relative",
      marginTop: "64px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 5vw",

      "& p": {
        opacity: 0.85
      }
    },
    thumbnailContainer: {
      width: "60vw",
      height: "100%",
      position: "relative",
      borderBottomLeftRadius: "50vh",
      overflow: "hidden",
      maxWidth: "1200px"
    },
    thumbnail: {
      width: "auto",
      height: "100%",
      zIndex: 1,
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translateY(-50%)"
    }
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  const [translated] = useLittera(HeaderTrans);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div>
            <Typography variant="h2" style={{fontWeight: "bold", marginBottom: "10px"}}>{translated.title}</Typography>
            <Typography paragraph>Labore labore nostrud nostrud adipisicing. Cupidatat sit anim dolore laboris laborum adipisicing. Eiusmod enim ad sint anim dolore. Dolore nulla veniam Lorem est dolor sunt occaecat quis irure anim exercitation tempor cillum mollit. Dolore ut sint ex nulla ad culpa veniam consequat aute non ut excepteur nisi ex.</Typography>
            <Button variant="contained" color="primary">Zapoznaj się</Button>
          </div>
        </div>
        <div className={classes.thumbnailContainer}>
          <img className={classes.thumbnail} alt="Header thumbnail" src={thumbnailImage} />
        </div>
      </div>
    </div>
  );
};

export default Header;
