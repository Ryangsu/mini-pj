import React from "react";
import {Button, Grid} from "../elements"
// import { storage } from "./firebase";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";


const Upload = (props) => {

    const dispatch = useDispatch();
    const is_uploading = useSelector(state => state.image.uploading);
    const fileInput = React.useRef();


    const selectFile = (e) => {

        console.log(fileInput.current.files[0])
        
        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            console.log(reader.result)
            dispatch(imageActions.setPreview(reader.result));
        }
    }

    const uploadDB = () => {
        let image = fileInput.current.files[0];
        
    }

    const onChange = (e) => {
        const img = e.target.files[0]
        const formData = new FormData();
        formData.append('img', img);
        console.log(formData) // FormData {}
        dispatch(imageActions.uploadImageDB(formData));
        for (const keyValue of formData) console.log(keyValue); // ["img", File] File은 객체
        console.log(img)

        const reader = new FileReader();
        const file = fileInput.current.files[0];

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            console.log(reader.result)
            dispatch(imageActions.setPreview(reader.result));
        }
    }
    
    return (
        <React.Fragment>
            <Grid padding = "16px">
            <input type="file" onChange={onChange} ref={fileInput}/>
            </Grid>
            <Grid padding ="0px 0px 0px 16px">
            {/* <Button width = "200px" _onClick={}>업로드하기</Button> */}
            </Grid>
        </React.Fragment>
    )
}

export default Upload;