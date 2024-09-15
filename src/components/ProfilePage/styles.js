import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    actorGrid: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "30px",
    },
    actorImage: {
        width: "80%",
        margin: "0 auto",
        borderRadius: "20px",
        display: "block",
        [theme.breakpoints.down("md")]: {
            height: "350px",
            width: "100%",
        }
    }
}));