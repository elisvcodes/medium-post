import React, {useState, useEffect } from 'react'
import Form from './components/form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from './_actions/posts';
import Posts from './components/posts/Posts';

function App() {
  const dispatch = useDispatch();
  const [id, setId] = useState(0)
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])
  return (
    <>
      <Form setId={setId} getId={id}/>
      <Posts setId={setId}/>
    </>
  );
}
export default App;
