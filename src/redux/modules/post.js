import { createAction, handleActions } from "redux-actions"; 
import { produce } from "immer"; //불변성 관리
// import { firestore, storage } from "../../shared/firebase";
import moment from "moment";
import { apis } from "../../shared/axios";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "./image";

const SET_POST = "SET_POST";
const SET_POSTONE = "SET_POSTONE"
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const LOADING = "LOADING";


//액션 생성자
const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
}));
const setPostOne = createAction(SET_POSTONE, (post_one) => ({
  post_one,
}));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const deletePost = createAction(DELETE_POST, (post_idx, deleteList) => ({
  post_idx,
  deleteList,
}));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));


//이니셜 스테이츠
const initialState = {
  list: [],
  paging: { start: null, next: null, size: 3 },
  post_one: { item_url: "", title: "", price: "", description:"",  date:"",},
  is_loading: "",
  item_url: "",
  post : [],
};

const initialPost = {
  image_url:
    "https://media.vlpt.us/images/tkejt1343/post/c3ffac0c-3c7b-4076-b4e3-027578aeac06/%EB%BD%80%EB%A6%AC2.jpg",
  contents: "",
  comment_count: 10,
  insert_dt: moment().format("YYYY-MM-DD HH:mm:ss"),
};

// 미들웨어 - 상품 삭제(delete)
const deletePostDB = () => {
    return function (dispatch, getState, {history}){
        apis
        .deletePost()
        .then(function(response){
             console.log(response)
         })
        .catch((err)=>{
         console.log(err);
        history.push("/")
        })
        .then(function(){

        })
       }
};

const getPostDB = () => {
  return function (dispatch, getState, {history}) {
    apis
      .postGet()
      .then(function(response){
        dispatch(setPost(response.data.list))
        console.log(response)
      })
      .catch(function(err){
        alert(err.response.data.errorMessage);
      })
  }
}

const getPostOneDB = (itemid) => {
  return function (dispatch, getsTate, {history}) {
    console.log("안녕")
    const token = localStorage.getItem('token');
    console.log(token)
    axios
      .get(`http://3.38.193.111/api/items/${itemid}`)
      .then(function(response){
        dispatch(setPostOne(response.data))
        console.log(response)
      })
      .catch(function(err){
        alert(err.response.data.errorMessage);
      })
  }
}


//미들웨어 - 상품 추가(create)
const addPostDB = (
    item_url, title, price, description) => {
    return function (dispatch, useState, { history }) {
        console.log(item_url, title, price, description)
      apis 
        .postWrite({
          item_url : item_url,
          title : title,
          price : price,
          description : description,}
        )  
        .then(function(response){
          console.log(response);
          window.alert("😆 업로드 되었습니다. 😆");
          history.push("/");
        })
        .catch((err) => {
          alert(err.response.data.errorMessage);
          return;
        });
    };
  };

//리듀서
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        // draft.list.push(...action.payload.post_list);
        // draft.paging = action.payload.paging;
        draft.list = action.payload.post_list;
      }),
    [SET_POSTONE]: (state, action) =>
      produce(state, (draft) => {
      // draft.list.push(...action.payload.post_list);
      // draft.paging = action.payload.paging;
      draft.post = action.payload.post_one;
      console.log(action.payload.post_one);
      }), 
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }), 
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        let del_list = draft.list.filter(
          (list) => action.payload.post_id !== list.id
        );
        draft.list = del_list;
      }),
    //무한스크롤
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  // setPost,
  // addPost,
  // setPostOne,
  getPostDB,
  addPostDB,
  getPostOneDB,
//   editPostFB,
  deletePostDB,
};

export { actionCreators }