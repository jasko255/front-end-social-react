import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] = useState({});
  const username = useParams().username;

  console.log('params', username);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, []);


  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture || PF +'person/no_cover.png'}
                className="profileCoverImg"
                alt=""
              />
              <img
                src={user.coverPicture || PF +'person/no-avatar.png'}
                className="profileUserImg"
                alt=""
              />
            </div> 
            <div className="profileInfo">
                <h4 className='profileInfoName'>{user.username}</h4>
                <span className='profileInfoDesc'>{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user = {user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
