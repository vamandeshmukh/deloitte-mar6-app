// state - one single object for one component
// props

import { useState } from "react";

const BlogPosts = () => {

    const [authorName, setAuthorName] = useState(''); // string - ''

    const handleChange = (evt) => {
        console.log(evt.target.value);
        console.log(evt.target.name);
        setAuthorName(evt.target.value);
    };

    const handleSubmit = () => {
        console.log('called');
    };

    return (
        <div>
            <p>Author : {authorName}</p>
            <form onSubmit={handleSubmit} >
                <input type='text' value={authorName} onChange={handleChange} />
                <input type='submit' value='Click to Submit' />
            </form>
        </div>
    );
};

export default BlogPosts;
