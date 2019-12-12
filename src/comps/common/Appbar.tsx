import {
  Theme as AugmentedTheme,
  createStyles,
  makeStyles
} from "@material-ui/core/styles";
import {
  Button,
  ClickAwayListener,
  Grow,
  Icon,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@material-ui/core';
import React, { useRef, useState } from 'react';

import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MenuTrans } from "../../trans";
import Toolbar from "@material-ui/core/Toolbar";
import cx from 'classnames';
import englishFlag from '../../img/flags/en_US.png';
import germanFlag from '../../img/flags/de_DE.png';
import logoImage from "../../img/logo.png";
import logoWhiteImage from "../../img/logo_white.png";
import polishFlag from '../../img/flags/pl_PL.png';
import russianFlag from '../../img/flags/ru_RU.png';
import { useLittera } from 'react-littera';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    appBar: {
      zIndex: 666,
      background: "transparent",
      color: "#212121",
      transition: "all 155ms ease"
    },
    appBarTriggered: {
      color: "#FFF",
      background: "#212121"
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%"
    },
    title: {
      height: "48px",
      width: "auto"
    },
    content: {
      padding: "6px 8px",
      borderRadius: "6px",
      background: "rgba(255, 255, 255, 0.15)"
    }
  })
);

const tabs = [
  {
    key: 'home',
  },
  {
    key: 'about',
  },
  {
    key: 'offer',
  },
  {
    key: 'area',
  },
  {
    key: 'contact',
  },
];

interface Props {
  children: React.ReactElement;
}

export default function ElevateAppBar(props: Props) {
  const classes = useStyles();
  const [translated, language, setLanguage] = useLittera(MenuTrans);
  const [activeTab, setActiveTab] = useState(0);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langRef = useRef(null);
  const plFlag = (
    <img
      src={polishFlag}
      alt="Polish Flag"
      style={{ height: '20px', width: 'auto' }}
    />
  );
  const enFlag = (
    <img
      src={englishFlag}
      alt="English Flag"
      style={{ height: '20px', width: 'auto' }}
    />
  );
  const deFlag = (
    <img
      src={germanFlag}
      alt="German Flag"
      style={{ height: '20px', width: 'auto' }}
    />
  );
  const ruFlag = (
    <img 
      src={russianFlag}
      alt="Russian Flag"
      style={{height: "20px", width: "auto"}}
    />
  )

  // React.useEffect(() => {
  //   if (location.pathname.indexOf(tabs[activeTab].key) <= -1) {
  //     const newActive = tabs.find((e) => {
  //       return (
  //         (e.key === 'home' && location.pathname === '/') ||
  //         location.pathname.replace('/', '') === e.key
  //       );
  //     });
  //     const newIndex = tabs.indexOf(newActive);
  //     newIndex > -1 && setActiveTab(newIndex);
  //   }
  // }, [location.pathname]); // eslint-disable-line

  type Flags = {
    [key: string]: JSX.Element
  }

  const flags:Flags = {
    de_DE: deFlag,
    en_US: enFlag,
    pl_PL: plFlag,
    ru_RU: ruFlag
  };

  const languageLabel = flags[language] || enFlag;

  const handleToggle = () => setLangMenuOpen(!langMenuOpen);
  const handleClose = () => setLangMenuOpen(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        elevation={trigger ? 4 : 0}
        className={cx(classes.appBar, { [classes.appBarTriggered]: trigger })}
      >
        <Toolbar className={classes.toolbar}>
          <img
            className={classes.title}
            src={trigger ? logoWhiteImage : logoImage}
          />
          <div className={classes.content}>
            <Button
              variant="text"
              style={{ marginRight: "5px", color: "#fff" }}
            >
              Home
            </Button>
            <Button
              variant="text"
              style={{ marginRight: "5px", color: "#fff" }}
            >
              O firmie
            </Button>
            <Button
              variant="text"
              style={{ marginRight: "5px", color: "#fff" }}
            >
              Oferta
            </Button>
            <Button
              variant="text"
              style={{ marginRight: "5px", color: "#fff" }}
            >
              Plac
            </Button>
            <Button variant="text" style={{ color: "#fff" }}>
              Kontakt
            </Button>
              <IconButton
                ref={langRef}
                aria-owns={langMenuOpen ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                color="primary"
                onClick={handleToggle}
              >
                {languageLabel}
              </IconButton>
              <Popper
                open={langMenuOpen}
                anchorEl={langRef.current}
                transition
                disablePortal
                style={{ zIndex: 50 }}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom' ? 'center top' : 'center bottom',
                    }}
                  >
                    <Paper id="menu-list-grow">
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList>
                          <MenuItem
                            onClick={() => {
                              handleClose();
                              setLanguage('pl_PL');
                            }}
                          >
                            {plFlag}{' '}
                            <Typography style={{ marginLeft: '10px' }}>
                              Polski
                            </Typography>
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleClose();
                              setLanguage('en_US');
                            }}
                          >
                            {enFlag}{' '}
                            <Typography style={{ marginLeft: '10px' }}>
                              English
                            </Typography>
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleClose();
                              setLanguage('de_DE');
                            }}
                          >
                            {deFlag}{' '}
                            <Typography style={{ marginLeft: '10px' }}>
                              Deutsch
                            </Typography>
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleClose();
                              setLanguage('ru_RU');
                            }}
                          >
                            {ruFlag}{' '}
                            <Typography style={{ marginLeft: '10px' }}>
                              русский
                            </Typography>
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div>{props.children}</div>
    </React.Fragment>
  );
}
