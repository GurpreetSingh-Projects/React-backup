import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Users } from "../../dummyData.js";
export default function Post({ post }) {
  console.log(post);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Gurpreet</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">{post.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
