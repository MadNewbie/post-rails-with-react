// API_URL comes from .env.development file
import React, {useState, useEffect} from "react";
import { API_URL } from "../../../constants";
import { Link } from "react-router-dom";

function PostsList() {
    const [posts, setPosts] = useState([]);
    const [, setLoading] = useState(true);
    const [,setError] = useState(null);

    // fetch API
    useEffect(()=>{
        async function loadPosts() {
            try {
                const response = await fetch(`${API_URL}/posts`);
                if (response.ok) {
                    const json = await response.json()
                    setPosts(json)
                } else {
                    throw response
                }
            } catch (e) {
                setError('An error occured. Awkward..')
                console.log('An error occured: ', e)
            } finally {
                setLoading(false)
            }
        }
        loadPosts();
    }, [])

    const deletePost = async(id) => {
        try {
            // DELETE request to http://localhost:3000/api/v1/posts/:id
            const response = await fetch(`${API_URL}/posts/${id}`, {
                method: "DELETE",
            })
            if (response.ok) {
                setPosts(posts.filter((post) => post.id !== id))
            } else {
                throw response
            }
        } catch (error) {
            console.error(error)
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
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                </div>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
}

export default PostsList;