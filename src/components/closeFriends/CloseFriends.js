import React from 'react'
import './closeFriends.css'

const CloseFriends = ({users}) => {
    return (
        <li className="sidebarFriend">
                        <img src={users.profilePicture} alt="" className="sidebarFriendImg" />
                        <span className="sidebarFriendName">{users.username}</span>
                    </li>
                  
    )
}

export default CloseFriends
