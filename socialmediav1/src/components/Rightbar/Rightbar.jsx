import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola foster</b> and <b>4 other friends</b> have birthday today.
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
      </div>
    </div>
  );
}
