// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="NoaKhali" special="bivag"></District>
      <District name="Bamonbariya" special="joda akbar"></District>
      <District name="Sumilla" special="moyna and moti"></District>
    </div>
  );
}

function LoadPosts() {
  // 1
  const [posts, setPosts] = useState([]);
  // 2
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') //3
      .then(res => res.json())
      .then(data => setPosts(data)) //4
  }, [])

  // 5.  Dynamic vaba data show kora
  return (
    <div>
      <h1>Post: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }

    </div>
  )
}

function Post(props) {
  return (
    <div style={{ backgroundColor: 'lightgrey', margin: '20px', border: '4px solid salmon' }}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'lightblue',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
}

function District(props) {
  // state option add 
  const [power, setPower] = useState(1);
  // set state value & declare evenHandler Name
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }
  return (
    // <div className='district'>
    //---- object er moto kore style declare kora lage 
    // <div style={{ color: 'red' }}>
    < div style={districtStyle} >
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power} </h4>
      {/* --------add event handler  */}
      <button onClick={boostPower} >Boost the power</button>
    </div >
  )
}




export default App;
