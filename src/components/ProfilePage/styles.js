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
        boxShadow : "5px 10px 20px",
        [theme.breakpoints.down("md")]: {
            height: "350px",
            maxWidth: "80%",
            marginBottom: "50px",
        },
        [theme.breakpoints.down("sm")]: {
            height: '350px',
            width: '80%',
            maxWidth: '250px',
        },
    }
}));