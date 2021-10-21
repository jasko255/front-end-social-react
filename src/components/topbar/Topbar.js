import React from 'react'
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { Person, Chat, Notifications } from '@mui/icons-material';
// import { IconButton } from '@mui/material';

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'>Social app</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
            <SearchIcon />
            <input placeholder='Search' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                   <Person /> 
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                   <Chat /> 
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                     <Notifications /> 
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
            
        </div>
    )
}

export default Topbar
