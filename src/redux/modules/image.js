import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import { apis } from "../../shared/axios";

// import { storage } from "../../shared/firebase";

const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIRW"
const IMAGE_URL = "IMAGE_URL";

const uploading = createAction(UPLOADING, (uploading) => ({uploading}));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({image_url}));
const setPreview = createAction(SET_PREVIEW, (preview) => ({preview}));
const getImageUrl = createAction(IMAGE_URL, (image_url) => ({image_url}));


const initialState = {
    image_url: "",
    uploading: false,
    preview: null,
}


const uploadImageDB = (image) => {
    return function(dispatch, getState, {history}){
            apis
              .imageUpload(image)
              .then((res) => {
                window.alert("😆 이미지 업로드 성공! 😆");
                console.log(res)
                dispatch(getImageUrl(res.data.data))
                console.log(res)
              })
              .catch((error) => {
                console.log("이미지 업로드 실패");
                alert(error.response.data.errorMessage);
                // window.alert(error.errorMessage)
                return;
              });
        dispatch(uploading(true));
    }
}


export default handleActions({
    [UPLOAD_IMAGE]: (state, action) => produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
    }),
    [UPLOADING]: (state, action) => produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
    }),
    [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
        draft.preview = action.payload.preview;
    }),
    [IMAGE_URL]: (state, action) =>
      produce(state, (draft)=>{
          console.log("안녕")
          console.log(action.payload.image_url)
        draft.item_url = action.payload.image_url
    }),
}, initialState);


const actionCreators = {
    uploadImage,
    uploadImageDB,
    setPreview,
}

export {actionCreators}