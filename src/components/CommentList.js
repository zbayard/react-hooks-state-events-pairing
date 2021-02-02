import {useState} from 'react';

function CommentList({key, user, comment}) {
  
  const [upVotes, setUpVotes] = useState(0)
  const [downVotes, setDownVotes] = useState(0)

  function handleClick(e){
    if(e.target.name === "up"){
    setUpVotes(upVotes + 1)
    }else if(e.target.name === "down"){
      setDownVotes(downVotes + 1)
    }else if(e.target.name === "delete"){
      const commentToDelete = e.target.closest('div')
      commentToDelete.remove()
    }

  };
  

  return (
    <div key={key} className="Comment">
      <h1>{user}</h1>
      <p>{comment}</p>
      <button name="up" onClick={handleClick}>{upVotes}👍</button>
      <button name="down" onClick={handleClick}>{downVotes}👎</button>
      <br></br>
      <br></br>
      <button name="delete" onClick={handleClick}>delete</button>
      </div>
    
  );
}

export default CommentList;
