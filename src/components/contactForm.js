import React from "react"
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import ReCAPTCHA from "react-google-recaptcha"


const withStyles = makeStyles((theme) => ({
    formRoot: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        fontWeight: "bold",
        "& input":{
          borderRadius: "3px",
          fontWeight: "normal",
          background: theme.palette.background.default
        },
        "& textarea":{
          fontWeight: "normal",
          height: "100px",
          background: theme.palette.background.default
        },
        "& form":{
          marginTop: "1.5rem",
          width: "40%",
          "@media(max-width: 650px)":{
              width: "75%"
          }

        }
      },
      formHeader: {
        fontSize: "2.0rem",
        fontWeight: "bold",
        textAlign: "center"
      },
      formEmail: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        margin: "10px",
        fontFamily: "Nanum Gothic, sans-serif"
      },
      formTextarea: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        margin: "10px",
        marginBottom: "20px",
        fontFamily: "Nanum Gothic, sans-serif"
      },
      submitButton: {
        margin:"20px",
        backgroundColor: "#001841",
        color: theme.palette.background.paper,
        borderColor: "#001841",
        borderRadius: "0px",
        padding:"15px",
        paddingLeft: "25px",
        paddingRight: "25px",
        textTransform: "none",
        fontSize: "1.0rem",
        width: "190px",
        fontWeight: "bold",
        '&:hover': {
          backgroundColor: "#001841",
          boxShadow: 'none',
          cursor: "pointer"
        },
      },
      submitButtonWrapper: {
        display: "flex",
        justifyContent: "center"
      },
      captchaWrapper: {
        margin: "10px"
      },
      footerPhone: {
          color: "black",
          textDecoration: "none",
          fontFamily: "Nanum Gothic, sans-serif"
      }

}));

const ContactForm = (props) => {

  const classes = withStyles();

  return (
    <div id="contactForm" className={classes.formRoot}>
      <form 
        name="contactPh" 
        method="POST" 
        data-netlify="true" 
        data-netlify-recaptcha="true"
        action="/thank-you"
        >
        <input type="hidden" name="form-name" value="contactPh" />
          <Typography className={classes.formHeader}>Get in Touch</Typography>
            <div style={{textAlign: "center"}}>
                <a href="tel:" className={classes.footerPhone}>(585) 624-9870</a>
            </div>

        <div className={classes.formEmail}>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div className={classes.formTextarea}>
          <label>How can we help?</label>
          <textarea name="message" />
        </div>
        <div className={classes.captchaWrapper}>
          <ReCAPTCHA sitekey="6Le2xqwaAAAAAIIYnSh04me11jxlWXvz2ITqWoU0"/>
        </div>
        <div className={classes.submitButtonWrapper}>
          <button className={classes.submitButton} type="submit">Send</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
