import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { Grid, Image, Text, Button } from "../elements";
import Header from "../components/Header";
import { history } from "../redux/configureStore";


const Detail = (props) => {
    const id = props.match.params._id;
    const dispatch = useDispatch();
    const postOne = useSelector((state) => state.post.post.list);

    const deletePost = () =>{
        dispatch(postActions.deletePostDB(id))
        console.log(postOne)
    };


    React.useEffect(()=>{
        if(postOne){
            return
        }
        dispatch(postActions.getPostOneDB(id))
    }, []);
        return (
        <React.Fragment>
        <Header/>
        <Grid is_flex padding = "150px" height = "100vh" width = "100%">
            <Grid margin = "0px 20px 0px 20px" >
            <Image shape="rectangle" src={postOne ? postOne.item_url : ""}/>
            </Grid>
            <Grid margin = "0px 20px 0px 20px" >
                <Text size = "40px" bold>상품명 : {postOne ? postOne.title : ""}</Text>
                <Text size = "25px" bold>가격 : {postOne ? postOne.price : ""}</Text>
                <Text size = "25px" bold>설명 : {postOne ? postOne.description : ""}</Text>
                <Text size = "13px" bold>{postOne ? postOne.date : ""}</Text>
                <Button 
                _onClick={() => {
                deletePost();
                }}
                width = "50%" 
                text = "상품삭제"/>
            </Grid>
        </Grid>
        </React.Fragment>
    )

}


export default Detail;