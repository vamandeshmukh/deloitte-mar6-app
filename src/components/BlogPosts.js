// state - one single object for one component
// props

import { useState } from "react";

const BlogPosts = () => {

    const [authorName, setAuthorName] = useState(''); // string - ''

    const handleChange = (evt) => {
        console.log(evt.target.value);
        // authorName = evt.target.value; // not working
        setAuthorName(evt.target.value);
    };

    return (
        <div>
            <p>Author : {authorName}</p>
            <form>
                <input type='text' value={authorName} onChange={handleChange} />
            </form>
        </div>
    );
};

export default BlogPosts;




