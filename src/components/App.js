import video from "../data/video.js";
import {useState} from 'react'
import CommentList from "./CommentList"

function App() {
  console.log("Here's your data:", video);

  const numOfComments = video.comments.length  

  const commentComponents = video.comments.map(comment => {
    return <CommentList key={comment.id} user={comment.user} comment={comment.comment} />
            
  })

  const [upVotes, setUpVotes] = useState(video.upvotes)
  const [downVotes, setDownVotes] = useState(video.downvotes)
  const [commentToggle, setCommentToggle] = useState(true)

  function handleClick(e){
    if(e.target.name === "up"){
    setUpVotes((upVotes) => upVotes + 1)
    }else if(e.target.name === "down"){
      setDownVotes(downVotes - 1)
    }else if(e.target.name === "comment-toggle"){
      setCommentToggle(!commentToggle)

    }

  }
  
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title={video.title}
      />
      <p>{video.views} Views | Uploaded {video.createdAt} </p>
      <button name="up" onClick={handleClick}>{upVotes}👍</button>
      <button name="down" onClick={handleClick}>{downVotes}👎</button>
      <br></br>
      <br></br>
      {commentToggle ? <div><button name='comment-toggle' onClick={handleClick}>Hide Comments</button> <h1>{numOfComments} Comments</h1>{commentComponents}</div> : <button name='comment-toggle' onClick={handleClick}>Show Comments</button>}
      
      
    </div>
    
  );
}

export default App;
