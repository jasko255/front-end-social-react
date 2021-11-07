import { MoreVert } from '@mui/icons-material'
import axios from 'axios'
import { useEffect, useState } from 'react';
import './post.css'
import {format} from 'timeago.js'

const Post = ({post}) => {
    
    const [like, setLike] = useState(post.likes.length)
    const [isLike, setIsLike] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER




    useEffect(()=>{

        const fetchUser = async ()=>{
            
            const res = await axios.get(`users/${post.userId}`)
            setUser(res.data)
        }
        fetchUser()
    },[])

const likeHandler = () =>{
    setLike(isLike ? like-1 : like+1)
    setIsLike(!isLike)
}

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src={user.profilePicture || PF+'person/no-avatar.png'} alt="" />
                        <span className="postUsername">{user.username}</span>
                        <span className="postDate">{post.date} </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={PF+post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src={`${PF}like.png`} onClick={likeHandler} alt="" />
                        <img className='likeIcon' src={`${PF}heart.png`} onClick={likeHandler}  alt="" />
                        <span className="postLikeCounter"> {like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
