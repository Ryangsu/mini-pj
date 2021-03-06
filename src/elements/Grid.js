import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex, 
          width, 
          height, 
          margin, 
          padding, 
          bg, 
          children, 
          center, 
          _onClick,
          overflow, 
          word_break,
        } = props;

  const styles = {
      is_flex: is_flex,
      width: width,
      margin: margin,
      height: height,
      padding: padding,
      bg: bg,
      center: center,
      overflow: overflow,
      word_break: word_break,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  _onClick: () => {},
  word_break: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
  ${(props) => props.center? `text-align: center;`: ""}
  ${(props) => (props.word_break ? `word-break: ${props.word_break};` : "")}

`;

export default Grid;