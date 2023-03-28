import Child from "./Child";

const Parent = () => {

    const parentDataInParent = 'Sonu';

    return (
        <div>
            <p>Parent -</p>
            <p>Parent data in parent: {parentDataInParent}</p>
            <Child passData={parentDataInParent} />
        </div>
    );
};

export default Parent;