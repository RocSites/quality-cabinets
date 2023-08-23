import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
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
    flexDirection: "column"
  },
  supplierContentWrapper: {
    display: "flex",
    flexDirection: "column"
  }
}));



const Suppliers = () => {
  const classes = withStyles()

  return (
    <Layout>
      <SEO title="Suppliers" />
      <h1 class="menuHeader">Suppliers</h1>
      <div className={classes.supplierRoot}>
        <div className={classes.supplierContentWrapper}>
          <a href="https://www.wolfhomeproducts.com/" target="_blank">
            <img className={classes.supplierImage} src={wolfLogo} />
          </a>
          <Typography>Create a kitchen that you’re happy to come home to with customized  Wolf cabinetry.  Explore the following options:</Typography>
          <img src={wolfCabOne} />
        </div>
        <div className={classes.supplierContentWrapper}>
          <Typography>Belknap White</Typography>
          <a href="https://www.belknapwhite.com/" target="_blank">
            <img className={classes.supplierImage} src={belknapLogo} />
          </a>
          <img src={bwOne} />
        </div>
        <div className={classes.supplierContentWrapper}>
          <Typography>Richelieu</Typography>
          <a href="https://www.richelieu.com/us/en/" target="_blank">
            <img className={classes.supplierImage} src={richelieuLogo} />
          </a>
          <img src={richOne} />
        </div>

      </div>
    </Layout>
  )
}

export default Suppliers
