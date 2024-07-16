import Share from "../share/Share"
import Post from '../post/Post'
import "./feed.css"
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper"></div>
      <Share/>
      <Post/>
    </div>
  )
}

export default Feed
