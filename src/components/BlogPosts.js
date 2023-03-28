
// state - one single object for one component  
// props 

import { useState } from "react";

const BlogPosts = () => {

    // const authorName = useState();
    const [authorName, setAuthorName] = useState(''); // string - ''
    const [salary, setSalary] = useState(''); // number - 0
    const [isIndian, setIsIndian] = useState(false); // boolean - false  

    const blogData = {
        title: 'Happy Days',
        body: 'College days are happy days.',
        author: ''
    };

    const getAuthorName = () => {
        console.log(authorName);
        console.log(blogData.author);
        blogData.author = authorName;
    };

    return (
        <div>
            <p>Blogposts data is here...</p>
            <p> Title: {blogData.title}</p>
            <p> Body: {blogData.body}</p>
            <p> Author: {blogData.author}</p>
            <input type='text' value={authorName} onChange={getAuthorName} />
        </div>
    );
};

export default BlogPosts;

