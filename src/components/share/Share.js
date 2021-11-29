import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import { useContext } from "react";
import "./share.css";
import { AuthContext } from '../../context/AuthContext.js'

const Share = () => {

const {user} = useContext(AuthContext)

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={ user.profilePicture ? user.profilePicture : "/assets/person/no-avatar.png"} alt="" className="shareProfileImg" />
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor='tomato' className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor='blue' className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor='green' className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor='goldenrod' className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
