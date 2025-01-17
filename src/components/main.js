import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import rocBuildingOne from "../images/yassine-khalfalli-roc-image.jpg"
import wolfLogo from "../images/wolf_logo_green.png"
import belknapLogo from "../images/belknap_logo.jpeg"
import richelieuLogo from "../images/Richelieu_Logo.svg"
import CabinetBacksplash from "../images/cab_backsplash.jpeg"
import fiveStar from '../images/fiveStar.png'
import Divider from '@material-ui/core/Divider'
import PhoneIcon from '@material-ui/icons/Phone'
import StarRateIcon from '@material-ui/icons/StarRate';
import FacebookIcon from "../images/facebook_icon4.svg"
import InstagramIcon from "../images/instagram_icon4.svg"
import GoogleIcon from "../images/google_icon.png"
import MailIcon from '@mui/icons-material/Mail';
import "./main.css"

const withStyles = makeStyles(() => ({
    mainRoot: {
        display: "flex",
        flexDirection: "column",
    },
    landingWrapper: {
        display: "flex",
        // minHeight: "100vh",
        minHeight: "100vh",
        flexDirection: "column",
        margin: "auto"

    },
    aboutBackgroundImage: {
        width: "100%",
    },
    servicesWrapper: {
        display: "flex",
        flexDirection: "column",
        background: "#008a9c"
    },
    servicesTitleHeader: {
        textAlign: "left",
        fontSize: "1.5rem",
        marginBottom: "20px"
    },
    aboutTextWrapper: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "960px",
        margin: "20px",
        "& p": {
            opacity: "1.0"
        }
    },
    aboutText: {
        color: "black"
    },
    aboutImage: {
        width: "50%",
        maxHeight: "500px",
        maxWidth: "500px",
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    servicesText: {
        color: "black"
    },
    projectImage: {
        width: "25%",
        margin: "25px",
        maxHeight: "350px"
    },
    imageWrapper: {
        display: "flex",
        justifyContent: "center",
        background: "white"
    },
    someOfWorkHeader: {
        textAlign: "left",
        fontSize: "2rem",
        color: "black",
        padding: "0",
        width: "100%",
        margin: "auto",
        paddingTop: "60px",
        fontFamily: "Questrial, sans-serif",
        "@media(max-width: 600px)": {
            // width: "90%"
        }
    },
    someOfWorkHeaderDark: {
        textAlign: "left",
        fontSize: "2rem",
        color: "white",
        width: "100%",
        lineHeight: "1.25",
        marginBottom: "20px",
        fontFamily: "Questrial, sans-serif",
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    subHeaderWrapper: {
        display: "flex",
        padding: "1rem",
        flexDirection: "column",
        width: "55%",
        "@media(max-width: 1000px)": {
            margin: "auto",
            width: "100%"
        }
    },
    supplierImgWrapper: {
        display: "flex",
        "@media(max-width: 600px)": {
            flexDirection: "column",
        }
    },
    supplierImage: {
        margin: "25px",
        width: "150px",
        aspectRatio: "1/1",
        objectFit: "contain"
    },
    landingMessageWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        opacity: "0.85",
        marginLeft: "0px",
        marginRight: "0px",
        height: "150px",
        "@media(max-width:650px)": {
            marginTop: "auto"
        }
    },
    landingPageHeader: {
        color: "black",
        // background: "#3587de",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "3.0em",
        fontWeight: "500",
        textAlign: "left",
        margin: "auto"
    },
    landingPageSubHeader: {
        color: "black",
        // background: "#3587de",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "2em",
        fontWeight: "500",
        fontFamily: "Questrial, sans-serif !important",
        textAlign: "left",
        margin: "auto",
        "@media(max-width: 600px)": {
            display: "none"
        }
    },
    landingPageSubHeaderMobile: {
        display: "none",
        "@media(max-width: 600px)": {
            display: "block",
            color: "black",
            // background: "#3587de",
            marginLeft: "0px",
            marginRight: "0px",
            fontSize: "2em",
            fontWeight: "100",
            fontFamily: "Questrial, sans-serif",
            textAlign: "left",
            margin: "auto"
        }
    },
    serviceDivider: {
        width: "15%",
        margin: "auto",
        marginTop: "1.5em",
        marginBottom: "1.5em",
        background: "white"
    },
    serviceWrapper: {
        paddingTop: "2.5em"
    },
    scrollToSectionOne: {
        height: "80px",
        background: "#ffffff"
    },
    scrollToServices: {
        paddingBottom: "80px",
        backgroundColor: "#ffffff"
    },
    scrollToContact: {
        paddingBottom: "80px",
        backgroundColor: "#ffffff"
    },
    servicesListWrapper: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "auto"
    },
    servicesCard: {
        width: "calc(50% - 2.5em)",
        height: "400px",
        boxShadow: "none",
        backgroundColor: "#1563b2",
        "@media(max-width: 736px)": {
            width: "100%",
            margin: "1.25em 0 0 0"
        }
    },
    servicesCardLast: {
        display: "none",
        "@media(max-width: 600px)": {
            display: "flex",
            height: "100px",
            color: "transparent",
            backgroundColor: "transparent",
            boxShadow: "none"
        }
    },
    servicesCardContent: {
        position: "relative",
        textAlign: "left",
        color: "black",
        padding: 0,
        paddingBottom: "0 !important",
        margin: "10px",
        height: "400px"
    },
    servicesCardImage: {
        height: "100%",
        width: "100%",
    },
    servicesCardText: {
        position: "absolute",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "1.5rem",
        fontWeight: "bold",
        width: "100%",
        backgroundColor: "#add8e685"
    },
    phoneEmailWrapper: {
        display: "flex",
        justifyContent: "flex-start",
        "@media(max-width: 600px)": {
            flexDirection: "column",
            textAlign: "left"
        }
    },
    emailLink: {
        textDecoration: "none"
    },
    contactPhone: {
        color: "black",
        textDecoration: "none",
        fontFamily: "Questrial, sans-serif",
    },
    contactButton: {
        margin: "20px",
        backgroundColor: "#333333",
        color: "white",
        borderColor: "#333333",
        borderRadius: "0px",
        padding: "15px",
        paddingLeft: "25px",
        paddingRight: "25px",
        textTransform: "none",
        fontSize: "1.0rem",
        // width: "190px",
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: "#001841",
            boxShadow: 'none',
            cursor: "pointer"
        },
    },
    emailA: {
        marginBottom: "20px",
        textDecoration: "none"
    },
    reviewsWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        textAlign: "left",
        alignItems: "center",
    },
    reviewClickText: {
        textTransform: "none"
    },
    reviewStarWrapper: {
        display: "flex",
        flexDirection: "column"
    },
    reviewLink: {
        textDecoration: "none"
    },
    reviewCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#white",
        width: "250px",
        minHeight: "100px",
        margin: "10px",
        padding: "10px"
    },
    reviewCardText: {
        fontSize: "0.75rem"
    },
    reviewCardsWrapper: {
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "15%",
        "@media(max-width: 600px)": {
            justifyContent: "center",
            marginLeft: "unset"
        }
    },
    phoneIcon: {
        marginRight: "10px"
    },
    emailIcon: {
        marginRight: "10px"
    },
    bbbWrapper: {
        display: "flex",
        margin: "auto",
        marginTop: "0px",
        backgroundColor: "white",
        borderRadius: "14px",
        "@media(max-width:600px)": {
            flexDirection: "column",
            justifyContent: "center",
            height: "110px",
            marginBottom: "20px",
        }
    },
    bbbLink: {
        display: "flex",
        textDecoration: "none",
        padding: "10px",
    },
    bbbImage: {
        margin: "auto",
        padding: "10px",
        minWidth: "200px",
        maxWidth: "300px",
        maxHeight: "150px",
        borderRadius: "15px"
    },
    bbbYearsCircle: {
        width: "65px",
        height: "65px",
        backgroundColor: "#1f5a76",
        margin: "auto",
        marginRight: "10px",
        fontFamily: "proxima-nova, Helvetica, Arial, sans-serif",
        borderRadius: "14px"
    },
    bbbCirleText: {
        color: "white",
        opacity: "1 !important",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "2.0rem"
    },
    phBizCardWrapper: {
        display: "flex",
        justifyContent: "center"
    },
    phBizCardImage: {
        maxWidth: "300px",
        maxHeight: "200px"
    },
    fiveStar: {
        color: "#f5b81c"
    },
    hourText: {
        display: "flex",
        color: "black",
        margin: "10px auto",
        justifyContent: "center",
        fontSize: "1.25rem"
    },
    hourlyHeaderText: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.25rem"
    },
    menuHeaderTextMenu: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.25rem"
    },
    menuBlockWrapper: {
        display: "flex"
    },
    hourlyHeaderText: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.75rem"
    },
    aboutTitleHeader: {
        textAlign: "left",
        fontSize: "2rem",
        width: "100%",
        color: "white",
        textTransform: "none",
        marginBottom: 0,
        fontFamily: "Questrial, sans-serif !important",
    },
    getQuoteTitleHeader: {
        textAlign: "left",
        padding: "1rem",
        width: "100%",
        fontSize: "2rem",
        color: "black",
        textTransform: "none",
        marginBottom: 0,
        fontFamily: "Questrial, sans-serif !important",
    },
    addressText: {
        textAlign: "left",
        width: "100%",
        margin: "40px 0",
        fontFamily: "Questrial, sans-serif !important"
    },
    addressTextQuote: {
        textAlign: "left",
        color: "white",
        padding: "20px",
        margin: "40px 0",
        fontFamily: "Questrial, sans-serif !important",
        width: "100%",
        backgroundColor: "gray"
    },
    aboutWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        backgroundColor: "black",
        padding: "1rem"
    },
    getQuoteWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    scrollToLocation: {
        height: "100px",
        flexDirection: "column",
        backgroundColor: "#f3f0f0",

    },
    connectHeader: {
        fontSize: "2rem",
        textAlign: "left",
        color: "black",
        textTransform: "uppercase",
        fontFamily: "Questrial, sans-serif !important"
    },
    socialLinkWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "20px 0 40px 0"
    },
    aboutSectionWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        "& iframe": {
            "@media(max-width:600px)": {
                width: "90%",
                margin: "auto"
            }
        },

    },
    reviewHeader: {
        fontSize: "1.2rem",
        textTransform: "none",
        color: "white",
        margin: 0,
    },
    socialFooterMargin: {
        height: "40px",
        width: "40px",
        margin: "10px auto"
    },
    socialFooter: {
        height: "40px",
        width: "40px",
        margin: "0 10px"
    },
    socialFacebookSpacing: {
        height: "40px",
        width: "40px",
        margin: "0 10px",
        marginBottom: "2px"
    },
    socialLink: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    reviewButton: {
        backgroundColor: "#333333",
        borderRadius: "0px",
        padding: "20px",
        marginBottom: "20px",
        border: "none"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        margin: "20px 0"
    },
    aboutContainer: {
        display: "flex",
        flexDirection: "column",
    },
    containerMarginBottomSmall: {
        display: "flex",
        margin: "20px 0",
        marginBottom: "80px",
        "@media(max-width:1000px)": {
            flexDirection: "column"
        }
    },
    landingImage: {
        width: "100%",
        objectFit: "cover",
        aspectRatio: "1/1",
        height: "100vh",
        marginTop: "112px",
        marginBottom: "0px"
    },
    mainBanner: {
        display: "flex",
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${CabinetBacksplash})`,
        backgroundSize: "cover",
        justifyContent: "flex-end",
        marginTop: "112px",
        height: "100vh",
        "@media(max-width:600px)": {
            justifyContent: "center",
            padding: "5%"
        }
    },
    mainBannerText: {
        color: "white",
        fontSize: "3rem",
        textAlign: "left",
        fontFamily: "Questrial, sans-serif",
        lineHeight: "1",
        zIndex: 1,
        height: "fit-content",
        opacity: "0.85",
        borderRadius: "0px",
        padding: "20px",
        "@media(max-width:600px)": {
            fontSize: "2rem",
            textAlign: "left",
            padding: "10px",
        }
    },
    mainBannerTextWrapper: {
        display: "flex",
        margin: "19% auto",
        flexDirection: "column",
        "@media(max-width:600px)": {
            margin: "25% auto"
        }
    },
    supplierWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        width: "100%",
        alignItems: "left",
        padding: "1rem",
        backgroundColor: "#f3f0f0",

    },
    supplierSubWrapper: {
        display: "flex",
        width: "100%",
        justifyContent: "center"
    },
    supplierButton: {
        backgroundColor: "gray",
        textDecoration: "none",
        color: "white",
        borderRadius: "0px",
        padding: "10px",
        width: "350px",
        '&:hover': {
            backgroundColor: "#001841",
            boxShadow: 'none',
            cursor: "pointer"
        },
        "& > span": {
            textTransform: "none"
        },
        "@media(max-width:600px)": {
            width: "250px"
        }
    },
    galleryImageWrapper: {
        display: "grid",
        color: "white",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "1em",
        width: "100%",
        margin: "40px 0",
        "@media(max-width:600px)": {
            // padding: "1rem"
        }
    },
    galleryImage: {
        width: "100%",
        aspectRatio: "1/1",
        objectFit: "cover",
        borderRadius: "0px"
    },
    sectionDarkWrapper: {
        backgroundColor: "black",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "500px"
    }

}))

const Main = () => {
    const classes = withStyles();
    const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query { 
      desktopImage: file(relativePath: { eq: "yassine-khalfalli-roc-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "yassine-khalfalli-roc-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 650, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
  `)

    const sources = [
        mobileImage.childImageSharp.fluid,
        {
            ...desktopImage.childImageSharp.fluid,
            media: `(min-width: 650px)`
        }
    ]

    const FiveStar = () => {
        return (
            <div className={classes.fiveStar}>
                <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
            </div>
        )
    }


    return (
        <div className={classes.mainRoot}>
            <div className={classes.mainBanner}>
                <div className={classes.mainBannerTextWrapper}>
                    <Typography className={classes.mainBannerText}>Premium All-Wood Cabinets at Wholesale Prices <br />
                        {/* <i>every time</i> */}
                    </Typography>
                </div>
            </div>

            {/* <img src={CabinetBacksplash} className={classes.landingImage} /> */}

            <section className={classes.sectionDarkWrapper}>
                <div className={classes.container}>
                    <div className={classes.containerMarginBottomSmall}>
                        <div className={classes.subHeaderWrapper}>
                            <Typography className={classes.someOfWorkHeaderDark}>Unbeatable Value: Elevate Your Space Beyond the Big Box Options</Typography>
                            <Typography style={{ color: "white", textAlign: "left" }}>
                                At Quality Cabinets, we're redefining expectations and saving you money. <br /><br />Why overspend on limited options from big box retailers
                                when you can go with our premium, all-wood cabinets? <br /><br />Our mission is to provide both an exceptional selection and unmatched savings. Discover the difference in craftsmanship, durability, and style. </Typography>
                        </div>
                        <div className={classes.galleryImageWrapper}>
                            <StaticImage className={classes.galleryImage} src="../images/cab_white_bath.png" />
                            <StaticImage className={classes.galleryImage} src="../images/cab_white_laundry.png" />
                            <StaticImage className={classes.galleryImage} src="../images/cab_green_kitchen.png" />
                            <StaticImage className={classes.galleryImage} src="../images/cab_blue_bathroom.jpeg" />
                            <StaticImage className={classes.galleryImage} src="../images/wolf-wood.jpeg" />
                        </div>
                    </div>
                </div>
            </section>

            <div className={classes.container}>
                <span className={classes.scrollToSectionOne} id="sectionOne"></span>
            </div>
            <section class="py-5 section-bubble3">
                <div className={classes.container}>

                    <div className={classes.getQuoteWrapper}>
                        <div className={classes.aboutSectionWrapper}>
                            <Typography className={classes.getQuoteTitleHeader}>Get a Quote</Typography>
                            <Typography className={classes.addressTextQuote}>We can get you cabinets quickly, so you can get your project done!</Typography>

                            <Typography style={{ textAlign: "left", color: "red", width: "100%", padding: "1rem" }}>Most orders are fulfilled in 2 weeks</Typography>
                            <br />

                            <div style={{ width: "100%" }}>
                                <div className={classes.phoneEmailWrapper}>
                                    <a className={classes.emailLink} href="mailto:woodtechny@gmail.com">
                                        <Button className={classes.contactButton}>
                                            <MailIcon className={classes.phoneIcon} />
                                            Email Us
                                        </Button>
                                    </a>
                                    <a href="tel:(585) 512-5300" className={classes.contactPhone}>
                                        <Button className={classes.contactButton}>
                                            <PhoneIcon className={classes.phoneIcon} />
                                            (585) 512-5300
                                        </Button>
                                    </a>
                                </div>
                                <div style={{ marginTop: "20px" }}>
                                    <Typography style={{ textAlign: "left", padding: "1rem" }}><b>Want it delivered?</b></Typography>
                                    <Typography style={{ textAlign: "left", padding: "1rem" }}>Delivery is available for an additional charge.</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={classes.container}>
                <span className={classes.scrollToSectionOne} id="sectionTwo"></span>
            </div>
            <section className={classes.supplierWrapper}>
                <Typography className={classes.someOfWorkHeader}>Our Suppliers </Typography> <br /> <Typography style={{ width: "100%", textAlign: "left" }}> We use the best in the business</Typography>
                <div className={classes.supplierSubWrapper}>
                    <div className={classes.supplierImgWrapper}>
                        {/* <a href="https://www.wolfhomeproducts.com/" target="_blank"> */}
                        <img className={classes.supplierImage} src={wolfLogo} />
                        {/* </a> */}
                        {/* <a href="https://www.belknapwhite.com/" target="_blank"> */}
                        <img className={classes.supplierImage} src={belknapLogo} />
                        {/* </a> */}
                        {/* <a href="https://www.richelieu.com/us/en/" target="_blank"> */}
                        <img className={classes.supplierImage} src={richelieuLogo} />
                        {/* </a> */}
                    </div>
                </div>
                <Link style={{
                    textAlign: "center",
                }} to="/suppliers">
                    <Button className={classes.supplierButton}>
                        Supplier Gallery
                    </Button>
                </Link>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "15px"}}>
                    <p style={{ margin: "30px", fontSize: "2rem", lineHeight: "1.25" }}>For all your install and home remodeling needs click below:</p>
                    <a href="https://www.woodtechnyllc.com/" target="_blank">
                        <StaticImage style={{ width: "150px", padding: "10px 0", height: "150px" }} src="../images/WOODTECH logo-01.jpg" />
                    </a>
                </div>

            </section>
            <span className={classes.scrollToLocation} id="sectionThree"></span>

            <section class="py-5 section-bubble3">
                <div className={classes.aboutContainer}>
                    <div className={classes.aboutWrapper}>
                        <div className={classes.aboutSectionWrapper}>
                            <Typography className={classes.aboutTitleHeader}>About Us</Typography>
                            <Typography className={classes.addressText}>We pride ourselves on providing custom, all-wood cabinets, at a fair price. <br /><br /> Every project receives a personal, customized estimate, backed by our team of experts. <br /><br />It is our mission to deliver a quality product to our customers, every time. <br /><br /> You can trust that our team will work tirelessly to satisfy your needs no matter how big or small the job may be.</Typography>
                        </div>
                        <Typography className={classes.aboutTitleHeader}>Recent Projects</Typography>

                        <div className={classes.galleryImageWrapper}>
                            <StaticImage className={classes.galleryImage} src="../images/gallery_image_eight.jpeg" />
                            <StaticImage className={classes.galleryImage} src="../images/gallery_image_six.jpeg" />
                            <StaticImage className={classes.galleryImage} src="../images/gallery_image_one.jpg" />
                            <StaticImage className={classes.galleryImage} src="../images/gallery_image_two.jpeg" />
                            <StaticImage className={classes.galleryImage} src="../images/gallery_image_three.jpeg" />
                            <StaticImage className={classes.galleryImage} src="../images/gallery_image_five.jpeg" />
                            <StaticImage className={classes.galleryImage} src="../images/gallery_image_four.jpeg" />
                            <StaticImage className={classes.galleryImage} src="../images/gallery_image_seven.jpeg" />
                            <StaticImage className={classes.galleryImage} src="../images/gallery_image_nine.jpg" />
                            <StaticImage className={classes.galleryImage} src="../images/gallery_image_ten.jpg" />
                            <StaticImage className={classes.galleryImage} src="../images/gallery_image_eleven.jpg" />
                            <StaticImage className={classes.galleryImage} src="../images/gallery_image_twelve.jpeg" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main
