import React from "react";
import {Grid, Image, Text, Button} from "../elements";
import {actionCreators as postdeleteActions} from "../redux/modules/post";
import { actionCreators as postActions } from "../redux/modules/image";

import {history} from "../redux/configureStore";
import {useDispatch} from "react-redux";
import '../shared/App.css'

const Post = (props) => {
    const dispatch = useDispatch();

    // React.useEffect(()=>{

    //     if(post_list.length === 0){
    //         dispatch(postActions.getPostDB());
    //     }
    //     }, []);
    // const {id} = props;

    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex="is_flex" padding="16px">
                    {/* <Grid is_flex="is_flex" width="auto">
                        <Image shape="circle" src={props.src}/>
                        <Text bold="bold">{props.user_info.user_name}</Text>
                    </Grid> */}
                    <Grid is_flex="is_flex" width="auto">
                        {/* <Text>{props.insert_dt}</Text>&nbsp;&nbsp; */}
                        {/* {
                            props.is_me && <Button
                                    width="auto"
                                    margin="4px"
                                    padding="4px"
                                    _onClick={() => {
                                        history.push(`/write/${props.id}`);
                                    }}>
                                    수정
                                </Button>
                        } */}
                        {/* {props.is_me && <Button width="auto" margin="4px" padding="4px" _onClick={deletePost}>삭제</Button>} */}
                    </Grid>
                </Grid>
                <Grid>
                    <Image shape="rectangle" src={props.image_url}/>
                </Grid>
                <Grid>
                    <Text>이름 : {props.title}</Text>
                    <Text>가격 : {props.price}</Text>
                    <Text>설명 : {props.description}</Text>
                </Grid>
                
            </Grid>
        </React.Fragment>
    );
}

Post.defaultProps = {
    user_info: {
        user_name: "mean0",
        user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg"
    },
    image_url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile26.uf.tistory.com%2Fimage%2F99D292345AB6477A147D63",
    title : "상품명",
    price : "100,000",
    description: "이거 진짜 가성비 쩔더라",
    insert_dt: "2020-02-10 10:00:00",
    is_me: false
};

export default Post;