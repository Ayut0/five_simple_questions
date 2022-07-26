import { Box } from "@mui/material"

const QuestionBox = props =>{
    return (
      <Box border={3} p={2} sx={{ borderColor: "#FFE3D8", color: "#FFE3D8" }}>
        {props.question}
        {props.children}
      </Box>
    );
}

export default QuestionBox;
