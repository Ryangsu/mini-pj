import React from "react";
import {Grid, Text, Button, Image, Input} from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postAction } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";

const PostWrite = (props) => {
    const dispatch = useDispatch();
    const is_login = localStorage.getItem('token', `Bearer ${localStorage.getItem("token")}`);
    const preview = useSelector((state) => state.image.preview);
    const post_list = useSelector((state) => state.post.list);
    const post_id = props.match.params.id;
    const is_edit = post_id? true : false;
    const [item_url, setItem_url] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [description, setDescription] = React.useState("");


    let _post = is_edit? post_list.find((p)=> p.id === post_id) : null;

    const {history} = props;

    const [contents, setContents] = React.useState(_post ? _post.contents : "");
    const image = useSelector((state) => state.image.item_url);

    React.useEffect(()=>{
      if(is_edit && !_post){
        console.log("포스트 정보가 없어요")
        history.goBack();

        return;
      }

      if(is_edit){
        dispatch(imageActions.setPreview(_post.image_url));
      }
    }, []);

    React.useEffect(()=>{
      console.log("안녕하세용")
      console.log(image)
    }, [image]);

    const addPost = () => {
      dispatch(postAction.addPostDB(image,title,price,description));
      window.location.push("/")
    }
    const editPost = () => {
      dispatch(postAction.editPostFB(post_id, {contents: contents}))
    }
    


    if(!is_login){
        return(
            <Grid margin ="100px 0px" padding = "16px" center>
                <Text size="32px">앗! 잠깐</Text>
                <Text size="16px">로그인 후에만 글을 쓸 수 있어요</Text>
                {/* replace 를 활용하여 뒤로가기를 눌러도 다시 보이지 않게 */}
                <Button _onClick={()=>{history.replace("/login");}}>로그인 하러가기</Button>
            </Grid>
        )
    }
    return (
      <React.Fragment>
        <Grid width = "60%">
        <Grid padding="16px">
          <Text margin="0px" size="36px" bold>
            {is_edit ? "게시글 수정" : "게시글 작성"}
          </Text>
        </Grid>

        <Grid padding = "0px 16px 16px 16px">
            <Input 
            value={title}
            _onChange={(e) => {
                setTitle(e.target.value);
            }}
            label="제품명"
            placeholder="제품명을 적어주세요"
            />
        </Grid>

        <Grid padding = "0px 16px 16px 16px">
            <Input 
            value={price}
            _onChange={(e) => {
                setPrice(e.target.value);
              }}
            label ="가격"
            placeholder="가격을 적어주세요"
            />
        </Grid>
        
          <Grid padding = "0px 0px 0px 16px">
            <Text margin="0px" size="24px" bold>
              미리보기
            </Text>
          </Grid>
          
        <Grid width = "80%"padding="0px 16px 0px 16px">
          <Image 
          value={item_url}
          _onChange={(e)=>{
              setItem_url(e.target.value)
          }}
          shape="rectangle" 
          src={ preview ? preview : "https://thumbs.dreamstime.com/z/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"}/>
        </Grid>

        <Grid>
            <Upload/>
        </Grid>

        <Grid padding="16px">
          <Input
          value={description}
            _onChange={(e) => {
                setDescription(e.target.value);
              }}
          label="게시글 내용" 
          placeholder="게시글 작성" 
          multiLine 
          />
        </Grid>

        <Grid padding="16px">
          {is_edit?(
            <Button text="게시글 수정" _onClick={editPost} _disabled={contents === "" ? true : false}></Button>
            )  :   (
            <Button text="게시글 작성"
            _onClick={()=>{addPost()}}
            _disabled={description === "" ? true : false}>
            </Button>

            )} 
        </Grid>
        </Grid>

        <Grid width = "60%">

        </Grid>
      </React.Fragment>
    );
}




export default PostWrite;