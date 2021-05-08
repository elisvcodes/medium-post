import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { createPost, updatePost } from '../../_actions/posts';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
export default function Form({getId, setId}) {

    const { register, handleSubmit, reset, setValue } = useForm();
    const post = useSelector(state => state.posts.find((post) => post._id === getId ? post: null ))
    const dispatch = useDispatch() 
    useEffect(() => {
        if (getId !== 0) {
            let keys = Object.keys(post);
            keys.forEach((key) => setValue(key, post[key]))
        }
    }, [getId, post,setValue])
    const onSubmit = (data) => {
        if (getId === 0) {
            dispatch(createPost(data))
            reset()
        } else {
            dispatch(updatePost(getId, data))
            reset()
            setId(0)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" name="author" placeholder="Author" ref={register} />
                </div>
                <div>
                    <input type="text" name="title" placeholder="Title" ref={register} />
                </div>
                <div>
                    <input type="text" name="article" placeholder="article" ref={register} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
