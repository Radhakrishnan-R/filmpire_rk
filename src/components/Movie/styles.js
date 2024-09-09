import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    movieCard: {
        padding: "10px",
    },
    link: {
        alignItems: "center",
        fontWeight: "bolder",
        textDecoration:"none",
        cursor: "pointer",
        [theme.breakpoints.up("xs")]: {
            display: "flex",
            flexDirection: "column",
        }
    },
    title: {
        color: theme.palette.text.primary ,
        width: "230px",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        marginTop: "10px",
        marginBottom: 0,
        textAlign: "center",
    },
    image: {
        maxHeight: "300px",
        borderRadius: "20px",
        marginBottom: "10px",
        "&:hover": {
            transform: "scale(1.05)",
        }
    },
}));