/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Grid, Button } from "../elements";
import styled from "styled-components";
import MainLogo from "../image/MainLogo.png";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";


const Header = (props) => {
  const dispatch = useDispatch();

  const is_login = localStorage.getItem("token") ? true : false;
  


  if (is_login) {
    return (
      <React.Fragment>
        <Wrap>
        <Grid is_flex padding="4px 16px">
        <Grid is_flex>
        <img
          src={MainLogo}
          style={{
            width: "80%",
            height: "10%"
          }}
          onClick={() => {history.push("/");}}
        />
        </Grid>

          <Grid is_flex width = "15%">
            {/* <Button text="내정보"></Button> */}
            <Button
              text="글쓰기" _onClick={() => {
              history.push('/write');
            }}></Button>
          </Grid>

          <Grid is_flex width = "15%">
            <Button
              text="로그아웃"
              _onClick={() => {
                dispatch(userActions.logOut());
                history.replace('/login')
                window.location.reload()
              }}
            ></Button>
          </Grid>
        </Grid>
        </Wrap>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
        <Wrap onClick={() => {history.push("/");}}>
        <Grid is_flex padding="4px 16px">
        <Grid>
        <img
          src={MainLogo}
          style={{
            width: "430px",
            height: "430px",
          }}
          onClick={() => {history.push("/");}}
        />
        </Grid>

        <Grid is_flex width = "15%">
          <Button
            text="로그인"
            _onClick={() => {
              history.replace("/login");
              window.location.reload()
            }}
          ></Button>
        </Grid>

        <Grid is_flex width = "15%">
          <Button
            text="회원가입"
            _onClick={() => {
              history.push("/signup");
            }}
          ></Button>
        </Grid>
      </Grid>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: #82CBC4;
`;

Header.defaultProps = {};

export default Header;