import React, { useEffect } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import { useState } from 'react'
import './feed.css'
import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{

        const fetchPosts = async ()=>{
            
            const res = await axios.get("posts/timeline/616e9501332479d6f44a1477")
            setPosts(res.data)
        }
        fetchPosts()
    },[])

    return (
        <div className='feed'>
            <div className="feedWrapper">
            <Share/>
            {posts.map(p=> ( 
            <Post key={p.id} post={p}/>
            
                    ))}        

            </div>
                    </div>
    )
}

export default Feed
