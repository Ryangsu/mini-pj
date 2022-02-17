import React from "react";
import Post from "../components/Post";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { Grid, Image, Text, Button } from "../elements";


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
        <Grid is_flex padding = "100px" height = "100vh" width = "100%">
            <Grid>
            <Image shape="rectangle" src={postOne ? postOne.item_url : ""}/>
            </Grid>
            <Grid>
                <Text size = "40px" bold>상품명 : {postOne ? postOne.title : ""}</Text>
                <Text size = "25px" bold>가격 : {postOne ? postOne.price : ""}</Text>
                <Text size = "25px" bold>설명 : {postOne ? postOne.description : ""}</Text>
                <Text size = "13px" bold>{postOne ? postOne.date : ""}</Text>
                <Button width = "50%" text = "상품삭제"/>
            </Grid>
        </Grid>
        )

}


export default Detail;