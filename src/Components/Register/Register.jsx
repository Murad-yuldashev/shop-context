import * as React from "react";
import { useInput } from "@mui/base";
import { styled } from "@mui/system";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import {Link} from 'react-router-dom';
import { Contexts } from "../Context/Context";

const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const { getRootProps, getInputProps } = useInput(props);

  const inputProps = getInputProps();

  // Make sure that both the forwarded ref and the ref returned from the getInputProps are applied on the input element
  inputProps.ref = useForkRef(inputProps.ref, ref);

  const [value, setValue] = React.useState('')
  const [value1, setValue1] = React.useState('')

  const {state, dispatch} = React.useContext(Contexts);

  const valueInput = () => {
    dispatch({type: 'ADD_LOGIN', payload: {value, pass: value1}})
  }

  console.log(value, 'Value')

  return (
    <div {...getRootProps()}>
      {/* <StyledInputElement onChange={(e) => setValue(e.target.value)} {...props} {...inputProps} />
      <StyledInputElement onChange={(e) => setValue1(e.target.value)} {...props} {...inputProps} /> */}
      <input onChange={(e) => setValue(e.target.value)} type="text" placeholder="AAAA" />
      <input onChange={(e) => setValue1(e.target.value)} type="text" placeholder="AAAA" />
      <button onClick={valueInput}>Send</button>

      <Link to='/login'>Login</Link>
    </div>
  );
});

export default function UseInput() {
  return <CustomInput aria-label="Demo input" placeholder="Type something…" />;
}
