import React from "react";
import { Grid, Text, Input, Button } from "../elements";
import styled from "styled-components";
import LoginLogo from "../image/LoginLogo.png";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { history } from "../redux/configureStore";

const Signup = (props) => {
  const dispatch = useDispatch();

  const [nick_name, setNickName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");

  const signup = () => {
    
    dispatch(userActions.signupDB(nick_name, pwd, pwd_check));
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
          <SignUpText>회원가입</SignUpText>

          <Grid padding="5px 0px 0px 10.5%" 
          margin= "10px 0px 5px 0px" height="13%">
            <Input
            label="닉네임"
            placeholder="4자~30자 사이의 글자로 입력해주세요 (특수문자X)"
            _onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
          </Grid>

          <Grid padding="5px 0px 0px 10.5%" 
          margin= "10px 0px 5px 0px" height="13%">
            <Input
            label="비밀번호"
            placeholder="4자~30자 사이의 글자로 입력해주세요 (특수문자O)"
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
          </Grid>

          <Grid padding="5px 0px 0px 10.5%" 
          margin= "10px 0px 5px 0px" height="13%">
            <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
          </Grid>

          <Grid padding="5px 0px 0px 10.5%" 
          margin= "18px 0px 5px 0px" height="13%">
            <Button text="회원가입하기" _onClick={signup}></Button>
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

const SignUpText = styled.div`
font-size: 30px;
font-weight: bold;
margin: 10px 0 20px 0px;
`;

Signup.defaultProps = {};

export default Signup;