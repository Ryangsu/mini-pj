import React from "react";
import apis from "../shared/axios";
import Post from "../components/Post"
import Header from "../components/Header";
import styled from "styled-components";

// import Detail from "../pages/Detail";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
// import InfinityScroll from "../shared/InfinityScroll";
import { Button, Grid } from "../elements";
import { history } from "../redux/configureStore";


const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);
    // const [data, setData] = useState(null);

    React.useEffect(()=>{

    if(post_list.length === 0){
        dispatch(postActions.getPostDB());
    }
    }, []);

    return (
    <React.Fragment>
        <Header></Header>
        <Wrap>
        {post_list.map((p, idx) => {
                return (
                <Grid padding = "16px" 
                        margin="8px 0px"
                        key={p._id}
                        _onClick={() => {
                        history.push(`/detail/${p._id}`);}}>
                    <Post key={p._id} {...p}/>
                </Grid>
                )
            })};
        </Wrap>      
    </React.Fragment>   
    )}


export default PostList;


const Wrap = styled.div`
    background-color: #ffffff; 
    margin: 0px 0px 0px 0px;
    display : grid;
    grid-template-columns: 25% 25% 25% 25%;
`