import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

export default function Header() {
  return (
    <div className="header_container">
      <div className="header_left">
        <span className="span">Social Media</span>
      </div>
      <div className="header_mid">
        <div className="searchbar">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Social Media.."
            className="searchInput"
          ></input>
        </div>
      </div>
      <div className="header_right">
        <div>
          <div className="headerlink">Homepage</div>
          <div className="headerlink">Timeline</div>
        </div>
        <div className="headerIcons">
          
        </div>
      </div>
    </div>
  );
}
