// API_URL comes from .env.development file
import React, {useState, useEffect} from "react";
import { deletePost as deletePostService, fetchAllPosts } from "../../services/postService";
import { Link } from "react-router-dom";

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [, setLoading] = useState(true);
    const [,setError] = useState(null);

    // fetch API
    useEffect(()=>{
        async function loadPosts() {
            try {
                const data = await fetchAllPosts()
                setPosts(data)
            } catch (e) {
                setError('An error occured. Awkward..')
            } finally {
                setLoading(false)
            }
        }
        loadPosts();
    }, [])

    const deletePost = async(id) => {
        try {
            await deletePostService(id)
            setPosts(posts.filter(post => post.id !== id))
            // setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id))
        } catch (error) {
            console.error("Failed to delete the post: ",error)
        }
    }

    return <div>
        {posts.map((post) => (
            <div key={post.id} className="post-container">
                <h2>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </h2>
                <div className="post-links">
                    <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                    {" | "}
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                </div>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
}

export default PostsList;