import {
    Theme as AugmentedTheme,
    createStyles,
    makeStyles
} from "@material-ui/core/styles";

import { AboutTrans } from "../../trans/";
import React from "react";
import { Title } from "../shared/";
import { Typography } from "@material-ui/core";
import { useLittera } from "react-littera";

const useStyles = makeStyles((theme: AugmentedTheme) =>
    createStyles({
      root: {
        width: "100%",
      },
      container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      content: {
          maxWidth: "1200px",
          padding: "15vh 2.5vw",
          "& p": {
            opacity: 0.85
          }
      }
    })
  );
  
  const About: React.FC = () => {
    const classes = useStyles();
    const [translated] = useLittera(AboutTrans);
  
    return (
      <div className={classes.root}>
        <div className={classes.container}>
            <div className={classes.content}>
                <Title variant="h3">{translated.title}</Title>
                <Typography paragraph>Officia ipsum cillum qui occaecat aliqua aliquip sit culpa. Pariatur qui culpa id veniam magna aute laboris reprehenderit qui culpa. Aliqua nisi laborum aliquip sunt.</Typography>
                <Typography paragraph>Culpa sint voluptate deserunt voluptate pariatur consectetur in enim anim. Aliquip adipisicing nulla laborum cillum officia dolor ex velit ex cillum adipisicing velit. Esse excepteur labore consectetur fugiat ad non magna. Ut laboris pariatur pariatur velit nisi. Aliqua non excepteur incididunt minim pariatur. Sint amet eiusmod excepteur amet magna consequat est dolor cupidatat. Amet eu excepteur pariatur duis enim proident fugiat aliquip quis velit.</Typography>

            </div>
        </div>
      </div>
    );
  };
  
  export default About;
  