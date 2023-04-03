import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import updateWriterDetailsInStore from "../redux/WriterSlice";
import { useSelector, useDispatch } from 'react-redux'

const blogUrl = 'https://jsonplaceholder.typicode.com/users/';

const Writer = (props) => {

    const [writerDetails, setWriterDetails] = useState({});

    const writerInfo = useSelector((state) => state.writer.writerDetailsInStore);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(props.writerId);
        axios.get(blogUrl + 2)
            .then((resp) => {
                console.log(resp.data);
                dispatch(updateWriterDetailsInStore(resp.data));
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

