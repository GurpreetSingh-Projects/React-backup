import Header from "../../components/Topbar/Header";
import sidebar from "../../components/Sidebar/sidebar";
import feed from "../../components/Feed/feed";
import rightbar from "../../components/Rightbar/rightbar";
export default function Home() {
  return (
    <>
      <Header />
      <sidebar/>
      <feed />
      <rightbar/>
    </>
  );
}
