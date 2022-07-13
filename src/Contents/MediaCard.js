import styled from "@emotion/styled";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "../Images/Sample.png"

const useStyles = styled(theme =>({
    root: {
        width: 400,
        background: theme.palette.primary.main
    },
    media: {
        width: 200,
        height: 200
    }
}));

const MediaCard = props =>{
    const {title} = props;
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Image}
                    title="Contemplative Reptile"
                >
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MediaCard;
