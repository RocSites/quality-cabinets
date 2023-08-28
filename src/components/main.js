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
        textAlign: "center",
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
        textAlign: "center",
        fontSize: "2rem",
        color: "black",
        padding: "10px",
        width: "100%",
        margin: "auto",
        paddingTop: "60px",
        fontFamily: "Nanum Gothic, sans-serif",
        "@media(max-width: 600px)": {
            width: "90%"
        }
    },
    someOfWorkHeaderDark: {
        textAlign: "center",
        fontSize: "2rem",
        color: "white",
        padding: "10px",
        width: "100%",
        fontFamily: "Nanum Gothic, sans-serif",
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    subHeaderWrapper: {
        display: "flex",
        padding: "20px",
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
        textAlign: "center",
        margin: "auto"
    },
    landingPageSubHeader: {
        color: "black",
        // background: "#3587de",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "2em",
        fontWeight: "500",
        fontFamily: "Nanum Gothic, sans-serif !important",
        textAlign: "center",
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
            fontFamily: "Nanum Gothic, sans-serif",
            textAlign: "center",
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
        textAlign: "center",
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
        justifyContent: "center",
        "@media(max-width: 600px)": {
            flexDirection: "column",
            textAlign: "center"
        }
    },
    emailLink: {
        textDecoration: "none"
    },
    contactPhone: {
        color: "black",
        textDecoration: "none",
        fontFamily: "Nanum Gothic, sans-serif",
    },
    contactButton: {
        margin: "20px",
        backgroundColor: "#333333",
        color: "white",
        borderColor: "#333333",
        borderRadius: "35px",
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
        textAlign: "center",
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
        textAlign: "center",
        fontSize: "2rem",
        color: "white",
        textTransform: "none",
        marginBottom: 0,
        fontFamily: "Nanum Gothic, sans-serif !important",
    },
    getQuoteTitleHeader: {
        textAlign: "center",
        fontSize: "2rem",
        color: "black",
        textTransform: "none",
        marginBottom: 0,
        fontFamily: "Nanum Gothic, sans-serif !important",
    },
    addressText: {
        textAlign: "center",
        margin: "40px 0",
        fontFamily: "Nanum Gothic, sans-serif !important"
    },
    addressTextQuote: {
        textAlign: "center",
        color: "white",
        padding: "20px",
        margin: "40px 0",
        fontFamily: "Nanum Gothic, sans-serif !important",
        width: "100%",
        backgroundColor: "gray"
    },
    aboutWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        backgroundColor: "black",
        padding: "50px"
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
        textAlign: "center",
        color: "black",
        textTransform: "uppercase",
        fontFamily: "Nanum Gothic, sans-serif !important"
    },
    socialLinkWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "20px 0 40px 0"
    },
    aboutSectionWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
        borderRadius: "25px",
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
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ),url(${CabinetBacksplash})`,
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
        fontSize: "3.5rem",
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "Nanum Gothic, sans-serif",
        zIndex: 1,
        height: "fit-content",
        backgroundColor: "gray",
        opacity: "0.85",
        borderRadius: "35px",
        padding: "20px",
        "@media(max-width:600px)": {
            fontSize: "2rem",
            textAlign: "center",
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
        justifyContent: "center",
        alignItems: "center",
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
        borderRadius: "35px",
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
        "@media(max-width:600px)": {
            padding: "20px"
        }
    },
    galleryImage: {
        width: "100%",
        height: "300px",
        aspectRatio: "1/1",
        objectFit: "cover",
        borderRadius: "10px"
    },
    sectionDarkWrapper: {
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
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
                    <Typography className={classes.mainBannerText}>Premium All-Wood Cabinets at Wholesale Prices. <br />
                        {/* <i>every time</i> */}
                    </Typography>
                </div>
            </div>

            {/* <img src={CabinetBacksplash} className={classes.landingImage} /> */}

            <section className={classes.sectionDarkWrapper}>
                <div className={classes.container}>
                    <div className={classes.containerMarginBottomSmall}>
                        <div className={classes.subHeaderWrapper}>
                            <Typography className={classes.someOfWorkHeaderDark}>Unbeatable Value: Elevate Your Space Beyond Big Box Options</Typography>
                            <Typography style={{ color: "white", textAlign: "center" }}>
                                At Quality Cabinets, we're redefining expectations and saving you money. <br /><br />Why overspend on limited options from big box retailers
                                when you can elevate your space with our premium all-wood cabinets? <br /><br />Our mission is to provide both an exceptional selection and unmatched savings. Discover the difference in craftsmanship, durability, and style that our wholesale cabinets offer. </Typography>
                        </div>
                        <div className={classes.galleryImageWrapper}>
                            <StaticImage className={classes.galleryImage} src="../images/wolf_sink.png" />
                            <StaticImage className={classes.galleryImage} src="../images/wolf-drawer.png" />
                            <StaticImage className={classes.galleryImage} src="../images/wolf-wood.jpeg" />
                            <StaticImage className={classes.galleryImage} src="../images/wolf_drawer_two.png" />
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

                            <Typography style={{textAlign: "center", color: "red"}}>Most orders are fulfilled in 2 weeks</Typography>
                            <br/>
                            <div>
                                <Typography style={{textAlign: "center"}}><b>Want it delivered?</b></Typography>
                                <Typography style={{textAlign: "center"}}>Delivery is available for an additional charge.</Typography>
                            </div>
                            <div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={classes.container}>
                <span className={classes.scrollToSectionOne} id="sectionTwo"></span>
            </div>
            <section className={classes.supplierWrapper}>
                <Typography className={classes.someOfWorkHeader}>Our Suppliers </Typography> <br /> <Typography> We use the best in the business</Typography>
                <div className={classes.supplierSubWrapper}>
                    <div className={classes.supplierImgWrapper}>
                        <a href="https://www.wolfhomeproducts.com/" target="_blank">
                            <img className={classes.supplierImage} src={wolfLogo} />
                        </a>
                        <a href="https://www.belknapwhite.com/" target="_blank">
                            <img className={classes.supplierImage} src={belknapLogo} />
                        </a>
                        <a href="https://www.richelieu.com/us/en/" target="_blank">
                            <img className={classes.supplierImage} src={richelieuLogo} />
                        </a>
                    </div>
                </div>
                <Link to="/suppliers">
                    <Button className={classes.supplierButton}>
                        Supplier Gallery
                    </Button>
                </Link>
            </section>
            <span className={classes.scrollToLocation} id="sectionThree"></span>

            <section class="py-5 section-bubble3">
                <div className={classes.aboutContainer}>
                    <div className={classes.aboutWrapper}>
                        <div className={classes.aboutSectionWrapper}>
                            <Typography className={classes.aboutTitleHeader}>About Us</Typography>
                            <Typography className={classes.addressText}>We pride ourselves on providing custom, all-wood cabinets, at a fair price. <br/><br/> Every project receives a personal, customized estimate, backed by our team of experts. <br/><br/>It is our mission to deliver a quality product to our customers, every time. <br/><br/> You can trust that our team will work tirelessly to satisfy your needs no matter how big or small the job may be.</Typography>
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
