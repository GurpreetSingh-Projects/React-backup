import Post from "../Post/Post.jsx";
import Shared from "../Shared/Shared.jsx";
import "./feed.css";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Shared />
        <Post />
      </div>
    </div>
  );
}
