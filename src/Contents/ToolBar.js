import { Button, IconButton, Toolbar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoIcon from "@mui/icons-material/Photo";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";


const DetailToolBar = (props) =>{
    return (
      <Toolbar
        variant="dense"
        sx={{ gap: 12, display: "flex", justifyContent: "space-between" }}
      >
        <Link to="/">
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
        <h2>{props.title}</h2>
        <Box sx={{ gap: 8, display: "flex", justifyContent: "space-between" }}>
          <IconButton edge="start" color="primary" aria-label="menu">
            <EditIcon />
          </IconButton>
          <IconButton edge="start" color="primary" aria-label="menu">
            <DeleteIcon />
          </IconButton>
          <IconButton edge="start" color="primary" aria-label="menu">
            <PhotoIcon />
          </IconButton>
        </Box>
      </Toolbar>
    );
}

export default DetailToolBar
