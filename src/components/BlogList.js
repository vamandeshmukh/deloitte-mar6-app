import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const blogUrl = 'https://jsonplaceholder.typicode.com/posts';

const BlogList = () => {

    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        axios.get(blogUrl)
            .then((resp) => {
                console.log(resp.data);
                setAllBlogs(resp.data);
            })
            .catch(e => console.log(e));
    },
        []);


    return (

        <div>
            <div className="row mb-3 pb-3">

                <div className="col-2">
                    {/* left-side bar content here  */}
                </div>

                <div className="col-8">
                    <div className="pt-3 mt-3">
                        <p className="display-4 text-primary py-2">Blogs</p>
                        <hr />
                        <div className="px-2 py-2">
                            <div>
                                {allBlogs.map((blog, i) => {
                                    return <div obj={blog} key={i}>
                                        <Link to={{ pathname: `/blog/${blog.id}` }} >
                                            {blog.title}
                                        </Link>
                                    </div>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-2">
                    {/* right-side bar content here  */}
                </div>
            </div >
        </div>


    );
};

export default BlogList;



// // state - one single object for one component
// // props

// import { useState } from "react";

// const BlogPosts = () => {

//     const [authorName, setAuthorName] = useState(''); // string - ''
//     const [authorNameSubmitted, setAuthorNameSubmitted] = useState(''); // string - ''

//     const handleChange = (evt) => {
//         console.log(evt.target.value);
//         console.log(evt.target.name);
//         setAuthorName(evt.target.value);
//     };

//     const handleSubmit = (evt) => {
//         evt.preventDefault(); // IMP
//         setAuthorNameSubmitted(authorName);
//         setAuthorName('');
//     };

//     return (

//         <div>
//             <div className="container py-3 my-3">
//                 <p className="display-4 text-primary py-2">Blogs</p>
//                 <hr />
//                 <div className="px-2 py-2">
//                     <p>Author : {authorName}</p>
//                     <p>Author : {authorNameSubmitted}</p>
//                     <form onSubmit={handleSubmit} >
//                         <input type='text' value={authorName} onChange={handleChange} />
//                         <input type='submit' value='Click to Submit' />
//                     </form>
//                 </div>
//             </div>
//         </div>


//     );
// };

// export default BlogPosts;
