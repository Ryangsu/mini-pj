import React from "react";
import apis from "../shared/axios";
import Post from "../components/Post"
import Header from "../components/Header";

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
        <Grid is_flex padding = "30px">
        {post_list.map((p, idx) => {
            // if (p.user_info.user_id === user_info?.uid) {
                return (
                <Grid padding = "16px" bg="#ffffff"
                        margin="8px 0px"
                        key={p._id}
                        _onClick={() => {
                        history.push(`/detail/${p._id}`);}}>
                    <Post key={p._id} {...p}/>
                </Grid>
                )
            })};
        
        </Grid>       
    </React.Fragment>   
    )}


export default PostList;


// const user_info = useSelector((state) => state.user.user);
// const is_loading = useSelector((state) => state.post.is_loading);
// const paging = useSelector((state) => state.post.paging);


// React.useEffect(()=>{

//   if(post_list.length === 0){
//       dispatch(postActions.getPostDB());
//   }

// }, []);

// {/* <InfinityScroll
//     callNext = {()=> {
//         console.log("next!");
//         dispatch(postActions.getPostDB(paging.next));
//     }}
//     is_next={paging.next? true : false}
//     loading={is_loading}>
// </InfinityScroll> */}

// {post_list.map((p, idx) => {
//   if (p.user_info.user_id === user_info?.uid) {
//     return (
//       <Grid bg="#ffffff"
//             margin="8px 0px"
//             key={p.id}
//             _onClick={() => {
//             history.push(`/post/${p.id}`);}}>
//         <Detail key={p.id} {...p} is_me />
//       </Grid>
//     );
//   } else {
//     return (
//       <Grid key={p.id} 
//             bg="#ffffff"
//             _onClick={() => {
//             history.push(`/post/${p.id}`);}}>
//         <Detail {...p} />
//       </Grid>
//     );
//   }
// })}