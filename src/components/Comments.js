import axios from "axios";
import { useEffect, useState } from "react";

const blogUrl = 'https://jsonplaceholder.typicode.com/comments';

const Comments = (props) => {

    const [commentList, setCommentList] = useState([]);

    useEffect(() => {

        axios.get(`${blogUrl}?postId=${props.postId}`)
            .then((resp) => {
                console.log(resp.data);
                setCommentList(resp.data);
            })
            .catch(e => console.log(e));
    },
        []);


    return (
        <div>
            <p className="lead text-primary">{commentList.length} Comments</p>
            <hr />
            {commentList.map((comment, i) => {
                return <div obj={comment} key={i}>
                    <p>{comment.email}</p>
                    <p>{comment.name}</p>
                    <p>{comment.body}</p>
                    <hr />
                </div>;
            })}
        </div>
    );
};

export default Comments;

