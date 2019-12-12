import {
  Theme as AugmentedTheme,
  createStyles,
  makeStyles
} from "@material-ui/core/styles";
import { Card, Icon, Typography } from "@material-ui/core";

import { ContactTrans } from "../../trans/";
import React from "react";
import { Title } from "../shared";
import { useLittera } from "react-littera";

const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    root: {
      width: "100%"
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    content: {
      display: "flex",
      justifyContent: "space-between",
      maxWidth: "1200px",
      width: "90%",
      padding: "2.5vw",
      borderRadius: "18px",
      background: "#eee",
      position: "relative",
      "& p": {
        opacity: 0.85
      }
    },
    item: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      margin: "15px 0 15px 20px"
    },
    map: {
      width: "70%",
      overflow: "hidden"
    }
  })
);

const contactData = [
  {
    icon: "phone",
    value: "+48 94 312 47 68"
  },
  {
    icon: "phone",
    value: "+48 94 311 26 98"
  },
  {
    icon: "phone",
    value: "+48 604 616 026"
  },
  {
    break: true
  },
  {
    icon: "mail",
    value: "info@vito-trans.pl"
  },
  {
    break: true
  },
  {
    icon: "near_me",
    value: (
      <span>
        ul. Słowińska 1 <br /> 78-200, Białogard
      </span>
    )
  },
  {
    break: true
  },
  {
    icon: "account_balance",
    value: "672-171-29-75"
  }
];

const Contact: React.FC = () => {
  const classes = useStyles();
  const [translated] = useLittera(ContactTrans);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div>
            <Title variant="h3">{translated.title}</Title>
            <br />
            <br />
            <br />
            {contactData.map(e => {
              if (e.break) return <br />;
              return (
                <div className={classes.item}>
                  <Icon style={{ fontSize: "1.5rem" }}>{e.icon}</Icon>{" "}
                  <div
                    style={{
                      marginLeft: "18px",
                      opacity: 0.6,
                      fontSize: "1.15rem"
                    }}
                  >
                    {e.value}
                  </div>
                </div>
              );
            })}
          </div>
          <Card elevation={1} className={classes.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2344.2542211334426!2d15.960315315863836!3d54.016011980124766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47004ba6701a1b4d%3A0xc1dd35d5a94c1393!2zU8WCb3dpxYRza2EgMSwgNzgtMjAwIEJpYcWCb2dhcmQ!5e0!3m2!1sen!2spl!4v1576190720190!5m2!1sen!2spl"
              style={{ border: 0, width: "100%", height: "100%" }}
            ></iframe>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
