import React from "react";
import Post from "../components/Post";
import PropTypes from 'prop-types'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";


const Detail = (props) => {
    const id = props.match.params._id;
    console.log(props)
    const dispatch = useDispatch();
    const postOne = useSelector((state) => state.post.post.list);
    // const [post, setPost] = React.useState(postOne ? postOne : 'undefined');

    React.useEffect(()=>{
        if(postOne !== undefined){
            return; 
         }
    dispatch(postActions.getPostOneDB(id))
    }, []);

    

        return (
        <React.Fragment>
            {postOne.item_url}
        </React.Fragment>
    )

}
Detail.defaultProps = {
    item_url: "기본값",
    title: "기본값",
    price: "기본값",
    description: "기본값",
    date: "기본값",
};



export default Detail;