import "./Shared.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <FontAwesomeIcon icon="fa-solid fa-clapperboard"  className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOptions">
            <FontAwesomeIcon icon="fa-solid fa-clapperboard"  className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOptions">
            <FontAwesomeIcon icon="fa-solid fa-clapperboard"  className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOptions">
            <FontAwesomeIcon icon="fa-solid fa-clapperboard"  className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOptions">
            <FontAwesomeIcon icon="fa-solid fa-clapperboard"  className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
          </div>
        </div>
      </div>
    </div>
  );
}
