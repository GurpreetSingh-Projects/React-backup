import "./Shared.css";
import PermMediaIcon from "./src/icons/material-symbols_perm-media-outline";
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
            <PermMediaIcon className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOptions">
            <PermMediaIcon className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOptions">
            <PermMediaIcon className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOptions">
            <PermMediaIcon className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOptions">
            <PermMediaIcon className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
        </div>
      </div>
    </div>
  );
}
