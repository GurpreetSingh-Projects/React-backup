import "./Shared.css";
import MovieIcon from "@mui/icons-material/Movie";
export default function Shared() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <input className="shareInput" placeholder="What's on Your Mind ?" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <MovieIcon className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOptions">
            <MovieIcon className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOptions">
            <MovieIcon className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOptions">
            <MovieIcon className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOptions">
            <MovieIcon className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
        </div>
      </div>
    </div>
  );
}
