import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";


export default function Header() {
  return (
    <div className="headercontainer">
      <div className="headerleft">
        <span className="logo">Social Media</span>
      </div>
      <div className="headermid">
        <div className="searchbar">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Social Media.."
            className="searchInput"
          ></input>
        </div>
      </div>
      <div className="headerright">
        <div>
          <div className="headerlink">Homepage</div>
          <div className="headerlink">Timeline</div>
        </div>
        <div className="headerIcons">
          <div className="headericonitem"></div>
          <PersonIcon />
          <div className="headericonbadge">1</div>

          <div className="headericonitem"></div>
          <ChatIcon/>
          <div className="headericonbadge">2</div>

          <div className="headericonitem"></div>
          <NotificationsIcon/>
          <div className="headericonbadge">3</div>
        </div>
        <img src="assets/person/1.jpeg" alt="" className="headerimage" />
      </div>
      
    </div>
  );
}
