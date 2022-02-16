import React from "react";
import { Grid, Text, Button } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import { history } from "../redux/configureStore";


const Header = (props) => {
  const dispatch = useDispatch();

  const is_login = localStorage.getItem("token") ? true : false;
  


  if (is_login) {
    return (
      <React.Fragment>
        <Grid is_flex padding="4px 16px">
          <Grid>
            <Text margin="16px" size="36px" bold>
              자췬 감이 필요해
            </Text>
          </Grid>

          <Grid is_flex width = "35%">
            {/* <Button text="내정보"></Button> */}
            <Button text="글쓰기" _onClick={() => {
              history.push('/write');
            }}></Button>
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
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="16px" size="36px" bold>
            자췬 감이 필요해
          </Text>
        </Grid>

        <Grid is_flex width = "35%">
          <Button
            text="로그인"
            _onClick={() => {
              history.replace("/login");
              window.location.reload()
            }}
          ></Button>
          <Button
            text="회원가입"
            _onClick={() => {
              history.push("/signup");
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;