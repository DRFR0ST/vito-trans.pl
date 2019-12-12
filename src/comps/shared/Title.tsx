import {
    Theme as AugmentedTheme,
    createStyles,
    makeStyles
} from "@material-ui/core/styles";

import React from "react";
import { Typography } from "@material-ui/core";
import { TypographyProps } from "@material-ui/system";
import { useLittera } from "react-littera";

const useStyles = makeStyles((theme: AugmentedTheme) =>
    createStyles({
      root: {
          padding: "10px",
          background: theme.palette.primary.main,
          fontDecoration: "italic",
          fontWeight: "bold",
          display: "inline-block",
          textTransform: "uppercase",
          color: "#FFF",
          margin: "8px 0",
          borderRadius: "4px"
      }
    })
  );
  
  const Title = ({variant, children}: {variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "srOnly" | "inherit" | undefined, children: React.ReactElement}) => {
    const classes = useStyles();
  
    return (
         <Typography className={classes.root} variant={variant || "h1"}>{children}</Typography>
    );
  };
  
  export default Title;
  