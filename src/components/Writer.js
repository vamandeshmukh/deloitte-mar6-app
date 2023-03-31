import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const blogUrl = 'https://jsonplaceholder.typicode.com/users/';

const Writer = (props) => {

    const [writerDetails, setWriterDetails] = useState({});

    const writerInfo = useSelector((state) => state.writer.writerDetailsInStore);

    console.log(writerInfo.username);
    console.log(writerInfo.email);

    useEffect(() => {
        axios.get(blogUrl + props.writerId)
            .then((resp) => {
                setWriterDetails(resp.data);
            })
            .catch(e => console.log(e));
    }, []);

    return (
        <div>
            <p>Posted by: {writerDetails.name}</p>
            <p>Email: <Link href={`mailto:${writerDetails.email}`}>{writerDetails.email}</Link></p>
            {/* <p>City: {writerDetails.address.city}</p> */}
        </div>
    );
};

export default Writer;

