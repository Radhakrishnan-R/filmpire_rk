import { makeStyles } from "@mui/styles";


export default makeStyles((theme) => ({
    linkButton: {
        display: "flex",
        justifyContent: "center",
        padding: "10% 0",
    },
    logo: {
        width: "70%",
    },
    link: {
        color: theme.palette.text.primary,
        textDecoration: "none",
    },
    genreImage: {
        // filter: theme.palette.mode === "dark" ?  "dark" : "invert(1)",
    }
}));