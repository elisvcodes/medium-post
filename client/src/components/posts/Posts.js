import React from 'react'
import { useSelector } from 'react-redux';
import Post from './post/Post';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function Posts({setId}) {
    const posts = useSelector(state => state.posts)
    return (
        <>
            {posts.map(post => {
             return (
                <Post key={post._id} setId={setId} postId={post._id} author={post.author} title={post.title} article={post.article} createAt={dayjs(post.createdAt).format('MM/DD/YYYY')}/>
             )   
            })}
        </>
    )
}
