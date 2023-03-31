import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comments from "./Comments";
import Writer from "./Writer";

const blogUrl = 'https://jsonplaceholder.typicode.com/posts';

const BlogDetails = () => {

    const [oneBlogData, setOneBlogData] = useState({ title: '', body: '', userId: '' });

    const blogInfo = useParams();

    useEffect(() => {
        console.log(blogInfo.id);
        axios.get(blogUrl + '/' + blogInfo.id)

            // axios.get(`${blogUrl}/${blogInfo.id}`)
            .then((resp) => {
                // console.log(resp.data);
                setOneBlogData(resp.data);
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
                        <p className="display-5 text-primary">{oneBlogData.title}</p>
                        <div className="text-center pb-3 pt-3">
                            {
                                oneBlogData.title &&
                                <img width="100%" src="https://picsum.photos/900/400" />
                            }
                        </div>
                        <div className="pt-3 mt-3">
                            <hr />
                            <Writer writerId={oneBlogData.id} />

                            <hr />
                        </div>
                        <div>
                            {Array.from(oneBlogData.title).map((blog, i) => {
                                return <span obj={blog} key={i}> {oneBlogData.body} </span>;
                            })}
                        </div>
                    </div>
                    <div className="pt-3 mt-3">
                        <div>
                            <Comments postId={blogInfo.id} />
                        </div>
                    </div>

                </div>

                <div className="col-2">
                    {/* right-side bar content here  */}
                </div>

            </div>
        </div >
    );

};

export default BlogDetails;


// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";

// const blogUrl = 'https://jsonplaceholder.typicode.com/posts';

// const OneBlog = () => {

//     const [oneBlogData, setOneBlogData] = useState({ title: '', body: '' });

//     const blogInfo = useParams();

//     useEffect(() => {

//         axios.get(`${blogUrl}/${blogInfo.id}`)
//             .then((resp) => {
//                 console.log(resp.data);
//                 setOneBlogData(resp.data);
//             })
//             .catch(e => console.log(e));
//     },
//         []);

//     return (
//         <div className="container py-3 my-3">
//             <p className="display-4 text-primary py-2">{oneBlogData.title}</p>
//             <hr />
//             <div className="px-2 py-2">
//                 <p className="lead">{oneBlogData.title}</p>
//                 <hr />
//                 <p >{oneBlogData.body}</p>
//                 {/* <div>
//                     {Array.from(oneBlogData.title).map((blog, i) => {
//                         return <span obj={blog} key={i}> {oneBlogData.body} </span>;
//                     })}
//                 </div> */}
//             </div>
//         </div>
//     );

// };

// export default OneBlog;








// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";

// const blogUrl = 'https://jsonplaceholder.typicode.com/posts';

// const OneBlog = () => {

//     const [oneBlogData, setOneBlogData] = useState({ title: '', body: '' });
//     const currentBlog = useParams();

//     useEffect(() => {
//         axios.get(`${blogUrl}/${currentBlog.id}`)

//             .then((resp) => {
//                 console.log(resp.data);
//                 setOneBlogData(resp.data);
//             })
//             .catch(e => console.log(e));

//     }, []);

//     return (
//         <div className="container py-3 my-3">
//             <p className="display-4 text-primary py-2">Current Blog</p>
//             <hr />
//             <div className="px-2 py-2">
//                 <p className="lead">{oneBlogData.title}</p>
//                 <p >{oneBlogData.body}</p>
//                 <p>{currentBlog.id}</p>
//             </div>
//         </div>
//     );

// };

// export default OneBlog;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";

// const blogUrl = 'https://jsonplaceholder.typicode.com/posts';

// const OneBlog = () => {

//     const [oneBlogData, setOneBlogData] = useState({ title: '', body: '' });

//     const blogInfo = useParams();

//     useEffect(() => {

//         axios.get(`${blogUrl}/${blogInfo.id}`)
//             .then((resp) => {
//                 console.log(resp.data);
//                 setOneBlogData(resp.data);
//             })
//             .catch(e => console.log(e));
//     },
//         []);

//     return (
//         <div className="container py-3 my-3">
//             <p className="display-4 text-primary py-2">{oneBlogData.title}</p>
//             <hr />
//             <div className="px-2 py-2">
//                 <p className="lead">{oneBlogData.title}</p>
//                 <hr />
//                 <p >{oneBlogData.body}</p>
//                 {/* <div>
//                     {Array.from(oneBlogData.title).map((blog, i) => {
//                         return <span obj={blog} key={i}> {oneBlogData.body} </span>;
//                     })}
//                 </div> */}
//             </div>
//         </div>
//     );

// };

// export default OneBlog;








// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";

// const blogUrl = 'https://jsonplaceholder.typicode.com/posts';

// const OneBlog = () => {

//     const [oneBlogData, setOneBlogData] = useState({ title: '', body: '' });
//     const currentBlog = useParams();

//     useEffect(() => {
//         axios.get(`${blogUrl}/${currentBlog.id}`)

//             .then((resp) => {
//                 console.log(resp.data);
//                 setOneBlogData(resp.data);
//             })
//             .catch(e => console.log(e));

//     }, []);

//     return (
//         <div className="container py-3 my-3">
//             <p className="display-4 text-primary py-2">Current Blog</p>
//             <hr />
//             <div className="px-2 py-2">
//                 <p className="lead">{oneBlogData.title}</p>
//                 <p >{oneBlogData.body}</p>
//                 <p>{currentBlog.id}</p>
//             </div>
//         </div>
//     );

// };

// export default OneBlog;
