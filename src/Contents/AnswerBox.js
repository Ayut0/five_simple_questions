import TextField from "@mui/material/TextField";

const AnswerBox = (props) => {
  return (
    <TextField
      id="filled-multiline-static"
      multiline
      rows={4}
      placeholder={props.answer}
      variant="filled"
      fullWidth
      sx={{
        "& .MuiInputBase-input": {
          WebkitTextFillColor: "#FFE3D8",
        },
      }}
    />
  );
};

export default AnswerBox;
