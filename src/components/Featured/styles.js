import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    featuredWrapper: {
        width: "100%",
        maxHeight: "350px",
        textDecoration: "none",
        position: "relative",
    },
    root: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode:" overlay",
    },
    cardContent: {
        position: "absolute",
        bottom: "2px",
        left: "30px",
        color: "fff",
    },
}));