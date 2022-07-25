import { React, Fragment } from "react"
import { Button, Grid} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import MediaCard from "./MediaCard";
import styled from "@emotion/styled";

const useStyles = styled(theme =>({
    link: {
        textDecoration: "none",
    }
}));

const ListView = (props)=>{
    const classes = useStyles();
    const items = {
        "0": "JSes6",
        "1": "React",
        "2": 'Firebase'
    };
    return(
        <Fragment>
            <Grid item xs={4}>
                <Box textAlign="center">
                    <Button variant="contained" color="primary" sx={{m: 4}}>
                        Create
                    </Button>
                </Box>
            </Grid>
            {Object.keys(items).map(ky =>{
                return(
                    <Grid item key={ky} xs={4}>
                        <Link to={`/detail/${ky}`} className={classes.link}>
                            <MediaCard title={items[ky]} />
                        </Link>
                    </Grid>
                )
            })}
        </Fragment>
    )
}

export default ListView;
