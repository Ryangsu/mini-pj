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
        console.log(e);
        console.log(e.target);
        console.log(e.target.files[0]);

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
        dispatch(imageActions.uploadImage(image));
    }


    return (
        <React.Fragment>
            <Grid padding = "16px">
            <input type="file" onChange={selectFile} ref={fileInput} disabled={is_uploading}/>
            </Grid>
            <Grid padding ="16px">
            <Button width = "200px" _onClick={uploadDB}>업로드하기</Button>
            </Grid>
        </React.Fragment>
    )
}

export default Upload;