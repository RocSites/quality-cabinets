import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import wolfCabOne from "../images/wolf_cab_1.png"
import bwOne from "../images/belknap_one.jpeg"
import richOne from "../images/rich_one.jpeg"
import wolfLogo from "../images/wolf_logo_green.png"
import belknapLogo from "../images/belknap_logo.jpeg"
import richelieuLogo from "../images/Richelieu_Logo.svg"

const withStyles = makeStyles(() => ({
  supplierRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px"
  },
  supplierContentWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  supplierTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "10px 20px",
    textAlign: "left"
  },
  supplierSubheader: {
    padding: "10px 20px",
    fontWeight: "normal",
    textAlign: "left"
  },
  supplierImage: {
    width: "250px"
  },
  wolfButtonWrapper: {
    display: "flex",
    margin: "20px",
    "@media(max-width:600px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  wolfLink: {
    margin: "20px"
  },
  wolfLinkButton: {
    backgroundColor: "#9caf86",
    borderRadius: "0px",
    padding: "10px 30px",
    "& > span": {
      textTransform: "none",
      color: "white"
    },
    '&:hover': {
      backgroundColor: "#000000",
      boxShadow: 'none',
      cursor: "pointer"
    },
    "@media(max-width:600px)": {
      width: "300px"
    }
  },
  belknapLinkButton: {
    backgroundColor: "#434d7e",
    borderRadius: "0px",
    padding: "10px 30px",
    "& > span": {
      textTransform: "none",
      color: "white"
    },
    '&:hover': {
      backgroundColor: "#000000",
      boxShadow: 'none',
      cursor: "pointer"
    },
    "@media(max-width:600px)": {
      width: "300px"
    }
  },
  richLinkButton: {
    backgroundColor: "#e11d06",
    borderRadius: "0px",
    padding: "10px 30px",
    "& > span": {
      textTransform: "none",
      color: "white"
    },
    '&:hover': {
      backgroundColor: "#000000",
      boxShadow: 'none',
      cursor: "pointer"
    },
    "@media(max-width:600px)": {
      width: "300px"
    }
  },
  supplierImageTwo: {
    width: "50%",
    "@media(max-width:600px)": {
      width: "90%"
    }
  }

}));



const Suppliers = () => {
  const classes = withStyles()

  return (
    <Layout>
      <SEO title="Suppliers" />
      <h1 class="supplierHeader">Suppliers</h1>
      <Typography className={classes.supplierSubheader}>We partner with the best in the industry. Our suppliers share the same commitment to quality, design and  affordability.</Typography>
      <div className={classes.supplierRoot}>
        <div className={classes.supplierContentWrapper}>
          <Typography className={classes.supplierTitle}>Wolf Home Products</Typography>
          <a href="https://www.wolfhomeproducts.com/" target="_blank">
            <img className={classes.supplierImage} src={wolfLogo} />
          </a>
          <Typography>Create a kitchen that you’re happy to come home to with customized  Wolf cabinetry.  Explore the following options:</Typography>
          <div className={classes.wolfButtonWrapper}>
            <a className={classes.wolfLink} href="https://www.wolfhomeproducts.com/wolfclassic" target="_blank">
              <Button className={classes.wolfLinkButton}>Wolf Classic</Button>
            </a>
            <a className={classes.wolfLink} href="https://www.wolfhomeproducts.com/wolfsignature" target="_blank">
              <Button className={classes.wolfLinkButton}>Wolf Signature</Button>
            </a>
            <a className={classes.wolfLink} href="https://www.wolfhomeproducts.com/wolfdesigner" target="_blank">
              <Button className={classes.wolfLinkButton}>Wolf Designer</Button>
            </a>
          </div>
          <img className={classes.supplierImageTwo} src={wolfCabOne} />
        </div>
        <div className={classes.supplierContentWrapper}>
          <Typography className={classes.supplierTitle}>The Belknap White Group</Typography>
          <a href="https://www.belknapwhite.com/" target="_blank">
            <img className={classes.supplierImage} src={belknapLogo} />
          </a>
          <Typography>Belknap White supplies our tile and flooring materials. </Typography>
          <div className={classes.wolfButtonWrapper}>
            <a className={classes.wolfLink} href="https://www.bellacerafloors.com/" target="_blank">
              <Button className={classes.belknapLinkButton}>Bella Cera Hardwood</Button>
            </a>
            <a className={classes.wolfLink} href="https://www.marazziusa.com/" target="_blank">
              <Button className={classes.belknapLinkButton}>Marazzi</Button>
            </a>
            <a className={classes.wolfLink} href="https://www.americanolean.com/" target="_blank">
              <Button className={classes.belknapLinkButton}>American Olean</Button>
            </a>
            <a className={classes.wolfLink} href="https://drive.google.com/file/d/10tbecPcyaW2BC76mFO31zZxE7e1g2P6x/view" target="_blank">
              <Button className={classes.belknapLinkButton}>Lugarno</Button>
            </a>
          </div>
          <img className={classes.supplierImageTwo} src={bwOne} />
        </div>
        <div className={classes.supplierContentWrapper}>
          <Typography className={classes.supplierTitle}>Richelieu Hardware</Typography>
          <a href="https://www.richelieu.com/us/en/" target="_blank">
            <img className={classes.supplierImage} src={richelieuLogo} />
          </a>
          <Typography>It's the finishing touches that often have the most impact.  Checkout  the wide variety of style choices from Richelieu:</Typography>
          <div className={classes.wolfButtonWrapper}>
            <a className={classes.wolfLink} href="https://www.richelieu.com/us/en/category/decorative-hardware/cabinet-hardware-pulls-and-knobs/pulls/1048046?sort=&nbPerPage=48" target="_blank">
              <Button className={classes.richLinkButton}>Pulls</Button>
            </a>
            <a className={classes.wolfLink} href="https://www.richelieu.com/us/en/category/decorative-hardware/cabinet-hardware-pulls-and-knobs/knobs/1048047?sort=&nbPerPage=48" target="_blank">
              <Button className={classes.richLinkButton}>Knobs</Button>
            </a>
            <a className={classes.wolfLink} href="https://www.richelieu.com/us/en/category/kitchen-and-bathroom-accessories/kitchen/drawer-organization/1052080?sort=&nbPerPage=48" target="_blank">
              <Button className={classes.richLinkButton}>Organizers</Button>
            </a>
          </div>
          <img className={classes.supplierImageTwo} src={richOne} />
        </div>

      </div>
    </Layout>
  )
}

export default Suppliers
