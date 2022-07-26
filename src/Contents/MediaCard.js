import styled from "@emotion/styled";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Image from "../Images/Sample.png"

const useStyles = styled(theme =>({
    root: {
        width: 400,
        background: theme.palette.primary.main
    },
    media: {
        height: 300,
        width: 200
    }
}));

const MediaCard = props =>{
    const {title} = props;
    const classes = useStyles();

    return (
      <Card sx={{ maxWidth: 345, mb: 2 }}>
        <CardMedia
          component="img"
          height="140"
          image={Image}
          alt="green iguana"
          className={classes.media}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {title}
          </Typography>
        </CardContent>
      </Card>
    );
}

export default MediaCard;
