import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { token, deleteCookie } from "../../shared/Cookie";
import { apis } from "../../shared/axios";
// import { history } from "../configureStore";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";


// const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({user}));

const initialState = {
    user: null,
    is_login: false,
};

const user_initial = {
    user_name : 'yang',
};


const loginDB = (nick_name, pwd) => {
  return function (dispatch, getState, {history}){
   apis
    .createLogin({
      nickname: nick_name,
      password: pwd,
    })
    .then((res)=>{
        const accessToken = res.data.token;
        localStorage.setItem('token', `${accessToken}`);
        token('token', `${accessToken}`)
        
        dispatch(setUser({
                  nickname: res.data.nickname, 
                  id: res.data.id,
                  })
              );
          })
        history.replace("/")
        .catch((err)=>{
        console.log(err);
      });
  }
}    

    const signupDB = (nick_name, pwd, pwd_check) => {
      return function ({ history }) {
        apis
          .createUser({
            nickname: nick_name,
            password: pwd,
            confirmPassword: pwd_check,
          })
          .then(() => {
            console.log("회원가입 성공");
            window.alert("😆 성공적으로 회원가입이 완료되었습니다! 😆");
            history.push("/login");
          })
          .catch((error) => {
            console.log("회원가입 실패");
            alert(error.response.data.errorMessage);
            // window.alert(error.errorMessage)
            return;
          });
      };
    };


export default handleActions(
    {
      [LOG_IN]: (state, action) =>
        produce(state, (draft) => {
          token("", "sucsess");
          draft.user = action.payload.user;
                  draft.is_login = true;
        }),
          [LOG_OUT]: (state, action) =>
        produce(state, (draft) => {
          localStorage.removeItem("token");
          draft.user = null;
          draft.is_login = false;
        }),
      [GET_USER]: (state, action) =>
        produce(state, (draft) => {}),
    },
    initialState
  );
  
  // const loginAction = (user) => {
  //   return function (dispatch, getState, {history}){
  //     dispatch(loginDB(user));
  //     history.push('/');
  //   }
  // }

  const actionCreators = {
    loginDB,
    signupDB,
    getUser,
    logOut,
    // loginAction,
  };
  
  export { actionCreators };