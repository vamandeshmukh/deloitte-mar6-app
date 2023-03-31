import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const blogUrl = 'https://jsonplaceholder.typicode.com/users/';

const Writer = (props) => {

    const [writerDetails, setWriterDetails] = useState({});

    useEffect(() => {
        axios.get(blogUrl + props.writerId)
            .then((resp) => {
                setWriterDetails(resp.data);
            })
            .catch(e => console.log(e));
    });

    return (
        <div>
            <p>Posted by: {writerDetails.name}</p>
            <p>Email: <Link href={`mailto:${writerDetails.email}`}>{writerDetails.email}</Link></p>
            {/* <p>City: {writerDetails.address.city}</p> */}
        </div>
    );
};

export default Writer;

