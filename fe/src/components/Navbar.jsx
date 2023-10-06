//Posts List Link (Root Path) | Link to Create new Post (Post form)

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (<nav>
        <Link to="/">Posts List</Link>
        {" | "}
        <Link to="/new">Create New Post</Link>
    </nav>)
}

export default Navbar