import { Button, IconButton, Toolbar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoIcon from "@mui/icons-material/Photo";
import Link from "@mui/material/Link";

const DetailToolBar = (props) =>{
    return (
      <Toolbar variant="dense">
        <Link to="/">
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
        <h2>{props.title}</h2>
        <div>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <EditIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <DeleteIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <PhotoIcon />
          </IconButton>
        </div>
      </Toolbar>
    );
}

export default DetailToolBar
