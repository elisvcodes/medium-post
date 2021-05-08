import React from 'react'
import {useDispatch} from 'react-redux'
import {deletePost} from '../../../_actions/posts'
export default function Post({setId, author, title, article, createAt, postId}) {
    const dispatch = useDispatch()
    return (
        <>
            <div>
                <p>Author: {author}</p>
                <h1>{title}</h1>
                <h3>{article}</h3>
                <span>{createAt}</span>
                <div> 
                 <button onClick={() => {setId(postId)}}>Update</button>
                 <button onClick={() => {dispatch(deletePost(postId))}}>Delete</button>
                </div>
            </div>
        </>
    )
}
