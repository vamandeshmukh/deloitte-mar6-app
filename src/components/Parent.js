import { useState } from "react";
import { useSelector } from "react-redux";
import Child from "./Child";

let isYes = '';

const Parent = () => {

    const parentDataInParent = 'Sonu';
    const [childDataInParent, setChildDataInParent] = useState('');
    const writerInfo = useSelector((state) => state.writer.writerDetailsInStore);

    console.log(writerInfo.username);
    console.log(writerInfo.email);

    const getDataFromChild = (arg) => {
        console.log('getDataFromChild');
        setChildDataInParent(arg);
    };

    const yesOrNo = (e) => {
        // e.preventDefault();
        console.log('called');
        isYes = 'Visible';
    };

    return (
        <div>
            <div className="container py-3 my-3">
                <p className="display-4 text-primary py-2">Parent</p>
                <hr />
                <div className="px-2 py-2">
                    <p>Parent data in parent: {parentDataInParent}</p>
                    <p>Child data in parent: {childDataInParent}</p>
                    <Child passData={parentDataInParent} passFun={getDataFromChild} />
                </div>
                {/* conditional example  */}
                {/* <div>
                    <button onClick={yesOrNo}>Click</button>
                    {isYes && <p>{isYes}</p>}
                    <p>No</p>
                </div> */}

            </div>
        </div>

    );
};

export default Parent;




