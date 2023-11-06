import "./header.css";
import {
  AiOutlineSearch,
  BsFillPersonFill,
  BsFillChatLeftTextFill,
  IoIosNotifications,
} from "react-icons/";

export default function Header() {
  return (
    <div className="headercontainer">
      <div className="headerleft">
        <span className="logo">Social Media</span>
      </div>
      <div className="headermid">
        <div className="searchbar">
          <AiOutlineSearch />
          <input
            type="text"
            placeholder="Search Social Media.."
            className="searchInput"
          ></input>
        </div>
      </div>
      <div className="headerright">
        <div className="headerlink">
          <div>Homepage</div>
          <div>Timeline</div>
        </div>
        <div className="headerIcons">
          <div className="headericonitem"></div>
          <BsFillPersonFill />
          <div className="headericonbadge">1</div>

          <div className="headericonitem"></div>
          <BsFillChatLeftTextFill />
          <div className="headericonbadge">2</div>

          <div className="headericonitem"></div>
          <IoIosNotifications />
          <div className="headericonbadge">3</div>
        </div>
        <img src="assets/person/1.jpeg" alt="" className="headerimage" />
      </div>
    </div>
  );
}
