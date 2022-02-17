import React from "react";
import {Grid, Image, Text, Button} from "../elements";
import {actionCreators as postdeleteActions} from "../redux/modules/post";
import { actionCreators as postActions } from "../redux/modules/image";

import {history} from "../redux/configureStore";
import {useDispatch} from "react-redux";
import '../shared/App.css'

const Post = (props) => {
    return (
        <React.Fragment>
            <Grid padding = "16px" bg="#eeeeee" height = "100%">
                <Grid>
                <Image shape="rectangle" src={props.item_url}/>
                </Grid>
                <Grid>
                    <Text size = "20px" bold>상품명 : {props.title}</Text>
                    <Text size = "15px" bold>가격 : {props.price}</Text>
                    <Text size = "15px" bold>설명 : {props.description}</Text>
                    <Text size = "13px" bold>{props.date}</Text>
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
    item_url: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile26.uf.tistory.com%2Fimage%2F99D292345AB6477A147D63",
    title : "상품명",
    price : "100,000",
    description: "이거 진짜 가성비 쩔더라",
    insert_dt: "2020-02-10 10:00:00",
    is_me: false
};

export default Post;