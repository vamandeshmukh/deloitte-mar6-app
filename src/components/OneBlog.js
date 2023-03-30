import { useState } from "react";

const OneBlog = () => {

    const [oneBlogData, setOneBlogData] = useState({ title: '', body: '' });

    return (
        <div className="container py-3 my-3">
            <p className="display-4 text-primary py-2">Current Blog</p>
            <hr />
            <div className="px-2 py-2">
                <p className="lead">{oneBlogData.title}</p>
                <p >{oneBlogData.body}</p>
            </div>
        </div>
    );

};

export default OneBlog;