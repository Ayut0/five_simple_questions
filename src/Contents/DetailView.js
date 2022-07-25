import { Button, Toolbar } from "@mui/material";
import Link from "@mui/material/Link";

const DetailView = ()=>{
    return(
        <Toolbar>
            <Link to="/">
                <Button
                    variant="contained"
                >
                    Back
                </Button>
            </Link>
        </Toolbar>
    )
}

export default DetailView;
