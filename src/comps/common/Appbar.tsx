import {
  Theme as AugmentedTheme,
  createStyles,
  makeStyles
} from "@material-ui/core/styles";

import { MenuTrans } from "../../trans/";
import React from "react";
import { useLittera } from "react-littera";

const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    root: {
      color: theme.palette.primary.main
    }
  })
);

const Appbar: React.FC = () => {
  const classes = useStyles();
  const [translated] = useLittera(MenuTrans);

  return <div className={classes.root}>{translated.home}</div>;
};

export default Appbar;
