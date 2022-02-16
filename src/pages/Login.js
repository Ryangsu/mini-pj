import React from "react";
import { Text, Input, Grid, Button } from "../elements";
import styled from "styled-components";
import LoginLogo from "../image/LoginLogo.png";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

const Login = (props) => {
  const dispatch = useDispatch();

  const [nick_name, setNick_name] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  
  const Login = () => {
    
    dispatch(userActions.loginDB(nick_name, pwd));
  };

  return (
    <React.Fragment>
    <Wrap>
        <LeftBox>
          <LogoLink
            onClick={() => {
              history.push("/");
            }}
          >
            <Logo src={LoginLogo} />
          </LogoLink>
        </LeftBox>

        <RightBox>
          <RightWrap>
            <SignInText>로그인</SignInText>

            <Grid padding="5px 0px 0px 10.5%" 
            margin= "10px 0px 5px 0px" height="13%">
              <Input
                label="닉네임"
                placeholder="닉네임을 입력해주세요."
                _onChange={(e) => {
                  setNick_name(e.target.value)
                }}
                value={nick_name}
              />
            </Grid>

            <Grid padding="5px 0px 0px 10.5%" 
            margin= "10px 0px 5px 0px" height="13%">
              <Input
                label="비밀번호"
                placeholder="비밀번호를 입력해주세요."
                type="password"
                _onChange={(e) => {
                  setPwd(e.target.value)
                }}
                value={pwd}
              />
            </Grid>

            <Grid padding="5px 0px 0px 10.5%" 
            margin= "18px 0px 5px 0px" height="13%">
              <Button _onClick={Login}>로그인 하기</Button>
            </Grid>
            <Grid>
              <GoSignUp
                onClick={() => {
                  history.push("/signup");
                }}
              >
                회원이 아니라면?&nbsp;회원가입하러 가기
              </GoSignUp>
            </Grid>
          </RightWrap>
        </RightBox>
      </Wrap>
      </React.Fragment>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 100%;
  background-color: #fff;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

const LogoLink = styled.button`
  height: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
  background-color: #82CBC4;
`;

const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
`;

const SignInText = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0 20px 0px;
`;

const GoSignUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: none;
  color: black;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  padding: 0px 0px 0px 3%;
  height: 3px;
`;

export default Login;