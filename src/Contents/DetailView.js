import { Grid, Box, Button } from "@mui/material";
import QuestionAnswer from "./QuestionAnswer"
import DetailToolBar from "./ToolBar"


const DetailView = ()=>{
    const questions = {
        q1: "If you describe it in one word, what would it be?",
        q2: "How did it solve your problem?",
        q3: "Is there any alternatives?",
        q4: "What is related keyword for it?",
        q5: "If y0ou create an index, what would you do?"
    }

    const answers = {
        q1: "answer1",
        q2: "answer2",
        q3: "answer3",
        q4: "answer4",
        q5: "answer5",

    }
    return(
        <Grid container spacing={5}>
            <Grid item xs={12}>
                <DetailToolBar />
            </Grid>
            {Object.keys(questions).map(ky =>(
                <Grid item key={ky} xs={12}>
                    <QuestionAnswer question={questions[ky]} answer={answers[ky]}/>
                </Grid>
            ))}
            <Grid item xs={12}>
                <Box textAlign="center">
                    <Button variant="contained" color="primary">
                        Save
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
}

export default DetailView;
