import './Header.css'
import Post from './Post.jsx'
const Content = () => {
    return (
        <div className="container">
            <div className="row">
                <div>Name {1 + 1}</div>
                <div>Class</div>
            </div>
            <div className="row">
                <div>Name</div>
                <div>Class</div>
            </div>
            <div className="row">
                <div>Name</div>
                <div>Class</div>
            </div>
            <div className="row">
                <div>Name</div>
                <div>Class</div>
            </div>
            <Post
                studentName="name1"
            />
        </div>
    )
}
export default Content