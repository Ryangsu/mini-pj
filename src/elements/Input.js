import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = (props) => {
  const { label, height, margin, placeholder, _onChange, type, multiLine, value } = props;
  
  if(multiLine){
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }
  
  return (
    <React.Fragment>
      <Grid>
        {label && <Text bold margin="0px">{label}</Text>}
        <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  margin: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 90%;
  padding: 12px 4px;
  box-sizing: border-box;
  border-radius: 5px;
`;


const ElInput = styled.input`
  border: 1px solid #212121;
  width: 90%;
  padding: 12px 4px;
  box-sizing: border-box;
  border-radius: 5px;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.height ? `height: ${props.height};` : "")}
`;

export default Input;
