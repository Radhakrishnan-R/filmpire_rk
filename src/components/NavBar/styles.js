import { makeStyles } from "@mui/styles";

const drawerWidth = "240px";

export default makeStyles((theme) => ({
    toolbar: {
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginLeft: "240px",
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        }
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        }
        
    },
    drawerPaper: {
        width: drawerWidth,
    }
}));