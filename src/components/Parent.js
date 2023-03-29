import { useState } from "react";
import Child from "./Child";

const Parent = () => {

    const parentDataInParent = 'Sonu';
    const [childDataInParent, setChildDataInParent] = useState('');

    const getDataFromChild = (arg) => {
        console.log('getDataFromChild');
        setChildDataInParent(arg);
    };

    return (
        <div>
            <p className="display-2 text-primary" >Parent -</p>
            <p>Parent data in parent: {parentDataInParent}</p>
            <p>Child data in parent: {childDataInParent}</p>
            <Child passData={parentDataInParent} passFun={getDataFromChild} />
        </div>
    );
};

export default Parent;




