import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Post() {
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
            <span className="postUsername">Gurpreet Singh</span>
            <span className="postDate">12 mins ago</span>
          </div>
          <div className="postTopRight">
            <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">My First Post</span>
          <img className="postImg" src="assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="postLikeCounter">57 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">21 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
