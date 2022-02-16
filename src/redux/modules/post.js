import { createAction, handleActions } from "redux-actions"; 
import { produce } from "immer"; //불변성 관리
// import { firestore, storage } from "../../shared/firebase";
import moment from "moment";
import { apis } from "../../shared/axios";
import { actionCreators as imageActions } from "./image";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const LOADING = "LOADING";

//액션 생성자
const setPost = createAction(SET_POST, (post_list, paging) => ({
  post_list,
  paging,
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
  is_loading: false,
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
        console.log(err)
      })
  }
}

//미들웨어 - 목록 수정하기(update)
// const editPostFB = (post_id = null, post = {}) => {
//   return function (dispatch, getState, { history }) {
//     if (!post_id) {
//       console.log("게시물 정보가 없습니다.");
//       return;
//     }
//     const _image = getState().image.preview;

//     const _post_idx = getState().post.list.findIndex((p) => p.id === post_id);
//     console.log(_post_idx);
//     const _post = getState().post.list[_post_idx];

//     console.log(_image, _post);
//     const postDB = firestore.collection("post");

//     if (_image === _post.image_url) {
//       postDB
//         .doc(post_id)
//         .update(post)
//         .then((doc) => {
//           dispatch(editPost(post_id, { ...post }));
//           history.replace("/");
//         });
//       return;
//     } else {
//       const user_id = getState().user.user.uid;
//       const _upload = storage
//         .ref(`images/${user_id}_${new Date().getTime()}`)
//         .putString(_image, "data_url");

//       _upload.then((snapshot) => {
//         snapshot.ref
//           .getDownloadURL()
//           .then((url) => {
//             console.log(url);
//             return url;
//           })
//           .then((url) => {
//             postDB
//               .doc(post_id)
//               .update({ ...post, image_url: url })
//               .then((doc) => {
//                 dispatch(editPost(post_id, { ...post, image_url: url }));
//                 history.replace("/");
//               });
//           })
//           .catch((err) => {
//             window.alert("이미지 업로드 오류");
//             console.log("이미지 업로드 실패!", err);
//           });
//       });
//     }
//   };
// };

//미들웨어 - 상품 추가(create)
const addPostDB = (
    item_url, title, price, description) => {
    return function ({ history }) {
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
        //   history.push("/");
        })
        .catch((err) => {
          alert(err.response.data.errorMessage);
          return;
        });
    };
  };

// //미들웨어 - 목록 불러오기(Read)
// const getPostFB = (start = null, size = 3) => {
//   return function (dispatch, getState, { history }) {
//     let _paging = getState().post.paging;

//     //다음페이지 없으면 그만
//     if (_paging.start && !_paging.next) {
//       return;
//     }

//     dispatch(loading(true));
//     const postDB = firestore.collection("post");

//     let query = postDB.orderBy("insert_dt", "desc");
//     if (start) {
//       query = query.startAt(start);
//     }

//     query
//       .limit(size + 1)
//       .get()
//       .then((docs) => {
//         let post_list = [];
//         let paging = {
//           start: docs.docs[0],
//           next:
//             docs.docs.length === size + 1
//               ? docs.docs[docs.docs.length - 1]
//               : null,
//           size: size,
//         };

//         docs.forEach((doc) => {
//           let _post = doc.data();
//           let post = Object.keys(_post).reduce(
//             (acc, cur) => {
//               if (cur.indexOf("user_") !== -1) {
//                 return {
//                   ...acc,
//                   user_info: { ...acc.user_info, [cur]: _post[cur] },
//                 };
//               }
//               return { ...acc, [cur]: _post[cur] };
//             },
//             { id: doc.id, user_info: {} }
//           );
//           post_list.push(post);
//         });
//         post_list.pop();
//         dispatch(setPost(post_list, paging));
//       });
//   };
// };


//리듀서
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        // draft.list.push(...action.payload.post_list);
        // draft.paging = action.payload.paging;
        draft.list = action.payload.post_list;
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
  setPost,
  addPost,
  getPostDB,
  addPostDB,
//   editPostFB,
  deletePostDB,
};

export { actionCreators }