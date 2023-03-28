// state 
// props 

const BlogPosts = () => {

    const blogData = {
        title: 'Happy Days',
        body: 'Colege days are happy days.',
        author: 'Sonu'
    };

    return (
        <div>
            <p>Blogposts data is here...</p>
            <p> Title: {blogData.title}</p>
            <p> Body: {blogData.body}</p>
            <p> Author: {blogData.author}</p>
        </div>
    );
};

export default BlogPosts;

