import React from "react";
import Post from "../components/Post";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { Grid } from "../elements";


const Detail = (props) => {
    const id = props.match.params._id;
    const dispatch = useDispatch();
    const postOne = useSelector((state) => state.post.post.list);

    React.useEffect(()=>{
        if(postOne){
            return
        }
        dispatch(postActions.getPostOneDB(id))
    }, []);
        return (
        <Grid>
            {postOne ? postOne.item_url : ""}
            {postOne ? postOne.title : ""}
            {postOne ? postOne.price : ""}
            {postOne ? postOne.description : ""}
            {postOne ? postOne.date : ""}
        </Grid>
        )

}


export default Detail;