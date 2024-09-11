import { makeStyles } from "@mui/styles";


export default makeStyles((theme) => ({
    textfield: {
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            justifyContent: "center",
            width: "100%",
        }
    },
    input: {
        color: theme.palette.text.primary,
        filter: theme.palette.mode === "light" && "invert(1)",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "10px",
        },
    }
}));