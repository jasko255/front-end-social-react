import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={`${PF}/post/3.jpeg`}
                className="profileCoverImg"
                alt=""
              />
              <img
                src={`${PF}/person/7.jpeg`}
                className="profileUserImg"
                alt=""
              />
            </div> 
            <div className="profileInfo">
                <h4 className='profileInfoName'>Janusz Kondziarz</h4>
                <span className='profileInfoDesc'>hey there everyone!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username='john'/>
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
