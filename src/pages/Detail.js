import React from "react"
import { Grid, Input, Button } from "../elements";
import Post from "../components/Post";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";

const Detail = () => {
    return (
    <div>
        <Grid padding="16px" is_flex>
          <Button text="게시글 수정"></Button>
          <Button text="게시글 삭제"></Button>
      </Grid>
        <Grid>
            <p>이미지</p>
        </Grid>
        <Grid>
        <p>[만능 쿠커]</p>
        <p>가격: 50,000원</p>
        <p>판매처: 쿠팡</p>
        <p>설명: 써봤는데 여러 요리를 다양하게 하기에 적합해서 좋았어요!</p>
        </Grid>
      <Grid padding="16px" is_flex>
        <Input
          placeholder="댓글 내용을 입력해주세요 :)"
        />
        <Button width="50px" margin="0px 2px 0px 2px">
          작성
        </Button>
      </Grid>
      <Grid is_flex>
        <Grid width="auto">
          <p>윤쓰윤쓰</p>
        </Grid>
        <Grid is_flex margin="0px 4px">
          <p margin="0px">오 좋아보이는데</p>
          <p margin="0px">02-16-05:00:00</p>
        </Grid>
      </Grid>

      <Grid is_flex>
        <Grid width="auto">
          <p>제리양수</p>
        </Grid>
        <Grid is_flex margin="0px 4px">
          <p margin="0px">이건 못참지</p>
          <p margin="0px">02-16-12:25:00</p>
        </Grid>
      </Grid>
      </div>
);
};

export default Detail;