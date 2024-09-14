import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    gridContainer: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        padding: "4% 0",
    },
    mainImage: {
        width: "80%",
        margin: "0 auto !important",
        borderRadius: "20px",
        boxShadow: "5px 10px 20px rgb(0,0,0)",
        [theme.breakpoints.down("md")]: {
            width: "50%",
            // height: "350px",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "350px",
        },
    },
    infoContainer: {
        display: "flex",
        padding: "10px",
        // flex: 1,
    },
    rating: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px",
        flexWrap: "wrap",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            justifyContent: "center",
            // height: "350px",
        },
    },
    genresWrapper: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "30px",
        flexWrap: "wrap",
        gap: "10px",
    },
    genreIcons: {
        width: "30px",
    },
    genreLinks: {
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        textDecoration: "none",
    },
    castImage: {
        width: "100%",
        borderRadius: "20px",
    },
    modal: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    trailer: {
        width: "50%",
        height: "50%",
        [theme.breakpoints.down("sm")]: {
           width: "90%",
        height: "50%",
        },

    },
}));